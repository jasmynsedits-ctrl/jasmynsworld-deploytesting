import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Base URL for archived embeds to avoid frame-breaking issues
const ARCHIVE_BASE = "https://web.archive.org/web/";

type BookmarkItem = {
  name: string;
  archivePath?: string;
  url?: string;
  isMock?: boolean;
};

const SIDEBAR = {
  "🎮 Online Games": [
    { name: "Starfall", archivePath: "20121102000000/https://www.starfall.com/h/" },
    { name: "Moshi Monsters", archivePath: "20130601000000/http://www.moshionline.net/" },
    { name: "Nickelodeon (2015)", archivePath: "20151127074613/http://www.nick.com/games/" },
    { name: "GirlsGoGames", archivePath: "20150801083101/http://www.girlsgogames.com/" },
  ],
  "🏫 Educational": [
    { name: "CoolMath (2012)", archivePath: "20121002000245/http://coolmath.com/" },
  ]
};

const MockSite = ({ name }: { name: string }) => (
  <div className="p-8 bg-blue-50 h-full flex flex-col items-center justify-center text-center">
    <div className="text-6xl mb-4">🎮</div>
    <h2 className="text-3xl font-bold text-blue-800 mb-2">{name}</h2>
    <p className="text-gray-600 max-w-md">
      This is a retro-styled placeholder for {name}. 
      The original site is currently loading via the archived embed...
    </p>
    <div className="mt-8 p-4 bg-white border-4 border-blue-400 rounded-xl shadow-lg animate-pulse">
      Loading Flash Content...
    </div>
  </div>
);

export const GameRoom = () => {
  const [currentUrl, setCurrentUrl] = useState(ARCHIVE_BASE + "20151127074613if_/http://www.nick.com/games/");
  const [currentTitle, setCurrentTitle] = useState("Nickelodeon Games");
  const [addressBar, setAddressBar] = useState(currentUrl);

  const navigate = (item: BookmarkItem) => {
    let url = item.url || "";
    if (item.archivePath) {
      const parts = item.archivePath.split('/');
      const timestamp = parts[0];
      const rest = parts.slice(1).join('/');
      url = `${ARCHIVE_BASE}${timestamp}if_/${rest}`;
    }
    setCurrentUrl(url);
    setCurrentTitle(item.name);
    setAddressBar(url);
  };

  return (
    <div className="flex h-screen bg-[#ece9d8] font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#f1f1f1] border-r border-[#999] flex flex-col shadow-inner">
        <div className="p-4 bg-gradient-to-b from-[#0058e3] to-[#0039a6] text-white font-bold">🏠 Desktop</div>
        <div className="flex-1 overflow-y-auto p-2">
          {Object.entries(SIDEBAR).map(([category, items]) => (
            <div key={category} className="mb-4">
              <div className="text-xs font-bold text-[#666] uppercase px-2 mb-1">{category}</div>
              {items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item)}
                  className="w-full text-left px-3 py-1.5 rounded hover:bg-[#316ac5] hover:text-white text-sm"
                >
                  📄 {item.name}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Browser */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="bg-[#f0f0f0] border-b border-[#999] p-1">
          <div className="flex items-center gap-2 p-1 border-b border-[#ccc] mb-1">
            <span className="text-xs text-[#666] ml-2">Address</span>
            <input 
              type="text" 
              value={addressBar}
              readOnly
              className="flex-1 text-sm border border-[#7f9db9] outline-none px-2 py-0.5 bg-gray-50"
            />
          </div>
        </div>

        <div className="flex-1 relative bg-white">
          <iframe 
            src={currentUrl} 
            className="absolute inset-0 w-full h-full border-none z-10"
            title="Internal Browser"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
};

export default GameRoom;
