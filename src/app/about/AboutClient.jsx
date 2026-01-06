"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState,useRef } from "react";
import React from 'react'


const skills = [
    "HTML",
    "CSS",
    "Java",
    "Spring Boot",
    "SQL",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "TypeScript",
    "JavaScript(ES6+)",
    "Git & GitHub",
    "Firebase",
    "REST APIs",
  ];

  const experiences = [
    {
      company: "Workbees Technologies",
      role: "Full Stack Developer-Frontend Focus",
      duration: "2025 - Present",
      desc: "Building modern, responsive web interfaces using Next.js, React, and Tailwind CSS.",
      current: true,
    },
    {
      company: "AcademixEdu",
      role: "Java Full Stack Developer-Intern",
      duration: "2024-2025",
      desc: "Developed and maintained web applications using Java, Spring Boot, React, and MySQL.",
    },
  ];

  
const AboutClient = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [speed, setSpeed] = useState(25);
  const skillsControl = useAnimation();
   const containerRef = useRef(null);


  // Skills horizontal auto-scroll
  // useEffect(() => {
  //   if (isHovered) skillsControl.stop();
  //   else
  //     skillsControl.start({
  //       x: ["0%", "-100%"],
  //       transition: { ease: "linear", duration: 25, repeat: Infinity },
  //     });
  // }, [isHovered, skillsControl]);
useEffect(() => {
    // Adjust scroll speed dynamically based on screen size
    if (window.innerWidth < 768) setSpeed(20); 
    else setSpeed(25);

    const startAnimation = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.scrollWidth; 
      const viewWidth = containerRef.current.clientWidth;
      const travel = width - viewWidth;

      skillsControl.start({
        x: [0, -travel],
        transition: { ease: "linear", duration: speed, repeat: Infinity },
      });
    };

    if (!isHovered) startAnimation();
    else skillsControl.stop();
  }, [isHovered, speed, skillsControl]);
  return (
    <section id="about" className="min-h-screen  flex flex-col items-center justify-center px-6  lg:px-16  relative overflow-hidden">
          {/* Decorative Background Blobs */}
          <div className="absolute top-0 left-0 w-52 h-52 md:w-72 md:h-72  rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-52 h-52 md:w-72 md:h-72  rounded-full blur-3xl opacity-30 animate-pulse" />
    
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-10 text-center z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
    
          {/* Middle Section - Timeline + Description */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20 w-full max-w-7xl z-10">
            {/* Left: Timeline */}
            <div
              className={`relative md:w-1/2 ${
                experiences.length > 2 ? "md:h-[450px] overflow-y-auto" : "h-auto"
              } md:p-4 p-2 md:pr-6 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100 rounded-2xl bg-white/40 backdrop-blur-md border border-purple-200`}
            >
              <div className="absolute left-3 md:left-6 top-0 bottom-0 md:w-1 w-[2px] bg-gradient-to-b from-purple-300 via-pink-300 to-yellow-200 rounded-full" />
    
              <div className="space-y-8 pl-9 md:pl-12 ">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={`relative bg-white/60 backdrop-blur-md border ${
                      exp.current
                        ? "border-purple-300 shadow-lg"
                        : "border-purple-200 shadow-sm"
                    } p-3 md:p-5 rounded-2xl hover:-translate-y-1 transition-all`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-7 top-6 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-4 border-white ${
                        exp.current ? "bg-pink-500" : "bg-purple-400"
                      }`}
                    />
                    <h4 className="text-lg md:text-xl font-semibold text-purple-700">
                      {exp.company}
                    </h4>
                    <p className="text-gray-700 font-medium text-sm md:text-base">
                      {exp.role}
                    </p>
                    <p className="text-sm md:text-sm  text-gray-600  font-semibold mb-2">
                      {exp.duration}
                    </p>
                    {exp.desc && (
                      <p className="text-gray-600 text-sm md:text-base">
                        {exp.desc}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
    
            {/* Right: About Description */}
            <motion.div
              className="md:w-1/2 flex flex-col justify-center mt-4 md:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Hi, I'm <span className="font-semibold text-purple-700">Syam</span>{" "}
                — a passionate developer who loves creating smooth, meaningful, and
                visually engaging digital experiences. I focus on crafting modern,
                high-performance web apps using{" "}
                <span className="text-purple-600 font-medium">Next.js</span>,{" "}
                <span className="text-purple-600 font-medium">React</span>, and{" "}
                <span className="text-purple-600 font-medium">Tailwind CSS</span>.
                <br />
                <br />
                My goal is to blend creativity and logic to deliver digital products
                that not only work great but also feel delightful to use.
              </p>
            </motion.div>
          </div>
    
          {/* Bottom: Skills Carousel */}
          <div
          ref={containerRef}
            className="overflow-hidden whitespace-nowrap relative py-6 mt-8 cursor-pointer w-full "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div className="flex gap-8" animate={skillsControl}>
              {[...skills, ...skills].map((skill, i) => (
                <span
                  key={i}
                  className=" text-sm md:text-lg font-semibold text-purple-700 bg-white/60 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-xl shadow-sm border border-purple-200"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </section>
  )
}

export default AboutClient