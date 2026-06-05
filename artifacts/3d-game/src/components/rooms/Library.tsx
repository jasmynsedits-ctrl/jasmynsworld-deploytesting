import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Library() {
  const [openedBook, setOpenedBook] = useState<{ title: string; quote: string; color: string } | null>(null);

  const books = [
    { title: "Junie B. Jones", color: "#ec4899", quote: "I could read these in one sitting. Junie B. was unhinged and I loved her." },
    { title: "Cam Jansen", color: "#3b82f6", quote: "Pause, click. I tried to do her memory trick on my multiplication tables." },
    { title: "Geronimo Stilton", color: "#16a34a", quote: "The fonts and colors in these books were EVERYTHING." },
    { title: "Dear Dumb Diary", color: "#a855f7", quote: "The art! The drama! The middle school chaos." },
    { title: "Dork Diaries", color: "#d946ef", quote: "I was 100% a Nikki. Obviously." },
    { title: "Cupcake Diaries", color: "#f9a8d4", quote: "Made me want to start a cupcake business at age 8." },
    { title: "Judy Moody", color: "#0ea5e9", quote: "Moodiest protagonist ever. Same." },
    { title: "Ramona Quimby", color: "#ef4444", quote: "A timeless girlboss." },
    { title: "Babysitters Club", color: "#14b8a6", quote: "The graphic novel versions too!" },
    { title: "I Spy 3D", color: "#f59e0b", quote: "Id stare at this for hours." },
    { title: "Boxcar Children", color: "#8b5cf6", quote: "Living in a boxcar seemed so cool." },
    { title: "Magic Treehouse", color: "#22c55e", quote: "Jack and Annie took me EVERYWHERE." },
    { title: "Captain Underpants", color: "#eab308", quote: "Tra-la-laaa" },
  ];

  const dustParticles = useMemo(() => Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 50}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(180deg, #2b1d16 0%, #3d2c23 100%)" }}>
      {/* Ceiling / Sky area */}
      <div className="absolute top-0 left-0 right-0 h-[35%]" style={{ background: "linear-gradient(180deg, #1f1209 0%, #2b1d16 100%)" }}>
        {/* Chandelier glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)" }} />
        {/* Dust particles */}
        {dustParticles.map(p => (
          <motion.div key={p.id}
            className="absolute w-1 h-1 bg-amber-100/40 rounded-full"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity }}
          />
        ))}
        {/* Chandelier */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-1 h-16 bg-yellow-700" />
          <div className="w-24 h-4 rounded-full border-2 border-yellow-600 flex justify-between px-2 items-end pb-1 relative">
             <div className="w-2 h-4 bg-white/80 rounded-t-sm shadow-[0_0_10px_#fcd34d]" />
             <div className="w-2 h-4 bg-white/80 rounded-t-sm shadow-[0_0_10px_#fcd34d]" />
             <div className="w-2 h-4 bg-white/80 rounded-t-sm shadow-[0_0_10px_#fcd34d]" />
          </div>
        </div>
      </div>

      {/* Back Wall */}
      <div className="absolute top-[35%] bottom-[22%] left-0 right-0" style={{ background: "#3d2c23" }}>
        {/* Giant Bookshelf */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[90%]" style={{ background: "#2b1910", border: "8px solid #1a0f09" }}>
           <div className="absolute inset-0 flex flex-col justify-evenly">
             {[0, 1, 2].map(shelf => (
               <div key={shelf} className="w-full h-4 bg-[#1a0f09] relative">
                 <div className="absolute bottom-full left-0 right-0 flex items-end justify-center px-4 gap-2 h-20">
                   {books.slice(shelf * 5, shelf * 5 + 5).map((book, i) => (
                     <motion.div key={i}
                       whileHover={{ y: -10 }}
                       onClick={() => setOpenedBook(book)}
                       className="w-10 rounded-t-sm shadow-md cursor-pointer flex items-center justify-center -rotate-90 relative"
                       style={{ height: `${80 + (i%3)*10}%`, background: book.color, borderLeft: "2px solid rgba(255,255,255,0.3)" }}
                     >
                       <span className="text-[8px] text-white font-bold whitespace-nowrap">{book.title}</span>
                     </motion.div>
                   ))}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%]" style={{ background: "linear-gradient(180deg, #5c3a1e 0%, #3d2410 100%)", borderTop: "3px solid #7a4a2a" }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute bottom-0 h-full" style={{ left: `${i * 12.5}%`, width: "12.5%", borderRight: "1px solid rgba(0,0,0,0.3)" }} />
        ))}
      </div>

      {/* Rug */}
      <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[40%] h-[15%]" style={{ background: "#7f1d1d", borderRadius: "50%", border: "4px solid #450a0a" }} />

      {/* Armchair */}
      <div className="absolute bottom-[22%] right-[15%] w-32 h-32 z-10 flex flex-col items-center">
        <div className="w-24 h-20 bg-[#78350f] rounded-t-[40px] border-4 border-[#451a03] shadow-lg" />
        <div className="w-32 h-12 bg-[#92400e] rounded-xl border-4 border-[#451a03] -mt-4 z-10 flex justify-between px-2">
           <div className="w-6 h-6 bg-[#78350f] rounded-full -mt-2 border-2 border-[#451a03]" />
           <div className="w-6 h-6 bg-[#78350f] rounded-full -mt-2 border-2 border-[#451a03]" />
        </div>
        {/* Legs */}
        <div className="flex w-24 justify-between -mt-2">
          <div className="w-3 h-6 bg-black" />
          <div className="w-3 h-6 bg-black" />
        </div>
      </div>

      {/* Floor Lamp */}
      <div className="absolute bottom-[22%] right-[8%] w-10 h-48 z-0 flex flex-col items-center">
        <div className="w-16 h-12 bg-amber-100 rounded-t-lg border-2 border-amber-200 relative shadow-[0_0_30px_#fcd34d]">
          <div className="absolute -bottom-4 -left-10 w-32 h-32 bg-amber-400/20 blur-xl rounded-full" />
        </div>
        <div className="w-2 flex-1 bg-yellow-900" />
        <div className="w-10 h-2 bg-yellow-900 rounded-t-full" />
      </div>

      {/* Side Table */}
      <div className="absolute bottom-[22%] right-[32%] w-16 h-16 z-10 flex flex-col items-center">
        <div className="absolute bottom-16 w-6 h-6 bg-white rounded-lg shadow-sm border-2 border-gray-200">
          <div className="w-4 h-1 bg-amber-800 rounded-full mx-auto mt-1" /> {/* Tea */}
          <div className="absolute top-1 -right-2 w-2 h-3 border-2 border-gray-200 rounded-r-full" /> {/* Handle */}
        </div>
        <div className="w-full h-4 bg-[#78350f] rounded-full" />
        <div className="w-2 flex-1 bg-[#451a03]" />
        <div className="w-10 h-2 bg-[#451a03] rounded-t-full" />
      </div>

      <AnimatePresence>
        {openedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            onClick={() => setOpenedBook(null)}
          >
            <motion.div 
              initial={{ rotateY: 90, scale: 0.8 }}
              animate={{ rotateY: 0, scale: 1 }}
              exit={{ rotateY: 90, scale: 0.8 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-full max-w-2xl h-80 bg-[#fef3c7] rounded-lg shadow-2xl flex relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              
              <div className="flex-1 p-8 pr-12 flex flex-col justify-center border-r border-black/10">
                <h3 className="font-display text-3xl" style={{ color: openedBook.color }}>{openedBook.title}</h3>
              </div>
              
              <div className="flex-1 p-8 pl-12 flex flex-col justify-center relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(transparent 95%, #000 100%)', backgroundSize: '100% 24px' }} />
                <p className="font-sans text-xl leading-8 rotate-[-2deg] relative z-10 italic text-gray-800">
                  "{openedBook.quote}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
