"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32">
        {/* Contact Page Hero */}
        <section className="py-20 bg-light-green/30 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-accent text-lg md:text-xl max-w-2xl mx-auto mb-10">
                We're here to help and answer any question you might have. 
                We look forward to hearing from you!
              </p>
              <div className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <FiArrowRight />
                <span className="text-primary">Contact</span>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-32 -mb-32" />
        </section>

        {/* The Contact Section Component */}
        <Contact />

        {/* Additional Info Section (Optional) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Opening Hours</h3>
              <p className="text-accent">Monday - Friday: 9am - 10pm</p>
              <p className="text-accent">Saturday - Sunday: 11am - 11pm</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Reservations</h3>
              <p className="text-accent">For groups larger than 8, please call us directly to ensure availability.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Feedback</h3>
              <p className="text-accent">Your feedback helps us grow. Please share your experience with us.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
