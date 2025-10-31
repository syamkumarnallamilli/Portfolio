"use client";
import React, { useEffect } from "react";
import { Github, Linkedin, Mail, Instagram, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/syamkumarnallamilli",
    icon: <Github className="w-5 h-5" />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/syam-kumar-nallamilli-b17809240/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: "Email",
    url: "mailto:syamkumarnallamilli0@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

const Footer = () => {
    const [showTop,setShowTop]=React.useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            setShowTop(window.scrollY>300);
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    },[])
    const scrollToTop=()=>{
        window.scrollTo({top:0,behavior:"smooth"});
    }
  return (
    <footer className="w-full  border-t border-gray-300  dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300 mt-10 md:mt-15">
      <div className="max-w-7xl  mx-auto py-6 px-6 flex flex-col  items-center justify-between gap-4">
        {/* Left: Copyright */}
        
        {/* Right: Social Icons */}
        <div className="flex items-center gap-5">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-gray-800 transition"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div>
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-purple-600 dark:text-purple-400">Syam Kumar</span>. All rights reserved.
        </p>
</div>
      </div>
      {showTop && ( 
        <button
        onClick={scrollToTop}
        className="fixed bottom-15 right-4 md:bottom-6 md:right-6 md:p-3 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition-all duration-300"
        
        >
            <ArrowUp className="w-5 h-5" />
        </button>
        )}
    </footer>
  );
};

export default Footer;
