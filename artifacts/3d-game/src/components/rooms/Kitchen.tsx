import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FOODS = [
  { id: "bananastars", name: "Banana star puffs", icon: "⭐" },
  { id: "pickledeggs", name: "Pickled eggs", icon: "🥚" },
  { id: "pickledbeets", name: "Pickled beets", icon: "🧅" },
  { id: "nuggets", name: "Chicken nuggets + honey", icon: "🍗" },
  { id: "smiley", name: "Smiley fries", icon: "🍟" },
  { id: "nacho", name: "Nacho Picoso Dinamita", icon: "🌶️" },
  { id: "ranch", name: "Ranch box pasta salad", icon: "🥗" },
  { id: "helper", name: "Hamburger Helper", icon: "🥘" },
  { id: "kidcuisine", name: "Kid Cuisine / Hungry Man", icon: "🍱" },
  { id: "greengiant", name: "Green Giant broccoli cheese rice", icon: "🥦" },
];

const DRINKS = [
  { id: "bugjuice", name: "Bug Juice", icon: "🧃" },
  { id: "hugs", name: "Hugs (barrel drinks)", icon: "🛢️" },
  { id: "whitegrape", name: "White grape juice", icon: "🍇" },
];

export default function Kitchen() {
  const [activeView, setActiveView] = useState<"room" | "fridge" | "pantry">("room");

  return (
    <div className="w-full h-full p-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-display text-4xl text-purple-900">The Kitchen 🍽️</h2>
        {activeView !== "room" && (
          <button 
            onClick={() => setActiveView("room")}
            className="text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-lg font-bold"
          >
            ← Back to Kitchen
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {activeView === "room" && (
          <motion.div 
            key="room"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex-1 flex items-center justify-center gap-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveView("fridge")}
              className="w-64 h-96 bg-gray-100 rounded-lg border-4 border-gray-300 shadow-2xl flex items-center justify-center flex-col gap-4 relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 right-4 h-2 bg-gray-300 rounded-full" />
              <div className="absolute top-8 left-4 w-4 h-32 bg-gray-300 rounded-full" />
              <span className="text-6xl">🥶</span>
              <span className="font-display text-xl text-gray-600">Fridge</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveView("pantry")}
              className="w-64 h-96 bg-amber-100 rounded-lg border-4 border-amber-800 shadow-2xl flex items-center justify-center flex-col gap-4 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-1/3 h-2 bg-amber-800/20" />
              <div className="absolute inset-x-0 top-2/3 h-2 bg-amber-800/20" />
              <span className="text-6xl">🚪</span>
              <span className="font-display text-xl text-amber-900">Pantry</span>
            </motion.button>
          </motion.div>
        )}

        {activeView === "fridge" && (
          <motion.div 
            key="fridge"
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }}
            className="flex-1 bg-blue-50/50 rounded-2xl p-8 border-4 border-blue-100"
          >
            <h3 className="font-display text-2xl text-blue-800 mb-6">Cold Drinks & Snacks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {DRINKS.map(item => (
                <div key={item.id} className="bg-white/80 p-4 rounded-xl shadow flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-center font-bold text-sm text-blue-900">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeView === "pantry" && (
          <motion.div 
            key="pantry"
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}
            className="flex-1 bg-amber-50/50 rounded-2xl p-8 border-4 border-amber-100"
          >
            <h3 className="font-display text-2xl text-amber-800 mb-6">Pantry Shelves</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {FOODS.map(item => (
                <div key={item.id} className="bg-white/80 p-4 rounded-xl shadow flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-center font-bold text-sm text-amber-900">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
