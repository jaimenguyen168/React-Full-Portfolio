import {
  car,
  contact,
  css,
  git,
  github,
  javascript,
  linkedin,
  nextjs,
  nodejs,
  react,
  summiz,
  tailwindcss,
  typescript,
  swiftui,
  kotlin,
  expo,
  vite,
  firebase,
  temple,
  howard,
  britishCouncil,
  location,
  headphones,
  study,
  library,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: swiftui,
    name: "SwiftUI",
    type: "Frontend",
    path: "https://developer.apple.com/xcode/swiftui/",
  },
  {
    imageUrl: kotlin,
    name: "Kotlin/Compose",
    type: "Frontend",
    path: "https://developer.android.com/compose",
  },
  {
    imageUrl: react,
    name: "React/Native",
    type: "Frontend",
    path: "https://reactnative.dev/",
  },
  {
    imageUrl: expo,
    name: "Expo",
    type: "Frontend",
    path: "https://expo.dev/",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
    path: "https://www.typescriptlang.org/",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    path: "https://www.javascript.com/",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Backend",
    path: "https://firebase.google.com/",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    path: "https://git-scm.com/",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    path: "https://github.com/",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
    path: "https://nextjs.org/",
  },
  {
    imageUrl: vite,
    name: "Vite.js",
    type: "Frontend",
    path: "https://vitejs.dev/",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    path: "https://nodejs.org/",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind/Nativewind",
    type: "Frontend",
    path: "https://tailwindcss.com/",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
    path: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
];

export const experiences = [
  {
    title: "Lead Lab Consultant",
    company_name: "CIS Dept. - Temple University",
    icon: temple,
    iconBg: "#ececec",
    borderBg: "#94041c",
    date: "Sep 2023 - Present",
    points: [
      "Started as a Computer Lab Consultant, offering technical support and guidance to faculty and 5000+ students.",
      "Promoted within six months for strong management, technical skills, and problem-solving abilities.",
      "Improved lab workflows, enhancing the experience for students, instructors, and fellow consultants.",
      "Mentored and trained new hires, fostering teamwork and performance.",
      "Worked with management to create troubleshooting guidelines, streamlining issue resolution.",
    ],
  },
  {
    title: "Peer Tutor",
    company_name: "CIS Dept. - Temple University",
    icon: temple,
    iconBg: "#ececec",
    borderBg: "#94041c",
    date: "Sep 2024 - Present",
    points: [
      "Explained complex computer science topics, making them easy to understand for students.",
      "Assisted students tackle coding problems and grasp core programming concepts.",
      "Offered one-on-one support on various programming languages and tools.",
      "Guided students in developing problem-solving skills and logical thinking through hands-on troubleshooting.",
    ],
  },
  {
    title: "Math Tutor",
    company_name: "Math Dept. - Howard Community College",
    icon: howard,
    iconBg: "#ffffff",
    borderBg: "#033188",
    date: "Sep 2021 - Present",
    points: [
      "Offered tutoring service for 1000+ college students in math, from Algebra to Linear Algebra.",
      "Taught multiple problem-solving approaches to suit different learning styles.",
      "Tracked student progress weekly, offering feedback to improve their skills.",
      "Tailored methods to meet each student's unique needs and challenges.",
      "Used tech tools and resources to make math concepts easier to understand.",
    ],
  },
  {
    title: "Arts Project Coordinator",
    company_name: "British Council Inc. (Vietnam)",
    icon: britishCouncil,
    iconBg: "#ffffff",
    borderBg: "#0096e1",
    date: "Jun 2018 - Jan 2020",
    points: [
      "Coordinated EU-funded arts and culture projects to boost cultural exchange and awareness in Vietnam.",
      "Managed communication with stakeholders, planned logistics, and set up venues for project activities.",
      'Helped connect 60+ creative hubs nationwide through "Vietnam Creative Hubs" project, linking local artists with international partners.',
      "Assisted in documenting and archiving Cải Lương (traditional Vietnamese opera) to preserve cultural heritage.",
      "Supported projects promoting ethnic minority cultures by organizing events and connecting local communities with partners.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/jaimenguyen168",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/jaime168/",
  },
];

export const projects = [
  {
    iconUrl: location,
    theme: "btn-back-orange",
    name: "📱 Locally",
    description:
      "Developed a full-stack, community-oriented mobile app that helps users discover local activities based on their interests while connecting them with the local community.",
    tech: "React Native | Expo | Firebase | Google Location | Stripe",
    link: "https://github.com/jaimenguyen168/ReactNative-Locally",
  },
  {
    iconUrl: headphones,
    theme: "btn-back-yellow",
    name: "📱 BeatBuddy",
    description:
      "Created an music-focused social platform where users can not only listen, share, and discover music but also interact with new tracks and connect with other music enthusiasts daily.",
    tech: "Kotlin | Compose | Firebase | MVVM",
    link: "https://github.com/jaimenguyen168/BeatBuddy",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-red",
    name: "📱 AI Avatar Chat",
    description:
      "Designed a full-stack and ready-to-ship iOS app where users create custom characters and chat with AI-powered avatars, bringing fun and creative personalities to life.",
    tech: "SwiftUI | Firebase | OpenAI | RevenueCat | MVVM",
    link: "https://github.com/jaimenguyen168/SwiftUi-AI-Avatar-Chat",
  },
  {
    iconUrl: study,
    theme: "btn-back-blue",
    name: "📱 StudyBop",
    description:
      "Built a full-stack mobile app that lets users create or enroll in AI-generated courses. It offers a fun way to preview and practice key concepts, making learning interactive and engaging.",
    tech: "React Native | Expo | Firebase | Gemini AI",
    link: "https://github.com/jaimenguyen168/RN-StudyBop.git",
  },
  {
    iconUrl: library,
    theme: "btn-back-black",
    name: "🌐 Cool Library",
    description:
      "Developed a web app designed to manage book borrowing, track due dates, and automatically send return reminders, making library management simple and efficient.",
    tech: "React | Next.js | PostgreSQL | Upstash | Resend | ImageKit",
    link: "https://github.com/jaimenguyen168/React-Library-App",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-pink",
    name: "🌐 Idea Pitching",
    description:
      "A web app that allows users to pitch their project ideas, browse through others' creative concepts, and connect with like-minded individuals, inspiring collaboration and sparking innovation.",
    tech: "React | Next.js | Sanity",
    link: "https://github.com/jaimenguyen168/NextJs-YC-Directory.git",
  },
];
