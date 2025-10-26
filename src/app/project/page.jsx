"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "MicroTweet - Scalable Social Platform ",
    tech: ["React", "Spring Boot", " Data Structures & Algorithms"],
    desc: " Developed a scalable social platform using microservices architecture to support user profiles, tweet management, and real-time search. Implemented secure authentication with token-based sessions and BCrypt encryption for passwords. Optimized tweet indexing with B-Trees and ordering with Linked Lists for efficient retrieval. Designed a graph-based following system using adjacency lists and traversal algorithms for smart follow suggestions. Enhanced user experience with priority queue–based feed ranking and Tries for fast hashtag autocomplete.",
    img: "/weather1.png", // replace with your image path
    github: "https://github.com/syamkumarnallamilli/TwitterDSA1",
    live: "https://github.com/syamkumarnallamilli/TwitterDSA1",
  },
  {
    title: "Movie Titles API",
    tech: ["React", "CSS", "API", "Version control"],
    desc: "Uses a public movie API to build a movie list that sorts from A to Z or vice versa. It also counts how many movies in each container and adds user's favorite movies into another container.",
    img: "/tmdb1.png",
    github: "https://github.com/yourusername/movietitlesapi",
    live: "#",
  },
  {
    title: "Task Manager App",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    desc: "A productivity web app for organizing daily tasks with drag-and-drop functionality, animations, and cloud sync.",
    img: "/tmdb1.png",
    github: "https://github.com/yourusername/taskmanager",
    live: "#",
  },
  {
    title: "Weather Forecast App",
    tech: ["React", "API", "Css"],
    desc: "Displays weather forecasts using OpenWeatherMap API with smooth transitions and responsive UI.",
    img: "/weather1.png",
    github: "https://github.com/yourusername/weatherapp",
    live: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 md:px-16">
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.h2
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="h-1 w-10 bg-red-500 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Text Section */}
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#1c2541] text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">
                {project.desc}
              </p>

              <div className="flex gap-4 pt-2">
                <Link
                  href={project.github}
                  className="bg-[#f25f4c] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#ff785a] transition"
                >
                  View Github
                </Link>
                <Link
                  href={project.live}
                  className="border border-gray-400 px-5 py-2 rounded-lg font-medium hover:bg-[#1c2541] hover:text-white transition"
                >
                  View project ↗
                </Link>
              </div>
            </div>

            {/* Image Section */}
           {/* Image Section */}
{/* Image Section */}
<div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
  <motion.div
    className="relative w-[420px] h-[280px] md:w-[500px] md:h-[320px] rounded-xl overflow-hidden shadow-lg hover:scale-[1.05] transition-transform duration-300"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <Image
      src={project.img}
      alt={project.title}
      fill
      className="object-contain object-center p-3 bg-transparent"
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
    />
  </motion.div>
</div>


          </motion.div>
        ))}
      </div>
    </section>
  );
}
