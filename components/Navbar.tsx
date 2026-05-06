"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";

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
    { name: "Home", href: "#home", id: "home" },
    { name: "Offers", href: "#offers", id: "offers" },
    { name: "Menu", href: "#menu", id: "menu" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-2 transition-all duration-300 ${
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
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-6 absolute w-full left-0 animate-in slide-in-from-top duration-300 shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold py-2 transition-colors ${
                  activeSection === link.id ? "text-primary" : "text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-100 my-2" />
            <div className="flex items-center gap-4 py-2">
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary text-xl">
                <BiPhoneCall />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Call for support</p>
                <span className="font-bold text-accent text-lg">+91 9876543210</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
