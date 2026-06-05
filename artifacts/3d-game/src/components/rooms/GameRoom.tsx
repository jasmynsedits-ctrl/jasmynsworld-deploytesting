import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GameRoom() {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const desktopIcons = [
    { id: 'clubpenguin', name: 'Club Penguin', color: 'bg-blue-500', shape: 'rounded-full', desc: "Waddle around and meet new friends! The pizza parlor was my jam." },
    { id: 'moshimonsters', name: 'Moshi Monsters', color: 'bg-purple-500', shape: 'rounded-[40%_60%_70%_30%]', desc: "I spent all my Rox on room decorations and planted seeds to catch Moshlings." },
    { id: 'moviestarplanet', name: 'MovieStar Planet', color: 'bg-pink-400', shape: 'rotate-45', desc: "Making movies, dressing up, and trying to get VIP status." },
    { id: 'animaljam', name: 'Animal Jam', color: 'bg-green-600', shape: 'rounded-lg', desc: "Trading spiked collars and playing games in Jamaa." },
    { id: 'weeworld', name: 'WeeWorld', color: 'bg-green-400', shape: 'rounded-sm', desc: "Hanging out in WeeMees and exploring the virtual world." },
    { id: 'pbskids', name: 'PBS Kids', color: 'bg-green-500', shape: 'rounded-full', desc: "Arthur, Cyberchase, and endless educational mini-games." },
    { id: 'disneychannel', name: 'Disney Channel', color: 'bg-blue-600', shape: 'rounded-md', desc: "Playing Zack & Cody and Kim Possible games for hours." }
  ];

  return (
    <div className="w-full h-full bg-[#000000] relative overflow-hidden flex flex-col font-sans select-none">
      {/* XP Desktop Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a6ea5] to-[#7ebcf0]" />
        {/* Clouds */}
        <div className="absolute top-10 left-20 w-32 h-12 bg-white/80 rounded-full blur-[2px]" />
        <div className="absolute top-24 right-40 w-48 h-16 bg-white/60 rounded-full blur-[2px]" />
        {/* Green Hill */}
        <div className="absolute bottom-0 left-[-10%] right-[-10%] h-[40%] bg-gradient-to-t from-[#228b22] to-[#4ade80] rounded-t-[50%] blur-[1px]" />
      </div>

      {/* Desktop Icons */}
      <div className="flex-1 p-4 flex flex-col gap-6 items-start z-10 relative flex-wrap h-full content-start">
        {desktopIcons.map((icon) => (
          <div key={icon.id} className="flex flex-col items-center gap-1 w-20 cursor-pointer group" onDoubleClick={() => setActiveWindow(icon.id)}>
            <div className={`w-12 h-12 ${icon.color} ${icon.shape} shadow-md border-2 border-white/50 group-hover:border-white transition-all`} />
            <span className="text-white text-[10px] text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] group-hover:bg-blue-600/60 px-1 rounded">
              {icon.name}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeWindow && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-[#ece9d8] rounded-t-lg shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#0055e5] z-30 flex flex-col overflow-hidden"
          >
            {/* Title Bar */}
            <div className="h-8 bg-gradient-to-r from-[#0058e6] via-[#3a93ff] to-[#0058e6] flex justify-between items-center px-2">
              <span className="text-white text-xs font-bold font-sans drop-shadow-md">{desktopIcons.find(i => i.id === activeWindow)?.name}</span>
              <button onClick={() => setActiveWindow(null)} className="w-6 h-6 bg-[#e81123] text-white text-xs font-bold rounded-sm border border-white/50 hover:bg-[#f04b58]">X</button>
            </div>
            {/* Content */}
            <div className="flex-1 bg-white border-2 border-[#ece9d8] m-1 p-6 flex flex-col items-center justify-center gap-4">
              <div className={`w-20 h-20 ${desktopIcons.find(i => i.id === activeWindow)?.color} ${desktopIcons.find(i => i.id === activeWindow)?.shape} shadow-lg`} />
              <h3 className="font-bold text-xl text-[#0058e6]">{desktopIcons.find(i => i.id === activeWindow)?.name}</h3>
              <p className="text-center text-gray-700 italic px-4">
                "{desktopIcons.find(i => i.id === activeWindow)?.desc}"
              </p>
              <div className="mt-4 px-4 py-2 bg-gray-200 rounded border border-gray-300 text-sm text-gray-500">
                Loading nostalgic flash game...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Taskbar */}
      <div className="h-10 bg-gradient-to-b from-[#245edb] via-[#3f8cf3] to-[#245edb] border-t border-[#1a4bb8] z-40 relative flex items-center px-1">
        {/* Start Button */}
        <button 
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          className="h-8 px-4 bg-gradient-to-b from-[#349c42] to-[#298334] rounded-r-xl rounded-l-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-[#1d6b26] flex items-center gap-2 hover:brightness-110"
        >
          <div className="w-4 h-4 bg-white/20 rounded-sm skew-x-12" />
          <span className="text-white font-bold italic drop-shadow-md">start</span>
        </button>

        {/* Open Windows */}
        {activeWindow && (
          <div className="ml-4 h-8 px-4 bg-[#1f50b5] rounded-sm border border-[#123681] shadow-inner text-white text-xs flex items-center max-w-[150px] truncate">
            {desktopIcons.find(i => i.id === activeWindow)?.name}
          </div>
        )}

        <div className="ml-auto h-8 px-3 bg-[#0d8ee8] border border-[#095ea8] rounded-sm shadow-inner flex items-center text-white text-xs font-sans">
          4:20 PM
        </div>

        {/* Start Menu */}
        <AnimatePresence>
          {startMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-10 left-0 w-72 bg-[#ece9d8] rounded-t-lg shadow-[0_-5px_20px_rgba(0,0,0,0.3)] border border-[#0055e5] flex flex-col overflow-hidden"
            >
              <div className="h-14 bg-gradient-to-r from-[#0b3394] to-[#1250d4] flex items-center px-4 gap-3 border-b-2 border-orange-400">
                <div className="w-10 h-10 bg-white border-2 border-white rounded-md overflow-hidden">
                  <div className="w-full h-full bg-pink-400" />
                </div>
                <span className="text-white font-bold text-lg drop-shadow-md">Jasmyn</span>
              </div>
              <div className="flex-1 flex min-h-[250px]">
                <div className="flex-1 bg-white p-2 flex flex-col gap-1">
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold">Internet Explorer</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold">AIM</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold">Limewire</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold">Pinball</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold">Minesweeper</div>
                </div>
                <div className="w-1/3 bg-[#d3e5fa] border-l border-[#95bcee] p-2 flex flex-col gap-1 text-xs text-[#00136b] font-bold">
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer">My Documents</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer">My Pictures</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer">Control Panel</div>
                </div>
              </div>
              <div className="h-10 bg-gradient-to-r from-[#0b3394] to-[#1250d4] flex items-center justify-end px-4 gap-2">
                <button className="text-white text-xs flex items-center gap-1 hover:underline">
                  <div className="w-4 h-4 bg-orange-500 rounded-sm" /> Log Off
                </button>
                <button className="text-white text-xs flex items-center gap-1 hover:underline">
                  <div className="w-4 h-4 bg-red-500 rounded-sm" /> Turn Off
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
