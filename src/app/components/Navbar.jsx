'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathname=usePathname()
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Resume", href: "/syam_kumar_nallamilli_resume.pdf", external: true },
  ];
  const activeLinkClass=(href,external=false)=>{
    const isActive=pathname===href;
     return `transition ${
    isActive && !external ? "text-indigo-600 font-semibold" : "text-gray-800"
  } hover:text-indigo-600`;
  }
  return (
    <nav className="fixed top-0 shadow-lg w-full">
      <div className="flex max-w-7xl px-6 py-4 justify-between items-center mx-auto">
        <div className="flex items-center space-x-2">
    <Image src="/image.png" alt="Logo" height={100} width={100} className="h-9 w-9 rounded-full" />
    <span className="text-xl font-bold  hidden md:inline">Syam Kumar</span>
  </div>
        <div className="  space-x-10 font-medium text-gray-800 ">
          {navItems.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={activeLinkClass(href, true)}
              >
                {label}
              </a>
            ) : (
              <Link key={label} href={href} className={activeLinkClass(href)}>
                {label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
