import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotoBooth() {
  const [showDVDs, setShowDVDs] = useState(false);

  return (
    <div className="w-full h-full bg-pink-50 p-8 flex flex-col relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 left-10 text-3xl opacity-20">✨</div>
      <div className="absolute bottom-20 right-20 text-4xl opacity-20">✨</div>
      
      <div className="flex justify-between items-center mb-8 z-10">
        <h2 className="font-display text-4xl text-pink-900">Photo Booth 📷</h2>
        <button 
          onClick={() => setShowDVDs(!showDVDs)}
          className="bg-white hover:bg-pink-100 text-pink-600 px-6 py-2 rounded-full font-bold shadow-md transition-colors"
        >
          {showDVDs ? "View Photos" : "View Home Videos"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!showDVDs ? (
          <motion.div 
            key="photos"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex-1 flex flex-col items-center justify-center gap-8"
          >
            <div className="flex gap-8 overflow-x-auto p-8 w-full max-w-5xl items-center justify-center">
              {/* Filmstrip 1 */}
              <motion.div 
                whileHover={{ rotate: 2, scale: 1.05 }}
                className="bg-white p-4 pb-12 rounded-sm shadow-2xl border border-gray-200 rotate-[-3deg] flex flex-col gap-2 min-w-[200px]"
              >
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-full aspect-square bg-gray-200 relative overflow-hidden flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Empty</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                  </div>
                ))}
              </motion.div>

              {/* Central instruction */}
              <div className="bg-pink-100 p-8 rounded-2xl border-4 border-pink-200 text-center max-w-sm shadow-lg z-10">
                <span className="text-4xl mb-4 block">✨</span>
                <p className="font-display text-xl text-pink-800 mb-4">Add your photos here</p>
                <p className="text-pink-600 mb-6 text-sm">Connect your Google Photos to fill in these memories.</p>
                <a 
                  href="https://photos.app.goo.gl/rLpdb1MQ46PtXPHK8" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-3 rounded-full font-bold shadow-md inline-block transition-transform hover:scale-105"
                >
                  Link Google Photos
                </a>
              </div>

              {/* Filmstrip 2 */}
              <motion.div 
                whileHover={{ rotate: -2, scale: 1.05 }}
                className="bg-white p-4 pb-12 rounded-sm shadow-2xl border border-gray-200 rotate-[4deg] flex flex-col gap-2 min-w-[200px]"
              >
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-full aspect-square bg-gray-200 relative overflow-hidden flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Empty</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="dvds"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 bg-blue-900 rounded-3xl p-8 flex flex-col shadow-inner"
          >
            <h3 className="font-display text-2xl text-blue-200 mb-6 text-center">Home Video Archive</h3>
            
            <div className="flex-1 bg-black/40 rounded-xl p-8 flex items-end justify-center gap-4">
              {["2005", "2006", "2007", "2008"].map((year) => (
                <motion.div
                  key={year}
                  whileHover={{ y: -20 }}
                  className="w-24 h-48 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm border border-blue-300 shadow-xl flex items-center justify-center cursor-pointer relative group"
                >
                  <span className="text-white font-bold rotate-90 tracking-widest">{year}</span>
                  {/* Fake Bluray logo */}
                  <div className="absolute top-2 w-8 h-3 bg-blue-800 rounded-full" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-blue-900 text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none shadow-lg">
                    Click to view {year}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
