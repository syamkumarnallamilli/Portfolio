import AboutClient from "./AboutClient";

export const metadata = {
  title: "About | Syam Kumar",
  description:
    "Learn more about Syam Kumar, a Web Developer specializing in React, Next.js, TypeScript, and Java.",
  alternates: {
    canonical: "https://syamdevportfolio.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
