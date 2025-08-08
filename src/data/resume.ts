// Professional Resume Data - Optimized for Hiring Managers
export const resumeData = {
  personal: {
    name: "Pranay Varade",
    title: "Full-Stack Developer",
    email: "prannayk.varade@gmail.com",
    phone: "+91-8888088408",
    location: "Pune, India",
    linkedin: "https://linkedin.com/in/pranay-varade",
    github: "https://github.com/pranayvarade",
    portfolio: "https://pranayvarade.dev",
    taglines: {
      formal: "Driving EdTech innovation through scalable full-stack solutions and user-centered design",
      creative: "Transforming ideas into production-ready software that scales and delights users"
    }
  },
  
  summary: {
    brief: "Full-stack developer with 1+ years of hands-on experience building scalable EdTech solutions. Proven track record in leading end-to-end product development from concept to deployment, with expertise in Angular, Node.js, and MySQL.",
    expanded: `Motivated full-stack developer with 1+ years of experience in a fast-paced startup environment, specializing in designing, developing, and leading projects in the EdTech space. 

    My expertise spans the entire development lifecycle, from UI/UX design in Figma to production deployment with PM2. I excel at transforming complex requirements into intuitive, user-friendly software that drives business value.
    
    Currently leading the development of SAM (School Assessment Module), a comprehensive assessment platform serving educational institutions, while mentoring junior developers and optimizing deployment workflows.`
  },
  
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Delivered", value: "5+" },
    { label: "Tech Stack Mastery", value: "8+" },
    { label: "Team Leadership", value: "3-Member" }
  ],
  
  experience: [
    {
      company: "Boostmychild Pvt. Ltd.",
      location: "Pune, India",
      positions: [
        {
          title: "Software Developer 1",
          period: "Nov 2024 – Present",
          achievements: [
            "Architected and delivered interactive dashboards with advanced data visualizations using AmCharts 5, improving decision-making efficiency for 50+ school administrators",
            "Led full-stack development of SAM admin panel (Angular 18, Node.js, MySQL), reducing administrative workload by 40% through streamlined workflows",
            "Designed complete UI/UX ecosystem for SAM platform in Figma, earning team-wide recognition for intuitive, user-friendly interfaces that improved user adoption by 60%",
            "Implemented automated PDF export system using EJS and Puppeteer, enabling seamless assessment report sharing and reducing manual processing time by 70%",
            "Mentored junior intern and optimized team productivity within 3-member development team, leading to 25% faster feature delivery"
          ]
        },
        {
          title: "Junior Software Developer Intern",
          period: "Feb 2024 – Oct 2024",
          achievements: [
            "Co-developed SAM (School Assessment Module) from scratch using MEAN stack with MySQL, establishing foundation for scalable EdTech platform serving 100+ educational institutions",
            "Spearheaded UI/UX design initiative, creating comprehensive design system in Figma that became the standard for all company products",
            "Built and integrated 15+ REST APIs connecting Angular 17 frontend with Node.js backend, ensuring seamless data flow and optimal performance",
            "Collaborated on mobile app development using Ionic, successfully packaging web application for Android deployment with 95% feature parity",
            "Mastered agile development workflows (Jira) and Git version control (Bitbucket), contributing to 30% improvement in team collaboration efficiency"
          ]
        }
      ]
    }
  ],
  
  education: [
    {
      degree: "MSc. in Computer Science",
      institution: "MIT World Peace University (MIT-WPU)",
      location: "Pune, India",
      period: "2022 – 2024",
      grade: "CGPA: 8.16",
      highlights: ["Advanced Software Engineering", "Database Management Systems", "Full-Stack Development"]
    },
    {
      degree: "BSc. in Computer Science",
      institution: "Indira College of Commerce & Science (ICCS)",
      location: "Pune, India", 
      period: "2019 – 2022",
      grade: "CGPA: 9.01",
      highlights: ["First Class with Distinction", "Data Structures & Algorithms", "Web Development"]
    }
  ],
  
  skills: {
    frontend: [
      { name: "Angular", level: 90, experience: "1.5 years" },
      { name: "TypeScript", level: 85, experience: "1.5 years" },
      { name: "JavaScript", level: 90, experience: "2+ years" },
      { name: "HTML5/CSS3", level: 95, experience: "3+ years" },
      { name: "Ionic", level: 75, experience: "8 months" }
    ],
    backend: [
      { name: "Node.js", level: 85, experience: "1.5 years" },
      { name: "REST APIs", level: 90, experience: "1.5 years" },
      { name: "MySQL", level: 85, experience: "2+ years" },
      { name: "Express.js", level: 80, experience: "1 year" }
    ],
    tools: [
      { name: "Figma", level: 90, experience: "1.5 years" },
      { name: "Git/Bitbucket", level: 85, experience: "1.5 years" },
      { name: "Jira", level: 80, experience: "1 year" },
      { name: "Postman", level: 85, experience: "1.5 years" },
      { name: "PM2", level: 75, experience: "8 months" }
    ],
    specializations: [
      { name: "UI/UX Design", level: 90 },
      { name: "Data Visualization", level: 85 },
      { name: "Full-Stack Development", level: 88 },
      { name: "EdTech Solutions", level: 85 },
      { name: "Agile Methodologies", level: 80 }
    ]
  },
  
  projects: [
    {
      title: "SAM - School Assessment Module",
      category: "fullstack",
      description: "Comprehensive assessment platform for educational institutions with advanced analytics and reporting capabilities.",
      technologies: ["Angular 18", "Node.js", "MySQL", "AmCharts 5", "Figma"],
      features: [
        "Interactive dashboards with data visualizations",
        "Automated PDF report generation",
        "Complete admin panel with role-based access",
        "Mobile-responsive design"
      ],
      impact: "Serving 100+ educational institutions, reduced administrative workload by 40%",
      status: "Production",
      year: "2024"
    },
    {
      title: "Wageworker Management System",
      category: "fullstack", 
      description: "Platform connecting daily wage workers with customers for household tasks and repairs.",
      technologies: ["Java", "JSP", "MySQL", "HTML", "CSS"],
      features: [
        "Worker-customer matching system",
        "Task management and tracking",
        "Rating and review system",
        "Payment integration"
      ],
      impact: "Streamlined hiring process for household services",
      status: "Completed",
      year: "2023"
    },
    {
      title: "EdTech Mobile App Integration",
      category: "mobile",
      description: "Cross-platform mobile application for parent-facing EdTech platform.",
      technologies: ["Ionic", "Angular", "TypeScript", "REST APIs"],
      features: [
        "Real-time progress tracking",
        "Push notifications",
        "Offline capability",
        "Cross-platform compatibility"
      ],
      impact: "95% feature parity with web platform, improved user engagement",
      status: "Production",
      year: "2024"
    },
    {
      title: "Data Visualization Dashboard",
      category: "frontend",
      description: "Interactive analytics dashboard for educational data insights.",
      technologies: ["Angular", "AmCharts 5", "TypeScript", "RxJS"],
      features: [
        "Real-time data updates",
        "Interactive charts and graphs", 
        "Export functionality",
        "Responsive design"
      ],
      impact: "Improved decision-making efficiency by 50% for administrators",
      status: "Production",
      year: "2024"
    }
  ],
  
  publications: [
    {
      title: "Prevention of code injections using Human Interface Device (HID)",
      journal: "Scandinavian Journal of Information Systems",
      date: "October 31, 2024",
      description: "Research paper exploring code-injection cyberattacks using HIDs and proposing solutions for enhanced computer system security.",
      type: "Research Paper",
      status: "Published"
    }
  ],
  
  certifications: [
    // Add any certifications here
  ],
  
  availability: {
    status: "Open to opportunities",
    type: "Full-time",
    location: "Pune, India / Remote",
    startDate: "Immediate"
  }
};

// SEO and content optimization
export const seoKeywords = [
  "Full-Stack Developer",
  "Angular Developer", 
  "Node.js Expert",
  "MySQL Database",
  "EdTech Solutions",
  "UI/UX Design",
  "JavaScript",
  "TypeScript",
  "Software Engineer",
  "Pune India"
];