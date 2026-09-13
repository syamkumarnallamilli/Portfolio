import ProjectClient from "./ProjectClient";

export const metadata = {
  title: "Projects | Syam Kumar",
  description:
    "Explore projects built by Syam Kumar using React, Next.js, TypeScript, Java, and Spring Boot.",
  alternates: {
    canonical: "https://syamdevportfolio.vercel.app/project",
  },
};



export default function ProjectsSection() {
  return (
    <ProjectClient/>
  );
}
