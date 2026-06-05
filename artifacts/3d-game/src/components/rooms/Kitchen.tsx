import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Kitchen() {
  const [activeView, setActiveView] = useState<"room" | "fridge" | "pantry">("room");

  const sunRays = useMemo(() => Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    rotate: -45 + i * 15,
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(180deg, #ccfbf1 0%, #6ee7b7 100%)" }}>
      {/* Ceiling / Sky area */}
      <div className="absolute top-0 left-0 right-0 h-[35%]" style={{ background: "linear-gradient(180deg, #f0fdfa 0%, #ccfbf1 100%)" }}>
        {/* Overhead light glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px]" style={{ background: "radial-gradient(ellipse at top, rgba(253,224,71,0.4) 0%, transparent 60%)" }} />
      </div>

      {/* Back Wall */}
      <div className="absolute top-[35%] bottom-[22%] left-0 right-0" style={{ background: "#14b8a6" }}>
        {/* Tile Backsplash */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(to right, #ffffff 2px, transparent 2px), linear-gradient(to bottom, #ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
        
        {/* Window */}
        <div className="absolute top-10 right-20 w-40 h-48 bg-sky-200 border-8 border-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] rounded-sm overflow-hidden">
          {/* Sun rays */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-300 rounded-full blur-md" />
          {sunRays.map(ray => (
            <div key={ray.id} className="absolute top-0 right-0 w-48 h-8 bg-yellow-100/40 origin-right blur-sm" style={{ transform: `rotate(${ray.rotate}deg)` }} />
          ))}
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-white" />
          <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-white" />
        </div>
      </div>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%]" style={{ background: "linear-gradient(180deg, #5c3a1e 0%, #3d2410 100%)", borderTop: "3px solid #7a4a2a" }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute bottom-0 h-full" style={{ left: `${i * 12.5}%`, width: "12.5%", borderRight: "1px solid rgba(0,0,0,0.3)" }} />
        ))}
      </div>

      {/* Refrigerator (Left side) */}
      <div className="absolute bottom-[22%] left-[10%] w-48 h-80 z-20 flex flex-col items-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          onClick={() => setActiveView("fridge")}
          className="w-full h-full bg-[#f3f4f6] rounded-t-xl border-4 border-gray-300 shadow-[20px_10px_30px_rgba(0,0,0,0.4)] flex flex-col relative cursor-pointer group"
        >
          {/* Freezer */}
          <div className="h-[30%] border-b-4 border-gray-300 rounded-t-xl relative bg-[#e5e7eb]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-12 bg-gray-400 rounded-full shadow-inner" />
          </div>
          {/* Main Fridge */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-6 w-2 h-24 bg-gray-400 rounded-full shadow-inner" />
            {/* Magnets */}
            <div className="absolute top-8 right-6 w-6 h-6 bg-yellow-400 rounded-full shadow flex items-center justify-center text-[10px] font-bold">☺</div>
            <div className="absolute top-16 right-10 w-5 h-8 bg-blue-400 rotate-12 shadow rounded-sm" />
            <div className="absolute top-24 right-6 w-8 h-6 bg-red-400 shadow rounded-sm" />
          </div>
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors rounded-t-xl flex items-center justify-center pointer-events-none">
            <span className="bg-teal-800/90 text-white font-display px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 shadow-lg">Open Fridge</span>
          </div>
        </motion.div>
      </div>

      {/* Kitchen Island (Center) */}
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[350px] h-32 z-30 flex flex-col justify-end">
        {/* Countertop */}
        <div className="w-full h-8 bg-gray-100 rounded-sm border-b-4 border-gray-300 shadow-md relative z-10">
           <div className="absolute top-0 right-8 w-12 h-6 bg-white border border-gray-300 shadow-sm flex items-center justify-center rounded"><div className="w-4 h-4 bg-amber-200 rounded-full" /></div>
           <div className="absolute -top-4 left-8 w-8 h-12 bg-green-700 rounded-t-md rounded-b-full shadow border border-green-800"><div className="w-2 h-4 bg-green-500 mx-auto rounded-t-full" /></div>
        </div>
        {/* Base */}
        <div className="w-[330px] h-24 bg-teal-800 mx-auto rounded-b-sm border-x-4 border-teal-900 shadow-[0_20px_30px_rgba(0,0,0,0.5)] flex justify-evenly items-end pb-0">
          <div className="w-4 h-full bg-teal-900" />
          <div className="w-4 h-full bg-teal-900" />
        </div>
        {/* Stools */}
        <div className="absolute -bottom-6 left-[20%] w-16 h-20 bg-amber-700 rounded-t-full border-2 border-amber-900 z-0" />
        <div className="absolute -bottom-6 right-[20%] w-16 h-20 bg-amber-700 rounded-t-full border-2 border-amber-900 z-0" />
      </div>

      {/* Pantry (Right side) */}
      <div className="absolute bottom-[22%] right-[10%] w-48 h-80 z-20 flex flex-col items-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          onClick={() => setActiveView("pantry")}
          className="w-full h-full bg-[#8b5a2b] border-8 border-[#5c3a21] shadow-[-20px_10px_30px_rgba(0,0,0,0.4)] flex flex-col relative cursor-pointer group"
        >
          {/* Vertical line splitting doors */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#5c3a21] -translate-x-1/2" />
          {/* Handles */}
          <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-2 h-16 bg-yellow-600 rounded-full shadow" />
          <div className="absolute top-1/2 right-[40%] -translate-y-1/2 w-2 h-16 bg-yellow-600 rounded-full shadow" />
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
            <span className="bg-amber-900/90 text-white font-display px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 shadow-lg z-10">Open Pantry</span>
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {/* FRIDGE VIEW */}
        {activeView === "fridge" && (
          <motion.div key="fridge" initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-blue-50/95 backdrop-blur flex flex-col items-center pt-24 pb-8 z-50 overflow-y-auto"
          >
            <div className="absolute top-6 left-6 z-50">
              <button onClick={() => setActiveView("room")} className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full font-display text-blue-900 border border-blue-200 transition-all shadow-md">
                ← Close Fridge
              </button>
            </div>
            <h3 className="font-display text-4xl text-blue-900 mb-6 drop-shadow-sm">Inside the Fridge 🥶</h3>
            <div className="w-full max-w-3xl bg-[#dbeafe] border-8 border-[#93c5fd] rounded-2xl shadow-2xl flex flex-col gap-0 overflow-hidden">
              <div className="bg-[#bfdbfe] p-6 border-b-4 border-[#93c5fd]">
                <p className="font-display text-blue-700 text-sm mb-3 font-bold">Freezer</p>
                <div className="flex gap-6 items-end">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-28 h-20 bg-[#1d4ed8] rounded-lg border-2 border-blue-900 shadow-md relative p-2 grid grid-cols-2 gap-1">
                      <div className="bg-[#78350f] rounded-sm" />
                      <div className="bg-[#15803d] rounded-sm" />
                      <div className="bg-[#ca8a04] col-span-2 rounded-sm" />
                      <div className="absolute top-1 right-2 text-[8px] font-bold text-blue-200">KID</div>
                    </div>
                    <span className="text-xs font-bold text-blue-800">Kid Cuisine</span>
                  </div>
                </div>
              </div>
              <div className="p-6 border-b-4 border-[#93c5fd]">
                <p className="font-display text-blue-700 text-sm mb-3 font-bold">Drinks</p>
                <div className="flex gap-8 items-end">
                  <div className="flex flex-col items-center gap-1">
                    <div className="relative w-16 h-20 bg-gradient-to-b from-red-500 to-red-600 rounded-xl border-2 border-red-700 shadow-md overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-4 bg-red-800 rounded-t-xl" />
                      <div className="absolute -top-4 left-1/2 w-1 h-5 bg-gray-400 rotate-12" />
                      <div className="absolute inset-3 top-5 flex flex-col items-center justify-center gap-0.5">
                        <div className="text-[7px] font-bold text-white drop-shadow">BUG</div>
                        <div className="text-[7px] font-bold text-white drop-shadow">JUICE</div>
                        <div className="w-6 h-4 bg-red-300 rounded-full mt-0.5 border border-red-400" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-3 bg-red-800 rounded-b-xl" />
                    </div>
                    <span className="text-xs font-bold text-blue-800">Bug Juice</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-22 relative" style={{ height: 88 }}>
                      <div className="w-14 h-5 bg-[#1d4ed8] rounded-t-full" />
                      <div className="w-10 h-16 bg-[#2563eb] border-2 border-blue-700 shadow-md mx-auto flex flex-col items-center pt-1 gap-1">
                        <div className="w-8 h-1 bg-white/40 rounded" />
                        <div className="w-8 h-1 bg-white/40 rounded" />
                        <div className="text-[7px] font-bold text-white mt-1">HUGS</div>
                        <div className="w-5 h-5 bg-blue-300 rounded-full border border-blue-500" />
                      </div>
                      <div className="w-10 h-2 bg-[#1d4ed8] rounded-b mx-auto" />
                    </div>
                    <span className="text-xs font-bold text-blue-800">Hugs</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-28 relative">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-4 bg-green-600 rounded-t-sm" />
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-9 h-4 bg-green-500 rounded-sm" />
                      <div className="w-12 h-24 bg-[#f0fdf4] border-2 border-green-200 rounded-b-2xl rounded-t shadow-md flex flex-col items-center pt-3 gap-1 overflow-hidden">
                        <div className="w-8 h-1 bg-green-300 rounded" />
                        <div className="text-[7px] text-green-700 font-bold text-center">WHITE GRAPE</div>
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-green-100/80" />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-800">White Grape Juice</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="font-display text-blue-700 text-sm mb-3 font-bold">Food</p>
                <div className="flex gap-6 items-end flex-wrap">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-20 h-24 bg-pink-50/70 border-2 border-pink-200 rounded-b-2xl rounded-t-lg shadow-md relative overflow-hidden">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-pink-400 rounded-t-lg" />
                      <div className="absolute inset-0 flex flex-wrap content-end p-2 gap-1">
                        {[0,1,2,3].map(i => <div key={i} className="w-6 h-8 bg-white rounded-full border border-gray-200 shadow-inner" />)}
                      </div>
                      <div className="absolute inset-0 bg-pink-100/20" />
                    </div>
                    <span className="text-xs font-bold text-blue-800">Pickled Eggs</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-20 h-24 bg-purple-50/70 border-2 border-purple-300 rounded-b-2xl rounded-t-lg shadow-md relative overflow-hidden">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-purple-500 rounded-t-lg" />
                      <div className="absolute bottom-2 left-0 right-0 flex flex-wrap content-end px-2 gap-1 pb-1">
                        {[0,1,2,3].map(i => <div key={i} className="w-6 h-6 bg-[#7e22ce] rounded-full opacity-80" />)}
                      </div>
                      <div className="absolute inset-0 bg-purple-200/30" />
                    </div>
                    <span className="text-xs font-bold text-blue-800">Pickled Beets</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="relative w-24 h-16">
                      <div className="w-24 h-10 bg-white border-2 border-gray-200 rounded-b-[50%] rounded-t-sm shadow-md absolute bottom-0" />
                      <div className="absolute top-1 left-3 right-3 flex gap-1 flex-wrap">
                        {[0,1,2,3,4].map(i => (
                          <div key={i} className="w-4 h-4 relative">
                            <div className="w-4 h-3 bg-green-500 rounded-t-full" />
                            <div className="w-1 h-2 bg-green-700 mx-auto" />
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-2 left-4 right-4 h-2 bg-yellow-300/70 rounded-full" />
                    </div>
                    <span className="text-xs font-bold text-blue-800">Broccoli Cheese Rice</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="relative w-24 h-16">
                      <div className="w-24 h-10 bg-white border-2 border-gray-300 rounded-b-[50%] rounded-t-sm shadow-md absolute bottom-0 overflow-hidden">
                        <div className="absolute inset-0 flex flex-wrap content-center px-2 gap-0.5">
                          {["bg-yellow-400","bg-orange-400","bg-green-500","bg-red-400","bg-yellow-300"].map((c,i) => (
                            <div key={i} className={`w-3 h-1 ${c} rounded-full opacity-80`} />
                          ))}
                          {["bg-yellow-400","bg-orange-400","bg-green-500"].map((c,i) => (
                            <div key={i} className={`w-2 h-2 ${c} rounded opacity-80`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-800">Ranch Pasta Salad</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PANTRY VIEW */}
        {activeView === "pantry" && (
          <motion.div key="pantry" initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-amber-50/95 backdrop-blur flex flex-col items-center pt-24 pb-8 z-50 overflow-y-auto"
          >
            <div className="absolute top-6 left-6 z-50">
              <button onClick={() => setActiveView("room")} className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full font-display text-amber-900 border border-amber-200 transition-all shadow-md">
                ← Close Pantry
              </button>
            </div>
            <h3 className="font-display text-4xl text-amber-900 mb-6 drop-shadow-sm">Pantry Shelves 🍪</h3>
            <div className="w-full max-w-3xl bg-[#8b5a2b] border-8 border-[#5c3a21] rounded-2xl shadow-2xl flex flex-col p-4 gap-4">
              <div className="bg-[#a16630]/50 rounded-xl p-5 border-b-8 border-[#4a332a]">
                <div className="flex gap-8 items-end flex-wrap">
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex gap-1 flex-wrap w-24 justify-center">
                      {[0,1,2,3,4,5].map(i => (
                        <div key={i} className="w-7 h-7 bg-yellow-300 shadow-md"
                          style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', transform: `rotate(${i*20}deg)` }}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-amber-100">Banana Star Puffs</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="relative w-24 h-16 bg-red-500 rounded-lg border-b-4 border-red-700 shadow-md flex items-center justify-center">
                      {[0,1,2].map(i => (
                        <div key={i} className={`absolute w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center`}
                          style={{ left: `${8+i*22}%`, top: "50%", transform: "translateY(-50%)" }}
                        >
                          <div className="relative w-8 h-8">
                            <div className="absolute top-1.5 left-1.5 w-1 h-1 bg-yellow-600 rounded-full" />
                            <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-yellow-600 rounded-full" />
                            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-2 border-b-2 border-yellow-600 rounded-b-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-amber-100">Smiley Fries</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex gap-1.5 transform rotate-12">
                      {[0,1,2,3].map(i => (
                        <div key={i} className="w-4 h-16 bg-gradient-to-b from-red-500 to-red-700 rounded-full shadow-md border border-red-800" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-amber-100">Nacho Dinamita</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#a16630]/50 rounded-xl p-5">
                <div className="flex gap-8 items-end flex-wrap">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-20 h-28 bg-orange-500 rounded border-2 border-orange-600 shadow-md relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-8 bg-orange-600" />
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 text-center text-[8px] font-bold text-white">HAMBURGER HELPER</div>
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <div className="relative w-10 h-10">
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-7 bg-orange-400 rounded-t-lg" />
                          {[0,1,2,3].map(i => <div key={i} className="absolute w-2 h-4 bg-orange-400 rounded-t-full" style={{ left: `${i*20+5}%`, top: 0 }} />)}
                          <div className="absolute -top-1 w-5 h-2 bg-orange-400 rounded-full left-1/2 -translate-x-1/2" />
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-100">Hamburger Helper</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex gap-2 items-end">
                      <div className="flex flex-wrap gap-0.5 w-20">
                        {[0,1,2,3,4,5].map(i => (
                          <div key={i} className="rounded-lg shadow border border-[#c2853a]"
                            style={{ width: i%2===0?28:24, height: 18, background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderRadius: '40% 50% 45% 40%' }}
                          />
                        ))}
                      </div>
                      <div className="w-10 h-16 relative">
                        <div className="absolute bottom-0 w-10 h-12 bg-yellow-400 rounded-b-2xl border-2 border-yellow-500 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/50 to-transparent" />
                        </div>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-3 bg-yellow-300 rounded-t-sm border border-yellow-500" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-3 bg-yellow-600 rounded-t-sm" />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-100">Nuggets + Honey</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="relative w-24 h-32 bg-white/25 border-2 border-white/40 rounded-lg shadow-md overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-5 bg-red-500 rounded-t-lg" />
                      <div className="absolute inset-0 top-6 flex flex-wrap content-end p-2 gap-1 pb-2">
                        {Array.from({length:15}).map((_,i) => (
                          <div key={i} className={`w-4 h-5 rounded-full opacity-85 ${i%3===0?"bg-green-500":i%3===1?"bg-yellow-400":"bg-orange-400"}`} />
                        ))}
                      </div>
                      <div className="absolute top-6 right-2 w-1 h-18 bg-gray-300 rounded origin-bottom rotate-[-20deg]" style={{ height: 72 }} />
                      <div className="absolute top-6 right-4 w-1 h-18 bg-gray-300 rounded origin-bottom rotate-[20deg]" style={{ height: 72 }} />
                    </div>
                    <span className="text-xs font-bold text-amber-100">Gummy Bag + Tweezers</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
