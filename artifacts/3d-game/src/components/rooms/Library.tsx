import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Library() {
  const [openedBook, setOpenedBook] = useState<string | null>(null);

  const books = [
    { title: "Junie B. Jones", color: "bg-pink-500", h: "h-32" },
    { title: "Cam Jansen", color: "bg-blue-500", h: "h-36" },
    { title: "Geronimo Stilton", color: "bg-green-600", h: "h-40" },
    { title: "Dear Dumb Diary", color: "bg-purple-500", h: "h-32" },
    { title: "Dork Diaries", color: "bg-fuchsia-500", h: "h-44" },
    { title: "Cupcake Diaries", color: "bg-pink-300", h: "h-36" },
  ];

  return (
    <div className="w-full h-full bg-[#2d1b11] relative overflow-hidden flex flex-col items-center p-8">
      {/* Wall Paneling */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #4a2e1b 2px, transparent 2px)', backgroundSize: '100px 100px' }} />
      
      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#1a0f09] z-0" />

      <h2 className="font-display text-4xl text-amber-100 z-10 mb-8 drop-shadow-md">The Library</h2>

      <div className="flex-1 w-full max-w-5xl z-10 flex gap-12 items-end justify-center pb-12 relative">
        
        {/* Bookshelf */}
        <div className="w-[600px] h-[400px] bg-[#4a2e1b] border-[16px] border-[#311c10] shadow-2xl relative flex flex-col px-4 pt-4 z-10">
           {/* Shelf 1 */}
           <div className="flex-1 border-b-[12px] border-[#311c10] flex items-end px-4 gap-2">
             {books.slice(0, 3).map(book => (
               <motion.div key={book.title} whileHover={{ y: -10 }} onClick={() => setOpenedBook(book.title)} className={`w-16 ${book.h} ${book.color} rounded-sm shadow-md cursor-pointer relative border-x border-black/20 overflow-hidden`}>
                 <div className="absolute bottom-4 left-0 right-0 h-4 bg-white/20" />
                 <div className="w-full h-full flex items-center justify-center -rotate-90">
                   <span className="text-white text-[10px] font-bold whitespace-nowrap">{book.title}</span>
                 </div>
               </motion.div>
             ))}
           </div>
           {/* Shelf 2 */}
           <div className="flex-1 border-b-[12px] border-[#311c10] flex items-end px-4 gap-2">
             {books.slice(3, 6).map(book => (
               <motion.div key={book.title} whileHover={{ y: -10 }} onClick={() => setOpenedBook(book.title)} className={`w-16 ${book.h} ${book.color} rounded-sm shadow-md cursor-pointer relative border-x border-black/20 overflow-hidden`}>
                 <div className="absolute bottom-4 left-0 right-0 h-4 bg-white/20" />
                 <div className="w-full h-full flex items-center justify-center -rotate-90">
                   <span className="text-white text-[10px] font-bold whitespace-nowrap">{book.title}</span>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* Reading Chair */}
        <div className="w-48 h-56 relative z-10">
           <div className="absolute bottom-0 w-full h-24 bg-red-800 rounded-t-xl shadow-lg border-2 border-red-900" />
           <div className="absolute bottom-20 left-4 w-40 h-32 bg-red-700 rounded-t-[40px] shadow-inner border-2 border-red-800" />
           <div className="absolute bottom-16 -left-4 w-12 h-16 bg-red-900 rounded-full shadow-lg" />
           <div className="absolute bottom-16 -right-4 w-12 h-16 bg-red-900 rounded-full shadow-lg" />
        </div>

        <AnimatePresence>
          {openedBook && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-[-50px] bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-12"
              onClick={() => setOpenedBook(null)}
            >
              <motion.div 
                initial={{ rotateY: 90, scale: 0.8 }}
                animate={{ rotateY: 0, scale: 1 }}
                exit={{ rotateY: 90, scale: 0.8 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-full max-w-4xl h-96 bg-[#f4ebd0] rounded-lg shadow-2xl flex relative overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                {/* Book Center Binding */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
                
                {/* Left Page */}
                <div className="flex-1 p-12 pr-16 flex flex-col justify-center border-r border-black/10">
                  <h3 className="font-display text-4xl text-amber-900 mb-6">{openedBook}</h3>
                  <div className="w-20 h-2 bg-amber-600 mb-6" />
                  <p className="font-serif text-gray-700 text-lg">One of the classics.</p>
                </div>
                
                {/* Right Page */}
                <div className="flex-1 p-12 pl-16 flex flex-col justify-center">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(transparent 95%, #000 100%)', backgroundSize: '100% 30px' }} />
                  <p className="font-sans text-blue-900 text-xl leading-[30px] rotate-[-2deg] relative z-10 italic font-medium">
                    "I used to read this under the covers with a flashlight."
                  </p>
                </div>

                <button onClick={() => setOpenedBook(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-xl">X</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
