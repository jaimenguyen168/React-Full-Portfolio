import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  javascript,
  linkedin,
  nextjs,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  swiftui,
  kotlin,
  expo,
  vite,
  firebase,
  temple,
  howard,
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
    date: "September 2023 - Present",
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
    date: "September 2024 - Present",
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
    date: "Sep 2021 - Present",
    points: [
      "Offered tutoring service for 1000+ college students in math, from Algebra to Linear Algebra.",
      "Taught multiple problem-solving approaches to suit different learning styles.",
      "Tracked student progress weekly, offering feedback to improve their skills.",
      "Tailored methods to meet each student's unique needs and challenges.",
      "Used tech tools and resources to make math concepts easier to understand.",
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
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
