import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TVLounge() {
  const [tvOn, setTvOn] = useState(false);

  const shows = [
    { title: "Noddy", color: "bg-red-500" },
    { title: "Dragon Tales", color: "bg-green-500" },
    { title: "Wow Wow Wubbzy", color: "bg-yellow-400" },
    { title: "I Spy", color: "bg-blue-600" }
  ];

  return (
    <div className="w-full h-full bg-[#5c2e0e] relative overflow-hidden flex flex-col items-center p-8">
      {/* Ambient Lighting */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/20 blur-[60px] rounded-full pointer-events-none" />
      
      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#3d1c04] border-t-[12px] border-[#291302] z-0" />

      <h2 className="font-display text-4xl text-amber-200 z-10 mb-8 drop-shadow-lg">TV Lounge</h2>

      <div className="flex-1 w-full max-w-5xl z-10 flex gap-8 items-end pb-12 relative">
        
        {/* VHS Tapes Collection */}
        <div className="w-1/4 h-64 bg-[#291302] border-8 border-[#1a0c01] rounded-lg p-4 flex flex-col gap-2 shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)] overflow-y-auto custom-scrollbar">
          {shows.map(show => (
             <div key={show.title} className="w-full h-12 bg-black border border-gray-800 rounded-sm flex items-center shadow-md cursor-pointer hover:border-gray-500 transition-colors">
               <div className={`w-8 h-full ${show.color} rounded-l-sm`} />
               <span className="text-white text-xs font-bold px-2 truncate font-sans">{show.title}</span>
             </div>
          ))}
        </div>

        {/* CRT TV */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-[400px] h-[300px] bg-[#d1d5db] border-[16px] border-[#9ca3af] rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] p-4 flex relative cursor-pointer" onClick={() => setTvOn(!tvOn)}>
            {/* Screen */}
            <div className={`flex-1 bg-black rounded-[30px] border-8 border-gray-800 relative overflow-hidden transition-colors duration-500 ${tvOn ? 'shadow-[0_0_50px_rgba(59,130,246,0.5)]' : ''}`}>
              <div className="absolute inset-0 bg-white/5 rounded-[22px] pointer-events-none" style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)' }} />
              {tvOn && (
                <div className="absolute inset-0 bg-blue-500/20 z-0 animate-pulse">
                   <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px)' }} />
                   <div className="w-full h-full flex items-center justify-center text-blue-200 font-display text-2xl animate-bounce">
                     PLAY ►
                   </div>
                </div>
              )}
            </div>
            {/* Control Panel */}
            <div className="w-16 h-full flex flex-col items-center justify-between py-8 pl-4">
              <div className="flex flex-col gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-400 border-b-4 border-gray-500 shadow-sm" />
                <div className="w-8 h-8 rounded-full bg-gray-400 border-b-4 border-gray-500 shadow-sm" />
              </div>
              <div className="w-6 h-12 flex flex-col gap-1">
                {Array.from({length: 6}).map((_,i) => <div key={i} className="w-full h-1 bg-gray-500 rounded-full" />)}
              </div>
            </div>
            
            {/* Antennas */}
            <div className="absolute -top-16 left-1/3 w-2 h-20 bg-gray-400 origin-bottom rotate-[-30deg] border border-gray-500 rounded-full" />
            <div className="absolute -top-16 right-1/3 w-2 h-20 bg-gray-400 origin-bottom rotate-[30deg] border border-gray-500 rounded-full" />
          </div>
          
          {/* TV Stand */}
          <div className="w-[300px] h-12 bg-[#291302] border-x-8 border-t-8 border-[#1a0c01] mt-0 z-0" />
        </div>

        {/* Xbox Games */}
        <div className="w-1/4 h-64 bg-[#291302] border-8 border-[#1a0c01] rounded-lg p-4 grid grid-cols-2 gap-2 shadow-[inset_0_10px_20px_rgba(0,0,0,0.5)]">
           {['Dance Central', 'Kinect Sports', 'Toy Story'].map(g => (
             <div key={g} className="bg-green-600 border border-green-800 h-24 rounded-sm flex flex-col items-center pt-1 shadow-md cursor-pointer hover:bg-green-500">
               <div className="w-full h-3 bg-green-800 mb-1" />
               <span className="text-white text-[8px] text-center font-bold px-1">{g}</span>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
}
