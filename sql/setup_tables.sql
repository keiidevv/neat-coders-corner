-- Create blog_posts table
CREATE TABLE blog_posts (
  id text PRIMARY KEY,
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  date text NOT NULL,
  read_time text NOT NULL,
  tags text[] NOT NULL DEFAULT '{}',
  category text NOT NULL,
  featured boolean DEFAULT false,
  views integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create visitor_logs table
CREATE TABLE visitor_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address text,
  user_agent text,
  page_url text NOT NULL,
  referrer text,
  session_id text,
  post_id text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add foreign key constraint for post_id
ALTER TABLE visitor_logs 
ADD CONSTRAINT visitor_logs_post_id_fkey 
FOREIGN KEY (post_id) REFERENCES blog_posts(id);

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX idx_blog_posts_created_at ON blog_posts(created_at);
CREATE INDEX idx_visitor_logs_post_id ON visitor_logs(post_id);
CREATE INDEX idx_visitor_logs_created_at ON visitor_logs(created_at);
CREATE INDEX idx_visitor_logs_session_id ON visitor_logs(session_id);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_posts (public read access)
CREATE POLICY "Anyone can view blog posts" ON blog_posts
FOR SELECT USING (true);

-- Create policies for visitor_logs (only authenticated users can read/write)
CREATE POLICY "Only authenticated users can read visitor logs" ON visitor_logs
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Anyone can insert visitor logs" ON visitor_logs
FOR INSERT WITH CHECK (true);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for blog_posts
CREATE TRIGGER update_blog_posts_updated_at 
BEFORE UPDATE ON blog_posts 
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();