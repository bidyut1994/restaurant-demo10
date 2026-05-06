"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Left Side: Chef Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="relative w-full max-w-[500px] aspect-[4/5] mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/chef-kitchen-bg.png"
              alt="Our Best Chef"
              fill
              className="object-cover"
            />

            {/* Badge */}
            <div className="absolute bottom-10 right-4 bg-white py-3 px-6 rounded-full shadow-2xl border border-orange-50 animate-bounce">
               <p className="text-sm font-bold flex items-center gap-2">
                 Our Best Chef! 😋
               </p>
            </div>
            
            {/* Floating emojis */}
            <span className="absolute top-1/4 -left-4 text-3xl animate-pulse">🍕</span>
            <span className="absolute top-1/2 -right-4 text-3xl animate-pulse delay-75">🥗</span>
          </div>
        </motion.div>

        {/* Right Side: Testimonial Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <div>
            <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
              What Our Customers <br /> Say About Us
            </h2>
            <blockquote className="text-accent text-xl leading-relaxed italic">
              "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable."
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* User Avatars Placeholder */}
            <div className="flex -space-x-4">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-gray-200 overflow-hidden relative">
                    <Image src={`https://i.pravatar.cc/150?u=${i}`} alt="User" fill />
                 </div>
               ))}
            </div>
            
            <div>
              <p className="font-bold text-lg mb-1">Customer Feedback</p>
              <div className="flex items-center gap-2">
                <AiFillStar className="text-yellow-400 text-xl" />
                <span className="font-bold text-accent">4.9</span>
                <span className="text-gray-400 font-medium">(18.6k Reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
