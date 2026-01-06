import ProjectClient from "./ProjectClient";

export const metadata = {
  title: "Projects | Syam Kumar",
  description: "Projects by Syam Kumar - Full Stack Developer",
  alternates: {
    canonical: "https://syamdevportfolio.vercel.app/project",
  },
};



export default function ProjectsSection() {
  return (
    <ProjectClient/>
  );
}
