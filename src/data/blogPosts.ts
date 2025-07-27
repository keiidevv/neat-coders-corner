export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "React 18의 새로운 기능들과 성능 최적화",
    excerpt: "React 18에서 도입된 Concurrent Features, Automatic Batching, 그리고 Suspense의 개선사항들을 실제 예제와 함께 알아보겠습니다.",
    content: `React 18은 많은 혁신적인 기능들을 도입했습니다. 
    
## Concurrent Features
Concurrent Rendering은 React가 작업을 중단하고 다시 시작할 수 있게 해줍니다...

## Automatic Batching
이전 버전에서는 React 이벤트 핸들러 내에서만 배칭이 일어났지만...

## Suspense 개선사항
React 18에서 Suspense는 더욱 강력해졌습니다...`,
    date: "2024년 1월 15일",
    readTime: "8분",
    tags: ["React", "성능", "JavaScript"],
    category: "React",
    featured: true
  },
  {
    id: "2", 
    title: "TypeScript 고급 타입 시스템 마스터하기",
    excerpt: "TypeScript의 고급 타입 시스템을 활용하여 더 안전하고 표현력 있는 코드를 작성하는 방법을 알아보겠습니다.",
    content: "TypeScript의 고급 타입 시스템에 대한 상세한 설명...",
    date: "2024년 1월 10일",
    readTime: "12분",
    tags: ["TypeScript", "타입", "개발도구"],
    category: "TypeScript"
  },
  {
    id: "3",
    title: "모던 CSS: Grid와 Flexbox 완전 정복",
    excerpt: "CSS Grid와 Flexbox를 언제, 어떻게 사용해야 하는지 실제 레이아웃 예제와 함께 완전히 이해해보겠습니다.",
    content: "CSS Grid와 Flexbox의 차이점과 활용법...",
    date: "2024년 1월 5일", 
    readTime: "10분",
    tags: ["CSS", "레이아웃", "웹디자인"],
    category: "Web"
  },
  {
    id: "4",
    title: "JavaScript 비동기 처리: Promise부터 async/await까지",
    excerpt: "JavaScript의 비동기 처리 방식의 발전 과정을 따라가며, 콜백 지옥에서 벗어나는 방법을 알아보겠습니다.",
    content: "JavaScript 비동기 처리의 역사와 현재...",
    date: "2024년 1월 1일",
    readTime: "15분", 
    tags: ["JavaScript", "비동기", "Promise"],
    category: "JavaScript"
  },
  {
    id: "5",
    title: "웹 성능 최적화: 실전 가이드",
    excerpt: "실제 프로덕션 환경에서 사용할 수 있는 웹 성능 최적화 기법들을 Core Web Vitals 지표와 함께 알아보겠습니다.",
    content: "웹 성능 최적화의 실전 기법들...",
    date: "2023년 12월 28일",
    readTime: "11분",
    tags: ["성능", "최적화", "웹개발"],
    category: "Web",
    featured: true
  }
];