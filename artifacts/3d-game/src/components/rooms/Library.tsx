import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOKS = [
  { title: "Junie B. Jones", color: "bg-pink-500" },
  { title: "Cam Jansen", color: "bg-blue-500" },
  { title: "Geronimo Stilton", color: "bg-green-600" },
  { title: "Dear Dumb Diary", color: "bg-purple-500" },
  { title: "Dork Diaries", color: "bg-fuchsia-500" },
  { title: "Cupcake Diaries", color: "bg-pink-300" },
  { title: "Judy Moody", color: "bg-orange-500" },
  { title: "Ramona Quimby", color: "bg-red-500" },
  { title: "Babysitters Club", color: "bg-teal-500" },
  { title: "I Spy 3D", color: "bg-slate-800" },
  { title: "Boxcar Children", color: "bg-amber-600" },
  { title: "Magic Treehouse", color: "bg-green-700" },
  { title: "Captain Underpants", color: "bg-red-600" },
];

export default function Library() {
  const [openedBook, setOpenedBook] = useState<string | null>(null);

  return (
    <div className="w-full h-full bg-[#3d2c23] p-8 flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwdjJIMGpNMCAzMGg0MHYySDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] opacity-20 pointer-events-none" />
      
      <h2 className="font-display text-4xl text-amber-200 mb-12 drop-shadow-md z-10">The Library 📚</h2>

      {/* Bookshelf */}
      <div className="w-full max-w-4xl bg-[#5c4033] p-6 rounded-lg border-8 border-[#4a332a] shadow-2xl relative z-10">
        <div className="flex flex-wrap items-end justify-center gap-1 min-h-[200px] border-b-8 border-[#4a332a] pb-1">
          {BOOKS.map((book, i) => (
            <motion.div
              key={book.title}
              whileHover={{ y: -10, scale: 1.05 }}
              onClick={() => setOpenedBook(book.title)}
              className={`w-12 md:w-16 h-48 ${book.color} rounded-sm cursor-pointer shadow-lg relative border-l-2 border-white/20 border-r-2 border-black/20`}
              style={{
                transformOrigin: "bottom center",
                height: `${180 + (i % 3) * 20}px`
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs md:text-sm font-bold -rotate-90 whitespace-nowrap w-40 text-center drop-shadow-md font-sans">
                  {book.title}
                </span>
              </div>
              {/* Book details/lines */}
              <div className="absolute top-2 left-1 right-1 h-1 bg-white/30" />
              <div className="absolute bottom-4 left-1 right-1 h-1 bg-black/20" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpenedBook(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 90 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="bg-[#f4ebd0] w-full max-w-2xl h-96 rounded-r-2xl rounded-l-md shadow-2xl flex relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Book spine/crease */}
              <div className="w-12 h-full bg-gradient-to-r from-gray-400 via-gray-300 to-transparent absolute left-0" />
              <div className="w-12 h-full bg-gradient-to-r from-transparent via-black/10 to-transparent absolute left-1/2 -translate-x-1/2" />
              
              {/* Left Page */}
              <div className="flex-1 p-8 pl-16 flex flex-col justify-center border-r border-gray-300">
                <h3 className="font-display text-3xl text-gray-800 mb-4">{openedBook}</h3>
                <div className="w-16 h-1 bg-amber-500 mb-4" />
                <p className="font-serif text-gray-600 italic">
                  One of my absolute favorites. I read this series over and over.
                </p>
              </div>

              {/* Right Page */}
              <div className="flex-1 p-8 pr-12 flex flex-col justify-center relative">
                {/* Lined paper effect */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMTloMTB2MUgweiIgZmlsbD0icmdiYSgwLDAsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-50" />
                <div className="relative z-10 font-sans text-blue-800 text-lg leading-[30px] rotate-[-2deg]">
                  I used to stay up late reading these with a flashlight under the covers. 🔦✨
                </div>
              </div>

              {/* Close button */}
              <button 
                onClick={() => setOpenedBook(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
