import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  Mail,
  Github,
  ExternalLink,
  Calendar,
  Home,
  HomeIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// 스킬 타입 정의
interface Skill {
  name: string;
  experience: string;
  level: "expert" | "proficient" | "intermediate" | "learning";
}

// 스킬 뱃지 컴포넌트
const SkillBadge = ({ skill }: { skill: Skill }) => {
  const levelColors = {
    expert: "bg-green-100 text-green-800 border-green-200 hover:bg-green-150",
    proficient: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-150",
    intermediate:
      "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-150",
    learning: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-150",
  };

  return (
    <Badge
      variant="outline"
      className={`text-sm transition-colors ${levelColors[skill.level]}`}
    >
      {skill.name}
    </Badge>
  );
};

const About = () => {
  const navigate = useNavigate();

  const skills = {
    backend: [
      {
        name: "Node.js",
        experience: "Commercial",
        level: "proficient" as const,
      },
      {
        name: "Nest.js",
        experience: "Commercial",
        level: "intermediate" as const,
      },
      {
        name: "DynamoDB",
        experience: "Commercial",
        level: "intermediate" as const,
      },
      { name: "Kotlin", experience: "Project", level: "learning" as const },
      {
        name: "Spring Boot",
        experience: "Project",
        level: "learning" as const,
      },
      {
        name: "PostgreSQL",
        experience: "Project",
        level: "learning" as const,
      },
      { name: "Python", experience: "Study", level: "learning" as const },
    ],
    frontend: [
      { name: "React", experience: "Commercial", level: "proficient" as const },
      {
        name: "TypeScript",
        experience: "Commercial",
        level: "intermediate" as const,
      },
      {
        name: "Next.js",
        experience: "Commercial",
        level: "intermediate" as const,
      },
      {
        name: "JavaScript",
        experience: "Commercial",
        level: "intermediate" as const,
      },
      {
        name: "Capacitor (cross-platform)",
        experience: "Commercial",
        level: "intermediate" as const,
      },
      {
        name: "Tailwind CSS",
        experience: "Project",
        level: "learning" as const,
      },
    ],
    devops: [
      { name: "AWS", experience: "Commercial", level: "intermediate" as const },
      {
        name: "VPC",
        experience: "Commercial",
        level: "intermediate" as const,
      },
      {
        name: "Lambda",
        experience: "Commercial",
        level: "intermediate" as const,
      },
      { name: "S3", experience: "Commercial", level: "intermediate" as const },
      {
        name: "API Gateway",
        experience: "Commercial",
        level: "intermediate" as const,
      },
      {
        name: "CloudFront",
        experience: "Commercial",
        level: "learning" as const,
      },
      {
        name: "CloudFormation",
        experience: "Commercial",
        level: "learning" as const,
      },
      { name: "Docker", experience: "Project", level: "intermediate" as const },
    ],
    tools: [
      { name: "Git", experience: "Daily", level: "proficient" as const },
      { name: "Docker", experience: "Project", level: "intermediate" as const },
      { name: "VS Code", experience: "Daily", level: "proficient" as const },
      { name: "Postman", experience: "Daily", level: "proficient" as const },
      { name: "Webpack", experience: "Config", level: "learning" as const },
    ],
  };

  // const projects = [
  //   {
  //     title: "개발 블로그 플랫폼",
  //     description: "React + TypeScript로 구현한 개인 블로그 플랫폼",
  //     tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  //     link: "#",
  //     period: "2024.01 - 진행중",
  //   },
  // ];

  const experience = [
    {
      company: "브라운백(주)",
      position: "주니어 개발자",
      period: "2022.06 - 현재(3년 2개월)",
      description: [
        "React 기반 웹 애플리케이션 개발 및 유지보수",
        "TypeScript 도입으로 코드 품질 향상 및 버그 감소 20%",
        "반응형 웹 디자인 구현으로 모바일 사용자 경험 개선",
        "팀 코드 리뷰 문화 정착 및 개발 프로세스 개선",
      ],
    },
  ];

  const education = [
    {
      school: "덕성여자대학교",
      major: "수학과",
      period: "2015.03 - 2020.02",
    },
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
            <HomeIcon className="h-4 w-4" />
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
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            김세린 (keiidev)
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            새로운 기술을 배우고 공유하는 것을 좋아하며, 꾸준한 성장을
            지향합니다.
          </p>

          <div className="flex justify-center items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>서울, 대한민국</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>serinn1023@gmail.com</span>
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
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-200"></div>
                <span>Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-200"></div>
                <span>Proficient</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-200"></div>
                <span>Intermediate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-200"></div>
                <span>Learning</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">
                DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.devops.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
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
                    <li
                      key={idx}
                      className="text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 프로젝트 섹션 : TODO.. */}
        {/* <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">주요 프로젝트</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {project.description}
                    </p>
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
        </Card> */}

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
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;
