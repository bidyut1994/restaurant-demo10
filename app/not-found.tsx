"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* 404 Illustration placeholder */}
            <div className="relative inline-block">
              <h1 className="text-[150px] md:text-[200px] font-black text-primary/10 leading-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-8xl">🍽️</span>
              </div>
            </div>

            <div className="space-y-4 max-w-lg mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                Oops! Page Not Found
              </h2>
              <p className="text-accent text-lg">
                The page you're looking for doesn't exist or has been moved. 
                Don't worry, you can always find your way back home!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-md font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-primary/30 flex items-center gap-2"
              >
                <FiHome />
                Back to Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="text-accent hover:text-primary px-10 py-4 rounded-md font-bold text-lg transition-all flex items-center gap-2"
              >
                <FiArrowLeft />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
