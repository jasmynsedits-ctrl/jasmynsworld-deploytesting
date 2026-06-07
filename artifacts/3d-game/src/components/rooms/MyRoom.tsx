import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box, Plane, Cylinder, Grid } from "@react-three/drei";
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

// ── CUSTOM MATERIAL SIMULATION ──
const comforterMaterial = new THREE.MeshStandardMaterial({
  color: "#ffffff",
  roughness: 0.6,
  metalness: 0.1,
});

const woodMaterial = new THREE.MeshStandardMaterial({
  color: "#241407",
  roughness: 0.7,
  metalness: 0.1,
});

// ── HIGH-FIDELITY FURNITURE PIECES ──
function Bed() {
  return (
    <group position={[1.8, 0, -1.8]}>
      {/* Wooden Headboard */}
      <mesh position={[-2.1, 1.15, 0]} material={woodMaterial} castShadow>
        <boxGeometry args={[0.2, 2.3, 3]} />
      </mesh>
      
      {/* Bed Base Frame */}
      <mesh position={[0, 0.25, 0]} material={woodMaterial} castShadow receiveShadow>
        <boxGeometry args={[4.4, 0.5, 3]} />
      </mesh>
      
      {/* Mattress Layer 1: Base Core */}
      <mesh position={[0.1, 0.8, 0]} material={comforterMaterial} castShadow receiveShadow>
        <boxGeometry args={[4.1, 0.6, 2.8]} />
      </mesh>

      {/* Mattress Layer 2: Main Comforter Overlay Blanket */}
      <mesh position={[0.65, 0.81, 0]} castShadow>
        <boxGeometry args={[3, 0.62, 2.82]} />
        <meshStandardMaterial color="#fbfbfb" roughness={0.65} emissive="#ff6b8b" emissiveIntensity={0.04} />
      </mesh>

      {/* Procedural Floral Accents Vectors */}
      <mesh position={[0, 1.13, 0.6]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 8]} />
        <meshStandardMaterial color="#e63956" />
      </mesh>
      <mesh position={[0.8, 1.13, -0.4]}>
        <cylinderGeometry args={[0.04, 0.04, 0.02, 8]} />
        <meshStandardMaterial color="#2a9d8f" />
      </mesh>
      <mesh position={[1.2, 1.13, 0.5]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02, 8]} />
        <meshStandardMaterial color="#457b9d" />
      </mesh>
      <mesh position={[0.4, 1.13, -0.8]}>
        <cylinderGeometry args={[0.05, 0.05, 0.02, 8]} />
        <meshStandardMaterial color="#e63956" />
      </mesh>

      {/* Pillows */}
      <group position={[-1.4, 1.15, 0]}>
        <mesh position={[0, 0, 0.55]} rotation={[0, 0, 0.15]} castShadow>
          <boxGeometry args={[0.6, 0.22, 1]} />
          <meshStandardMaterial color="#ffffff" roughness={0.85} />
        </mesh>
        <mesh position={[0, 0, -0.55]} rotation={[0, 0, 0.15]} castShadow>
          <boxGeometry args={[0.6, 0.22, 1]} />
          <meshStandardMaterial color="#ffffff" roughness={0.85} />
        </mesh>
      </group>
    </group>
  );
}

