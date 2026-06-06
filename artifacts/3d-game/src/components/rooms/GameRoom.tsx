import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dec = (b64: string) => atob(b64);
const ARCHIVE_BASE = dec("aHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLw==");

type BookmarkItem = {
  name: string;
  archivePath?: string;
  url?: string;
  isMock?: boolean;
};

const SIDEBAR = {
  "Virtual Worlds": [
    { name: "Poptropica", archivePath: "20140228054452if_/" + dec("aHR0cDovL3d3dy5wb3B0cm9waWNhLmNvbS8=") },
    { name: "Fantage", archivePath: "20130606000109if_/" + dec("aHR0cDovL3d3dy5mYW50YWdlLmNvbS8=") },
    { name: "Moshi Monsters", archivePath: "20130126022802if_/" + dec("aHR0cDovL3d3dy5tb3NoaW1vbnN0ZXJzLmNvbS8=") },
    { name: "SmallWorlds", archivePath: "20120515104810if_/" + dec("aHR0cDovL3d3dy5zbWFsbHdvcmxkcy5jb20v") },
  ],
  "Creative & Play": [
    { name: "Scratch", url: dec("aHR0cHM6Ly9zY3JhdGNoLm1pdC5lZHUvcHJvamVjdHMvZW1iZWQvODczOTE5ODMwLw== ") },
    { name: "GirlsGoGames", archivePath: "20120515104810if_/" + dec("aHR0cDovL3d3dy5naXJsc2dvZ2FtZXMuY29tLw==") },
  ],
  "Learning": [
    { name: "Starfall", archivePath: "20130606000109if_/" + dec("aHR0cDovL3d3dy5zdGFyZmFsbC5jb20v"), isMock: true },
  ],
  "Comedy": [
    { name: "JibJab", archivePath: "20130606000109if_/" + dec("aHR0cDovL3d3dy5qaWJqYWIuY29tLw==") },
  ],
  "Nickelodeon": [
    { name: "Nickelodeon (2015)", archivePath: "20151127074613if_/" + dec("aHR0cDovL3d3dy5uaWNrLmNvbS9nYW1lcy8=") },
  ]
};

const MockSite = ({ name }: { name: string }) => (
  <div className="flex flex-col items-center justify-center h-full bg-blue-50 p-8 text-center">
    <div className="w-24 h-24 bg-blue-400 rounded-full mb-6 flex items-center justify-center text-white text-4xl">
      🎮
    </div>
    <h2 className="text-3xl font-bold text-blue-900 mb-4">{name}</h2>
    <p className="text-gray-600 max-w-md">
      This is a retro-styled placeholder for {name}.
    </p>
    <div className="mt-8 p-4 bg-white border-4 border-blue-400 rounded-xl shadow-lg animate-pulse">
      Loading Content...
    </div>
  </div>
);

export const GameRoom = () => {
  const [currentUrl, setCurrentUrl] = useState(ARCHIVE_BASE + "20151127074613if_/" + dec("aHR0cDovL3d3dy5uaWNrLmNvbS9nYW1lcy8="));
  const [currentTitle, setCurrentTitle] = useState("Nickelodeon Games");
  const [addressBar, setAddressBar] = useState(currentUrl);
  const [isMock, setIsMock] = useState(false);

  const navigate = (item: BookmarkItem) => {
    setIsMock(!!item.isMock);
    if (item.archivePath) {
      const fullUrl = ARCHIVE_BASE + item.archivePath;
      setCurrentUrl(fullUrl);
      setAddressBar(fullUrl);
    } else if (item.url) {
      setCurrentUrl(item.url);
      setAddressBar(item.url);
    }
    setCurrentTitle(item.name);
  };

  return (
    <div className="flex h-screen bg-[#ece9d8] font-sans overflow-hidden text-black">
      <div className="w-64 bg-[#f1f1f1] border-r border-[#999] flex flex-col shadow-inner">
        <div className="p-4 bg-gradient-to-b from-[#0058e3] to-[#0039a6] text-white font-bold text-lg flex items-center">
          <span className="mr-2">📂</span> Web Desktop
        </div>
        <div className="flex-1 overflow-y-auto p-2">
          {Object.entries(SIDEBAR).map(([category, items]) => (
            <div key={category} className="mb-4 text-black">
              <div className="text-xs font-bold text-[#666] uppercase px-2 mb-1">{category}</div>
              {items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item)}
                  className={`w-full text-left px-3 py-1.5 rounded text-sm mb-0.5 transition-colors ${
                    currentTitle === item.name 
                      ? 'bg-[#316ac5] text-white shadow-sm' 
                      : 'hover:bg-[#d5e1f2] text-black'
                  }`}
                >
                  📄 {item.name}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-[#f1f1f1] p-2 border-b border-[#999] shadow-sm">
          <div className="flex items-center space-x-2 bg-white border border-[#7f9db9] p-1 px-3 rounded shadow-inner">
            <span className="text-xs font-bold text-gray-400">Address</span>
            <input 
              className="flex-1 text-sm outline-none bg-transparent text-black" 
              value={addressBar}
              readOnly
            />
            <div className="text-blue-600 font-bold px-2 border-l border-gray-200 cursor-pointer">Go</div>
          </div>
        </div>

        <div className="flex-1 bg-white relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              {isMock ? (
                <MockSite name={currentTitle} />
              ) : (
                <iframe
                  src={currentUrl}
                  className="w-full h-full border-none"
                  title={currentTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="bg-[#ece9d8] h-6 border-t border-white px-2 flex items-center justify-between text-xs text-[#666]">
          <div className="flex items-center">
            <span className="mr-2 text-green-600">●</span>
            Done
          </div>
          <div className="flex items-center border-l border-[#999] pl-2 h-full">
            <span className="mr-4">My Computer</span>
            <span>🌐 Internet</span>
          </div>
        </div>
      </div>
    </div>
  );
};
