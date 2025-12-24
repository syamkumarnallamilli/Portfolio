"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#project" },
    { label: "Contact", href: "#contact-form" },
    { label: "Resume", href: "SyamKumar_Nallamilli_Resume.pdf", external: true },
  ];

  const activeLinkClass = (href, external = false) => {
    const isActive = pathname === href;
    return `transition ${
      isActive && !external
        ? "text-indigo-600 font-semibold"
        : "text-gray-800 dark:text-gray-300"
    } hover:text-indigo-600`;
  };

  return (
    <nav className="fixed w-full z-[999] bg-white dark:bg-gray-900 shadow-lg">
      <div className="flex max-w-7xl mx-auto justify-between items-center px-6 py-4">
        <Link href="/">
        {/* --- Logo --- */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            height={40}
            width={40}
            className="h-9 w-9 rounded-full"
            priority
          />
          <span className="text-xl font-bold text-gray-800 dark:text-white hidden md:inline">
            Syam Kumar
          </span>
          
        </div>
        </Link>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex space-x-10 font-medium">
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

        {/* --- Mobile Menu Button --- */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4">
          {navItems.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${activeLinkClass(href, true)} block`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className={`${activeLinkClass(href)} block`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
