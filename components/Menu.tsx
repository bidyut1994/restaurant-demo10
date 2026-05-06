"use client";

import { useState } from "react";
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

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-white relative" id="menu">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Our Menu
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.4] mb-12">
            Menu That Always <br /> Make You Fall In Love
          </h2>

          {/* Category Tabs */}
          <div className="border-b pb-3 border-primary mx-4 md:mx-32">
            <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 ">
              {menuCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex flex-col items-center gap-1 transition-all duration-300 group`}
                >
                  <span
                    className={`text-xl font-bold ${
                      activeCategory === cat.name
                        ? "text-primary"
                        : "text-zinc-400 group-hover:text-zinc-600"
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                key={item.id}
                className="flex items-end justify-between group"
              >
                <div className="flex-1 flex items-end">
                  <h3 className="font-bold text-lg text-zinc-800 group-hover:text-primary transition-colors whitespace-nowrap">
                    {item.title}
                  </h3>
                  <div className="flex-1 border-b-2 border-dotted border-zinc-300 mx-4 mb-2 group-hover:border-primary/40 transition-colors"></div>
                </div>
                <p className="font-black text-xl text-zinc-900 flex items-center shrink-0">
                  <span className="text-secondary text-sm mr-1">₹</span>
                  {item.price}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
