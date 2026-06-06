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

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [toyboxOpen, setToyboxOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);

  const stars = useMemo(() => Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    top: `${Math.random() * 40}%`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.7 + 0.3,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  })), []);

  const fairyLights = useMemo(() => Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    color: ["#ff6fb7", "#ffd700", "#c084fc", "#67e8f9", "#86efac"][i % 5]
  })), []);

  const glitter = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${20 + Math.random() * 60}%`,
    top: `${30 + Math.random() * 40}%`,
    color: ["#ffd700", "#ff6fb7", "#c084fc", "#ffffff"][i % 4],
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
  })), []);

  const activeToyData = TOYS.find(t => t.id === activeToy);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(180deg, #1a0a2e 0%, #2d1052 40%, #4a1a6e 100%)" }}>
      {/* Sky/Ceiling */}
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ width: s.size, height: s.size, top: s.top, left: s.left, opacity: s.opacity }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay }}
        />
      ))}

      {/* Fairy lights string */}
      <div className="absolute top-12 left-0 right-0 flex justify-around px-8" style={{ zIndex: 2 }}>
        {fairyLights.map((l, i) => (
          <motion.div
            key={l.id}
            className="w-2 h-3 rounded-full"
            style={{ background: l.color, boxShadow: `0 0 6px 2px ${l.color}` }}
            animate={{ opacity: [1, 0.4, 1], scale: [1, 0.9, 1] }}
            transition={{ duration: 1.5 + i * 0.1, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      {/* Glitter particles */}
      {glitter.map((g, i) => (
        <motion.div
          key={g.id}
          className="absolute w-1 h-1 rounded-full"
          style={{ left: g.left, top: g.top, background: g.color }}
          animate={{ y: [0, -20, 0], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: g.duration, repeat: Infinity, delay: g.delay }}
        />
      ))}

      {/* Window */}
      <div className="absolute top-12 right-20 w-28 h-36 rounded-t-full" style={{ background: "linear-gradient(180deg, #1a0a2e 0%, #4a1a6e 100%)", border: "4px solid #8b6a9e", boxShadow: "0 0 30px rgba(180,120,255,0.3) inset" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full" style={{ background: "radial-gradient(circle, #fff5cc 0%, #ffe066 40%, #ffaa00 100%)", boxShadow: "0 0 30px 10px rgba(255,220,80,0.6)" }} />
        </div>
        <div className="absolute inset-0 flex" style={{ borderBottom: "3px solid #8b6a9e" }}>
          <div className="flex-1" style={{ borderRight: "2px solid #8b6a9e" }} />
          <div className="flex-1" />
        </div>
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1" style={{ borderBottom: "2px solid #8b6a9e" }} />
          <div className="flex-1" />
        </div>
      </div>

      {/* Back wall */}
      <div className="absolute bottom-0 left-0 right-0 h-3/5" style={{ background: "linear-gradient(180deg, #3d1a5e 0%, #2a1245 100%)" }} />

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%]" style={{ background: "linear-gradient(180deg, #5c3a1e 0%, #3d2410 100%)", borderTop: "3px solid #7a4a2a" }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute bottom-0 h-full" style={{ left: `${i * 12.5}%`, width: "12.5%", borderRight: "1px solid rgba(0,0,0,0.3)" }} />
        ))}
      </div>

      {/* Bed */}
      <div className="absolute" style={{ bottom: "22%", left: "30%", width: "35%", zIndex: 10 }}>
        <div className="w-full rounded-t-2xl h-16" style={{ background: "linear-gradient(180deg, #6b3fa0 0%, #4a2870 100%)", border: "2px solid #8b5abf" }}>
          <div className="flex justify-center gap-3 pt-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #9b6fd0, #6b3fa0)" }} />
            ))}
          </div>
        </div>
        <div className="w-full h-12" style={{ background: "linear-gradient(180deg, #c084e8 0%, #9b6fd0 100%)", borderLeft: "2px solid #b070d0", borderRight: "2px solid #b070d0" }}>
          <div className="h-full flex items-center justify-center gap-2 px-3">
            {["🌟", "💜", "🌸", "⭐", "💫"].map((e, i) => (
              <span key={i} className="text-lg opacity-60">{e}</span>
            ))}
          </div>
        </div>
        <div className="absolute top-16 left-2 w-16 h-8 rounded-lg" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f0d0ff 100%)", border: "2px solid #e0b0ff" }} />
        <div className="flex justify-between px-2">
          {[0, 1].map((i) => (
            <div key={i} className="w-4 h-4" style={{ background: "#3d2870" }} />
          ))}
        </div>
      </div>

      {/* Desk & Computer */}
      <motion.div
        className="absolute group"
        style={{ bottom: "22%", right: "8%", width: "22%", zIndex: 10, cursor: onEnterGameRoom ? "pointer" : "default" }}
        onClick={onEnterGameRoom}
        whileHover={onEnterGameRoom ? { scale: 1.04 } : {}}
        whileTap={onEnterGameRoom ? { scale: 0.97 } : {}}
      >
        {onEnterGameRoom && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            <span className="bg-white/90 text-blue-800 font-bold text-xs px-2 py-1 rounded-full shadow-md border border-blue-200">
              💻 Use Computer
            </span>
          </div>
        )}
        <div className="mx-auto w-20 h-16 rounded-lg" style={{ background: "#b0b8c8", border: "3px solid #8090a8" }}>
          <div className="m-1 h-10 rounded" style={{ background: "linear-gradient(135deg, #c8e4ff 0%, #88ccff 100%)", border: "2px inset #6699cc" }}>
            <div className="p-0.5 text-[6px] text-center" style={{ fontFamily: "monospace", color: "#003366" }}>Windows XP</div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-[1px] w-6 h-6">
                <div className="rounded-tl" style={{ background: "#e8142b" }} />
                <div className="rounded-tr" style={{ background: "#00b100" }} />
                <div className="rounded-bl" style={{ background: "#0064cb" }} />
                <div className="rounded-br" style={{ background: "#f9ba00" }} />
              </div>
            </div>
          </div>
          <div className="mx-1 h-2 rounded mt-1" style={{ background: "#1f3b87" }} />
        </div>
        <div className="mx-auto w-4 h-4" style={{ background: "#8090a8" }} />
        <div className="w-full h-4 rounded" style={{ background: "#7a5c3a", borderTop: "2px solid #9a7a5a" }}>
          <div className="mx-auto mt-1 w-16 h-2 rounded" style={{ background: "#c8cdd6", border: "1px solid #9ca3af" }} />
        </div>
        <div className="flex justify-between px-2 mt-0">
          <div className="w-2 h-16 bg-[#5c442c]" />
          <div className="w-2 h-16 bg-[#5c442c]" />
        </div>
      </motion.div>

      {/* Dresser */}
      <div className="absolute" style={{ bottom: "22%", left: "68%", width: "10%", height: "25%", zIndex: 10 }}>
        <div className="w-full h-full rounded-t-sm flex flex-col justify-evenly" style={{ background: "linear-gradient(180deg, #8b6a4a 0%, #6b4a2a 100%)", border: "2px solid #9a7a5a" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="mx-1 rounded h-6" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="w-3 h-1.5 rounded-full mx-auto mt-1" style={{ background: "#c8a878", border: "1px solid #a87840" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Posters on wall */}
      <div className="absolute" style={{ top: "15%", left: "30%", width: 60, height: 80 }}>
        <div className="w-full h-full rounded flex flex-col items-center justify-center p-1" style={{ background: "linear-gradient(135deg, #ff6fb7, #c026d3)", border: "2px solid white", boxShadow: "0 4px 10px rgba(0,0,0,0.4)" }}>
          <span className="text-white text-[10px] font-bold text-center leading-tight">Hannah<br/>Montana</span>
        </div>
      </div>
      <div className="absolute" style={{ top: "18%", left: "40%", width: 50, height: 70 }}>
        <div className="w-full h-full rounded flex flex-col items-center justify-center p-1" style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", border: "2px solid white", boxShadow: "0 4px 10px rgba(0,0,0,0.4)" }}>
          <span className="text-white text-[10px] font-bold text-center">iCarly</span>
        </div>
      </div>

      {/* Toybox (Bottom left area) */}
      <div className="absolute" style={{ bottom: "22%", left: "5%", zIndex: 20 }}>
        <motion.div
          className="w-48 h-32 bg-[#8b5a2b] border-[6px] border-[#5c3a21] rounded-sm shadow-xl relative cursor-pointer group"
          onClick={() => { setToyboxOpen(!toyboxOpen); setActiveToy(null); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Latch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-8 bg-yellow-600 rounded-b-sm shadow-sm z-10" />
          {/* Lid */}
          <motion.div
            animate={{ rotateX: toyboxOpen ? -110 : 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
            className="absolute -top-1.5 -left-1.5 -right-1.5 h-10 bg-[#a16630] border-4 border-[#5c3a21] rounded-t-lg origin-bottom"
            style={{ transformPerspective: 600 }}
          />
          {/* Label */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-amber-200 font-display px-2 py-0.5 bg-black/20 rounded">
            TOY BOX
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
              className="absolute bottom-full mb-4 left-0 w-[500px] bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border-4 border-pink-300 p-4 z-40"
            >
              <div className="flex justify-between items-center mb-3 border-b-2 border-pink-200 pb-2">
                <h3 className="text-purple-600 font-display text-lg">My Toys</h3>
                <button onClick={(e) => { e.stopPropagation(); setToyboxOpen(false); }} className="w-6 h-6 bg-pink-500 text-white rounded-full font-bold">✕</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {TOYS.map(toy => (
                  <motion.div
                    key={toy.id}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => { e.stopPropagation(); setActiveToy(toy.id); }}
                    className="flex flex-col items-center gap-1 cursor-pointer bg-purple-50 hover:bg-purple-100 rounded-lg p-2 border border-purple-200"
                  >
                    <div className="flex items-center justify-center h-16">
                      <ToyGraphic id={toy.id} />
                    </div>
                    <span className="text-[9px] text-purple-800 font-bold text-center leading-tight">{toy.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Toy detail modal */}
      <AnimatePresence>
        {activeToy && activeToyData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveToy(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-pink-400 max-w-sm w-full flex flex-col items-center gap-4 relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setActiveToy(null)} className="absolute top-4 right-4 w-8 h-8 bg-gray-200 text-gray-600 rounded-full font-bold hover:bg-gray-300">✕</button>
              <div className="flex items-center justify-center h-32 bg-purple-50 w-full rounded-xl border-2 border-purple-100">
                <ToyGraphic id={activeToy} />
              </div>
              <h3 className="font-display text-2xl text-purple-800 text-center">{activeToyData.name}</h3>
              <p className="text-purple-600 text-center italic text-sm">"{activeToyData.desc}"</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
