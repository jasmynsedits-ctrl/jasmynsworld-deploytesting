import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Plane, Cylinder } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import * as THREE from 'three';

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

interface SceneProps {
  onSelect: (type: string) => void;
}

function PhotoAccurateScene({ onSelect }: SceneProps) {
  const lampColors = [0xff00ff, 0x00ffff, 0x00ff00, 0xffa500, 0xffffff];

  return (
    <group position={[0, -1, 0]}>
      {/* Targeted Ambient & Accent Lighting */}
      <ambientLight intensity={1.6} />
      <directionalLight position={[0, 10, 8]} intensity={1.5} castShadow />
      <pointLight position={[1.5, 2.5, -2.5]} intensity={1.5} color="#ffdca3" />

      {/* Tan Carpet Flooring */}
      <Plane args={[12, 12]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#dcd5c7" roughness={0.9} />
      </Plane>

      {/* Back Wall - White with Joy Decals */}
      <Box args={[12, 6, 0.1]} position={[0, 3, -4]} receiveShadow>
        <meshStandardMaterial color="#ffffff" roughness={0.9} />
      </Box>
      {/* Left Wall - White */}
      <Box args={[0.1, 6, 12]} position={[-4, 3, 0]} receiveShadow>
        <meshStandardMaterial color="#ffffff" roughness={0.9} />
      </Box>

      {/* ── WINDOW & CURTAINS (Centered on Back Wall) ── */}
      <group position={[0, 3.2, -3.94]}>
        <Box args={[3.5, 2.2, 0.05]} castShadow>
          <meshStandardMaterial color="#c0dcf7" transparent opacity={0.3} roughness={0.1} />
        </Box>
        {/* Pink Left Curtain Panel */}
        <Box args={[0.8, 3.2, 0.12]} position={[-2.1, -0.2, 0.1]}>
          <meshStandardMaterial color="#e64c87" roughness={0.6} />
        </Box>
        {/* Purple Right Curtain Panel */}
        <Box args={[0.8, 3.2, 0.12]} position={[2.1, -0.2, 0.1]}>
          <meshStandardMaterial color="#8c50a6" roughness={0.6} />
        </Box>
      </group>

      {/* ── PHOTO-ACCURATE COMPUTER DESK SETUP (Centered Against Back Wall Window) ── */}
      <group position={[0, 0, -2.2]}>
        {/* Click Target Zone for Desktop Browser port */}
        <group onClick={(e) => { e.stopPropagation(); onSelect("computer"); }} className="cursor-pointer">
          {/* Hot Pink Glass Desk Surface */}
          <mesh position={[0, 1.4, 0]} castShadow receiveShadow>
            <boxGeometry args={[3.6, 0.08, 1.8]} />
            <meshStandardMaterial color="#ff2a6d" transparent opacity={0.75} roughness={0.15} metalness={0.2} />
          </mesh>
          
          {/* White Keyboard Pull-out Tray */}
          <mesh position={[0, 1.25, 0.2]} castShadow>
            <boxGeometry args={[2.0, 0.05, 1.1]} />
            <meshStandardMaterial color="#ffffff" roughness={0.5} />
          </mesh>

          {/* HP All-In-One Desktop Computer Frame */}
          <group position={[0, 1.44, -0.2]}>
            <mesh position={[0, 0.6, 0]} castShadow>
              <boxGeometry args={[1.5, 1.0, 0.12]} />
              <meshStandardMaterial color="#1f1f1f" roughness={0.4} />
            </mesh>
            {/* Glowing Blue Active Display Screen */}
            <mesh position={[0, 0.68, 0.07]}>
              <boxGeometry args={[1.4, 0.78, 0.02]} />
              <meshStandardMaterial color="#2563eb" emissive="#1d4ed8" intensity={0.9} />
            </mesh>
            {/* Lower Silver Bezel Section */}
            <mesh position={[0, 0.15, 0]}>
              <boxGeometry args={[1.5, 0.16, 0.14]} />
              <meshStandardMaterial color="#a1a1aa" metalness={0.5} roughness={0.3} />
            </mesh>
            {/* Base Stand Neck */}
            <mesh position={[0, -0.02, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.2, 12]} />
              <meshStandardMaterial color="#9ca3af" metalness={0.8} />
            </mesh>
          </group>

          {/* Bright Neon Orange Swivel Stool Tucked Behind Desk */}
          <group position={[0, 0, 1.2]}>
            <mesh position={[0, 0.75, 0]} castShadow>
              <cylinderGeometry args={[0.38, 0.38, 0.15, 24]} />
              <meshStandardMaterial color="#ff6b2b" roughness={0.4} />
            </mesh>
            <mesh position={[0, 0.38, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.7, 8]} />
              <meshStandardMaterial color="#1c1c1e" />
            </mesh>
            <mesh position={[0, 0.02, 0]}>
              <cylinderGeometry args={[0.4, 0.4, 0.04, 16]} />
              <meshStandardMaterial color="#3f3f46" roughness={0.6} />
            </mesh>
          </group>
        </group>

        {/* PULL-OUT TOY DRAWER UNIT INTERACTION ZONE */}
        <group position={[-1.3, 0, -0.2]} onClick={(e) => { e.stopPropagation(); onSelect("toybox"); }} className="cursor-pointer">
          <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.85, 1.1, 1.1]} />
            <meshStandardMaterial color="#ffffff" roughness={0.5} />
          </mesh>
          {/* Hot Pink Trim Accent Panels */}
          <mesh position={[0.44, 0.6, 0]} castShadow>
            <boxGeometry args={[0.04, 0.3, 0.8]} />
            <meshStandardMaterial color="#ff2a6d" roughness={0.4} />
          </mesh>
        </group>

        {/* Structural Desk Chrome Framing Legs */}
        <mesh position={[1.4, 0.7, -0.7]} castShadow><cylinderGeometry args={[0.03, 0.03, 1.4, 8]} /><meshStandardMaterial color="#9ca3af" metalness={0.7} /></mesh>
        <mesh position={[1.4, 0.7, 0.7]} castShadow><cylinderGeometry args={[0.03, 0.03, 1.4, 8]} /><meshStandardMaterial color="#9ca3af" metalness={0.7} /></mesh>
        <mesh position={[-1.4, 0.7, 0.7]} castShadow><cylinderGeometry args={[0.03, 0.03, 1.4, 8]} /><meshStandardMaterial color="#9ca3af" metalness={0.7} /></mesh>
      </group>

      {/* ── FIVE-HEAD DYNAMIC LAMP (Standing Right of the Desk Monitor) ── */}
      <group position={[1.5, 0, -2.4]}>
        <mesh position={[0, 0.03, 0]} castShadow>
          <cylinderGeometry args={[0.3, 0.3, 0.06, 24]} />
          <meshStandardMaterial color="#6b7280" metalness={0.8} />
        </mesh>
        <mesh position={[0, 1.6, 0]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 3.2, 12]} />
          <meshStandardMaterial color="#9ca3af" metalness={0.8} />
        </mesh>
        
        {/* Radial Branching Gooseneck Lamp Heads */}
        <group position={[0, 3.2, 0]}>
          {lampColors.map((colorHex, i) => {
            const angle = (i * 72 * Math.PI) / 180;
            const xPos = Math.sin(angle) * 0.4;
            const zPos = Math.cos(angle) * 0.4;
            return (
              <group key={i} position={[xPos, 0, zPos]} rotation={[0, -angle, 0.3]}>
                <mesh castShadow>
                  <cylinderGeometry args={[0.1, 0.2, 0.38, 16]} />
                  <meshStandardMaterial color={colorHex} roughness={0.4} emissive={colorHex} emissiveIntensity={0.3} />
                </mesh>
                <mesh position={[0, -0.16, 0]}>
                  <cylinderGeometry args={[0.05, 0.05, 0.04, 8]} />
                  <meshBasicMaterial color="#fff" />
                </mesh>
              </group>
            );
          })}
        </group>
      </group>

      {/* ── THE FLORAL COMFY BED (Positioned Against the Left Wall Frame) ── */}
      <group position={[-2.4, 0, 1.2]} rotation={[0, Math.PI / 2, 0]}>
        {/* Espresso Frame Bed Foundation */}
        <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
          <boxGeometry args={[4.4, 0.5, 2.8]} />
          <meshStandardMaterial color="#241407" roughness={0.7} />
        </mesh>
        <mesh position={[-2.1, 1.15, 0]} castShadow>
          <boxGeometry args={[0.2, 2.1, 2.8]} />
          <meshStandardMaterial color="#1a0e05" roughness={0.7} />
        </mesh>
        {/* Mattress Sheet Core */}
        <mesh position={[0.1, 0.75, 0]} castShadow receiveShadow>
          <boxGeometry args={[4.1, 0.5, 2.6]} />
          <meshStandardMaterial color="#ffffff" roughness={0.7} />
        </mesh>
        {/* Floral Comforter Blanket with Custom Mapped Printing Nodes */}
        <mesh position={[0.6, 0.77, 0]} castShadow>
          <boxGeometry args={[3.0, 0.54, 2.64]} />
          <meshStandardMaterial color="#ffffff" roughness={0.6} emissive="#ff6b8b" emissiveIntensity={0.05} />
        </mesh>
        {/* Decorative Mapped Patterns (Pink, Teal/Green, Soft Blue dots) */}
        <mesh position={[0, 1.05, 0.5]}><cylinderGeometry args={[0.05, 0.05, 0.02, 8]} /><meshStandardMaterial color="#e63956" /></mesh>
        <mesh position={[0.6, 1.05, -0.4]}><cylinderGeometry args={[0.04, 0.04, 0.02, 8]} /><meshStandardMaterial color="#2a9d8f" /></mesh>
        <mesh position={[1.0, 1.05, 0.3]}><cylinderGeometry args={[0.06, 0.06, 0.02, 8]} /><meshStandardMaterial color="#457b9d" /></mesh>
        {/* Double White Bed Pillows */}
        <mesh position={[-1.4, 1.05, 0.5]} rotation={[0, 0, 0.12]} castShadow><boxGeometry args={[0.6, 0.2, 0.8]} /><meshStandardMaterial color="#ffffff" /></mesh>
        <mesh position={[-1.4, 1.05, -0.5]} rotation={[0, 0, 0.12]} castShadow><boxGeometry args={[0.6, 0.2, 0.8]} /><meshStandardMaterial color="#ffffff" /></mesh>
      </group>

      {/* ── ACCENT FURNITURE (Nightstand & Bookshelf Behind Bed Line) ── */}
      {/* Black Nightstand */}
      <group position={[-3.2, 0, -2.5]}>
        <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.1, 1.1, 1.1]} />
          <meshStandardMaterial color="#1c1c1e" roughness={0.7} />
        </mesh>
        <mesh position={[0, 1.1, 0]} castShadow><cylinderGeometry args={[0.15, 0.1, 0.25, 12]} /><meshStandardMaterial color="#c2410c" /></mesh>
        <mesh position={[0, 1.35, 0]}><sphereGeometry args={[0.2, 16, 16]} /><meshStandardMaterial color="#166534" /></mesh>
      </group>
      {/* Black Tall Bookshelf Unit */}
      <group position={[-3.3, 0, -1.0]}>
        <mesh position={[0, 1.8, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.9, 3.6, 1.8]} />
          <meshStandardMaterial color="#0f0f11" roughness={0.8} />
        </mesh>
      </group>
    </group>
  );
}

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [toyboxOpen, setToyboxOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);
  
  const activeToyData = TOYS.find(t => t.id === activeToy);

  return (
    <div className="w-full h-full bg-[#0d0a14] text-white relative font-sans overflow-hidden select-none flex flex-col items-center justify-center">
      
      {/* Top Map Action HUD Bar */}
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#1b1822]/90 border border-[#443a54] rounded-full text-xs font-bold tracking-wide hover:bg-[#282433] transition-all shadow-xl active:scale-95"
        >
          ← Back to Map
        </button>
      </div>

      {/* ── PHOTO-ACCURATE VIEWPORT CANVAS PANEL ── */}
      <div className="w-full h-full absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
        <Canvas 
          camera={{ position: [0, 3.5, 4.8], fov: 50 }} 
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
          shadows 
        >
          <color attach="background" args={["#100c19"]} />
          <fog attach="fog" args={["#100c19", 8, 22]} />
          
          <PhotoAccurateScene onSelect={(type) => {
            if (type === "computer" && onEnterGameRoom) onEnterGameRoom();
            if (type === "toybox") { setToyboxOpen(true); setActiveToy(null); }
          }} />

          <OrbitControls 
            enableDamping 
            dampingFactor={0.06} 
            minDistance={2} 
            maxDistance={10} 
            maxPolarAngle={Math.PI / 2 - 0.05} 
          />
        </Canvas>
      </div>

      {/* Banner Interface HUD */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-[#0e0c14]/95 px-6 py-2.5 rounded-xl border border-[#3b304a] shadow-2xl backdrop-blur-md flex items-center gap-6">
        <p className="text-[11px] font-bold tracking-wide text-[#9d89b8] uppercase">
          🎮 Click & Drag to inspect angles. Click the Blue HP Screen to open your system, or select the White Desk Drawer cabinet to explore toys.
        </p>
      </div>

      {/* TOYS MODAL OVERLAY SHEET */}
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

      {/* Toy Detail Modal Box */}
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
