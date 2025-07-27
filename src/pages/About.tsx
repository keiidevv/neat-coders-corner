import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Mail, Github, ExternalLink, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "Vue.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "VS Code", "Figma", "Postman", "Webpack", "Vite"]
  };

  const projects = [
    {
      title: "개발 블로그 플랫폼",
      description: "React + TypeScript로 구현한 개인 블로그 플랫폼",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      link: "#",
      period: "2024.01 - 진행중"
    },
    {
      title: "E-Commerce 웹사이트",
      description: "Next.js와 Supabase를 활용한 풀스택 쇼핑몰",
      tech: ["Next.js", "Supabase", "Stripe", "Prisma"],
      link: "#",
      period: "2023.09 - 2023.12"
    },
    {
      title: "Task Management 앱",
      description: "팀 협업을 위한 칸반 보드 스타일 프로젝트 관리 도구",
      tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
      link: "#",
      period: "2023.06 - 2023.08"
    }
  ];

  const experience = [
    {
      company: "테크 스타트업",
      position: "프론트엔드 개발자",
      period: "2023.03 - 현재",
      description: [
        "React 기반 웹 애플리케이션 개발 및 유지보수",
        "TypeScript 도입으로 코드 품질 향상 및 버그 감소 20%",
        "반응형 웹 디자인 구현으로 모바일 사용자 경험 개선",
        "팀 코드 리뷰 문화 정착 및 개발 프로세스 개선"
      ]
    },
    {
      company: "IT 솔루션 회사",
      position: "주니어 개발자",
      period: "2022.09 - 2023.02",
      description: [
        "웹 애플리케이션 UI/UX 개발",
        "REST API 연동 및 데이터 처리",
        "크로스 브라우저 호환성 확보",
        "성능 최적화를 통한 페이지 로딩 속도 30% 개선"
      ]
    }
  ];

  const education = [
    {
      school: "OO대학교",
      major: "컴퓨터공학과",
      period: "2018.03 - 2022.02",
      description: "학점: 3.8/4.5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="h-14 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <SidebarTrigger className="ml-4" />
        <div className="flex-1 px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            홈으로 돌아가기
          </Button>
        </div>
      </header>

      <main className="px-6 py-8 max-w-4xl mx-auto">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
            <img
              src="/lovable-uploads/5fbf1d63-89a1-4500-9b18-0faeb7a58205.png"
              alt="keiidev 프로필"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">김개발 (keiidev)</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            사용자 경험을 중시하는 프론트엔드 개발자입니다. 
            <br />
            새로운 기술을 배우고 공유하는 것을 좋아하며, 꾸준한 성장을 지향합니다.
          </p>
          
          <div className="flex justify-center items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>서울, 대한민국</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>keiidev@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>github.com/keiidev</span>
            </div>
          </div>
        </div>

        {/* 스킬 섹션 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">기술 스택</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 경력 섹션 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">경력</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold">{job.company}</h3>
                  <Badge variant="secondary">{job.position}</Badge>
                </div>
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 프로젝트 섹션 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">주요 프로젝트</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.period}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 학력 섹션 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">학력</CardTitle>
          </CardHeader>
          <CardContent>
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-6">
                <h3 className="text-lg font-semibold">{edu.school}</h3>
                <p className="text-muted-foreground">{edu.major}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;