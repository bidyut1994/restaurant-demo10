"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" prefetch={false} className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-md">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-black uppercase">
                OODI
              </span>
            </Link>
            <p className="text-accent leading-relaxed max-w-xs">
              Savor the artistic where every dish is a culinary masterpiece.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" prefetch={false} className="text-accent hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#services" prefetch={false} className="text-accent hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" prefetch={false} className="text-accent hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/#offers" prefetch={false} className="text-accent hover:text-primary transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          {/* Main Menu */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Main Menu</h3>
            <ul className="space-y-4">
              <li><Link href="/#home" prefetch={false} className="text-accent hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/menu" prefetch={false} className="text-accent hover:text-primary transition-colors">Menus</Link></li>
              <li><Link href="/contact" prefetch={false} className="text-accent hover:text-primary transition-colors">Reservation</Link></li>
              <li><Link href="/#offers" prefetch={false} className="text-accent hover:text-primary transition-colors">Offers</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-accent">hello@foodi.com</li>
              <li className="text-accent">+91 98765 43210</li>
              <li className="text-accent">123 Foodi Street, North East</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-100 mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex gap-4">
             <Link href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform">
               <FaFacebookF />
             </Link>
             <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-accent hover:bg-primary hover:text-white hover:scale-110 transition-transform">
               <FaTwitter />
             </Link>
             <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-accent hover:bg-primary hover:text-white hover:scale-110 transition-transform">
               <FaInstagram />
             </Link>
             <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-accent hover:bg-primary hover:text-white hover:scale-110 transition-transform">
               <FaYoutube />
             </Link>
          </div>
          <p className="text-accent text-sm">
            Copyright © 2023 Dezcode | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
