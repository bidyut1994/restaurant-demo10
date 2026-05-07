"use client";

import { motion } from "framer-motion";
import { FiShoppingBag, FiTruck, FiClock, FiGift } from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "CATERING",
    description: "Delight your guests with our flavors and presentation",
    icon: <FiShoppingBag />,
    color: "text-primary",
  },
  {
    id: 2,
    title: "FAST DELIVERY",
    description: "We deliver your order promptly to your door",
    icon: <FiTruck />,
    color: "text-green-500",
  },
  {
    id: 3,
    title: "ONLINE ORDERING",
    description: "Explore menu & order with ease using our Online Ordering",
    icon: <FiClock />,
    color: "text-primary",
  },
  {
    id: 4,
    title: "GIFT CARDS",
    description: "Give the gift of exceptional dining with Foodi Gift Cards",
    icon: <FiGift />,
    color: "text-primary",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
        {/* Left Side: Story */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <div>
            <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">
              Our Story & Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
              Our Culinary Journey <br /> And Services
            </h2>
            <p className="text-accent text-lg leading-relaxed max-w-lg">
              Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
            </p>
          </div>
      
        </motion.div>

        {/* Right Side: Service Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col items-center text-center border border-zinc-50 group transition-all duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-8 transition-all duration-500 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.04)] group-hover:bg-primary group-hover:text-white ${service.color}`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-black mb-4 tracking-tight text-zinc-900 group-hover:text-primary transition-colors`}>
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
