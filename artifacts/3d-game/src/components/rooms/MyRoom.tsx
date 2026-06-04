import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOYS = [
  { id: "bottle", name: "Magic Baby Bottle", desc: "The milk disappears when you tilt it. TECHNOLOGY." },
  { id: "skeebo", name: "Skeebo Beebo", desc: "My little lime green alien friend." },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "You could draw on it and wash it off. Revolutionary." },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: "She danced and talked back. Best friend material." },
  { id: "furby", name: "Furby (Orange)", desc: "Terrifying. Beloved. Could not be turned off." },
  { id: "journal", name: "Password Journal", desc: "Voice-activated diary. Nobody was getting in." },
  { id: "playdoh", name: "Play-Doh Sets", desc: "The smell alone is a core memory." },
  { id: "easybake", name: "Easy Bake Oven", desc: "Tiny light-bulb cakes. Peak childhood engineering." },
  { id: "wagon", name: "Red Wagon", desc: "The original ride-or-die vehicle." },
  { id: "wand", name: "Alex's Magic Wand", desc: "Aunt Alex brought this. It was perfect." },
  { id: "remote", name: "Sam's TV Remote", desc: "Cousin Sam's old remote became a toy somehow." },
  { id: "shopkins", name: "Shopkins", desc: "Tiny food characters. I had hundreds." },
];

