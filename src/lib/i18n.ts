export const locales = ['ko', 'en'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'ko'

// 언어별 메타데이터
export const localeMetadata = {
  ko: {
    title: '포트폴리오 - 프론트엔드 개발자',
    description: '프론트엔드 개발자의 포트폴리오 사이트입니다. React, Next.js, TypeScript를 활용한 다양한 프로젝트를 확인해보세요.',
    lang: 'ko'
  },
  en: {
    title: 'Portfolio - Frontend Developer',
    description: 'Frontend developer portfolio site. Check out various projects using React, Next.js, and TypeScript.',
    lang: 'en'
  }
}

// 언어별 네비게이션 메뉴
export const navigationData = {
  ko: {
    home: '홈',
    about: '소개',
    skills: '기술',
    career: '경력',
    projects: '프로젝트',
    education: '교육',
    // 메가메뉴 데이터
    megaMenu: {
      about: {
        sections: [
          {
            title: '개발자 소개',
            items: [
              { name: '자기소개', id: 'about', description: '개발자로서의 가치관과 목표' },
              { name: '기술 철학', id: 'about', description: '코드에 대한 생각과 접근 방식' }
            ]
          },
          {
            title: '전문 분야',
            items: [
              { name: 'Frontend', id: 'skills', description: 'React, Next.js, TypeScript' },
              { name: 'UI/UX', id: 'skills', description: '사용자 중심의 인터페이스 설계' }
            ]
          }
        ]
      },
      skills: {
        sections: [
          {
            title: 'Frontend',
            items: [
              { name: 'React & Next.js', id: 'skills', description: '모던 React 생태계' },
              { name: 'TypeScript', id: 'skills', description: '타입 안전한 개발' },
              { name: 'Styling', id: 'skills', description: 'Tailwind, Styled Components' }
            ]
          },
          {
            title: 'Tools & Others',
            items: [
              { name: 'Development', id: 'skills', description: 'Git, VS Code, Figma' },
              { name: 'Design', id: 'skills', description: 'Adobe Creative Suite' }
            ]
          }
        ]
      },
      projects: {
        sections: [
          {
            title: '프로젝트 유형',
            items: [
              { name: '모든 프로젝트', id: 'projects', description: '모든 프로젝트 보기' },
              { name: '팀 프로젝트', id: 'projects-team', description: '팀 협업 프로젝트' },
              { name: '개인 프로젝트', id: 'projects-personal', description: '개인 프로젝트' }
            ]
          },
          {
            title: '기술별 분류',
            items: [
              { name: '웹 애플리케이션', id: 'projects-web', description: '웹 애플리케이션' },
              { name: '모바일 앱', id: 'projects-mobile', description: '모바일 애플리케이션' }
            ]
          }
        ]
      }
    }
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    career: 'Career',
    projects: 'Projects',
    education: 'Education',
    // 메가메뉴 데이터
    megaMenu: {
      about: {
        sections: [
          {
            title: 'Developer Introduction',
            items: [
              { name: 'About Me', id: 'about', description: 'Values and goals as a developer' },
              { name: 'Tech Philosophy', id: 'about', description: 'Thoughts and approach to code' }
            ]
          },
          {
            title: 'Expertise',
            items: [
              { name: 'Frontend', id: 'skills', description: 'React, Next.js, TypeScript' },
              { name: 'UI/UX', id: 'skills', description: 'User-centered interface design' }
            ]
          }
        ]
      },
      skills: {
        sections: [
          {
            title: 'Frontend',
            items: [
              { name: 'React & Next.js', id: 'skills', description: 'Modern React ecosystem' },
              { name: 'TypeScript', id: 'skills', description: 'Type-safe development' },
              { name: 'Styling', id: 'skills', description: 'Tailwind, Styled Components' }
            ]
          },
          {
            title: 'Tools & Others',
            items: [
              { name: 'Development', id: 'skills', description: 'Git, VS Code, Figma' },
              { name: 'Design', id: 'skills', description: 'Adobe Creative Suite' }
            ]
          }
        ]
      },
      projects: {
        sections: [
          {
            title: 'Project Types',
            items: [
              { name: 'All Projects', id: 'projects', description: 'View all projects' },
              { name: 'Team Projects', id: 'projects-team', description: 'Team collaboration projects' },
              { name: 'Personal Projects', id: 'projects-personal', description: 'Personal projects' }
            ]
          },
          {
            title: 'By Technology',
            items: [
              { name: 'Web Applications', id: 'projects-web', description: 'Web applications' },
              { name: 'Mobile Apps', id: 'projects-mobile', description: 'Mobile applications' }
            ]
          }
        ]
      }
    }
  }
}

// 공통 기술 스택 데이터 (로고 포함)
const commonSkillsData = {
  frontend: [
    { name: 'HTML5', logo: '/images/skills/html5.svg' },
    { name: 'CSS3', logo: '/images/skills/css3.svg' },
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'Tailwind CSS',
    'Styled Components',
    'SASS/SCSS'
  ],
  tools: [
    'Git',
    'GitHub',
    'VS Code',
    'Figma',
    'Adobe XD',
    'Photoshop',
    'Webpack',
    'Vite',
    'ESLint',
    'Prettier'
  ]
}

// 다국어 콘텐츠 데이터
export const contentData = {
  ko: {
    hero: {
      greeting: '안녕하세요! 👋',
      name: '프론트엔드 개발자',
      subtitle: '사용자 경험을 중시하는 개발자입니다',
      description: '깔끔하고 직관적인 인터페이스를 만들어 사용자에게 최고의 경험을 제공합니다.',
      cta: '프로젝트 보기'
    },
    about: {
      title: 'About Me',
      subtitle: '개발자 소개',
      questions: [
        {
          q: '어떤 개발자인가요?',
          a: '사용자 중심의 사고를 가진 프론트엔드 개발자입니다. 깔끔하고 직관적인 UI/UX를 통해 최고의 사용자 경험을 제공하는 것을 목표로 합니다.'
        },
        {
          q: '어떤 기술을 사용하나요?',
          a: 'React, Next.js, TypeScript를 주력으로 사용하며, 모던 웹 개발 생태계의 다양한 도구들을 활용합니다. 항상 새로운 기술을 학습하고 적용하려 노력합니다.'
        },
        {
          q: '개발할 때 중요하게 생각하는 것은?',
          a: '코드의 가독성과 유지보수성을 가장 중요하게 생각합니다. 또한 사용자의 관점에서 생각하며, 성능과 접근성을 고려한 개발을 지향합니다.'
        },
        {
          q: '자기개발을 위해 어떤 것들을 해왔는지?',
          a: '지속적인 학습을 위해 스터디와 온라인 강의에 적극 참여하고, 낯선 기술에도 포기 하지 않고 메타인지 방식을 활용해 문제 해결 능력을 쌍고 있습니다. 열린 마음으로 피드백을 소중히 여기고, 개발 과정에서 항상 개선할 점을 찾기 위해 노력하고 있습니다.'
        }
      ]
    },
    skills: {
      title: 'Skills & Tools',
      subtitle: '기술 스택',
      description: '새로운 기술에 대한 호기심이 많고, 지속적인 학습을 통해 더 나은 사용자 경험을 제공하는 웹 서비스를 만들기 위해 노력하고 있습니다.',
      frontend: {
        title: 'Frontend',
        skills: commonSkillsData.frontend
      },
      tools: {
        title: 'Tools',
        items: commonSkillsData.tools
      }
    },
    career: {
      title: 'Career',
      subtitle: '경력 사항',
      items: [
        {
          period: "2021.04 - 2022.09",
          company: "건국사이버 평생교육원",
          position: "개발본부 디자인팀 - 웹 디자인 총괄",
          description: [
            "Photoshop을 활용해 홍보 랜딩 페이지, 웹 디자인 작업",
            "HTML, CSS 활용해 웹 표준, 접근성에 신경쓰며 자사 및 타사 웹 사이트 퍼블리싱",
            "기획자, 프론트엔드 개발자와의 협업 툴을 적극 활용해 지속적인 커뮤니케이션",
            "자사 및 10개 이상의 기업 웹 사이트 유지보수",
            "클라이언트와의 직접적인 소통 및 응대를 통해 프로젝트 구체화"
          ]
        },
        {
          period: "2017.05 - 2021.04",
          company: "(주)비전트리",
          position: "개발본부 디자인팀 - 웹 디자인 총괄",
          description: [
            "Photoshop을 활용해 홍보 랜딩 페이지, 웹 디자인 작업",
            "Photoshop, Illustrator을 활용해 홍보물 디자인 작업",
            "HTML, CSS 활용해 웹 표준, 접근성에 신경쓰며 자사 및 타사 웹 사이트 퍼블리싱",
            "기획자, 프론트엔드 개발자와의 협업 툴을 적극 활용해 지속적인 커뮤니케이션",
            "자사 및 10개 이상의 기업 웹 사이트 유지보수",
            "클라이언트와의 직접적인 소통 및 응대를 통해 프로젝트 구체화"
          ]
        }
      ]
    },
    projects: {
      title: 'Projects',
      subtitle: '진행한 프로젝트들을 소개합니다',
      viewDetails: '자세히 보기',
      items: [
        {
          id: 1,
          title: "KnockDog - 똑독",
          description: "강아지 유치원 모바일 서비스입니다.",
          category: "Team",
          type: "앱",
          tags: ["사이드"],
          demoUrl: "#",
          githubUrl: null,
          image: "/images/projects/knockdog.jpg"
        },
        {
          id: 2,
          title: "DeskMood - 데스크무드",
          description: "데스크 테리어 공유 커뮤니티 서비스입니다.",
          category: "Team",
          type: "반응형",
          tags: ["사이드"],
          demoUrl: "#",
          githubUrl: "#",
          image: "/images/projects/deskmood.jpg"
        },
        {
          id: 3,
          title: "포켓몬 도감",
          description: "포켓몬 API를 활용해 만들어진 포켓몬 도감입니다.",
          category: "Single",
          type: "토이",
          tags: [],
          demoUrl: "#",
          githubUrl: "#",
          image: "/images/projects/pokemon.jpg"
        },
        {
          id: 4,
          title: "포트폴리오 사이트",
          description: "저만의 포트폴리오를 만들기 위해 제작했습니다.",
          category: "Single",
          type: "반응형",
          tags: ["포트폴리오", "사이드"],
          demoUrl: "#",
          githubUrl: "#",
          image: "/images/projects/portfolio.jpg"
        },
        {
          id: 5,
          title: "하루메이트 - 당일 일정 등록 서비스",
          description: "당일 일정을 만들고 친구에게 손쉽게 공유할 수 있는 서비스입니다.",
          category: "Team",
          type: "반응형",
          tags: ["사이드"],
          demoUrl: "#",
          githubUrl: "#",
          image: "/images/projects/harumate.jpg"
        },
        {
          id: 6,
          title: "IT 온라인 수강 사이트",
          description: "IT융합 전문 교육센터로 기존 사이트를 새롭게 리뉴얼한 사이트입니다.",
          category: "Team",
          type: "반응형",
          tags: ["장기", "퍼블리싱"],
          demoUrl: "#",
          githubUrl: null,
          image: "/images/projects/it-course.jpg"
        }
      ]
    },
    education: {
      title: 'Education',
      subtitle: '교육',
      items: [
        {
          period: "2023.02 - 2023.08",
          institution: "코드스테이츠",
          program: "프론트엔드 엔지니어 과정 부트캠프 수료",
          description: [
            "JavaScript, React 등 학습",
            "20주 동안 매일 강도 높은 과제 수행 및 페어 프로그래밍과 코드 리뷰 경험",
            "솔로 프로젝트 1회, 협업 프로젝트 2회 진행",
            "스터디에 참여하여 개발 공부를 진행하고 동료들과 원활한 소통과 커뮤니케이션을 촉진"
          ]
        },
        {
          period: "2015.03 - 2017.02",
          institution: "전주비전대학교",
          program: "컴퓨터정보과 전문학사 졸업",
          description: [
            "자료구조, 운영체제 등 CS 학습",
            "HTML, CSS, JavaScript 등 프로그래밍 언어 학습"
          ]
        }
      ]
    },
    footer: {
      message: '포트폴리오를 봐주셔서 감사합니다!',
      contact: '언제든지 연락주세요.',
      description: '프론트엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로 도전하고, 항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고 싶습니다.',
      copyright: '© 2024 Portfolio. All rights reserved.'
    }
  },
  en: {
    hero: {
      greeting: 'Hello! 👋',
      name: 'Frontend Developer',
      subtitle: 'A developer who values user experience',
      description: 'I create clean and intuitive interfaces to provide the best experience for users.',
      cta: 'View Projects'
    },
    about: {
      title: 'About Me',
      subtitle: 'Developer Introduction',
      questions: [
        {
          q: 'What kind of developer are you?',
          a: 'I am a frontend developer with user-centered thinking. My goal is to provide the best user experience through clean and intuitive UI/UX.'
        },
        {
          q: 'What technologies do you use?',
          a: 'I primarily use React, Next.js, and TypeScript, and utilize various tools in the modern web development ecosystem. I always strive to learn and apply new technologies.'
        },
        {
          q: 'What do you consider important when developing?',
          a: 'I consider code readability and maintainability most important. I also think from the user\'s perspective and aim for development that considers performance and accessibility.'
        },
        {
          q: 'What have you done for self-development?',
          a: 'I actively participate in studies and online courses for continuous learning, and I build problem-solving skills using metacognitive methods without giving up on unfamiliar technologies. I value feedback with an open mind and always strive to find areas for improvement in the development process.'
        }
      ]
    },
    skills: {
      title: 'Skills & Tools',
      subtitle: 'Tech Stack',
      description: 'I have a strong curiosity for new technologies and strive to create better web services that provide enhanced user experiences through continuous learning.',
      frontend: {
        title: 'Frontend',
        skills: commonSkillsData.frontend
      },
      tools: {
        title: 'Tools',
        items: commonSkillsData.tools
      }
    },
    career: {
      title: 'Career',
      subtitle: 'Work Experience',
      items: [
        {
          period: "2021.04 - 2022.09",
          company: "Konkuk Cyber University Lifelong Education Center",
          position: "Development Division Design Team - Web Design Manager",
          description: [
            "Created promotional landing pages and web designs using Photoshop",
            "Published company and client websites using HTML and CSS with attention to web standards and accessibility",
            "Maintained continuous communication using collaboration tools with planners and frontend developers",
            "Maintained over 10 company and client websites",
            "Materialized projects through direct communication and response with clients"
          ]
        },
        {
          period: "2017.05 - 2021.04",
          company: "VisionTree Co., Ltd.",
          position: "Development Division Design Team - Web Design Manager",
          description: [
            "Created promotional landing pages and web designs using Photoshop",
            "Created promotional material designs using Photoshop and Illustrator",
            "Published company and client websites using HTML and CSS with attention to web standards and accessibility",
            "Maintained continuous communication using collaboration tools with planners and frontend developers",
            "Maintained over 10 company and client websites",
            "Materialized projects through direct communication and response with clients"
          ]
        }
      ]
    },
    projects: {
      title: 'Projects',
      subtitle: 'My Projects',
      viewDetails: 'View Details',
      items: [
        {
          id: 1,
          title: "KnockDog",
          description: "A mobile service for dog kindergarten.",
          category: "Team",
          type: "App",
          tags: ["Side Project"],
          demoUrl: "#",
          githubUrl: null,
          image: "/images/projects/knockdog.jpg"
        },
        {
          id: 2,
          title: "DeskMood",
          description: "A community service for sharing desk terior.",
          category: "Team",
          type: "Responsive",
          tags: ["Side Project"],
          demoUrl: "#",
          githubUrl: "#",
          image: "/images/projects/deskmood.jpg"
        },
        {
          id: 3,
          title: "Pokemon Dictionary",
          description: "A Pokemon dictionary created using the Pokemon API.",
          category: "Single",
          type: "Toy Project",
          tags: [],
          demoUrl: "#",
          githubUrl: "#",
          image: "/images/projects/pokemon.jpg"
        },
        {
          id: 4,
          title: "Portfolio Website",
          description: "Created to build my own portfolio.",
          category: "Single",
          type: "Responsive",
          tags: ["Portfolio", "Side Project"],
          demoUrl: "#",
          githubUrl: "#",
          image: "/images/projects/portfolio.jpg"
        },
        {
          id: 5,
          title: "HaruMate - Daily Schedule Registration Service",
          description: "A service that allows you to create daily schedules and easily share them with friends.",
          category: "Team",
          type: "Responsive",
          tags: ["Side Project"],
          demoUrl: "#",
          githubUrl: "#",
          image: "/images/projects/harumate.jpg"
        },
        {
          id: 6,
          title: "IT Online Course Website",
          description: "A newly renewed website for IT convergence professional education center.",
          category: "Team",
          type: "Responsive",
          tags: ["Long-term", "Publishing"],
          demoUrl: "#",
          githubUrl: null,
          image: "/images/projects/it-course.jpg"
        }
      ]
    },
    education: {
      title: 'Education',
      subtitle: 'Educational Background',
      items: [
        {
          period: "2023.02 - 2023.08",
          institution: "Code States",
          program: "Frontend Engineer Course Bootcamp Completion",
          description: [
            "Learned JavaScript, React, etc.",
            "Performed intensive daily assignments for 20 weeks and experienced pair programming and code reviews",
            "Conducted 1 solo project and 2 collaboration projects",
            "Participated in studies to continue development learning and promoted smooth communication with colleagues"
          ]
        },
        {
          period: "2015.03 - 2017.02",
          institution: "Jeonju Vision University",
          program: "Computer Information Science Associate Degree Graduate",
          description: [
            "Learned CS subjects such as data structures and operating systems",
            "Learned programming languages such as HTML, CSS, JavaScript"
          ]
        }
      ]
    },
    footer: {
      message: 'Thank you for viewing my portfolio!',
      contact: 'Feel free to contact me anytime.',
      description: 'I want to grow as a frontend developer by actively challenging unfamiliar technologies, always thinking from the user\'s perspective and creating user-friendly services.',
      copyright: '© 2024 Portfolio. All rights reserved.'
    }
  }
}
