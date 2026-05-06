"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiUsers, FiAward, FiClock, FiMapPin } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

export default function AboutPage() {
  const stats = [
    { label: "Years Experience", value: "15+", icon: <FiClock /> },
    { label: "Happy Customers", value: "50k+", icon: <FiUsers /> },
    { label: "Awards Won", value: "12", icon: <FiAward /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32">
        {/* About Hero Section */}
        <section className="py-24 bg-light-green/30 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">
                Our Story
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
                Crafting Culinary <span className="text-primary">Masterpieces</span>
              </h1>
              <p className="text-accent text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Founded with a passion for flavor and a commitment to excellence, Foodi has been 
                at the forefront of North East Indian culinary innovation for over a decade.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Mission & Image Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative w-full aspect-square max-w-[500px] mx-auto rounded-md overflow-hidden shadow-2xl">
                <Image 
                  src="/chef-kitchen-bg.png" 
                  alt="Our Kitchen" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <h2 className="text-4xl font-bold text-black leading-tight">
                Driven by Passion, <br /> Defined by Quality
              </h2>
              <p className="text-accent text-lg leading-relaxed">
                We believe that great food starts with the finest ingredients and ends with a smile. 
                Our mission is to bring the authentic flavors of the North East to your table, 
                blending traditional recipes with modern culinary techniques.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-6 bg-zinc-50 rounded-md hover:shadow-xl transition-all group">
                    <div className="text-primary text-3xl mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <p className="text-3xl font-black text-black mb-1">{stat.value}</p>
                    <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Opening Hours */}
            <div className="bg-white p-10 rounded-md shadow-xl shadow-zinc-200/50 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center text-primary text-3xl">
                <FiClock />
              </div>
              <h3 className="text-2xl font-bold text-black">Opening Hours</h3>
              <div className="space-y-2 text-accent">
                <p><span className="font-bold text-black">Mon - Fri:</span> 9:00 AM - 10:00 PM</p>
                <p><span className="font-bold text-black">Sat - Sun:</span> 11:00 AM - 11:00 PM</p>
              </div>
            </div>

            {/* Review */}
            <div className="bg-white p-10 rounded-md shadow-xl shadow-zinc-200/50 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center text-primary text-3xl">
                <FiAward />
              </div>
              <h3 className="text-2xl font-bold text-black">Our Reviews</h3>
              <div className="space-y-2">
                <div className="flex justify-center text-yellow-400 gap-1 text-xl">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
                <p className="text-accent italic">"The best authentic flavors I've had in years. Exceptional service!"</p>
                <p className="font-bold text-black">- Sarah Johnson</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-10 rounded-md shadow-xl shadow-zinc-200/50 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center text-primary text-3xl">
                <FiMapPin />
              </div>
              <h3 className="text-2xl font-bold text-black">Our Location</h3>
              <div className="space-y-2 text-accent">
                <p>123 Foodi Street, North East</p>
                <p>Assam, India - 781001</p>
                <button className="text-primary font-bold hover:underline mt-4">View on Google Maps</button>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 bg-zinc-50 relative overflow-hidden">
          {/* Background Decorative Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-4xl font-bold text-black tracking-tight">Visit Our Restaurant</h2>
                <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
                <p className="text-accent max-w-lg mx-auto">
                  Experience the magic of our kitchen in person. We're located in the heart of the city, 
                  ready to serve you the freshest flavors.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full h-[500px] rounded-md overflow-hidden shadow-2xl border-8 border-white ring-1 ring-zinc-100"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.05359483324!2d91.60337839352664!3d26.172209633857327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd13324397388c!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1715015000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
