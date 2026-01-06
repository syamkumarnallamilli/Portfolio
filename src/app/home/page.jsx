"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";


export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-5 md:px-8 lg:px-16 bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 overflow-hidden ">
      {/* ---- LEFT CONTENT ---- */}
      <div className="flex  flex-col space-y-6 md:space-y-8 lg:space-y-10 text-left  md:text-left  md:items-start w-full md:w-1/2  p-2 md:p-6">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-red-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hello
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm Syam
        </motion.h2>

        <motion.h3
          className="text-lg sm:text-2xl md:text-3xl font-medium text-indigo-300"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="mr-2">I'm a</span>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent tracking-wide md:text-[21.6px] font-semibold">
            <Typewriter
              words={[
                "FullStack Developer",
                "Web Developer",
                
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </span>
        </motion.h3>

        <motion.p
          className="text-sm sm:text-base md:text-lg font-medium tracking-wide text-gray-300 max-w-md sm:max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I craft clean, modern, and responsive web applications using
          cutting-edge tools like React, Next.js, and Tailwind CSS — focused on
          performance and delightful user experience.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4  pt-3 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.7 }}
        >
          <Link href="/contact">
          <button className="bg-orange-500 px-6 md:px-4 py-2 text-white rounded-xl font-semibold shadow-xl hover:bg-orange-400 hover:scale-105 transition">
            Get in touch
          </button>
          </Link>
          <Link href="/project">
          <button className="border border-gray-500 px-6 md:px-4 py-2 rounded-xl font-medium text-white bg-white/10 hover:bg-white/20 transition">
            View projects
          </button>
          </Link>
        </motion.div>
      </div>

      {/* ---- RIGHT IMAGE ---- */}
      <motion.div
        className="relative flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0 p-4 md:p-2"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.4 }}
      >
        {/* Glowing Gradient Background */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div className="w-[70%] sm:w-[80%] h-[70%] sm:h-[80%] bg-gradient-to-br from-orange-500/60 via-pink-400/40 to-purple-500/50 blur-2xl rounded-3xl shadow-2xl" />
        </div>

        {/* Developer Image */}
        <div className="relative  w-[260px] md:w-[340px] lg:w-[700px] h-[260px] md:h-[340px] lg:h-[500px] rounded-full overflow-hidden shadow-xl z-20">
          <Image
            src="/developer.jpg"
            alt="Syam Developer"
            fill
            className="object-cover object-center w-full h-full"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
