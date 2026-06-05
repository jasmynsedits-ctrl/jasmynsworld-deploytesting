import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Kitchen from "./rooms/Kitchen";
import MyRoom from "./rooms/MyRoom";
import GameRoom from "./rooms/GameRoom";
import TVLounge from "./rooms/TVLounge";
import Library from "./rooms/Library";
import MusicCorner from "./rooms/MusicCorner";
import HobbyWorkshop from "./rooms/HobbyWorkshop";
import PhotoBooth from "./rooms/PhotoBooth";
import MemoryBox from "./rooms/MemoryBox";

const ROOMS = [
  { id: "kitchen", title: "Kitchen", component: Kitchen, color: "bg-teal-500", borderColor: "border-teal-700", icon: "fridge" },
  { id: "tvlounge", title: "TV Lounge", component: TVLounge, color: "bg-orange-400", borderColor: "border-orange-600", icon: "tv" },
  { id: "library", title: "Library", component: Library, color: "bg-[#714b35]", borderColor: "border-[#4a2e1b]", icon: "books" },
  { id: "musiccorner", title: "Music Corner", component: MusicCorner, color: "bg-purple-700", borderColor: "border-purple-900", icon: "record" },
  { id: "myroom", title: "My Room", component: MyRoom, color: "bg-purple-300", borderColor: "border-purple-500", icon: "bed" },
  { id: "gameroom", title: "Game Room", component: GameRoom, color: "bg-blue-800", borderColor: "border-blue-950", icon: "pc" },
  { id: "hobby", title: "Hobby Workshop", component: HobbyWorkshop, color: "bg-yellow-400", borderColor: "border-yellow-600", icon: "craft" },
  { id: "photo", title: "Photo Booth", component: PhotoBooth, color: "bg-pink-500", borderColor: "border-pink-700", icon: "camera" },
];

function RoomIcon({ type }: { type: string }) {
  switch (type) {
    case 'fridge': return <div className="w-8 h-12 bg-white rounded-sm border-2 border-gray-300 relative"><div className="absolute top-4 left-1 w-1 h-4 bg-gray-400" /></div>;
    case 'tv': return <div className="w-12 h-10 bg-gray-700 rounded-lg border-4 border-gray-500 flex items-center justify-center"><div className="w-8 h-6 bg-blue-300 rounded-sm" /></div>;
    case 'books': return <div className="w-12 h-10 bg-[#4a2e1b] flex items-end justify-center gap-1"><div className="w-2 h-8 bg-red-500" /><div className="w-2 h-7 bg-blue-500" /><div className="w-2 h-9 bg-green-500" /></div>;
    case 'record': return <div className="w-12 h-12 bg-[#3d2413] rounded-sm flex items-center justify-center"><div className="w-10 h-10 bg-black rounded-full border border-gray-700"><div className="w-3 h-3 bg-red-400 rounded-full mx-auto mt-3" /></div></div>;
    case 'bed': return <div className="w-12 h-16 bg-purple-500 rounded-t-lg border-2 border-purple-700 relative"><div className="absolute top-2 w-8 h-4 bg-white rounded-full left-2" /><div className="absolute bottom-0 w-full h-8 bg-pink-400" /></div>;
    case 'pc': return <div className="w-10 h-10 bg-gray-300 border-2 border-gray-500 rounded-sm relative"><div className="absolute inset-1 bg-blue-500" /></div>;
    case 'craft': return <div className="w-14 h-10 bg-yellow-600 rounded-sm flex gap-1 p-1"><div className="w-3 h-3 bg-red-500 rounded-full" /><div className="w-3 h-3 bg-blue-500 rounded-full" /></div>;
    case 'camera': return <div className="w-10 h-14 bg-pink-600 rounded-t-xl flex flex-col items-center p-2"><div className="w-4 h-4 bg-black rounded-full border-2 border-gray-400" /></div>;
    default: return null;
  }
}

export default function MainWorld() {
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [boxOpen, setBoxOpen] = useState(false);

  const activeRoom = ROOMS.find(r => r.id === currentRoom);
  const RoomComponent = activeRoom?.component;

  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${(i * 13.7) % 100}%`,
      top: `${(i * 19.3) % 100}%`,
      delay: (i * 0.7) % 5,
      duration: 3 + ((i * 1.1) % 4),
    }));
  }, []);

  return (
    <div className="w-full h-[100dvh] bg-[#fef3c7] flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map(p => (
          <motion.div
            key={p.id}
            animate={{ y: [0, -50], opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-[0_0_8px_#fcd34d]"
            style={{ left: p.left, top: p.top }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!currentRoom ? (
          <motion.div
            key="map"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="relative w-full max-w-5xl aspect-[4/2] bg-[#fffbeb] border-[12px] border-[#92400e] p-8 shadow-2xl rounded-sm z-20 flex flex-col"
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-4xl text-[#78350f] tracking-wide bg-[#fffbeb] px-4">
              Jasmyn's World
            </div>

            <button
              onClick={() => setBoxOpen(true)}
              className="absolute top-4 right-4 z-30 group"
            >
              <div className="w-16 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg shadow-lg border-2 border-amber-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-xl">📦</span>
              </div>
            </button>

            <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full border-4 border-[#92400e] shadow-md flex items-center justify-center z-20">
              <div className="w-1 h-8 bg-red-600 rotate-45" />
              <div className="absolute w-1 h-8 bg-blue-600 -rotate-45" />
            </div>

            <div className="flex-1 mt-12 grid grid-cols-4 grid-rows-2 gap-4">
              {ROOMS.map(room => (
                <motion.div
                  key={room.id}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setCurrentRoom(room.id)}
                  className={`cursor-pointer ${room.color} border-4 ${room.borderColor} rounded-lg shadow-md flex flex-col items-center justify-center relative group overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <RoomIcon type={room.icon} />
                  <span className="absolute bottom-2 font-display text-white text-sm bg-black/30 px-2 py-0.5 rounded shadow-sm">
                    {room.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="room"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black z-30"
          >
            <div className="absolute top-6 left-6 z-50">
              <button 
                onClick={() => setCurrentRoom(null)}
                className="bg-white/20 hover:bg-white/40 backdrop-blur-md px-4 py-2 rounded-full font-display text-white border border-white/30 transition-all shadow-lg"
              >
                ← Back to Map
              </button>
            </div>
            {RoomComponent && <RoomComponent />}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {boxOpen && <MemoryBox onClose={() => setBoxOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
