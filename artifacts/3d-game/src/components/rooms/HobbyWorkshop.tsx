import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Station = { id: string; name: string; color: string };

const STATIONS: Station[] = [
  { id: "loom", name: "Rainbow Loom", color: "#ef4444" },
  { id: "stew", name: "Eagle Stew", color: "#78350f" },
  { id: "turtle", name: "Turtle Sandbox", color: "#84cc16" },
  { id: "butterfly", name: "Butterfly Catching", color: "#60a5fa" },
  { id: "firefly", name: "Lightning Bugs", color: "#1e1b4b" },
  { id: "rolly", name: "Rolly Pollies", color: "#64748b" },
  { id: "slime", name: "Slime Making", color: "#22c55e" },
];

// --- Mini-game sub-components ---

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
      {/* Cauldron */}
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
        {/* Cauldron rim */}
        <div className="absolute top-0 w-40 h-5 bg-gray-700 rounded-full border-2 border-gray-600" />
        {/* Legs */}
        <div className="absolute bottom-0 left-6 w-3 h-6 bg-gray-800 rounded-b-sm" />
        <div className="absolute bottom-0 right-6 w-3 h-6 bg-gray-800 rounded-b-sm" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-6 bg-gray-800 rounded-b-sm" />
        {/* Steam */}
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
        {/* Grass */}
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
        {/* Jar (grows as you catch) */}
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
        {/* Sand texture */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
        <p className="absolute top-2 left-2 text-xs text-yellow-700 font-bold">click then use arrows</p>
        {/* Turtle */}
        <motion.div animate={{ x: pos.x, y: pos.y }} transition={{ type: "spring", stiffness: 300 }} className="absolute w-12 h-12" style={{ rotate: dir }}>
          {/* Shell */}
          <div className="absolute top-1 left-1 w-10 h-10 bg-green-600 rounded-full border-2 border-green-800">
            <div className="absolute inset-1 grid grid-cols-2 gap-0.5">
              <div className="bg-green-500 rounded-tl" /><div className="bg-green-700 rounded-tr" />
              <div className="bg-green-700 rounded-bl" /><div className="bg-green-500 rounded-br" />
            </div>
          </div>
          {/* Head */}
          <div className="absolute -top-2 left-4 w-5 h-5 bg-green-500 rounded-full border border-green-700">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black rounded-full" />
          </div>
          {/* Legs */}
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
                    {/* Legs */}
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
          {/* Drips */}
          <ellipse cx="40" cy="125" rx="12" ry="18" fill={color} opacity="0.8" />
          <ellipse cx="160" cy="120" rx="10" ry="15" fill={color} opacity="0.8" />
          <ellipse cx="100" cy="130" rx="15" ry="10" fill={color} opacity="0.7" />
          {/* Glossy highlight */}
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

function StationIcon({ id }: { id: string }) {
  switch (id) {
    case "loom":
      return (
        <div className="relative w-20 h-16">
          {[0,1,2,3].map(i => <div key={i} className="absolute top-2 w-2 h-12 bg-gray-300 rounded-full border border-gray-400" style={{ left: `${i * 18 + 12}%` }} />)}
          {["#ef4444","#f97316","#eab308"].map((c,i) => (
            <div key={i} className="absolute h-1.5 rounded-full" style={{ background: c, top: `${25+i*14}px`, left: "12%", right: "12%", opacity: 0.8 }} />
          ))}
        </div>
      );
    case "stew":
      return (
        <div className="relative w-20 h-16">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-10 bg-gray-700 rounded-b-[50%] border-2 border-gray-800" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-18 h-3 bg-gray-600 rounded-full" />
          {[0,1,2].map(i => <div key={i} className="absolute bottom-2 w-1 h-3 bg-gray-800 rounded" style={{ left: `${20+i*28}%` }} />)}
          <div className="absolute top-0 left-[38%] w-1 h-4 bg-white/30 rounded blur-sm" />
        </div>
      );
    case "turtle":
      return (
        <div className="relative w-20 h-16">
          <div className="absolute inset-1 bg-yellow-100 rounded border-2 border-yellow-300" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-green-700 relative">
              <div className="absolute -top-2 left-3 w-5 h-4 bg-green-400 rounded-full" />
            </div>
          </div>
        </div>
      );
    case "butterfly":
      return (
        <div className="flex items-center justify-center w-20 h-16">
          <svg width="56" height="48" viewBox="0 0 56 48">
            <ellipse cx="14" cy="20" rx="14" ry="18" fill="#60a5fa" opacity="0.9" />
            <ellipse cx="42" cy="20" rx="14" ry="18" fill="#60a5fa" opacity="0.9" />
            <ellipse cx="14" cy="36" rx="9" ry="10" fill="#93c5fd" opacity="0.8" />
            <ellipse cx="42" cy="36" rx="9" ry="10" fill="#93c5fd" opacity="0.8" />
            <line x1="28" y1="8" x2="28" y2="44" stroke="#1f2937" strokeWidth="2" />
          </svg>
        </div>
      );
    case "firefly":
      return (
        <div className="w-20 h-16 bg-[#1e1b4b] rounded relative overflow-hidden flex items-center justify-center">
          {[{x:30,y:35},{x:55,y:25},{x:70,y:50},{x:20,y:60}].map((p,i) => (
            <motion.div key={i} animate={{ opacity: [0.3,1,0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: i*0.3 }}
              className="absolute w-3 h-3 bg-yellow-300 rounded-full shadow-[0_0_6px_2px_rgba(253,224,71,0.8)]"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            />
          ))}
        </div>
      );
    case "rolly":
      return (
        <div className="w-20 h-16 flex items-center justify-center gap-2">
          {[1,0.7,1].map((s,i) => (
            <div key={i} className="bg-gray-600 border-2 border-gray-800 rounded-full shadow" style={{ width: `${s*20}px`, height: `${s*12}px` }} />
          ))}
        </div>
      );
    case "slime":
      return (
        <div className="w-20 h-16 flex items-center justify-center">
          <svg width="60" height="44" viewBox="0 0 60 44">
            <ellipse cx="30" cy="28" rx="28" ry="14" fill="#22c55e" opacity="0.9" />
            <ellipse cx="30" cy="26" rx="20" ry="8" fill="#4ade80" opacity="0.6" />
            <ellipse cx="12" cy="38" rx="6" ry="8" fill="#22c55e" opacity="0.8" />
            <ellipse cx="50" cy="36" rx="5" ry="7" fill="#22c55e" opacity="0.8" />
          </svg>
        </div>
      );
    default: return <div className="w-12 h-12 bg-white/50 rounded" />;
  }
}

export default function HobbyWorkshop() {
  const [activeStation, setActiveStation] = useState<string | null>(null);

  return (
    <div className="w-full h-full bg-[#fde68a] relative overflow-hidden flex flex-col items-center p-6">
      {/* Wood wall */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(to right, #d97706, #d97706 42px, #b45309 42px, #b45309 44px)' }} />
      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%] bg-[#92400e] border-t-8 border-[#78350f] z-0" />

      <h2 className="font-display text-4xl text-[#78350f] z-10 mb-4 bg-white/40 px-6 py-2 rounded-full backdrop-blur-sm">Hobby Workshop</h2>

      {/* Table with stations */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center pb-20">
        <div className="relative w-full max-w-4xl">
          {/* Table surface */}
          <div className="w-full h-24 bg-[#fef3c7] border-8 border-[#d97706] rounded-xl shadow-2xl relative flex justify-around items-center px-6" style={{ zIndex: 20 }}>
            {STATIONS.map(station => (
              <motion.div key={station.id} whileHover={{ scale: 1.08, y: -6 }} whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStation(station.id)}
                className="cursor-pointer flex flex-col items-center gap-1 group"
              >
                <div className="rounded-xl border-4 border-white shadow-md overflow-hidden" style={{ background: station.color + "33" }}>
                  <StationIcon id={station.id} />
                </div>
                <span className="font-display text-[#92400e] text-[11px] bg-white/80 px-2 py-0.5 rounded-full group-hover:bg-white transition-colors">{station.name}</span>
              </motion.div>
            ))}
          </div>
          {/* Table legs */}
          <div className="absolute -bottom-20 left-12 w-5 h-20 bg-[#d97706] rounded-b-sm z-10" />
          <div className="absolute -bottom-20 right-12 w-5 h-20 bg-[#d97706] rounded-b-sm z-10" />
        </div>
      </div>

      {/* Station mini-game modal */}
      <AnimatePresence>
        {activeStation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActiveStation(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border-4 max-w-lg w-full relative"
              style={{ borderColor: STATIONS.find(s => s.id === activeStation)?.color }}
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setActiveStation(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-red-500 hover:bg-red-400 text-white rounded-full font-bold shadow"
              >✕</button>
              <h3 className="font-display text-2xl mb-6 text-center" style={{ color: STATIONS.find(s => s.id === activeStation)?.color }}>
                {STATIONS.find(s => s.id === activeStation)?.name}
              </h3>
              <MiniGame id={activeStation} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