function RetroLamp() {
  const lampColors = ["#ff00ff", "#00ffff", "#00ff00", "#ffa500", "#ffffff"]; // Pink, Cyan, Lime, Orange, White

  return (
    <group position={[-4, 0, 2]}>
      {/* Base Plate */}
      <mesh position={[0, 0.03, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.06, 24]} />
        <meshStandardMaterial color="#6b7280" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Main Silver Stem */}
      <mesh position={[0, 1.6, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 3.2, 12]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Multi-headed Cones */}
      <group position={[0, 3.2, 0]}>
        {lampColors.map((colorHex, i) => {
          const angle = (i * 72 * Math.PI) / 180;
          const xPos = Math.sin(angle) * 0.45;
          const zPos = Math.cos(angle) * 0.45;
          return (
            <group key={i} position={[xPos, 0, zPos]} rotation={[0, -angle, 0.35]}>
              <mesh position={[0, -0.1, 0]} rotation={[0, 0, -0.2]}>
                <cylinderGeometry args={[0.015, 0.015, 0.3, 8]} />
                <meshStandardMaterial color="#9ca3af" metalness={0.8} />
              </mesh>
              <mesh castShadow>
                <cylinderGeometry args={[0.12, 0.22, 0.4, 16]} />
                <meshStandardMaterial color={colorHex} roughness={0.4} metalness={0.1} emissive={colorHex} emissiveIntensity={0.2} />
              </mesh>
              <mesh position={[0, -0.18, 0]}>
                <cylinderGeometry args={[0.06, 0.06, 0.05, 8]} />
                <meshBasicMaterial color="#fff" />
              </mesh>
            </group>
          );
        })}
      </group>
    </group>
  );
}

interface DeskSetupProps {
  onSelect: (type: string) => void;
}

function DeskSetup({ onSelect }: DeskSetupProps) {
  return (
    <group position={[-2.2, 0, -2]} rotation={[0, -Math.PI / 2, 0]}>
      {/* COMPUTER INTERACTION ZONE */}
      <group onClick={(e) => { e.stopPropagation(); onSelect("computer"); }} className="cursor-pointer">
        {/* Hot Pink Glass Desk Surface */}
        <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[3.8, 0.1, 2.2]} />
          <meshStandardMaterial color="#ff2a6d" transparent opacity={0.65} roughness={0.1} metalness={0.2} />
        </mesh>

        {/* Pull-out Keyboard Shelf Tray */}
        <mesh position={[0, 1.35, 0.15]} castShadow>
          <boxGeometry args={[2.2, 0.06, 1.3]} />
          <meshStandardMaterial color="#ffffff" roughness={0.4} />
        </mesh>
        <mesh position={[0, 1.37, 0.25]}>
          <boxGeometry args={[1.7, 0.03, 0.55]} />
          <meshStandardMaterial color="#e5e7eb" />
        </mesh>

        {/* HP All-In-One Desktop Computer Frame */}
        <group position={[0, 1.55, -0.25]}>
          <mesh position={[0, 0.7, 0]} castShadow>
            <boxGeometry args={[1.6, 1.1, 0.14]} />
            <meshStandardMaterial color="#1f1f1f" roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.8, 0.08]}>
            <boxGeometry args={[1.48, 0.82, 0.02]} />
            <meshStandardMaterial color="#2563eb" emissive="#1d4ed8" intensity={0.7} />
          </mesh>
          <mesh position={[0, 0.14, 0]}>
            <boxGeometry args={[1.6, 0.2, 0.16]} />
            <meshStandardMaterial color="#a1a1aa" metalness={0.4} roughness={0.3} />
          </mesh>
          <mesh position={[0, -0.05, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.4, 12]} />
            <meshStandardMaterial color="#9ca3af" metalness={0.7} />
          </mesh>
        </group>

        {/* Bright Neon Orange Swivel Stool */}
        <group position={[0, 0, 1.1]}>
          <mesh position={[0, 0.8, 0]} castShadow>
            <cylinderGeometry args={[0.42, 0.42, 0.18, 24]} />
            <meshStandardMaterial color="#ff6b2b" roughness={0.4} />
          </mesh>
          <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.8, 8]} />
            <meshStandardMaterial color="#18181b" />
          </mesh>
          <mesh position={[0, 0.02, 0]}>
            <cylinderGeometry args={[0.45, 0.45, 0.04, 16]} />
            <meshStandardMaterial color="#3f3f46" roughness={0.6} />
          </mesh>
        </group>
      </group>

      {/* PULL-OUT TOY DRAWER UNIT INTERACTION ZONE */}
      <group position={[-1.25, 0, -0.4]} onClick={(e) => { e.stopPropagation(); onSelect("toybox"); }} className="cursor-pointer">
        <mesh position={[0, 0.575, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.05, 1.15, 1.25]} />
          <meshStandardMaterial color="#ffffff" roughness={0.5} />
        </mesh>
        <mesh position={[0.54, 0.62, 0]} castShadow>
          <boxGeometry args={[0.04, 0.32, 0.9]} />
          <meshStandardMaterial color="#ff2a6d" roughness={0.35} />
        </mesh>
      </group>

      {/* Desk Chrome Legs Support Framing */}
      <mesh position={[-1.8, 0.75, -0.95]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.5, 8]} />
        <meshStandardMaterial color="#6b7280" metalness={0.6} />
      </mesh>
      <mesh position={[1.8, 0.75, -0.95]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.5, 8]} />
        <meshStandardMaterial color="#6b7280" metalness={0.6} />
      </mesh>
      <mesh position={[1.8, 0.75, 0.95]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.5, 8]} />
        <meshStandardMaterial color="#6b7280" metalness={0.6} />
      </mesh>
    </group>
  );
}

