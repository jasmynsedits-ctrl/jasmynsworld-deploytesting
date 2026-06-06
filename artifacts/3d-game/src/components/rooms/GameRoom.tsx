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
    setCurrentTitle(item.name);import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dec = (b: string) => atob(b);
const B = dec("aHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLw==");

const S = [
  { n: "Starfall", p: dec("MjAxMjExMDIwMDAwMDBpZl8vaHR0cHM6Ly93d3cuc3RhcmZhbGwuY29tL2gv") },
  { n: "Moshi Monsters", p: dec("MjAxMzAxMjYwMjI4MDJpZl8vaHR0cHM6Ly93d3cubW9zaGltb25zdGVycy5jb20v") },
  { n: "Nickelodeon (2015)", p: dec("MjAxNTExMjcwNzQ2MTNpZl8vaHR0cHM6Ly93d3cubmljay5jb20v") },
  { n: "GirlsGoGames", p: dec("MjAxNDA3MTUwMDAwMDBpZl8vaHR0cDovL3d3dy5naXJsc2dvZ2FtZXMuY29tLw==") },
  { n: "SmallWorlds", p: dec("MjAxMjA2MTUwMDAwMDBpZl8vaHR0cDovL3d3dy5zbWFsbHdvcmxkcy5jb20v") },
  { n: "Poptropica", p: dec("MjAxMzA4MTUwMDAwMDBpZl8vaHR0cDovL3d3dy5wb3B0cm9waWNhLmNvbS8=") },
  { n: "Fantage", p: dec("MjAxMzA1MTUwMDAwMDBpZl8vaHR0cDovL3d3dy5mYW50YWdlLmNvbS8=") },
  { n: "JibJab", p: dec("MjAxMTA0MTUwMDAwMDBpZl8vaHR0cDovL3d3dy5qaWJqYWIuY29tLw==") },
  { n: "Scratch", u: dec("aHR0cHM6Ly9zY3JhdGNoLm1pdC5lZHUvcHJvamVjdHMvZW1iZWQvMTAxMjg0MDAv") },
  { n: "WeeWorld", p: dec("MjAxMTExMTUwMDAwMDBpZl8vaHR0cDovL3d3dy53ZWV3b3JsZC5jb20v") },
  { n: "Club Penguin", p: dec("MjAxMzAzMTUwMDAwMDBpZl8vaHR0cDovL3d3dy5jbHVicGVuZ3Vpbi5jb20v") },
  { n: "MovieStar Planet", p: dec("MjAxNDAyMTUwMDAwMDBpZl8vaHR0cDovL3d3dy5tb3ZpZXN0YXJwbGFuZXQuY29tLw==") },
  { n: "Animal Jam", p: dec("MjAxNDAxMTUwMDAwMDBpZl8vaHR0cDovL3d3dy5hbmltYWxqYW0uY29tLw==") },
];

export default function GameRoom() {
  const [url, setUrl] = useState(B + S[0].p);
  const [title, setTitle] = useState(S[0].n);

  const go = (i: any) => {
    const next = i.p ? B + i.p : i.u;
    setUrl(next);
    setTitle(i.n);
  };

  return (
    <div className="flex flex-col h-screen bg-[#ece9d8] font-sans text-black select-none overflow-hidden">
      {/* Windows Title Bar */}
      <div className="h-8 bg-gradient-to-r from-[#0058e6] via-[#3a83f9] to-[#0058e6] flex items-center justify-between px-2 text-white font-bold">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-sm" />
          <span className="text-sm truncate">{title} - Internet Explorer</span>
        </div>
        <div className="flex gap-1 pr-1">
          <button className="w-6 h-[21px] bg-[#ece9d8] border border-white border-b-gray-400 border-r-gray-400 text-black flex items-center justify-center hover:bg-gray-200">-</button>
          <button className="w-6 h-[21px] bg-[#ece9d8] border border-white border-b-gray-400 border-r-gray-400 text-black flex items-center justify-center hover:bg-gray-200">□</button>
          <button className="w-[43px] h-[21px] bg-[#e33d2a] border border-white text-white flex items-center justify-center hover:bg-[#f24c3d]">✕</button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="flex gap-4 px-2 py-0.5 bg-[#ece9d8] border-b border-gray-400 text-xs shadow-sm">
        {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map(m => (
          <div key={m} className="px-1 hover:bg-[#316ac5] hover:text-white cursor-default rounded-sm">{m}</div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-2 p-1 bg-[#ece9d8] border-b border-gray-400">
        <div className="flex gap-2 items-center px-1">
          <button className="flex flex-col items-center group">
            <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-white text-lg">←</div>
            <span className="text-[10px]">Back</span>
          </button>
          <button className="flex flex-col items-center opacity-50">
            <div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-white text-lg">→</div>
            <span className="text-[10px]">Forward</span>
          </button>
          <div className="h-8 w-[1px] bg-gray-400 mx-1" />
          <button className="flex flex-col items-center">
            <span className="text-lg">🔄</span>
            <span className="text-[10px]">Refresh</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-lg">🏠</span>
            <span className="text-[10px]">Home</span>
          </button>
        </div>
        <div className="flex-1 flex items-center gap-1 ml-2 bg-white border border-gray-500 h-6 px-2 text-xs overflow-hidden">
          <span className="truncate opacity-60">Address: {url}</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden bg-white">
        {/* Favorites Sidebar */}
        <div className="w-64 bg-[#f1f1f1] border-r border-[#9aaa91] flex flex-col shadow-inner">
          <div className="bg-gradient-to-b from-[#7ba2e7] to-[#6375d6] text-white px-3 py-1.5 font-bold text-sm flex justify-between items-center shadow-md">
            <span>Favorites</span>
            <span className="cursor-pointer">✕</span>
          </div>
          <div className="p-3 overflow-y-auto">
            <div className="flex items-center gap-1 mb-3 border-b border-gray-300 pb-1">
              <span className="text-yellow-600 text-lg">⭐</span>
              <h3 className="font-bold text-xs text-[#003399]">Online Games</h3>
            </div>
            <div className="space-y-2 pl-4">
              {S.map((i) => (
                <div key={i.n} onClick={() => go(i)} className="text-xs text-blue-700 hover:underline cursor-pointer flex items-center gap-2">
                  <span>📄</span>
                  <span>{i.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Viewport */}
        <div className="flex-1 relative bg-white overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={url} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
              <iframe src={url} className="w-full h-full border-none" title={title} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#ece9d8] border-t border-gray-400 flex items-center justify-between px-2 text-[10px] text-gray-700">
        <span>Done</span>
        <div className="flex items-center gap-4">
          <span className="border-l border-gray-400 pl-4">Internet</span>
          <span className="border-l border-gray-400 pl-4 pr-10">100%</span>
        </div>
      </div>
    </div>
  );
}
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