function ToyGraphic({ id }: { id: string }) {
  switch (id) {
    case "bottle":
      return (
        <div className="relative w-14 h-28 flex flex-col items-center">
          <div className="w-8 h-5 bg-yellow-200 rounded-t-full border-2 border-yellow-300 relative z-10">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full" />
          </div>
          <div className="w-12 h-4 bg-white/60 border-t-2 border-white rounded-sm -mt-1 z-10" />
          <div className="w-14 h-20 bg-white/40 border-2 border-white/70 rounded-b-2xl rounded-t-sm flex flex-col justify-end overflow-hidden">
            <div className="w-full bg-white/80 transition-all" style={{ height: "50%" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-8 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      );
    case "skeebo":
      return (
        <div className="relative w-16 h-20 flex flex-col items-center">
          <div className="w-12 h-12 bg-lime-400 rounded-full border-2 border-lime-600 relative flex items-center justify-center">
            <div className="absolute -top-2 left-2 w-1.5 h-4 bg-lime-300 rounded-full rotate-[-20deg]" />
            <div className="absolute -top-2 right-2 w-1.5 h-4 bg-lime-300 rounded-full rotate-[20deg]" />
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-black rounded-full border border-white" />
              <div className="w-3 h-3 bg-black rounded-full border border-white" />
            </div>
          </div>
          <div className="w-10 h-8 bg-lime-500 rounded-b-xl border-2 border-lime-600 relative">
            <div className="absolute -left-2 top-1 w-3 h-5 bg-lime-400 rounded-full" />
            <div className="absolute -right-2 top-1 w-3 h-5 bg-lime-400 rounded-full" />
          </div>
        </div>
      );
    case "doodle":
      return (
        <div className="relative w-20 h-20">
          <div className="w-20 h-20 bg-purple-400 rounded-full relative border-2 border-purple-600">
            <div className="absolute -top-3 left-2 w-6 h-6 bg-purple-400 rounded-full border-2 border-purple-600" />
            <div className="absolute -top-3 right-2 w-6 h-6 bg-purple-400 rounded-full border-2 border-purple-600" />
            <div className="absolute top-4 left-3 w-5 h-5 bg-purple-200 rounded-full" />
            <div className="absolute top-4 right-3 w-5 h-5 bg-purple-200 rounded-full" />
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-3 border-b-2 border-purple-700 rounded-b-full" />
            <div className="absolute top-6 left-6 w-8 h-1 bg-pink-400 rounded rotate-12 opacity-70" />
            <div className="absolute top-10 left-4 w-10 h-1 bg-blue-400 rounded -rotate-6 opacity-70" />
          </div>
        </div>
      );
    case "fijit":
      return (
        <div className="relative w-16 h-20 flex flex-col items-center">
          <div className="w-14 h-14 bg-purple-500 rounded-full border-2 border-purple-700 relative flex items-center justify-center">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-white rounded-full border border-purple-300" />
              <div className="w-3 h-3 bg-white rounded-full border border-purple-300" />
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-3 bg-purple-600 rounded-full flex items-center justify-center gap-1">
              {[0,1,2].map(i => <div key={i} className="w-1 h-1.5 bg-purple-400 rounded-full" />)}
            </div>
          </div>
          <div className="w-10 h-6 bg-purple-600 rounded-b-xl border-2 border-purple-700" />
        </div>
      );
    case "furby":
      return (
        <div className="relative w-20 h-20">
          <div className="w-20 h-20 bg-orange-400 rounded-full border-2 border-orange-600 relative shadow-lg">
            <div className="absolute -top-4 left-1 w-8 h-10 bg-orange-300 rounded-full rotate-[-30deg] border border-orange-400" />
            <div className="absolute -top-4 right-1 w-8 h-10 bg-orange-300 rounded-full rotate-[30deg] border border-orange-400" />
            <div className="absolute top-5 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <div className="absolute top-5 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-5 h-4 bg-yellow-300 rounded-b-full border-t-2 border-orange-500" />
          </div>
        </div>
      );
    case "journal":
      return (
        <div className="relative w-16 h-22">
          <div className="w-16 h-20 bg-pink-400 rounded-r-lg border-l-4 border-gray-400 shadow-md relative">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="absolute left-[-5px] w-2 h-2 bg-gray-300 rounded-full" style={{ top: `${i * 12 + 6}px` }} />
            ))}
            <div className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-7 bg-pink-200 rounded border border-pink-500 flex items-center justify-center">
              <div className="w-2 h-3 bg-pink-500 rounded-sm" />
            </div>
            <div className="absolute top-3 left-6 right-2 h-0.5 bg-pink-300" />
            <div className="absolute top-6 left-6 right-2 h-0.5 bg-pink-300" />
          </div>
        </div>
      );
    case "playdoh":
      return (
        <div className="flex gap-1">
          {["bg-red-500", "bg-yellow-400", "bg-blue-500", "bg-green-500"].map((c, i) => (
            <div key={i} className={`w-8 h-10 ${c} rounded-t-full border-2 border-white/50 shadow-md`}>
              <div className="w-full h-3 bg-white/20 rounded-t-full" />
            </div>
          ))}
        </div>
      );
    case "easybake":
      return (
        <div className="w-24 h-16 bg-pink-400 rounded-md border-2 border-pink-600 shadow-md relative">
          <div className="absolute left-3 top-3 w-12 h-10 bg-pink-300 border-2 border-pink-500 rounded flex items-center justify-center">
            <div className="w-8 h-6 bg-pink-600/40 rounded border border-pink-600" />
          </div>
          <div className="absolute right-3 top-5 w-5 h-5 bg-pink-200 rounded-full border-2 border-pink-500">
            <div className="w-2 h-2 bg-pink-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="absolute -top-2 right-6 w-3 h-3 bg-pink-500 rounded-full border border-pink-700" />
        </div>
      );
    case "wagon":
      return (
        <div className="relative w-24 h-16">
          <div className="absolute top-0 left-4 right-0 h-9 bg-red-500 rounded-sm border-2 border-red-700 shadow-md" />
          <div className="absolute bottom-3 left-0 w-4 h-1 bg-red-400 rotate-[-30deg] origin-right" />
          {[{l:"left-6",t:"bottom-0"},{l:"left-14",t:"bottom-0"},{l:"right-6",t:"bottom-0"},{l:"right-2",t:"bottom-0"}].map((_,i) => (
            <div key={i} className={`absolute ${i<2?"left-"+(i===0?"6":"14"):"right-"+(i===2?"6":"2")} bottom-0 w-5 h-5 bg-gray-700 rounded-full border-2 border-gray-500`} />
          ))}
        </div>
      );
    case "wand":
      return (
        <div className="relative w-10 h-28 flex flex-col items-center">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {[0,45,90,135].map(deg => (
              <div key={deg} className="absolute w-2 h-5 bg-yellow-400 rounded-full origin-bottom" style={{ transform: `rotate(${deg}deg) translateY(-50%)` }} />
            ))}
            <div className="w-4 h-4 bg-yellow-300 rounded-full border-2 border-yellow-500 z-10" />
          </div>
          <div className="w-1.5 h-20 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-md" />
        </div>
      );
    case "remote":
      return (
        <div className="w-12 h-20 bg-gray-700 rounded-xl border-2 border-gray-600 shadow-md relative p-2 flex flex-col gap-1">
          <div className="w-full h-3 bg-gray-900 rounded" />
          <div className="flex gap-1 justify-center">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
          </div>
          <div className="grid grid-cols-3 gap-0.5 mt-1">
            {Array.from({length:9}).map((_,i) => (
              <div key={i} className="w-3 h-2 bg-gray-500 rounded-sm" />
            ))}
          </div>
        </div>
      );
    case "shopkins":
      return (
        <div className="flex flex-wrap gap-1 w-20">
          {["bg-red-400","bg-pink-400","bg-yellow-400","bg-purple-400","bg-green-400","bg-blue-400"].map((c,i) => (
            <div key={i} className={`w-7 h-8 ${c} rounded-xl border border-white/50 shadow-sm relative`}>
              <div className="absolute top-1.5 left-1 w-1 h-1 bg-white rounded-full opacity-80" />
              <div className="absolute top-1.5 right-1 w-1 h-1 bg-white rounded-full opacity-80" />
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-1 border-b border-white/60 rounded" />
            </div>
          ))}
        </div>
      );
    default:
      return <div className="w-12 h-12 bg-purple-400 rounded-lg" />;
  }
}