function RoomWallsAndFloor() {
  return (
    <group position={[0, -0.5, 0]}>
      {/* Floor Plate */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#36281c" roughness={0.8} />
      </mesh>
      
      {/* Left White Wall */}
      <mesh position={[-5, 2.5, 0]} receiveShadow>
        <boxGeometry args={[0.1, 5, 10]} />
        <meshStandardMaterial color="#ffffff" roughness={0.9} />
      </mesh>
      
      {/* Right White Wall */}
      <mesh position={[0, 2.5, -5]} receiveShadow>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color="#fcfcfc" roughness={0.9} />
      </mesh>

      {/* Grid Matrix Helper Layer */}
      <Grid position={[0, 0.01, 0]} args={[10, 10]} cellSize={0.5} cellThickness={0.5} cellColor="#44355b" sectionSize={5} fadeDistance={30} />
    </group>
  );
}

// ── EXTRA SCENE ACCENTS ──
function RoomAccents() {
  return (
    <group>
      {/* Black Nightstand with Potted Plant */}
      <group position={[-0.8, -0.5, -3.2]}>
        <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial color="#18181b" roughness={0.7} />
        </mesh>
        <group position={[0, 1.2, 0]}>
          <mesh position={[0, 0.14, 0]} castShadow>
            <cylinderGeometry args={[0.16, 0.11, 0.28, 12]} />
            <meshStandardMaterial color="#c2410c" roughness={0.5} />
          </mesh>
          <mesh position={[0, 0.38, 0]} rotation={[0.2, 0.4, 0.1]}>
            <cylinderGeometry args={[0.25, 0.25, 0.3, 8]} />
            <meshStandardMaterial color="#166534" roughness={0.9} />
          </mesh>
        </group>
      </group>

      {/* Black Tall Bookshelf right of the bed */}
      <group position={[3.6, -0.5, -3.2]}>
        <mesh position={[0, 2, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.1, 4, 2.2]} />
          <meshStandardMaterial color="#09090b" roughness={0.85} />
        </mesh>
        {[0.9, 1.8, 2.7].map((h, i) => (
          <mesh key={i} position={[0.01, h, 0]}>
            <boxGeometry args={[1.06, 0.06, 2.16]} />
            <meshStandardMaterial color="#1c1c1f" />
          </mesh>
        ))}
      </group>

      {/* Window and Curtain panels overlay */}
      <group position={[-2, 2.3, -4.92]}>
        <mesh castShadow>
          <boxGeometry args={[2.6, 1.8, 0.05]} />
          <meshStandardMaterial color="#e2e8f0" transparent opacity={0.4} roughness={0.2} />
        </mesh>
        <mesh position={[-1.4, -0.1, 0.1]}>
          <boxGeometry args={[0.6, 2.4, 0.12]} />
          <meshStandardMaterial color="#e64c87" roughness={0.6} />
        </mesh>
        <mesh position={[1.4, -0.1, 0.1]}>
          <boxGeometry args={[0.6, 2.4, 0.12]} />
          <meshStandardMaterial color="#8c50a6" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// ── MAIN APPLICATION VIEW ROUTER ──
export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [toyboxOpen, setToyboxOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);
  const [roomRotation, setRoomRotation] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(7.5);
  
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
    <div className="w-full h-full bg-[#0d0a14] text-white relative font-sans overflow-hidden select-none flex flex-col items-center justify-center">
      
      {/* Top Map Action HUD Bar */}
      <div className="absolute top-4 left-4 z-50 flex items-center gap-3">
        <button 
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#1b1822]/90 border border-[#443a54] rounded-full text-xs font-bold tracking-wide hover:bg-[#282433] transition-all shadow-xl active:scale-95"
        >
          ← Back to Map
        </button>
      </div>

      {/* Control Adjustment Panel */}
      <div className="absolute top-4 right-4 z-50 bg-[#16141c]/90 p-2 rounded-xl border border-[#3e344d] flex items-center gap-2 shadow-2xl backdrop-blur-md">
        <button 
          onClick={() => setRoomRotation(prev => prev + Math.PI / 2)} 
          className="p-2 bg-[#2d253b] hover:bg-[#413554] active:scale-90 rounded-lg text-xs font-bold transition-all border border-[#533d70]"
        >
          🔄 Rotate Angle
        </button>
        <div className="w-px h-5 bg-[#3e344d]" />
        <button 
          onClick={() => setZoomLevel(prev => Math.max(4, prev - 1.5))} 
          className="px-3 py-1.5 bg-[#2d253b] hover:bg-[#413554] active:scale-90 rounded-lg text-xs font-bold transition-all"
        >
          ➕ Step Closer
        </button>
        <button 
          onClick={() => setZoomLevel(prev => Math.min(13, prev + 1.5))} 
          className="px-3 py-1.5 bg-[#2d253b] hover:bg-[#413554] active:scale-90 rounded-lg text-xs font-bold transition-all"
        >
          ➖ Step Away
        </button>
      </div>

      {/* ── LIVE INTERACTIVE WEBGL 3D VIEWPORT CANVAS PANEL ── */}
      <div className="w-full h-full absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
        <Canvas 
          camera={{ position: [zoomLevel, zoomLevel, zoomLevel], fov: 35 }} 
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
          shadows 
          key={`${roomRotation}-${zoomLevel}`}
        >
          <color attach="background" args={["#100c19"]} />
          <fog attach="fog" args={["#100c19", 10, 26]} />
          
          <group rotation={[0, roomRotation, 0]}>
            <RoomWallsAndFloor />
            <RoomAccents />
            <Bed />
            <RetroLamp />
            <DeskSetup onSelect={handleInteractiveSelection} />
          </group>

          <OrbitControls 
            enableDamping 
            dampingFactor={0.06} 
            minDistance={3.5} 
            maxDistance={14} 
            maxPolarAngle={Math.PI / 2 - 0.05} 
          />
        </Canvas>
      </div>

      {/* Guide HUD Banner */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-[#0e0c14]/95 px-6 py-2.5 rounded-xl border border-[#3b304a] shadow-2xl backdrop-blur-md flex items-center gap-6">
        <p className="text-[11px] font-bold tracking-wide text-[#9d89b8] uppercase">
          🎮 **3D Room Node:** Click & Drag room to spin around manually, use top console controls, or click objects to enter ports.
        </p>
      </div>

      {/* ── TOYS SYSTEM DRAWER SHEET MODAL OVERLAY ── */}
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

      {/* Individual Toy Detail Inspection Card Modal */}
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
