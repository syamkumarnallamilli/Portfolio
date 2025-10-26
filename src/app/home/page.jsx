// 'use client';

// import Image from 'next/image';
// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';

// const Home = () => {
//   return (
//     <section className=" flex flex-col md:flex-row items-center  justify-between  px-40">
      
//       {/* Text Section */}
//       <div className="text-left space-y-4">
//         <h1 className="text-7xl font-extrabold  bg-gradient-to-r from-purple-400 via-pink-400 to-red-700 bg-clip-text text-transparent">Hello </h1>
//         <h2 className="text-5xl font-bold  bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent ">I'm Syam</h2>

//         <h3 className="text-3xl font-medium text-indigo-300 ">
//           <span className="mr-2">I'm a</span>
//           <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent tracking-wide font-semibold">
//             <Typewriter
//               words={['Full Stack Developer', 'React Developer', 'Next.js Expert']}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={80}
//               delaySpeed={1000}
//             />
//           </span>
//         </h3>

//         <p className="text-md font-medium tracking-wide text-gray-400 max-w-md">
//           I build clean, modern, and responsive web applications using powerful tools like React, Next.js & Tailwind CSS.
//         </p>
//         <div className=' space-x-6'>
//           <button className="bg-orange-500 p-2 text-white rounded-xl hover:bg-orange-400">Get in touch?</button>
//           <button className="border border-gray-400 px-5 py-2 rounded-lg font-medium hover:bg-[#1c2541] hover:text-white transition">View projects</button>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="  overflow-hidden">
//   <Image
//     src="/developer.jpg"
//     alt="home"
//     width={500}
//     height={500}
//     className=" object-contains w-130 h-130 "
//     priority
//   />
// </div>

//     </section>
//   );
// };

// export default Home;
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="flex  flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 p">
      {/* Content Section */}
      <div className="flex  flex-col space-y-7 md:space-y-10 text-left md:text-start items-center md:items-start md:w-1/2 p-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-red-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hello
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm Syam
        </motion.h2>

        <motion.h3
          className="text-xl md:text-3xl font-medium text-indigo-300"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="mr-2">I'm a</span>
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent tracking-wide font-semibold">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Developer",
                "Next.js Expert",
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
          className="text-base md:text-lg font-medium tracking-wide text-gray-300 max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          I craft clean, modern, and responsive web applications using cutting-edge tools like React, Next.js, and Tailwind CSS — focused on performance and delightful user experience.
        </motion.p>

        <motion.div
          className="flex gap-7 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.7 }}
        >
          <button className="bg-orange-500 px-7 py-2 text-white rounded-xl font-semibold shadow-xl hover:bg-orange-400 hover:scale-105 transition">
            Get in touch
          </button>
          <button className="border border-gray-500 px-7 py-2 rounded-xl font-medium text-white bg-white/10 hover:bg-white/20 transition">
            View projects
          </button>
        </motion.div>
      </div>
      {/* Developer Image */}
      {/* <motion.div
  className="relative flex justify-center items-center w-full md:w-1/2 p-6"
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.75, delay: 0.4 }}
>
  <div className="relative w-[320px] h-[320px] md:w-[700px] md:h-[500px] rounded-full overflow-hidden  shadow-xl">
    <Image
      src="/developer.jpg"
      alt="Syam Developer"
      fill
      className="object-cover w-full h-full"
      priority
    />
  </div>
</motion.div> */}
<motion.div
  className="relative flex justify-center items-center w-full md:w-1/2 p-8"
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.75, delay: 0.4 }}
>
  {/* Modern gradient glow background */}
  <div className="absolute inset-0 flex justify-center items-center z-0">
    <div className="w-4/5 h-4/5 bg-gradient-to-br from-orange-500/60 via-pink-400/40 to-purple-500/50 blur-2xl rounded-3xl shadow-2xl" />
  </div>
  {/* Optional glass effect layer */}
  {/* Image */}
  <div className="relative w-[320px] h-[320px] md:w-[700px] md:h-[500px] rounded-full overflow-hidden shadow-xl z-20">
    <Image
      src="/developer.jpg"
      alt="Syam Developer"
      fill
      className="object-cover"
      priority
    />
  </div>
</motion.div>

    </section>
  );
}
