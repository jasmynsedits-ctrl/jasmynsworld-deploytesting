import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mini-games kept intact
function LoomGame() {
  const PEGS = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({ id: i, x: (i % 4) * 70 + 30, y: Math.floor(i / 4) * 70 + 30 })), []);
  const COLORS = ["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#a855f7","#ec4899"];
  const [colorIdx, setColorIdx] = useState(0);
  const [bands, setBands] = useState<{ from: number; to: number; color: string }[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const clickPeg = (id: number) => {
    if (selected === null) { setSelected(id); return; }
    if (selected !== id) setBands(b => [...b, { from: selected, to: id, color: COLORS[colorIdx] }]);
    setSelected(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-amber-800 font-bold">Click two pegs to stretch a band!</p>
      <div className="flex gap-2 mb-2">
        {COLORS.map((c, i) => (
          <button key={i} onClick={() => setColorIdx(i)} className="w-7 h-7 rounded-full border-4 transition-transform hover:scale-110" style={{ background: c, borderColor: i === colorIdx ? "#fff" : c }} />
        ))}
        <button onClick={() => setBands([])} className="ml-4 px-3 py-1 bg-gray-200 rounded-full text-xs font-bold hover:bg-gray-300">Clear</button>
      </div>
      <div className="relative w-[320px] h-[250px] bg-white rounded-xl border-4 border-amber-300 shadow-inner">
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {bands.map((b, i) => {
            const f = PEGS[b.from], t = PEGS[b.to];
            return <line key={i} x1={f.x} y1={f.y} x2={t.x} y2={t.y} stroke={b.color} strokeWidth="6" strokeLinecap="round" opacity="0.8" />;
          })}
        </svg>
        {PEGS.map(p => (
          <button key={p.id} onClick={() => clickPeg(p.id)}
            className="absolute w-5 h-5 rounded-full border-2 border-gray-400 transition-all hover:scale-125"
            style={{ left: p.x - 10, top: p.y - 10, background: selected === p.id ? "#fbbf24" : "#f3f4f6", borderColor: selected === p.id ? "#d97706" : "#9ca3af", boxShadow: selected === p.id ? "0 0 8px #fbbf24" : undefined }}
          />
        ))}
      </div>
    </div>
  );
}

function StewGame() {
  const ingredients = [
    { id: "leaf", label: "Mystery Leaf", color: "#22c55e", shape: "rounded-full w-10 h-6" },
    { id: "rock", label: "Cool Rock", color: "#78716c", shape: "rounded-xl w-10 h-8" },
    { id: "bottle", label: "Weird Bottle", color: "#60a5fa", shape: "rounded-b-full w-7 h-12" },
    { id: "twig", label: "Eagle Twig", color: "#92400e", shape: "rounded-full w-12 h-3" },
    { id: "berry", label: "Red Berry", color: "#ef4444", shape: "rounded-full w-7 h-7" },
  ];
  const [added, setAdded] = useState<string[]>([]);
  const [bubbling, setBubbling] = useState(false);

  const addIngredient = (id: string) => {
    if (added.includes(id)) return;
    setAdded(a => [...a, id]);
    setBubbling(true);
    setTimeout(() => setBubbling(false), 800);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-amber-800 font-bold">Add ingredients to the cauldron!</p>
      <div className="flex gap-3 flex-wrap justify-center">
        {ingredients.map(ing => (
          <motion.button key={ing.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={() => addIngredient(ing.id)}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl border-2 transition-all ${added.includes(ing.id) ? "opacity-30 cursor-default border-gray-300" : "border-amber-400 bg-amber-50 hover:bg-amber-100"}`}
          >
            <div className={`${ing.shape}`} style={{ background: ing.color }} />
            <span className="text-xs font-bold text-amber-900">{ing.label}</span>
          </motion.button>
        ))}
      </div>
      <div className="relative w-40 h-36 flex items-end justify-center">
        <div className="w-36 h-28 bg-gray-800 rounded-b-[50%] border-4 border-gray-700 relative overflow-hidden shadow-2xl">
          <motion.div
            animate={{ backgroundColor: added.length === 0 ? "#374151" : added.length < 3 ? "#854d0e" : "#15803d" }}
            className="absolute bottom-0 left-0 right-0 h-20 rounded-b-[50%]"
          />
          {bubbling && (
            <>
              <motion.div initial={{ y: 0, opacity: 1 }} animate={{ y: -30, opacity: 0 }} className="absolute bottom-16 left-8 w-4 h-4 bg-green-400 rounded-full" />
              <motion.div initial={{ y: 0, opacity: 1 }} animate={{ y: -25, opacity: 0 }} transition={{ delay: 0.1 }} className="absolute bottom-16 right-10 w-3 h-3 bg-green-300 rounded-full" />
            </>
          )}
        </div>
        <div className="absolute top-0 w-40 h-5 bg-gray-700 rounded-full border-2 border-gray-600" />
        <div className="absolute bottom-0 left-6 w-3 h-6 bg-gray-800 rounded-b-sm" />
        <div className="absolute bottom-0 right-6 w-3 h-6 bg-gray-800 rounded-b-sm" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-6 bg-gray-800 rounded-b-sm" />
        {added.length > 0 && [0,1,2].map(i => (
          <motion.div key={i} animate={{ y: [-10,-40], opacity: [0.6,0] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.4 }}
            className="absolute -top-6 rounded-full bg-white/40 w-4 h-8 blur-sm"
            style={{ left: `${30 + i * 25}%` }}
          />
        ))}
      </div>
      {added.length === ingredients.length && <p className="text-green-700 font-bold font-display text-lg animate-bounce">Eagle Stew Complete! 🦅</p>}
    </div>
  );
}

function ButterflyGame() {
  const [caught, setCaught] = useState<number[]>([]);
  const butterflies = useMemo(() => Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    x: 10 + (i % 4) * 22,
    y: 10 + Math.floor(i / 4) * 40,
    color: ["#ec4899","#a855f7","#f97316","#3b82f6","#22c55e","#eab308","#ef4444","#06b6d4"][i],
  })), []);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sky-800 font-bold">Click to catch the butterflies! ({caught.length}/{butterflies.length})</p>
      <div className="relative w-80 h-48 bg-gradient-to-b from-sky-200 to-green-200 rounded-xl border-4 border-sky-300 overflow-hidden shadow-inner">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-green-400 rounded-t-[40%]" />
        {butterflies.map(b => (
          <AnimatePresence key={b.id}>
            {!caught.includes(b.id) && (
              <motion.button
                animate={{ x: [0, 8, -5, 0], y: [0, -6, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2 + b.id * 0.3, ease: "easeInOut" }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => setCaught(c => [...c, b.id])}
                className="absolute cursor-pointer hover:scale-125 transition-transform"
                style={{ left: `${b.x}%`, top: `${b.y}%` }}
              >
                <svg width="32" height="28" viewBox="0 0 32 28">
                  <ellipse cx="8" cy="12" rx="8" ry="10" fill={b.color} opacity="0.85" />
                  <ellipse cx="24" cy="12" rx="8" ry="10" fill={b.color} opacity="0.85" />
                  <ellipse cx="8" cy="20" rx="5" ry="6" fill={b.color} opacity="0.7" />
                  <ellipse cx="24" cy="20" rx="5" ry="6" fill={b.color} opacity="0.7" />
                  <line x1="16" y1="4" x2="16" y2="26" stroke="#1f2937" strokeWidth="1.5" />
                  <path d="M16 4 Q13 1 11 3" stroke="#1f2937" strokeWidth="1" fill="none" />
                  <path d="M16 4 Q19 1 21 3" stroke="#1f2937" strokeWidth="1" fill="none" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        ))}
        {caught.length === butterflies.length && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur rounded-xl">
            <p className="font-display text-2xl text-green-700">All caught! 🦋</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FireflyGame() {
  const [caught, setCaught] = useState<number[]>([]);
  const flies = useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
    id: i, x: 5 + (i % 4) * 23, y: 5 + Math.floor(i / 4) * 28,
  })), []);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-indigo-200 font-bold">Catch the lightning bugs! ({caught.length}/{flies.length})</p>
      <div className="relative w-80 h-48 bg-gradient-to-b from-[#0f0c29] to-[#1a1a2e] rounded-xl border-4 border-indigo-900 overflow-hidden shadow-inner">
        {flies.map(f => (
          <AnimatePresence key={f.id}>
            {!caught.includes(f.id) && (
              <motion.button
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
                transition={{ repeat: Infinity, duration: 1 + f.id * 0.2, ease: "easeInOut" }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => setCaught(c => [...c, f.id])}
                className="absolute cursor-pointer"
                style={{ left: `${f.x}%`, top: `${f.y}%` }}
              >
                <div className="w-4 h-4 bg-yellow-300 rounded-full shadow-[0_0_10px_4px_rgba(253,224,71,0.8)]" />
              </motion.button>
            )}
          </AnimatePresence>
        ))}
        {caught.length > 0 && (
          <div className="absolute bottom-3 right-4 w-12 h-16 border-2 border-white/40 rounded-b-xl bg-white/10 overflow-hidden flex flex-col-reverse">
            <motion.div
              animate={{ height: `${(caught.length / flies.length) * 100}%` }}
              className="w-full bg-yellow-300/40"
            >
              {caught.slice(0, 5).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-yellow-300 rounded-full mx-auto mt-1 shadow-[0_0_4px_2px_rgba(253,224,71,0.6)]" />
              ))}
            </motion.div>
          </div>
        )}
        {caught.length === flies.length && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-xl">
            <p className="font-display text-xl text-yellow-300">Jar is full! ✨</p>
          </div>
        )}
      </div>
    </div>
  );
}

function TurtleGame() {
  const [pos, setPos] = useState({ x: 140, y: 100 });
  const [dir, setDir] = useState(0);

  const move = useCallback((e: React.KeyboardEvent) => {
    const step = 20;
    setPos(p => {
      if (e.key === "ArrowUp") { setDir(0); return { ...p, y: Math.max(10, p.y - step) }; }
      if (e.key === "ArrowDown") { setDir(180); return { ...p, y: Math.min(170, p.y + step) }; }
      if (e.key === "ArrowLeft") { setDir(270); return { ...p, x: Math.max(10, p.x - step) }; }
      if (e.key === "ArrowRight") { setDir(90); return { ...p, x: Math.min(280, p.x + step) }; }
      return p;
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-green-800 font-bold">Use arrow keys to move the turtle!</p>
      <div className="relative w-80 h-48 bg-yellow-100 rounded-xl border-4 border-yellow-400 overflow-hidden shadow-inner"
        tabIndex={0} onKeyDown={move} style={{ outline: "none" }}
        onClick={e => (e.currentTarget as HTMLElement).focus()}
      >
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
        <p className="absolute top-2 left-2 text-xs text-yellow-700 font-bold">click then use arrows</p>
        <motion.div animate={{ x: pos.x, y: pos.y }} transition={{ type: "spring", stiffness: 300 }} className="absolute w-12 h-12" style={{ rotate: dir }}>
          <div className="absolute top-1 left-1 w-10 h-10 bg-green-600 rounded-full border-2 border-green-800">
            <div className="absolute inset-1 grid grid-cols-2 gap-0.5">
              <div className="bg-green-500 rounded-tl" /><div className="bg-green-700 rounded-tr" />
              <div className="bg-green-700 rounded-bl" /><div className="bg-green-500 rounded-br" />
            </div>
          </div>
          <div className="absolute -top-2 left-4 w-5 h-5 bg-green-500 rounded-full border border-green-700">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black rounded-full" />
          </div>
          <div className="absolute top-3 -left-1 w-3 h-3 bg-green-500 rounded-full border border-green-700" />
          <div className="absolute top-3 -right-1 w-3 h-3 bg-green-500 rounded-full border border-green-700" />
          <div className="absolute bottom-1 -left-1 w-3 h-3 bg-green-500 rounded-full border border-green-700" />
          <div className="absolute bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-green-700" />
        </motion.div>
      </div>
    </div>
  );
}

function RollyGame() {
  const [rolled, setRolled] = useState<number[]>([]);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-gray-700 font-bold">Click the bugs to make them roll up!</p>
      <div className="flex flex-wrap gap-6 justify-center max-w-sm">
        {Array.from({ length: 8 }).map((_, i) => {
          const isRolled = rolled.includes(i);
          return (
            <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={() => setRolled(r => r.includes(i) ? r.filter(x => x !== i) : [...r, i])}
              className="cursor-pointer flex flex-col items-center gap-1"
            >
              <motion.div animate={{ borderRadius: isRolled ? "50%" : "40% 40% 50% 50%" }}
                className="relative bg-gray-600 border-2 border-gray-800 shadow-md overflow-hidden"
                style={{ width: isRolled ? 36 : 48, height: isRolled ? 36 : 24, transition: "all 0.4s" }}
              >
                {!isRolled && (
                  <>
                    {[20,35,50,65,80].map(x => <div key={x} className="absolute top-1/2 -translate-y-1/2 w-px h-4 bg-gray-500" style={{ left: `${x}%` }} />)}
                    {[-3,3].map((side,j) => [30,50,70].map((x,k) => (
                      <div key={`${j}${k}`} className="absolute w-3 h-px bg-gray-400" style={{ left: `${x}%`, top: side > 0 ? "90%" : "-10%", transform: `rotate(${side * 30}deg)` }} />
                    )))}
                  </>
                )}
              </motion.div>
              <span className="text-xs text-gray-600">{isRolled ? "🔵 rolled!" : "poke me"}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SlimeGame() {
  const slimeColors = [
    { name: "Toxic Green", value: "#22c55e" },
    { name: "Galaxy Purple", value: "#7c3aed" },
    { name: "Bubblegum", value: "#ec4899" },
    { name: "Ocean Blue", value: "#0ea5e9" },
    { name: "Lava", value: "#ef4444" },
    { name: "Sunshine", value: "#eab308" },
  ];
  const [color, setColor] = useState(slimeColors[0].value);
  const [stretching, setStretching] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-green-800 font-bold">Pick a color and squish the slime!</p>
      <div className="flex gap-2 flex-wrap justify-center">
        {slimeColors.map(c => (
          <button key={c.value} onClick={() => setColor(c.value)}
            className="w-8 h-8 rounded-full border-4 transition-transform hover:scale-110"
            style={{ background: c.value, borderColor: c.value === color ? "white" : c.value }}
            title={c.name}
          />
        ))}
      </div>
      <motion.div
        animate={{ scaleX: stretching ? 1.3 : 1, scaleY: stretching ? 0.7 : 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        onClick={() => { setStretching(true); setTimeout(() => setStretching(false), 400); }}
        className="cursor-pointer select-none"
        style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.3))" }}
      >
        <svg width="200" height="140" viewBox="0 0 200 140">
          <ellipse cx="100" cy="80" rx="90" ry="55" fill={color} opacity="0.9" />
          <ellipse cx="100" cy="75" rx="70" ry="35" fill={color} opacity="0.5" />
          <ellipse cx="40" cy="125" rx="12" ry="18" fill={color} opacity="0.8" />
          <ellipse cx="160" cy="120" rx="10" ry="15" fill={color} opacity="0.8" />
          <ellipse cx="100" cy="130" rx="15" ry="10" fill={color} opacity="0.7" />
          <ellipse cx="75" cy="60" rx="25" ry="14" fill="white" opacity="0.25" />
        </svg>
      </motion.div>
      <p className="text-gray-500 text-sm">{stretching ? "SQUISH! 🫧" : "tap to squish!"}</p>
    </div>
  );
}

function MiniGame({ id }: { id: string }) {
  switch (id) {
    case "loom": return <LoomGame />;
    case "stew": return <StewGame />;
    case "turtle": return <TurtleGame />;
    case "butterfly": return <ButterflyGame />;
    case "firefly": return <FireflyGame />;
    case "rolly": return <RollyGame />;
    case "slime": return <SlimeGame />;
    default: return null;
  }
}

export default function HobbyWorkshop() {
  const [activeStation, setActiveStation] = useState<string | null>(null);

  const STATIONS = [
    { id: "loom", name: "Rainbow Loom", color: "#ef4444" },
    { id: "stew", name: "Eagle Stew", color: "#78350f" },
    { id: "turtle", name: "Turtle Sandbox", color: "#84cc16" },
    { id: "butterfly", name: "Butterfly Catching", color: "#60a5fa" },
    { id: "firefly", name: "Lightning Bugs", color: "#1e1b4b" },
    { id: "rolly", name: "Rolly Pollies", color: "#64748b" },
    { id: "slime", name: "Slime Making", color: "#22c55e" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(180deg, #fbbf24 0%, #d97706 100%)" }}>
      {/* Ceiling / Sky area */}
      <div className="absolute top-0 left-0 right-0 h-[35%]" style={{ background: "linear-gradient(180deg, #fcd34d 0%, #fbbf24 100%)" }}>
        {/* String lights / Crafty vibes */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-yellow-600/30" />
        {[...Array(12)].map((_, i) => (
           <div key={i} className="absolute top-8 w-4 h-6 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2Y1OThmYSI+PHBhdGggZD0iTTEyIDBMOCAzbDQgNWgtNWw0IDVoLTZsNiA1aC00bDggNCA4LTRoLTRsNi01aC02bDQtNWgtNWw0LTV6Ii8+PC9zdmc+')] bg-no-repeat bg-contain opacity-50" style={{ left: `${8 + i * 8}%` }} />
        ))}
        {/* Ambient room glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-full bg-white/20 blur-[50px] rounded-full" />
        
        {/* Butterfly net hanging on back wall */}
        <div className="absolute top-[20%] right-[20%] w-16 h-32 flex flex-col items-center rotate-12 cursor-pointer group hover:scale-105 transition-transform" onClick={() => setActiveStation("butterfly")}>
           <div className="w-16 h-16 rounded-full border-4 border-gray-400 bg-white/30 relative">
             <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 5px)" }} />
             <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent 0, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 5px)" }} />
           </div>
           <div className="w-2 h-16 bg-amber-800 rounded-full" />
           <span className="absolute -bottom-6 bg-white/80 px-2 py-0.5 rounded text-xs font-bold text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">Butterfly Catching</span>
        </div>
      </div>

      {/* Back Wall */}
      <div className="absolute top-[35%] bottom-[22%] left-0 right-0" style={{ background: "#d97706" }}>
        {/* Striped wallpaper effect */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent 0px, transparent 40px, #b45309 40px, #b45309 80px)" }} />
      </div>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%]" style={{ background: "linear-gradient(180deg, #5c3a1e 0%, #3d2410 100%)", borderTop: "3px solid #7a4a2a" }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute bottom-0 h-full" style={{ left: `${i * 12.5}%`, width: "12.5%", borderRight: "1px solid rgba(0,0,0,0.3)" }} />
        ))}
      </div>

      {/* Craft Table (Large table stretching across) */}
      <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[80%] h-48 flex flex-col justify-end">
        {/* Table legs */}
        <div className="absolute -bottom-8 left-10 w-8 h-12 bg-[#78350f] rounded-b-sm border-r-4 border-[#451a03]" />
        <div className="absolute -bottom-8 right-10 w-8 h-12 bg-[#78350f] rounded-b-sm border-r-4 border-[#451a03]" />
        
        {/* Table Top */}
        <div className="w-full h-16 bg-[#fef3c7] rounded-t-xl border-b-8 border-[#d97706] shadow-xl relative flex items-end justify-around px-8 z-20">
          
          {/* Station 1: Rainbow Loom */}
          <div className="relative cursor-pointer group w-24 h-12 hover:scale-110 transition-transform flex justify-center items-end" onClick={() => setActiveStation("loom")}>
            <div className="w-20 h-6 bg-blue-200 border-2 border-blue-400 rounded-sm flex flex-col justify-evenly p-0.5">
               <div className="w-full flex justify-between px-1"><div className="w-1.5 h-1.5 bg-red-400 rounded-full" /><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" /><div className="w-1.5 h-1.5 bg-green-400 rounded-full" /></div>
               <div className="w-full flex justify-between px-1"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full" /><div className="w-1.5 h-1.5 bg-pink-400 rounded-full" /><div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /></div>
            </div>
            <span className="absolute -top-8 bg-white/90 px-2 py-1 rounded text-xs font-bold text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">Rainbow Loom</span>
          </div>

          {/* Station 2: Eagle Stew */}
          <div className="relative cursor-pointer group w-24 h-20 hover:scale-110 transition-transform flex justify-center items-end -mb-2" onClick={() => setActiveStation("stew")}>
             <div className="w-16 h-12 bg-gray-800 rounded-b-[50%] border-4 border-gray-700 flex justify-center items-end pb-1 shadow-lg relative">
                <div className="w-full h-2 bg-green-700/60 absolute top-2 rounded-[50%]" />
             </div>
             <div className="absolute -left-2 bottom-0 w-2 h-10 bg-amber-800 rounded-full rotate-45 z-[-1]" />
             <span className="absolute -top-8 bg-white/90 px-2 py-1 rounded text-xs font-bold text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">Eagle Stew</span>
          </div>

          {/* Station 3: Turtle Sandbox */}
          <div className="relative cursor-pointer group w-24 h-16 hover:scale-110 transition-transform flex justify-center items-end" onClick={() => setActiveStation("turtle")}>
            <div className="w-24 h-8 bg-green-600 rounded border-2 border-green-800 shadow-md relative overflow-hidden">
               <div className="absolute inset-1 bg-yellow-200 rounded-sm">
                 <div className="w-4 h-4 bg-green-500 rounded-full border border-green-700 absolute top-1 left-2" />
               </div>
            </div>
            <span className="absolute -top-8 bg-white/90 px-2 py-1 rounded text-xs font-bold text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">Turtle Sandbox</span>
          </div>

          {/* Station 5: Lightning Bugs */}
          <div className="relative cursor-pointer group w-20 h-20 hover:scale-110 transition-transform flex justify-center items-end" onClick={() => setActiveStation("firefly")}>
             <div className="w-12 h-16 bg-white/40 border-2 border-white/60 rounded-b-xl rounded-t-sm shadow-inner relative flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 w-full h-3 bg-gray-400 rounded-t-sm" />
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-3 h-3 bg-yellow-300 rounded-full shadow-[0_0_8px_#fde047]" />
             </div>
             <span className="absolute -top-8 bg-white/90 px-2 py-1 rounded text-xs font-bold text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">Lightning Bugs</span>
          </div>

          {/* Station 6: Rolly Pollies */}
          <div className="relative cursor-pointer group w-20 h-12 hover:scale-110 transition-transform flex justify-center items-end" onClick={() => setActiveStation("rolly")}>
             <div className="w-16 h-8 bg-white rounded border-2 border-gray-300 shadow-sm flex items-end justify-evenly pb-1">
               <div className="w-4 h-3 bg-gray-600 rounded-t-[50%] border-t border-gray-800" />
               <div className="w-3 h-3 bg-gray-600 rounded-full border border-gray-800" />
             </div>
             <span className="absolute -top-8 bg-white/90 px-2 py-1 rounded text-xs font-bold text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">Rolly Pollies</span>
          </div>

          {/* Station 7: Slime Making */}
          <div className="relative cursor-pointer group w-24 h-16 hover:scale-110 transition-transform flex justify-center items-end" onClick={() => setActiveStation("slime")}>
             <div className="w-16 h-10 bg-white/50 border-2 border-white/80 rounded-b-[50%] relative flex justify-center items-end overflow-hidden shadow-sm">
                <div className="w-[120%] h-8 bg-green-500 rounded-b-[50%] -mb-2" />
             </div>
             <div className="absolute top-4 -right-2 w-4 h-6 bg-green-500 rounded-full rotate-12 blur-[1px]" />
             <span className="absolute -top-8 bg-white/90 px-2 py-1 rounded text-xs font-bold text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">Slime Making</span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeStation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveStation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-6 border-4 border-amber-400 relative max-w-lg w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setActiveStation(null)} className="absolute -top-4 -right-4 w-10 h-10 bg-amber-500 text-white rounded-full font-bold shadow-lg border-2 border-white hover:bg-amber-600 transition-colors">X</button>
              <h3 className="font-display text-2xl text-amber-900 mb-6">{STATIONS.find(s => s.id === activeStation)?.name}</h3>
              <MiniGame id={activeStation} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
