import Giscus from '@giscus/react';

interface CommentsProps {
  postId: string;
}

const Comments = ({ postId }: CommentsProps) => {
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="text-xl font-semibold mb-6 text-foreground">댓글</h3>
      <div className="bg-card rounded-lg p-4">
        <Giscus
          id="comments"
          repo="your-username/your-repo-name" // GitHub 저장소 설정 필요
          repoId="your-repo-id" // GitHub 저장소 ID 설정 필요
          category="General"
          categoryId="your-category-id" // 카테고리 ID 설정 필요
          mapping="specific"
          term={`blog-post-${postId}`}
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="preferred_color_scheme"
          lang="ko"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Comments;