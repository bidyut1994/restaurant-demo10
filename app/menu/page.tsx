"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = [
  { name: "Breakfast", count: "12 breakfast" },
  { name: "Lunch", count: "16 dishes" },
  { name: "Dinner", count: "18 dinner" },
  { name: "Juice", count: "15 items" }
];

const menuItems = [
  // Breakfast (12 items)
  { id: 1, title: "Egg & Cheese Sandwich", price: "150.00", category: "Breakfast" },
  { id: 2, title: "Classic Pancake Stack", price: "250.00", category: "Breakfast" },
  { id: 3, title: "Avocado Toast", price: "220.00", category: "Breakfast" },
  { id: 4, title: "French Omelette", price: "180.00", category: "Breakfast" },
  { id: 5, title: "Masala Dosa", price: "120.00", category: "Breakfast" },
  { id: 6, title: "Aloo Paratha", price: "90.00", category: "Breakfast" },
  { id: 7, title: "Blueberry Waffles", price: "280.00", category: "Breakfast" },
  { id: 8, title: "English Breakfast", price: "350.00", category: "Breakfast" },
  { id: 9, title: "Mushroom Toast", price: "200.00", category: "Breakfast" },
  { id: 10, title: "Chia Seed Pudding", price: "190.00", category: "Breakfast" },
  { id: 11, title: "Breakfast Burrito", price: "260.00", category: "Breakfast" },
  { id: 12, title: "Bagel with Cream Cheese", price: "160.00", category: "Breakfast" },

  // Lunch (16 items)
  { id: 13, title: "Northeast Pork Curry", price: "450.00", category: "Lunch" },
  { id: 14, title: "Grilled Chicken Salad", price: "350.00", category: "Lunch" },
  { id: 15, title: "Chicken Biryani", price: "380.00", category: "Lunch" },
  { id: 16, title: "Paneer Tikka Masala", price: "320.00", category: "Lunch" },
  { id: 17, title: "Mutton Rogan Josh", price: "520.00", category: "Lunch" },
  { id: 18, title: "Veg Hakka Noodles", price: "220.00", category: "Lunch" },
  { id: 19, title: "Chilli Chicken", price: "340.00", category: "Lunch" },
  { id: 20, title: "Dal Makhani", price: "240.00", category: "Lunch" },
  { id: 21, title: "Butter Naan", price: "60.00", category: "Lunch" },
  { id: 22, title: "Tandoori Roti", price: "40.00", category: "Lunch" },
  { id: 23, title: "Prawn Curry", price: "580.00", category: "Lunch" },
  { id: 24, title: "Fish Thali", price: "480.00", category: "Lunch" },
  { id: 25, title: "Chicken Thali", price: "420.00", category: "Lunch" },
  { id: 26, title: "Veg Thali", price: "320.00", category: "Lunch" },
  { id: 27, title: "Palak Paneer", price: "310.00", category: "Lunch" },
  { id: 28, title: "Jeera Rice", price: "140.00", category: "Lunch" },

  // Dinner (18 items)
  { id: 29, title: "Smoked Fish Dinner", price: "550.00", category: "Dinner" },
  { id: 30, title: "Steamed Vegetable Mix", price: "299.00", category: "Dinner" },
  { id: 31, title: "Lobster Thermidor", price: "1250.00", category: "Dinner" },
  { id: 32, title: "Filet Mignon", price: "950.00", category: "Dinner" },
  { id: 33, title: "Truffle Risotto", price: "650.00", category: "Dinner" },
  { id: 34, title: "Lamb Chops", price: "850.00", category: "Dinner" },
  { id: 35, title: "Mushroom Ravioli", price: "450.00", category: "Dinner" },
  { id: 36, title: "Grilled Salmon", price: "720.00", category: "Dinner" },
  { id: 37, title: "Beef Wellington", price: "1100.00", category: "Dinner" },
  { id: 38, title: "Duck Confit", price: "880.00", category: "Dinner" },
  { id: 39, title: "Spaghetti Carbonara", price: "420.00", category: "Dinner" },
  { id: 40, title: "Eggplant Parmesan", price: "380.00", category: "Dinner" },
  { id: 41, title: "Seafood Paella", price: "890.00", category: "Dinner" },
  { id: 42, title: "Vegetable Lasagna", price: "350.00", category: "Dinner" },
  { id: 43, title: "BBQ Pork Ribs", price: "780.00", category: "Dinner" },
  { id: 44, title: "Chicken Alfredo", price: "460.00", category: "Dinner" },
  { id: 45, title: "Pesto Pasta", price: "390.00", category: "Dinner" },
  { id: 46, title: "Baked Ziti", price: "360.00", category: "Dinner" },

  // Juice (15 items)
  { id: 47, title: "Fresh Orange Juice", price: "120.00", category: "Juice" },
  { id: 48, title: "Watermelon Cooler", price: "140.00", category: "Juice" },
  { id: 49, title: "Pineapple Mint", price: "150.00", category: "Juice" },
  { id: 50, title: "ABC Juice", price: "180.00", category: "Juice" },
  { id: 51, title: "Green Detox", price: "190.00", category: "Juice" },
  { id: 52, title: "Pomegranate Punch", price: "220.00", category: "Juice" },
  { id: 53, title: "Sweet Lime", price: "110.00", category: "Juice" },
  { id: 54, title: "Mango Shake", price: "160.00", category: "Juice" },
  { id: 55, title: "Strawberry Smoothie", price: "210.00", category: "Juice" },
  { id: 56, title: "Banana Milkshake", price: "130.00", category: "Juice" },
  { id: 57, title: "Mixed Berry", price: "230.00", category: "Juice" },
  { id: 58, title: "Carrot & Ginger", price: "140.00", category: "Juice" },
  { id: 59, title: "Beetroot Blast", price: "150.00", category: "Juice" },
  { id: 60, title: "Grape Juice", price: "160.00", category: "Juice" },
  { id: 61, title: "Lemon Mint", price: "90.00", category: "Juice" },
];