export default function MyRoom() {
  const [toyboxOpen, setToyboxOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);

  const fairyLights = useMemo(() =>
    Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      color: ["bg-pink-400","bg-yellow-300","bg-purple-400","bg-blue-300","bg-green-300","bg-red-400"][i % 6],
    })), []);

  const activeToyData = TOYS.find(t => t.id === activeToy);

  return (
    <div className="w-full h-full bg-[#e9d5ff] relative overflow-hidden">
      {/* Wallpaper dots */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#9333ea 2px, transparent 2px)', backgroundSize: '28px 28px' }} />

      {/* Fairy lights string */}
      <div className="absolute top-0 left-0 right-0 flex items-start z-20 px-4 pointer-events-none">
        <div className="w-full h-4 relative">
          <div className="absolute inset-x-0 top-2 h-0.5 bg-gray-600/40" />
          {fairyLights.map((l, i) => (
            <div key={l.id} className="absolute top-2 flex flex-col items-center" style={{ left: `${(i / (fairyLights.length - 1)) * 96 + 2}%` }}>
              <div className="w-0.5 h-2 bg-gray-500/60" />
              <div className={`w-3 h-4 ${l.color} rounded-b-full shadow-[0_0_6px_2px_rgba(255,255,200,0.6)]`} />
            </div>
          ))}
        </div>
      </div>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[28%] z-0" style={{ background: 'repeating-linear-gradient(90deg, #c2853a 0px, #c2853a 58px, #a0692e 58px, #a0692e 60px)' }} />

      {/* Bed (back wall) */}
      <div className="absolute top-16 right-20 z-0">
        <div className="w-52 h-20 bg-purple-600 rounded-t-2xl border-4 border-purple-800 shadow-lg">
          <div className="w-full h-6 bg-purple-400 rounded-t-xl opacity-60" />
        </div>
        <div className="w-52 h-14 bg-purple-200 border-x-4 border-purple-300" />
        <div className="absolute top-2 left-4 w-16 h-10 bg-purple-100 rounded-xl border border-purple-300" />
        <div className="absolute top-2 right-4 w-16 h-10 bg-purple-100 rounded-xl border border-purple-300" />
      </div>

      {/* Poster on wall */}
      <div className="absolute top-20 left-32 w-24 h-32 bg-gradient-to-b from-pink-400 to-purple-500 rounded border-4 border-white shadow-md z-0 flex flex-col items-center justify-center gap-2 overflow-hidden">
        <div className="w-8 h-8 bg-yellow-300 rounded-full" />
        <div className="w-16 h-1.5 bg-white/60 rounded" />
        <div className="w-12 h-1 bg-white/40 rounded" />
        <div className="w-14 h-1 bg-white/40 rounded" />
      </div>

      {/* Title */}
      <div className="absolute top-12 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <h2 className="font-display text-4xl text-purple-900 bg-white/50 px-6 py-2 rounded-full backdrop-blur-md">My Room</h2>
      </div>

      {/* Room contents */}
      <div className="w-full h-full relative z-10 flex items-end justify-between px-16 pb-8">

        {/* Toybox */}
        <div className="relative flex flex-col items-center">
          <motion.div
            className="w-56 h-44 bg-[#8b5a2b] border-8 border-[#5c3a21] rounded-lg shadow-2xl relative cursor-pointer select-none"
            onClick={() => { setToyboxOpen(!toyboxOpen); setActiveToy(null); }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Latch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-10 bg-yellow-600 rounded-b-md shadow-md z-10" />
            {/* Lid */}
            <motion.div
              animate={{ rotateX: toyboxOpen ? -110 : 0 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
              className="absolute -top-2 -left-2 -right-2 h-14 bg-[#a16630] border-4 border-[#5c3a21] rounded-t-xl origin-bottom"
              style={{ transformPerspective: 600 }}
            />
            {/* Wood grain lines */}
            {[20,40,60,80,100,120].map(y => (
              <div key={y} className="absolute left-0 right-0 h-px bg-black/10" style={{ top: y }} />
            ))}
            {/* Label */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-bold text-amber-200 font-display">
              {toyboxOpen ? "Click to close" : "Click to open!"}
            </div>
          </motion.div>

          {/* Toys popup */}
          <AnimatePresence>
            {toyboxOpen && (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.8 }}
                transition={{ type: "spring", bounce: 0.3 }}
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-[700px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-4 border-pink-300 p-4 z-40"
              >
                <p className="text-center text-purple-600 font-display text-lg mb-3">Click a toy to remember it ✨</p>
                <div className="grid grid-cols-6 gap-3">
                  {TOYS.map(toy => (
                    <motion.div
                      key={toy.id}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveToy(toy.id)}
                      className="flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <div className="flex items-center justify-center h-16">
                        <ToyGraphic id={toy.id} />
                      </div>
                      <span className="text-[10px] text-purple-800 font-bold text-center leading-tight">{toy.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desk & PC */}
        <div className="relative mb-6">
          {/* Desk surface */}
          <div className="w-80 h-8 bg-[#e5e7eb] border-b-8 border-[#d1d5db] shadow-xl absolute -bottom-8 -left-10 rounded-sm z-0" />
          {/* Monitor */}
          <div className="w-48 h-40 bg-[#d1d5db] border-8 border-[#9ca3af] rounded-xl shadow-2xl relative z-10">
            <div className="absolute inset-3 bg-black rounded-md overflow-hidden border-2 border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-b from-[#6ab0e0] to-[#4a90c0]" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#5ca85c] rounded-t-[50%]" />
              <div className="absolute top-3 left-3 w-10 h-5 bg-white/50 rounded-full blur-[2px]" />
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#2355b0] flex items-center px-1 gap-1">
                <div className="h-3 px-1.5 bg-[#3c8c3c] rounded-sm text-[6px] text-white font-bold flex items-center">start</div>
              </div>
            </div>
          </div>
          {/* Stand */}
          <div className="w-14 h-6 bg-[#b5bec9] mx-auto z-10 relative" />
          <div className="w-28 h-3 bg-[#9ca3af] mx-auto rounded-t-sm z-10 relative" />
          {/* Keyboard */}
          <div className="absolute -bottom-5 left-0 right-0 h-4 bg-[#d1d5db] rounded border border-gray-400 mx-4">
            {[0,1,2].map(i => <div key={i} className="absolute inset-x-2 h-px bg-gray-400" style={{ top: `${i*5+3}px` }} />)}
          </div>
        </div>
      </div>

      {/* Toy detail modal */}
      <AnimatePresence>
        {activeToy && activeToyData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setActiveToy(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-pink-300 max-w-sm w-full flex flex-col items-center gap-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-center h-32">
                <ToyGraphic id={activeToy} />
              </div>
              <h3 className="font-display text-2xl text-purple-800 text-center">{activeToyData.name}</h3>
              <p className="text-purple-600 text-center italic">"{activeToyData.desc}"</p>
              <button onClick={() => setActiveToy(null)} className="mt-2 bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-400 transition-colors">
                Put Back 💜
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
