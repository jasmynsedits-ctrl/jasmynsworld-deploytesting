import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BedroomScene() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(180deg, #1a0a2e 0%, #2d1052 40%, #4a1a6e 100%)" }}>
      {/* Stars */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: `${Math.random() * 40}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      {/* Window */}
      <div className="absolute top-12 right-20 w-28 h-36 rounded-t-full" style={{ background: "linear-gradient(180deg, #1a0a2e 0%, #4a1a6e 100%)", border: "4px solid #8b6a9e", boxShadow: "0 0 30px rgba(180,120,255,0.3) inset" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full" style={{ background: "radial-gradient(circle, #fff5cc 0%, #ffe066 40%, #ffaa00 100%)", boxShadow: "0 0 30px 10px rgba(255,220,80,0.6)" }} />
        </div>
        {/* Window panes */}
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
      <div className="absolute bottom-0 left-0 right-0 h-1/4" style={{ background: "linear-gradient(180deg, #5c3a1e 0%, #3d2410 100%)", borderTop: "3px solid #7a4a2a" }}>
        {/* Floor boards */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute bottom-0 h-full" style={{ left: `${i * 12.5}%`, width: "12.5%", borderRight: "1px solid rgba(0,0,0,0.3)" }} />
        ))}
      </div>

      {/* Bed */}
      <div className="absolute" style={{ bottom: "22%", left: "5%", width: "38%" }}>
        {/* Headboard */}
        <div className="w-full rounded-t-2xl h-16" style={{ background: "linear-gradient(180deg, #6b3fa0 0%, #4a2870 100%)", border: "2px solid #8b5abf" }}>
          <div className="flex justify-center gap-3 pt-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-8 rounded-full" style={{ background: "linear-gradient(180deg, #9b6fd0, #6b3fa0)" }} />
            ))}
          </div>
        </div>
        {/* Mattress */}
        <div className="w-full h-12" style={{ background: "linear-gradient(180deg, #c084e8 0%, #9b6fd0 100%)", borderLeft: "2px solid #b070d0", borderRight: "2px solid #b070d0" }}>
          {/* Blanket pattern */}
          <div className="h-full flex items-center justify-center gap-2 px-3">
            {["🌟", "💜", "🌸", "⭐", "💫"].map((e, i) => (
              <span key={i} className="text-lg opacity-60">{e}</span>
            ))}
          </div>
        </div>
        {/* Pillow */}
        <div className="absolute top-16 left-2 w-16 h-8 rounded-lg" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f0d0ff 100%)", border: "2px solid #e0b0ff" }} />
        {/* Bed feet */}
        <div className="flex justify-between px-2">
          {[0, 1].map((i) => (
            <div key={i} className="w-4 h-4" style={{ background: "#3d2870" }} />
          ))}
        </div>
      </div>

      {/* Little girl character sitting on bed */}
      <div className="absolute" style={{ bottom: "34%", left: "18%", width: 60 }}>
        {/* Head */}
        <div className="relative mx-auto w-10 h-10 rounded-full mb-1" style={{ background: "#f5c5a0", border: "2px solid #d4956a" }}>
          {/* Hair */}
          <div className="absolute -top-2 -left-1 -right-1 h-6 rounded-t-full" style={{ background: "#3d2010" }} />
          <div className="absolute -top-1 -left-2 w-4 h-8 rounded-l-full" style={{ background: "#3d2010" }} />
          <div className="absolute -top-1 -right-2 w-4 h-8 rounded-r-full" style={{ background: "#3d2010" }} />
          {/* Eyes */}
          <div className="absolute top-4 left-2 w-2 h-2 rounded-full bg-amber-900" />
          <div className="absolute top-4 right-2 w-2 h-2 rounded-full bg-amber-900" />
          {/* Smile */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 rounded-b-full border-b-2 border-amber-700" />
        </div>
        {/* Body */}
        <div className="mx-auto w-10 h-10 rounded-lg" style={{ background: "#e040fb" }}>
          <div className="w-full h-4 rounded-t-lg" style={{ background: "#ce35e0" }} />
        </div>
        {/* Legs */}
        <div className="flex justify-center gap-1 mx-auto">
          <div className="w-4 h-6 rounded-b-lg" style={{ background: "#f5c5a0" }} />
          <div className="w-4 h-6 rounded-b-lg" style={{ background: "#f5c5a0" }} />
        </div>
      </div>

      {/* Desk & Computer (2008 style) */}
      <div className="absolute" style={{ bottom: "22%", right: "8%", width: "28%" }}>
        {/* Monitor */}
        <div className="mx-auto w-24 h-20 rounded-lg" style={{ background: "#b0b8c8", border: "3px solid #8090a8" }}>
          <div className="m-1 h-14 rounded" style={{ background: "linear-gradient(135deg, #c8e4ff 0%, #88ccff 100%)", border: "2px inset #6699cc" }}>
            <div className="p-1 text-xs text-center" style={{ fontFamily: "monospace", color: "#003366", fontSize: 8 }}>Windows XP</div>
            {/* XP logo */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-0.5 w-8 h-8">
                <div className="rounded-tl" style={{ background: "#e8142b" }} />
                <div className="rounded-tr" style={{ background: "#00b100" }} />
                <div className="rounded-bl" style={{ background: "#0064cb" }} />
                <div className="rounded-br" style={{ background: "#f9ba00" }} />
              </div>
            </div>
          </div>
          {/* Taskbar */}
          <div className="mx-1 h-3 rounded" style={{ background: "#1f3b87" }} />
        </div>
        {/* Monitor stand */}
        <div className="mx-auto w-4 h-4" style={{ background: "#8090a8" }} />
        {/* Desk */}
        <div className="w-full h-4 rounded" style={{ background: "#7a5c3a", borderTop: "2px solid #9a7a5a" }}>
          {/* Keyboard */}
          <div className="mx-auto mt-1 w-20 h-2 rounded" style={{ background: "#c8cdd6", border: "1px solid #9ca3af" }} />
        </div>
      </div>

      {/* Dresser */}
      <div className="absolute" style={{ bottom: "22%", left: "47%", width: "14%", height: "35%" }}>
        <div className="w-full h-full rounded-t-sm" style={{ background: "linear-gradient(180deg, #8b6a4a 0%, #6b4a2a 100%)", border: "2px solid #9a7a5a" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="mx-1 mt-2 rounded" style={{ background: "rgba(255,255,255,0.1)", height: "25%", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div className="w-3 h-1.5 rounded-full mx-auto mt-1" style={{ background: "#c8a878", border: "1px solid #a87840" }} />
            </div>
          ))}
        </div>
        {/* Items on top */}
        <div className="absolute -top-6 left-1 flex gap-1">
          <div className="w-4 h-6 rounded-sm" style={{ background: "#e040fb" }} />
          <div className="w-3 h-5 rounded-sm" style={{ background: "#ff8f00" }} />
        </div>
      </div>

      {/* Bookshelf */}
      <div className="absolute" style={{ bottom: "22%", left: "63%", width: "12%", height: "40%" }}>
        <div className="w-full h-full" style={{ background: "#7a5c3a", border: "2px solid #9a7a5a" }}>
          {[["#e040fb", "#ab47bc", "#7e57c2", "#42a5f5"], ["#ef5350", "#ffa726", "#66bb6a", "#26c6da"]].map((row, ri) => (
            <div key={ri} className="flex mt-2 px-1 gap-0.5">
              {row.map((c, i) => (
                <div key={i} className="flex-1 h-8 rounded-sm" style={{ background: c }} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Posters on wall */}
      <div className="absolute" style={{ top: "12%", left: "5%", width: 70, height: 90 }}>
        <div className="w-full h-full rounded" style={{ background: "linear-gradient(135deg, #ff6fb7, #c026d3)", border: "3px solid white", boxShadow: "0 4px 15px rgba(0,0,0,0.4)" }}>
          <div className="p-1 text-center text-white text-xs font-bold" style={{ fontFamily: "cursive" }}>💜<br/>Hannah<br/>Montana</div>
        </div>
      </div>
      <div className="absolute" style={{ top: "12%", left: "16%", width: 70, height: 90 }}>
        <div className="w-full h-full rounded" style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", border: "3px solid white", boxShadow: "0 4px 15px rgba(0,0,0,0.4)" }}>
          <div className="p-1 text-center text-white text-xs font-bold" style={{ fontFamily: "cursive" }}>🎵<br/>iCarly</div>
        </div>
      </div>

      {/* Lamp glow */}
      <div className="absolute" style={{ bottom: "55%", right: "22%", width: 20, height: 20, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,220,80,0.9) 0%, transparent 70%)", boxShadow: "0 0 40px 20px rgba(255,200,50,0.25)" }} />

      {/* Night sky message text above */}
      <motion.div
        className="absolute text-center px-6"
        style={{ top: "8%", left: "50%", transform: "translateX(-50%)", width: "min(500px, 80%)" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p className="text-white/90 text-sm md:text-base font-display" style={{ textShadow: "0 0 20px rgba(180,120,255,0.8), 0 2px 4px rgba(0,0,0,0.5)" }}>
          ✨ If you're me, you know the password. No hints for hackers 🔒 ✨
        </p>
      </motion.div>

      {/* Fairy lights string */}
      <div className="absolute top-24 left-0 right-0 flex justify-around px-8" style={{ zIndex: 2 }}>
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-3 rounded-full"
            style={{ background: ["#ff6fb7", "#ffd700", "#c084fc", "#67e8f9", "#86efac"][i % 5], boxShadow: `0 0 6px 2px ${["#ff6fb7", "#ffd700", "#c084fc", "#67e8f9", "#86efac"][i % 5]}` }}
            animate={{ opacity: [1, 0.4, 1], scale: [1, 0.9, 1] }}
            transition={{ duration: 1.5 + i * 0.1, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      {/* Glitter particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{ left: `${20 + Math.random() * 60}%`, top: `${30 + Math.random() * 40}%`, background: ["#ffd700", "#ff6fb7", "#c084fc", "#ffffff"][i % 4] }}
          animate={{ y: [0, -20, 0], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}
    </div>
  );
}

function PasswordJournal({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [errorShake, setErrorShake] = useState(false);
  const [showError, setShowError] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Red98ivy") {
      setUnlocking(true);
      setTimeout(() => onUnlock(), 800);
    } else {
      setErrorShake(true);
      setShowError(true);
      setTimeout(() => {
        setErrorShake(false);
        setShowError(false);
      }, 1500);
      setPassword("");
    }
  };

  return (
    <motion.div
      animate={errorShake ? { x: [-12, 12, -12, 12, -8, 8, 0] } : {}}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Journal outer cover */}
      <div className="relative rounded-[2rem] p-1.5" style={{ background: "linear-gradient(135deg, #ff6fb7, #c026d3, #7c3aed, #c026d3, #ff6fb7)", backgroundSize: "200% 200%", boxShadow: "0 20px 60px rgba(192,38,211,0.5), 0 0 40px rgba(192,38,211,0.3), inset 0 0 20px rgba(255,255,255,0.1)" }}>
        {/* Holographic shimmer overlay */}
        <div className="absolute inset-0 rounded-[2rem] opacity-30" style={{ background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)", backgroundSize: "200% 200%" }} />

        {/* Journal inner */}
        <div className="relative bg-white/95 backdrop-blur rounded-[1.6rem] overflow-hidden" style={{ boxShadow: "inset 0 2px 10px rgba(0,0,0,0.1)" }}>
          {/* Top decorative strip */}
          <div className="h-6" style={{ background: "linear-gradient(90deg, #ff6fb7, #c026d3, #7c3aed, #38bdf8, #c026d3, #ff6fb7)" }} />

          {/* Padlock icon */}
          <div className="flex justify-center pt-4">
            <motion.div
              animate={unlocking ? { rotate: [0, 30, -10, 20, 0], scale: [1, 1.2, 1] } : { rotate: [0, -3, 3, 0] }}
              transition={unlocking ? { duration: 0.6 } : { duration: 3, repeat: Infinity }}
              className="text-5xl select-none"
            >
              {unlocking ? "🔓" : "🔐"}
            </motion.div>
          </div>

          {/* Title */}
          <div className="text-center px-6 pb-2">
            <h2 className="font-display text-2xl font-bold" style={{ background: "linear-gradient(135deg, #c026d3, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Password Journal
            </h2>
            <p className="text-xs text-purple-400 mt-0.5">✨ SUPER SECRET ✨</p>
          </div>

          {/* Stars decoration */}
          <div className="flex justify-center gap-1 mb-3">
            {["⭐", "💜", "🌟", "💜", "⭐"].map((s, i) => (
              <motion.span key={i} className="text-sm" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>{s}</motion.span>
            ))}
          </div>

          {/* Password input area */}
          <form onSubmit={handleSubmit} className="px-6 pb-6 flex flex-col gap-3">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-center text-lg py-3 px-4 rounded-xl font-display tracking-widest focus:outline-none transition-all"
                style={{ background: "linear-gradient(135deg, #fdf0ff, #f5e0ff)", border: "2px solid #d4a0f0", color: "#6b21a8", boxShadow: "inset 0 2px 8px rgba(180,100,255,0.1), 0 0 0 0 transparent" }}
                placeholder="• • • • • •"
                autoFocus
                disabled={unlocking}
              />
              {/* Key icon */}
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-300">🗝️</span>
            </div>

            <AnimatePresence>
              {showError && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-sm font-bold"
                  style={{ color: "#dc2626" }}
                >
                  That's not it 👀 Try again!
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={unlocking}
              className="py-3 rounded-xl font-display text-lg text-white font-semibold transition-all"
              style={{ background: unlocking ? "linear-gradient(135deg, #7c3aed, #4f46e5)" : "linear-gradient(135deg, #c026d3, #7c3aed)", boxShadow: "0 4px 20px rgba(192,38,211,0.4)", border: "none" }}
            >
              {unlocking ? "✨ Unlocking..." : "Unlock 🔒"}
            </motion.button>
          </form>

          {/* Bottom decorative strip */}
          <div className="h-4" style={{ background: "linear-gradient(90deg, #7c3aed, #c026d3, #ff6fb7, #c026d3, #7c3aed)" }} />
        </div>
      </div>

      {/* Sticker decorations on journal */}
      <div className="absolute -top-3 -right-3 text-2xl rotate-12 select-none">💖</div>
      <div className="absolute -bottom-2 -left-3 text-xl -rotate-12 select-none">🦋</div>
      <div className="absolute top-1/2 -right-5 text-xl rotate-45 select-none">⭐</div>
    </motion.div>
  );
}

export default function PasswordScreen({ onUnlock }: { onUnlock: () => void }) {
  const [showJournal, setShowJournal] = useState(false);

  return (
    <div className="w-full h-full relative" style={{ minHeight: "100vh" }}>
      {/* Bedroom scene */}
      <BedroomScene />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 10 }}>
        <AnimatePresence mode="wait">
          {!showJournal ? (
            <motion.div
              key="enter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
              style={{ marginTop: "20vh" }}
            >
              <motion.p
                className="text-white/80 text-sm md:text-base text-center px-8 max-w-xs"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{ fontFamily: "'Fredoka', sans-serif", textShadow: "0 0 15px rgba(180,100,255,0.6)" }}
              >
                🔒 Private — for my eyes only
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.07, boxShadow: "0 0 40px rgba(192,38,211,0.7)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowJournal(true)}
                className="relative px-8 py-4 rounded-full text-white text-lg font-display font-semibold"
                style={{ background: "linear-gradient(135deg, #c026d3, #7c3aed)", boxShadow: "0 8px 32px rgba(192,38,211,0.5), 0 0 0 2px rgba(255,255,255,0.2)", border: "none" }}
              >
                <span className="mr-2">📓</span>
                Open Password Journal
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15), transparent)" }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>

              <p className="text-white/40 text-xs text-center px-8" style={{ fontFamily: "'Nunito', sans-serif" }}>
                If you're me, you know the password ✨
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="journal"
              initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
              className="w-full max-w-xs mx-4"
            >
              <PasswordJournal onUnlock={onUnlock} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)", zIndex: 5 }} />
    </div>
  );
}
