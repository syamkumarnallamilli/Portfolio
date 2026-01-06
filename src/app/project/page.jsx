"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Projects | Syam Kumar",
  description: "Projects by Syam Kumar - Full Stack Developer",
  alternates: {
    canonical: "https://syamdevportfolio.vercel.app/project",
  },
};

const projects = [
  {
    title: "MicroTweet - Scalable Social Platform ",
    tech: ["React", "Spring Boot", "DSA"],
    desc: "Built a scalable social platform with microservices, secure authentication (BCrypt), and efficient tweet management. Designed graph-based follow suggestions, DSA-optimized feed ranking, and fast hashtag autocomplete for a seamless user experience.",
    img: "/spring.png", 
    github: "https://github.com/syamkumarnallamilli/TwitterDSA1",
    live: "https://github.com/syamkumarnallamilli/TwitterDSA1",
  },
  {
    title: "Movie Titles API",
    tech: ["React", "CSS", "API", "Version control"],
    desc: "Uses a public movie API to build a movie list that sorts from A to Z or vice versa. It also counts how many movies in each container and adds user's favorite movies into another container.",
    img: "/tmdb1.png",
    github: "https://github.com/syamkumarnallamilli/Movie-Application",
    live: "https://syam-movie-app.netlify.app/",
  },
  {
  title: "Photography Website",
  tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  desc: "A beautifully designed, fully responsive photography portfolio website built with Next.js and Tailwind CSS. It features smooth animations, dynamic image galleries, and optimized performance across all devices. The site highlights modern UI aesthetics and showcases photography work in an engaging, mobile-friendly layout.",
  img: "/photography.jpg", 
  github: "https://github.com/SatyasriMallula/Vijay-Photography",
  live: "https://blueyephotostudio.vercel.app/",
},

  {
    title: "Weather Forecast App",
    tech: ["React", "API", "Redux"],
    desc: "Displays weather forecasts using OpenWeatherMap API with smooth transitions and responsive UI.",
    img: "/weather1.png",
    github: "https://github.com/syamkumarnallamilli/weather-app",
    live: "https://weather-forecast-301d05.netlify.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="px-5 md:px-2 lg:px-16 ">
      {/* Section Header */}
      <div className="text-center mb-10 lg:mb-20">
        <motion.h2
          className=" text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent "
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
      <div className="flex flex-col  gap-10 lg:gap-20 xl:gap-24 max-w-6xl w-full md:mx-2.4 lg:mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Text Section */}
            <div id="project" className="flex-1  md:space-y-4 space-y-3 text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#1c2541]">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start md:gap-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#1c2541] text-gray-300 text-xs lg:text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex-shrink-0 md:hidden w-full  md:w-1/2 flex justify-center">
                <motion.div
                  className="relative   w-[90%] h-[200px] md:w-[420px] md:h-[280px] lg:w-[500px] lg:h-[320px] rounded-xl overflow-hidden shadow-xl md:shadow-lg hover:scale-[1.05] transition-transform duration-300"
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

              <p className="text-gray-500 leading-relaxed text-sm lg:text-base w-full ">
                {project.desc}
              </p>

              <div className="flex gap-4 pt-2">
                <Link
                  href={project.github}
                  className="bg-[#f25f4c] text-white px-3 py-2 rounded-md text-sm  sm:rounded-lg  font-medium hover:bg-[#ff785a] transition w-full md:w-auto text-center"
                >
                  View Github
                </Link>
                <Link
                  href={project.live}
                  className="border flex text-center justify-center border-gray-400 md:px-3 px-1 py-2 rounded-md text-sm  sm:rounded-lg  font-medium hover:bg-[#1c2541] hover:text-white transition w-full md:w-auto  gap-1 md:gap-0"
                >
                  <span>View Project</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

           
            {/* Image Section */}
            <div className="flex-shrink-0 md:block hidden w-full  md:w-1/2 flex justify-center">
              <motion.div
                className="relative  w-[90%] h-[200px] md:w-[380px] md:h-[280px] lg:w-[500px] lg:h-[320px] rounded-xl overflow-hidden shadow-xl md:shadow-lg hover:scale-[1.05] transition-transform duration-300"
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
