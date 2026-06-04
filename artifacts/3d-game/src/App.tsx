import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PasswordScreen from "./components/PasswordScreen";
import MainWorld from "./components/MainWorld";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="min-h-screen w-full bg-background overflow-hidden relative">
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div
            key="password"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <PasswordScreen onUnlock={() => setUnlocked(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="world"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0"
          >
            <MainWorld />
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster />
    </div>
  );
}

export default App;
