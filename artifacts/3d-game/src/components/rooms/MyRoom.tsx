import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// — TOY INVENTORY —
const TOYS = [
  { id: "bottle", name: "Magic Baby Bottle", desc: "The milk disappears when you tilt it." },
  { id: "skeebo", name: "Skeebo Beebo", desc: "My little lime green alien friend." },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "A purple bear you can draw on!" },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: "A classic interactive robotic toy." },
  { id: "furby", name: "Furby (Orange)", desc: "Classic orange electronic pet." },
];

const MyRoom = () => {
  const [selectedToy, setSelectedToy] = useState(null);
  const bgUrl = ""; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1c2c] p-4 font-mono text-white">
      <div className="relative w-[800px] h-[400px] shadow-2xl border-[10px] border-[#2d2f3d] rounded-lg overflow-hidden">
        <img src={bgUrl} alt="My Childhood Room" className="w-full h-full object-contain pointer-events-none" />
      </div>
    </div>
  );
};

export default MyRoom;