import { FiSearch } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Breakfast");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  const finalFilteredItems = filteredItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-0 ">
        {/* Cinematic Menu Header */}
   

        {/* Menu Section */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            {/* Search & Filter Header */}
            <div className="max-w-5xl mx-auto mb-16 space-y-12 bg-primary/5 p-8 md:p-12 rounded-md border border-primary/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-2">Curated for You</p>
                  <h2 className="text-4xl font-bold text-black">Our Culinary Selection</h2>
                </div>
                <div className="relative w-full md:w-72">
                  <input 
                    type="text" 
                    placeholder="Search for a dish..." 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-md bg-white border border-zinc-200 focus:outline-none focus:border-primary transition-all text-sm shadow-sm"
                  />
                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" />
                </div>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 border-b border-zinc-200 pb-8">
                {menuCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex items-center gap-3 px-8 py-3 rounded-md transition-all duration-300 ${
                      activeCategory === cat.name
                        ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                        : "bg-white text-accent hover:bg-zinc-100 border border-zinc-100"
                    }`}
                  >
                    <span className="font-bold text-sm tracking-wide uppercase">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 max-w-5xl mx-auto"
            >
              <AnimatePresence mode="popLayout">
                {finalFilteredItems.map((item, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.03,
                      ease: [0.23, 1, 0.32, 1] 
                    }}
                    key={item.id}
                    className="group"
                  >
                    <div className="flex items-end justify-between mb-2">
                      <div className="flex-1 flex items-end overflow-hidden">
                        <div className="flex flex-col">
                          {item.id % 7 === 0 && (
                            <span className="text-[10px] font-black uppercase text-secondary mb-1">Popular Choice</span>
                          )}
                          <h3 className="font-bold text-xl text-zinc-800 group-hover:text-primary transition-colors whitespace-nowrap">
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex-1 border-b border-dotted border-zinc-300 mx-4 mb-2 group-hover:border-primary/40 transition-colors"></div>
                      </div>
                      <p className="font-black text-2xl text-zinc-900 flex items-center shrink-0">
                        <span className="text-secondary text-sm mr-1">₹</span>
                        {item.price}
                      </p>
                    </div>
                    <p className="text-xs text-zinc-400 font-medium">Fresh ingredients, expertly seasoned and cooked to perfection.</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {finalFilteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-zinc-400 text-lg">No dishes found matching your search.</p>
              </div>
            )}
          </div>
        </section>

     
        {/* Opening Hours Section */}
        <section className="py-24 bg-zinc-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-md shadow-2xl overflow-hidden flex flex-col md:flex-row border border-zinc-100">
              <div className="flex-1 p-12 md:p-16 space-y-8">
                <div>
                  <p className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-2">Plan Your Visit</p>
                  <h2 className="text-4xl font-bold text-black">Opening Hours</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-4 group">
                    <span className="text-zinc-500 font-medium group-hover:text-black transition-colors">Monday - Friday</span>
                    <span className="font-bold text-black group-hover:text-primary transition-colors">09:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-4 group">
                    <span className="text-zinc-500 font-medium group-hover:text-black transition-colors">Saturday</span>
                    <span className="font-bold text-black group-hover:text-primary transition-colors">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between group">
                    <span className="text-zinc-500 font-medium group-hover:text-black transition-colors">Sunday</span>
                    <span className="font-bold text-black group-hover:text-primary transition-colors">11:00 AM - 10:00 PM</span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-zinc-400 italic">* Holiday hours may vary. Please contact us for specific dates.</p>
                </div>
              </div>

              <div className="w-full md:w-1/3 bg-primary p-12 md:p-16 text-white flex flex-col justify-center items-center text-center space-y-6">
                <div className="w-20 h-20 rounded-md bg-white/20 flex items-center justify-center text-white text-4xl mb-2">
                  <BiPhoneCall />
                </div>
                <h3 className="text-2xl font-bold">Reservations</h3>
                <p className="text-white/80 leading-relaxed">
                  Avoid the wait! Call us now to reserve your perfect table.
                </p>
                <span className="text-xl font-black tracking-tight">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
