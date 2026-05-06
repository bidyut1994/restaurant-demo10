"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-12"
          >
            <div>
              <p className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">
                Contact Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.4] mb-6">
                Get In Touch <br /> With Our Team
              </h2>
              <p className="text-accent text-lg max-w-md">
                Have a question or just want to say hi? We'd love to hear from you. 
                Our team is always here to help.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-md bg-white shadow-lg flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FiMail />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold text-zinc-900">hello@foodi.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-md bg-white shadow-lg flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold text-zinc-900">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-md bg-white shadow-lg flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Visit Us</p>
                  <p className="text-xl font-bold text-zinc-900">123 Foodi Street, North East, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-white rounded-md p-8 md:p-12 shadow-2xl shadow-zinc-200 border border-zinc-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 ml-1">Full Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      placeholder="John Doe" 
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-md px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 ml-1">Email Address</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      placeholder="john@example.com" 
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-md px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 ml-1">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    required
                    placeholder="Table Reservation" 
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-md px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 ml-1">Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    required
                    placeholder="Write your message here..." 
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-md px-6 py-4 outline-none focus:border-primary focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-md shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95">
                  <FiSend className="text-xl" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
