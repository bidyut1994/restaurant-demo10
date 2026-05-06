"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Break Fast",
    count: "12 breakfast",
    image: "/category_breakfast_1778046730386.png",
    color: "bg-orange-100",
  },
  {
    id: 2,
    title: "Lunch",
    count: "16 dishes",
    image: "/category_lunch_1778046750502.png",
    color: "bg-green-100",
  },
  {
    id: 3,
    title: "Dinner",
    count: "18 dinner",
    image: "/category_dinner_1778046766241.png",
    color: "bg-red-100",
  },
  {
    id: 4,
    title: "Juice",
    count: "15 items",
    image: "/category_juice_1778046781234.png",
    color: "bg-blue-100",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            Customer Favorites
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-black tracking-tight"
          >
            Our Popular Categories
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-[10px] p-12 flex flex-col items-center text-center shadow-xl shadow-zinc-200/50 border border-zinc-100"
            >
              <div
                className={`relative w-40 h-40 rounded-md ${cat.color} flex items-center justify-center mb-8`}
              >
                <div className="relative w-full h-full rounded-md overflow-hidden bg-white shadow-inner flex items-center justify-center p-2">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-zinc-900">
                  {cat.title}
                </h3>
                <p className="text-accent font-medium text-sm bg-zinc-50 py-1 px-4 rounded-full inline-block">
                  {cat.count}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
