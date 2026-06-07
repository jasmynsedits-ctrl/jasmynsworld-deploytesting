import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Plane, Cylinder, Cone } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";

const TOYS = [
  { id: "bottle", name: "Magic Baby Bottle", desc: "The milk disappears when you tilt it. TECHNOLOGY." },
  { id: "skeebo", name: "Skeebo Beebo", desc: "Strongest memory is being at the car wash while holding it." },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "You could draw on it and wash it off. Revolutionary." },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: "She danced and talked back. Best friend material." },
  { id: "furby", name: "Furby (Orange)", desc: "Terrifying. Beloved. Could not be turned off." },
  { id: "journal", name: "Password Journal", desc: "Voice-activated diary. Nobody was getting in, even me." },
  { id: "playdoh", name: "Play-Doh Sets", desc: "The smell alone is a core memory." },
  { id: "easybake", name: "Easy Bake Oven", desc: "Tiny light-bulb cakes. Peak childhood engineering." },
  { id: "wagon", name: "Red Wagon", desc: "The original ride-or-die vehicle." },
  { id: "wand", name: "Alex's Magic Wand", desc: "Came with a tiny spellbook. I wanted it to be real so bad." },
  { id: "remote", name: "Sam's TV Remote", desc: "*Insert laugh track*." },
  { id: "shopkins", name: "Shopkins", desc: "Trading these at school...and getting them stolen. That part wasn't fun." },
];

function ToyGraphic({ id }: { id: string }) {
  switch (id) {
    case "bottle": return (
      <div className="relative w-14 h-28 flex flex-col items-center">
        <div className="w-8 h-5 bg-yellow-200 rounded-t-full border-2 border-yellow-300 relative z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full" />
        </div>
        <div className="w-12 h-4 bg-white/60 border-t-2 border-white rounded-sm -mt-1 z-10" />
        <div className="w-14 h-20 bg-white/40 border-2 border-white/70 rounded-b-2xl rounded-t-sm flex flex-col justify-end overflow-hidden">
          <div className="w-full bg-white/80 transition-all" style={{ height: "50%" }} />
        </div>
      </div>
    );
    case "skeebo": return (
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
        </div>
      </div>
    );
    case "doodle": return (
      <div className="relative w-20 h-20">
        <div className="w-20 h-20 bg-purple-400 rounded-full relative border-2 border-purple-600">
          <div className="absolute -top-3 left-2 w-6 h-6 bg-purple-400 rounded-full border-2 border-purple-600" />
          <div className="absolute -top-3 right-2 w-6 h-6 bg-purple-400 rounded-full border-2 border-purple-600" />
        </div>
      </div>
    );
    case "fijit": return (
      <div className="relative w-16 h-20 flex flex-col items-center">
        <div className="w-14 h-14 bg-purple-500 rounded-full border-2 border-purple-700 relative flex items-center justify-center">
          <div className="flex gap-2"><div className="w-3 h-3 bg-white rounded-full" /><div className="w-3 h-3 bg-white rounded-full" /></div>
        </div>
        <div className="w-10 h-6 bg-purple-600 rounded-b-xl border-2 border-purple-700" />
      </div>
    );
    case "furby": return (
      <div className="relative w-20 h-20">
        <div className="w-20 h-20 bg-orange-400 rounded-full border-2 border-orange-600 relative shadow-lg">
          <div className="absolute -top-4 left-1 w-8 h-10 bg-orange-300 rounded-full rotate-[-30deg]" />
          <div className="absolute top-5 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-black rounded-full" /></div>
          <div className="absolute top-5 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-black rounded-full" /></div>
        </div>
      </div>
    );
    default: return <div className="w-12 h-12 bg-pink-400 rounded-lg" />;
  }
}

