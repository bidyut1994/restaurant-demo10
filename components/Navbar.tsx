"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "menu", "services", "offers"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/about", id: "about" },
    { name: "Offers", href: "/#offers", id: "offers" },
    { name: "Menu", href: "/menu", id: "menu" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-primary"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <div className="bg-primary py-1 px-2 rounded-md">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-black uppercase">
              oodi
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-primary scale-110"
                    : "text-accent hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary text-xl">
                <BiPhoneCall />
              </div>
              <span className="font-bold text-lg text-accent tracking-tight">
                +91 9876543210
              </span>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 h-full w-full max-w-[350px] bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-8 flex items-center justify-between border-b border-zinc-100">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-1">
                  <div className="bg-primary py-1 px-2 rounded-md">
                    <span className="text-white font-bold text-lg">F</span>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-black uppercase">
                    oodi
                  </span>
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-md bg-zinc-50 flex items-center justify-center text-accent hover:text-primary transition-colors"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-10 px-8 flex flex-col gap-2 bg-white">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`group flex items-center justify-between p-4 rounded-md transition-all ${
                      activeSection === link.id 
                        ? "bg-primary/5 text-primary" 
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-black"
                    }`}
                  >
                    <span className={`text-xl font-bold tracking-tight ${activeSection === link.id ? "scale-105" : ""}`}>
                      {link.name}
                    </span>
                    {activeSection === link.id && (
                      <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
                    )}
                  </Link>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-8 bg-zinc-50 border-t border-zinc-100 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-md bg-white shadow-sm flex items-center justify-center text-primary text-2xl">
                    <BiPhoneCall />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em] mb-1">Customer Support</p>
                    <span className="font-bold text-black text-lg">+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-md bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
                     <FaFacebookF />
                   </div>
                   <div className="w-10 h-10 rounded-md bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
                     <FaInstagram />
                   </div>
                   <div className="w-10 h-10 rounded-md bg-white border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
                     <FaTwitter />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
