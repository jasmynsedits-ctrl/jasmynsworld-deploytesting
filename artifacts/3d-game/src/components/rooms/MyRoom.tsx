import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import roomBackground from "@/assets/room-background.mp4";

const TOYS = [
  { id: "bottle", name: "Disappearing Liquid Bottles", desc: "insert desc" },
  { id: "skeebo", name: "Skeebo Beebo", desc: "insert desc" },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "insert desc" },
  { id: "fijit", name: "Fijit Friend (Blue)", desc: "insert desc" },
  { id: "tomy", name: "Tomy Water Games", desc: "insert desc" },
  { id: "multi", name: "Multi-Color Pen", desc: "insert desc" },
  { id: "playdoh", name: "Play-Doh Sets", desc: "insert desc" },
  { id: "shonkins", name: "Shonkins", desc: "insert desc" }
];

export default function MyRoom() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedToy, setSelectedToy] = useState<string | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={roomBackground} type="video/mp4" />
      </video>

      {/* Interaction Layer */}
      <div className="absolute inset-0 z-20">
        {/* Placeholder for interactive items */}
      </div>
    </div>
  );
}