function HighFidelityAssets({ onSelect }: { onSelect: (type: string) => void }) {
  // Exact 5 childhood colors: Pink, Cyan, Lime, Orange, White
  const lampColors = ["#ff00ff", "#00ffff", "#00ff00", "#ffa500", "#ffffff"];

  return (
    <group position={[0, -0.5, 0]}>
      {/* Cinematic Lighting Setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[8, 15, 6]} intensity={1.2} castShadow shadow-mapSize={[2048, 2048]} />
      <pointLight position={[-2, 4, 2]} intensity={0.5} color="#ffe8cc" />

      {/* Carpet Floor */}
      <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#4a3b2c" roughness={0.9} />
      </Plane>

      {/* Clean White Walls */}
      <Box args={[0.1, 5, 10]} position={[-5, 2.5, 0]} receiveShadow>
        <meshStandardMaterial color="#ffffff" roughness={0.8} />
      </Box>
      <Box args={[10, 5, 0.1]} position={[0, 2.5, -5]} receiveShadow>
        <meshStandardMaterial color="#fafafa" roughness={0.8} />
      </Box>

      {/* Window with Pink & Purple Curtains on Desk Wall */}
      <group position={[-2, 2.8, -4.9]}>
        <Box args={[2.5, 1.8, 0.05]} castShadow>
          <meshStandardMaterial color="#93c5fd" transparent opacity={0.4} roughness={0.1} />
        </Box>
        {/* Curtains flanking the sides */}
        <Box args={[0.4, 2.2, 0.15]} position={[-1.4, -0.1, 0.1]} castShadow>
          <meshStandardMaterial color="#e64c87" roughness={0.7} />
        </Box>
        <Box args={[0.4, 2.2, 0.15]} position={[1.4, -0.1, 0.1]} castShadow>
          <meshStandardMaterial color="#8c50a6" roughness={0.7} />
        </Box>
      </group>

      {/* ── CENTERED COZY BED ── */}
      <group position={[1.6, 0, -1.8]} onClick={(e) => { e.stopPropagation(); onSelect("bed"); }}>
        {/* Espresso Frame */}
        <Box args={[4.2, 0.6, 3]} position={[0, 0.3, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#241407" roughness={0.7} />
        </Box>
        <Box args={[0.15, 2.2, 3]} position={[-2.1, 1.1, 0]} castShadow>
          <meshStandardMaterial color="#1a0e05" roughness={0.7} />
        </Box>
        {/* Mattress Layer */}
        <Box args={[4, 0.5, 2.8]} position={[0.05, 0.85, 0]} castShadow>
          <meshStandardMaterial color="#f8fafc" roughness={0.9} />
        </Box>
        {/* Floral Comforter Base */}
        <Box args={[3, 0.52, 2.84]} position={[0.55, 0.87, 0]}>
          <meshStandardMaterial color="#ffffff" roughness={0.8} />
        </Box>
        {/* Intricate Floral Pattern Elements */}
        <Box args={[0.2, 0.54, 0.2]} position={[0.2, 0.87, 0.4]}><meshStandardMaterial color="#e63956" /></Box>
        <Box args={[0.15, 0.54, 0.15]} position={[0.8, 0.87, -0.5]}><meshStandardMaterial color="#2a9d8f" /></Box>
        <Box args={[0.25, 0.54, 0.25]} position={[1.4, 0.87, 0.2]}><meshStandardMaterial color="#457b9d" /></Box>
        {/* Pillows */}
        <Box args={[0.6, 0.2, 1]} position={[-1.4, 1.1, 0.6]} rotation={[0, 0, 0.1]} castShadow>
          <meshStandardMaterial color="#ffffff" roughness={0.9} />
        </Box>
        <Box args={[0.6, 0.2, 1]} position={[-1.4, 1.1, -0.6]} rotation={[0, 0, 0.1]} castShadow>
          <meshStandardMaterial color="#ffffff" roughness={0.9} />
        </Box>
      </group>

      {/* Black Nightstand with Potted Plant */}
      <group position={[-0.8, 0, -3.2]}>
        <Box args={[1.2, 1.1, 1.2]} position={[0, 0.55, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#18181b" roughness={0.8} />
        </Box>
        {/* Plant */}
        <Cylinder args={[0.15, 0.1, 0.25]} position={[0, 1.22, 0]} castShadow>
          <meshStandardMaterial color="#b45309" roughness={0.6} />
        </Cylinder>
        <Box args={[0.25, 0.3, 0.25]} position={[0, 1.45, 0]} rotation={[0.1, 0.3, -0.1]}>
          <meshStandardMaterial color="#16a34a" roughness={0.9} />
        </Box>
      </group>

      {/* Stacked Books and Magazines in Center Area */}
      <group position={[0.2, 0, -0.8]} rotation={[0, Math.PI / 5, 0]}>
        <Box args={[0.6, 0.08, 0.8]} position={[0, 0.04, 0]} castShadow><meshStandardMaterial color="#1d4ed8" roughness={0.5} /></Box>
        <Box args={[0.55, 0.06, 0.75]} position={[-0.02, 0.11, 0.02]} rotation={[0, 0.12, 0]} castShadow><meshStandardMaterial color="#be185d" roughness={0.5} /></Box>
        <Box args={[0.58, 0.05, 0.78]} position={[0.01, 0.16, -0.01]} rotation={[0, -0.15, 0]} castShadow><meshStandardMaterial color="#059669" roughness={0.5} /></Box>
      </group>

      {/* Black Bookshelf to the Right of Bed */}
      <group position={[3.6, 0, -3.2]}>
        <Box args={[0.9, 3.8, 2.2]} position={[0, 1.9, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#09090b" roughness={0.8} />
        </Box>
        {[0.8, 1.8, 2.8].map((h, i) => (
          <Box key={i} args={[0.86, 0.05, 2.16]} position={[0.02, h, 0]}><meshStandardMaterial color="#1c1c1e" /></Box>
        ))}
      </group>

      {/* ── CENTERED HOT PINK GLASS DESK STATION ── */}
      <group position={[-2, 0, -2]} rotation={[0, -Math.PI / 2, 0]}>
        
        {/* Hot Pink Glass Surface & Workstation Triggers */}
        <group onClick={(e) => { e.stopPropagation(); onSelect("computer"); }}>
          <Box args={[3.8, 0.08, 2.2]} position={[0, 1.5, 0]} castShadow receiveShadow>
            <meshStandardMaterial color="#ff2a6d" transparent opacity={0.7} roughness={0.1} metalness={0.2} />
          </Box>
          {/* Chrome Metal Border Trim */}
          <Box args={[3.84, 0.1, 0.06]} position={[0, 1.5, 1.11]}><meshStandardMaterial color="#cccccc" metalness={0.8} roughness={0.2} /></Box>
          
          {/* Pull-out Keyboard Shelf */}
          <Box args={[2.2, 0.05, 1.2]} position={[0, 1.34, 0.3]} castShadow>
            <meshStandardMaterial color="#ffffff" roughness={0.4} />
          </Box>
          <Box args={[1.7, 0.02, 0.5]} position={[0, 1.37, 0.4]}><meshStandardMaterial color="#e5e7eb" /></Box>

          {/* HP All-In-One Desktop Computer Frame */}
          <group position={[0, 1.54, -0.2]}>
            <Box args={[1.6, 1.1, 0.12]} position={[0, 0.7, 0]} castShadow>
              <meshStandardMaterial color="#1c1c1e" roughness={0.4} />
            </Box>
            {/* Glowing Blue Operating System Panel */}
            <Box args={[1.5, 0.8, 0.02]} position={[0, 0.8, 0.06]}>
              <meshStandardMaterial color="#2563eb" emissive="#1d4ed8" emissiveIntensity={0.5} />
            </Box>
            {/* Lower Bezel Grill */}
            <Box args={[1.6, 0.2, 0.14]} position={[0, 0.15, 0]}>
              <meshStandardMaterial color="#a1a1aa" metalness={0.4} roughness={0.3} />
            </Box>
            <Cylinder args={[0.05, 0.05, 0.4]} position={[0, 0, 0]}><meshStandardMaterial color="#cccccc" metalness={0.7} /></Cylinder>
          </group>

          {/* Neon Orange Rolling Cushion Swivel Chair */}
          <group position={[0, 0, 1]}>
            <Cylinder args={[0.42, 0.42, 0.16]} position={[0, 0.8, 0]} castShadow>
              <meshStandardMaterial color="#ff6b2b" roughness={0.6} />
            </Cylinder>
            <Cylinder args={[0.04, 0.04, 0.8]} position={[0, 0.4, 0]}><meshStandardMaterial color="#1c1c1e" /></Cylinder>
            <Cylinder args={[0.45, 0.45, 0.04]} position={[0, 0.02, 0]}><meshStandardMaterial color="#444446" roughness={0.5} /></Cylinder>
          </group>
        </group>

        {/* ── SEPARATE INTERACTIVE BUILT-IN TOY DRAWER UNIT ── */}
        <group position={[-1.2, 0, -0.3]} onClick={(e) => { e.stopPropagation(); onSelect("toybox"); }}>
          {/* Main White Cabinet Casing */}
          <Box args={[1, 1.1, 1.3]} position={[0, 0.55, 0]} castShadow receiveShadow>
            <meshStandardMaterial color="#ffffff" roughness={0.5} />
          </Box>
          {/* Hot Pink Sliding Facing Trims */}
          <Box args={[0.05, 0.3, 1]} position={[0.51, 0.65, 0]} castShadow>
            <meshStandardMaterial color="#ff2a6d" roughness={0.3} />
          </Box>
          <Box args={[0.05, 0.3, 1]} position={[0.51, 0.25, 0]} castShadow>
            <meshStandardMaterial color="#ff2a6d" roughness={0.3} />
          </Box>
        </group>

      </group>

      {/* ── TRUE 5-COLOR RADIAL MULTI-HEAD LAMP ASSEMBLY ── */}
      <group position={[-4, 0, 1.8]}>
        {/* Base Rim */}
        <Cylinder args={[0.4, 0.4, 0.06]} position={[0, 0.03, 0]} castShadow>
          <meshStandardMaterial color="#3a3a3c" metalness={0.5} />
        </Cylinder>
        {/* Tall Silver Stem */}
        <Cylinder args={[0.03, 0.03, 3.2]} position={[0, 1.6, 0]} castShadow>
          <meshStandardMaterial color="#cccccc" metalness={0.8} roughness={0.2} />
        </Cylinder>

        {/* Top Radial Head Loop Cluster */}
        <group position={[0, 3.2, 0]}>
          {lampColors.map((colorHex, i) => {
            // Perfect 72-degree separation logic from your loop script
            const angle = (i * 72 * Math.PI) / 180;
            const xPos = Math.sin(angle) * 0.45;
            const zPos = Math.cos(angle) * 0.45;

            return (
              <group key={i} position={[xPos, 0, zPos]} rotation={[0, -angle, 0.4]}>
                {/* Intricate detailed 3D Cone shade pointing outward */}
                <Cone args={[0.2, 0.4, 16]} castShadow>
                  <meshStandardMaterial color={colorHex} emissive={colorHex} emissiveIntensity={0.3} roughness={0.4} />
                </Cone>
              </group>
            );
          })}
        </group>
      </group>

    </group>
  );
}

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [toyboxOpen, setToyboxOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);
  const [roomRotation, setRoomRotation] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(7);
  
  const activeToyData = TOYS.find(t => t.id === activeToy);

  const handleInteractiveSelection = (type: string) => {
    if (type === "computer" && onEnterGameRoom) {
      onEnterGameRoom();
    } else if (type === "toybox") {
      setToyboxOpen(true);
      setActiveToy(null);
    }
  };

  return (
    <div className="w-full h-full bg-[#0c0912] text-white relative font-sans overflow-hidden select-none flex flex-col items-center justify-center">
      
      {/* Navigation Map Handle */}
      <div className="absolute top-4 left-4 z-50 flex items-center gap-3">
        <button 
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#1b1526]/95 border border-[#44325c] rounded-full text-xs font-bold tracking-wide hover:bg-[#281f38] transition-all shadow-xl active:scale-95"
        >
          ← Back to Map
        </button>
      </div>

      {/* Rotation and Depth Step Console Bar */}
      <div className="absolute top-4 right-4 z-50 bg-[#15111e]/90 p-2 rounded-xl border border-[#3b2b52] flex items-center gap-2 shadow-2xl backdrop-blur-md">
        <button 
          onClick={() => setRoomRotation(prev => prev + Math.PI / 2)} 
          className="p-2 bg-[#2a1d3d] hover:bg-[#3d2a59] active:scale-90 rounded-lg text-xs font-bold transition-all border border-[#503775]"
        >
          🔄 Rotate Angle
        </button>
        <div className="w-px h-5 bg-[#3b2b52]" />
        <button 
          onClick={() => setZoomLevel(prev => Math.max(4, prev - 1.5))} 
          className="px-3 py-1.5 bg-[#2a1d3d] hover:bg-[#3d2a59] active:scale-90 rounded-lg text-xs font-bold transition-all"
        >
          ➕ Step Closer
        </button>
        <button 
          onClick={() => setZoomLevel(prev => Math.min(12, prev + 1.5))} 
          className="px-3 py-1.5 bg-[#2a1d3d] hover:bg-[#3d2a59] active:scale-90 rounded-lg text-xs font-bold transition-all"
        >
          ➖ Step Away
        </button>
      </div>

      {/* ── ACTIVE 3D CANVAS VIEWPORT ── */}
      <div className="w-full h-full absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
        <Canvas 
          camera={{ position: [zoomLevel, zoomLevel, zoomLevel], fov: 35 }} 
          shadows
          key={`${roomRotation}-${zoomLevel}`}
        >
          <color attach="background" args={["#0c0912"]} />
          <fog attach="fog" args={["#0c0912", 10, 25]} />
          
          <group rotation={[0, roomRotation, 0]}>
            <HighFidelityAssets onSelect={handleInteractiveSelection} />
          </group>

          <OrbitControls 
            enableDamping 
            dampingFactor={0.05}
            minDistance={3}
            maxDistance={14}
            maxPolarAngle={Math.PI / 2 - 0.05}
          />
        </Canvas>
      </div>

      {/* Banner Console Info Guide */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-[#0a070f]/95 px-6 py-2.5 rounded-xl border border-[#34244c] shadow-2xl backdrop-blur-md flex items-center gap-6">
        <p className="text-[11px] font-bold tracking-wide text-[#967cb5] uppercase">
          🎮 Use the top console bar to rotate or step closer. Click the Hot Pink Desk or Built-In Drawer cabinet to explore.
        </p>
      </div>

      {/* Toys Drawer overlay sheet modal */}
      <AnimatePresence>
        {toyboxOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }} 
            className="absolute inset-4 m-auto w-11/12 h-5/6 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl z-55 flex flex-col overflow-hidden text-black pointer-events-auto"
          >
            <div className="flex items-center justify-between px-3 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 28 }}>
              <span className="text-white text-xs font-bold">📂 Built-in Desk Drawer — Memory Toys Vault</span>
              <button onClick={() => setToyboxOpen(false)} className="w-6 h-5 bg-gradient-to-b from-[#e05] to-[#b00] border border-black/30 rounded text-white text-xs font-bold flex items-center justify-center hover:brightness-110">✕</button>
            </div>
            <div className="flex-1 bg-white p-6 overflow-y-auto grid grid-cols-4 gap-4">
              {TOYS.map(toy => (
                <div key={toy.id} onClick={() => setActiveToy(toy.id)} className="border border-[#aca899] p-3 bg-[#f5f3ee] hover:border-blue-600 rounded-sm flex flex-col items-center justify-center cursor-pointer transition-colors group">
                  <div className="h-24 flex items-center justify-center"><ToyGraphic id={toy.id} /></div>
                  <span className="text-xs font-bold text-purple-900 mt-2 text-center">{toy.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail inspect node card overlay */}
      <AnimatePresence>
        {activeToy && activeToyData && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4" onClick={() => setActiveToy(null)}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="bg-[#ece9d8] rounded-t-lg border-2 border-[#0055e5] max-w-sm w-full flex flex-col shadow-2xl overflow-hidden text-black" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between px-3 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 26 }}><span className="text-white text-xs font-bold">Toy Inspection Drawer Log</span><button onClick={() => setActiveToy(null)} className="text-white text-xs font-bold">✕</button></div>
              <div className="p-6 bg-white flex flex-col items-center gap-4">
                <div className="h-32 bg-purple-50/50 w-full rounded border flex items-center justify-center"><ToyGraphic id={activeToy} /></div>
                <h3 className="text-lg font-bold text-purple-900">{activeToyData.name}</h3>
                <p className="text-sm text-purple-700 italic text-center">"{activeToyData.desc}"</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
