import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const d = (b: string) => atob(b);
const AB = d("aHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLw==");

const SG = [
  { n: "Starfall", p: "MjAxMjExMDIwMDAwMDBpZl8vaHR0cHM6Ly93d3cuc3RhcmZhbGwuY29tL2gv" },
  { n: "Moshi Monsters", p: "MjAxMzAxMjYwMjI4MDJpZl8vaHR0cHM6Ly93d3cubW9zaGltb25zdGVycy5jb20v" },
  { n: "Nickelodeon (2015)", p: "MjAxNTExMjcwNzQ2MTNpZl8vaHR0cHM6Ly93d3cubmljay5jb20v" },
  { n: "GirlsGoGames", p: "MjAxNDA3MTUwMDAwMDBpZl8vaHR0cDovL3d3dy5naXJsc2dvZ2FtZXMuY29tLw==" },
  { n: "SmallWorlds", p: "MjAxMjA2MTUwMDAwMDBpZl8vaHR0cDovL3d3dy5zbWFsbHdvcmxkcy5jb20v" },
  { n: "Poptropica", p: "MjAxMzA4MTUwMDAwMDBpZl8vaHR0cDovL3d3dy5wb3B0cm9waWNhLmNvbS8=" },
  { n: "Fantage", p: "MjAxMzA1MTUwMDAwMDBpZl8vaHR0cDovL3d3dy5mYW50YWdlLmNvbS8=" },
  { n: "JibJab", p: "MjAxMTA0MTUwMDAwMDBpZl8vaHR0cDovL3d3dy5qaWJqYWIuY29tLw==" },
  { n: "Scratch", u: "aHR0cHM6Ly9zY3JhdGNoLm1pdC5lZHUvcHJvamVjdHMvZW1iZWQvMTAxMjg0MDAv" },
  { n: "WeeWorld", p: "MjAxMTExMTUwMDAwMDBpZl8vaHR0cDovL3d3dy53ZWV3b3JsZC5jb20v" },
  { n: "Club Penguin", p: "MjAxMzAzMTUwMDAwMDBpZl8vaHR0cDovL3d3dy5jbHVicGVuZ3Vpbi5jb20v" },
  { n: "MovieStar Planet", p: "MjAxNDAyMTUwMDAwMDBpZl8vaHR0cDovL3d3dy5tb3ZpZXN0YXJwbGFuZXQuY29tLw==" },
  { n: "Animal Jam", p: "MjAxNDAxMTUwMDAwMDBpZl8vaHR0cDovL3d3dy5hbmltYWxqYW0uY29tLw==" },
];

export default function GameRoom() {
  const [url, setUrl] = useState(AB + d(SG[0].p!));
  const [title, setTitle] = useState(SG[0].n);

  const nav = (i: any) => {
    const next = i.p ? AB + d(i.p) : d(i.u);
    setUrl(next);
    setTitle(i.n);
  };

  return (
    <div className="flex flex-col h-screen bg-[#ece9d8] font-sans overflow-hidden text-black select-none">
      <div className="h-8 bg-gradient-to-r from-[#0058e6] via-[#3a83f9] to-[#0058e6] flex items-center justify-between px-2 text-white font-bold shadow-inner">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-600 rounded-sm shadow-sm" />
          <span className="text-sm truncate drop-shadow-md">{title} - Microsoft Internet Explorer</span>
        </div>
        <div className="flex gap-1 pr-1">
          <button className="w-6 h-[21px] bg-[#ece9d8] border border-white border-b-gray-400 border-r-gray-400 flex items-center justify-center hover:bg-gray-200"><div className="w-2 h-[2px] bg-black mt-2" /></button>
          <button className="w-6 h-[21px] bg-[#ece9d8] border border-white border-b-gray-400 border-r-gray-400 flex items-center justify-center hover:bg-gray-200"><div className="w-[9px] h-[7px] border-2 border-black border-t-4" /></button>
          <button className="w-[43px] h-[21px] bg-[#e33d2a] border border-white border-b-[#9b2a1c] border-r-[#9b2a1c] flex items-center justify-center hover:bg-[#f24c3d]"><span className="text-white text-xs font-black shadow-sm">✕</span></button>
        </div>
      </div>
      <div className="flex gap-4 px-2 py-0.5 bg-[#ece9d8] border-b border-gray-400 text-xs shadow-sm">
        {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map(m => (<div key={m} className="px-1 hover:bg-[#316ac5] hover:text-white cursor-default rounded-sm">{m}</div>))}
      </div>
      <div className="flex items-center gap-2 p-1 bg-[#ece9d8] border-b border-gray-400 shadow-sm flex-wrap">
        <div className="flex gap-1 items-center px-1">
          <button className="flex flex-col items-center group px-2"><div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-white text-lg shadow-inner group-hover:brightness-110">←</div><span className="text-[10px]">Back</span></button>
          <button className="flex flex-col items-center opacity-50 px-2"><div className="w-7 h-7 rounded-full bg-green-600 flex items-center justify-center text-white text-lg shadow-inner">→</div><span className="text-[10px]">Forward</span></button>
          <button className="flex flex-col items-center group px-2"><div className="text-lg">🔄</div><span className="text-[10px]">Refresh</span></button>
          <button className="flex flex-col items-center group px-2"><div className="text-lg">🏠</div><span className="text-[10px]">Home</span></button>
        </div>
        <div className="h-10 w-[1px] bg-gray-400 mx-1" />
        <div className="flex-1 flex items-center gap-1 ml-2 min-w-[200px]">
          <span className="text-xs">Address</span>
          <div className="flex-1 bg-white border border-gray-500 h-6 flex items-center px-2 text-xs overflow-hidden shadow-inner"><span className="truncate opacity-70">{url}</span></div>
          <button className="px-2 h-6 bg-[#ece9d8] border border-white border-b-gray-400 border-r-gray-400 text-xs hover:bg-gray-200">Go</button>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden bg-white">
        <div className="w-64 bg-[#f1f1f1] border-r border-[#9aaa91] flex flex-col shadow-inner">
          <div className="bg-gradient-to-b from-[#7ba2e7] to-[#6375d6] text-white px-3 py-1.5 font-bold text-sm flex justify-between items-center shadow-md"><span>Favorites</span><span className="cursor-pointer">✕</span></div>
          <div className="p-3 overflow-y-auto">
            <div className="flex items-center gap-1 mb-3 border-b border-gray-300 pb-1"><span className="text-yellow-600 text-lg">⭐</span><h3 className="font-bold text-xs text-[#003399]">Online Games</h3></div>
            <div className="space-y-2 pl-4">
              {SG.map((i) => (<div key={i.n} onClick={() => nav(i)} className="text-xs text-blue-700 hover:underline cursor-pointer flex items-center gap-2 py-0.5"><span className="opacity-70">📄</span><span>{i.n}</span></div>))}
            </div>
          </div>
        </div>
        <div className="flex-1 relative bg-white">
          <AnimatePresence mode="wait"><motion.div key={url} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
              <iframe src={url} className="w-full h-full border-none" title={title} />
          </motion.div></AnimatePresence>
        </div>
      </div>
      <div className="h-6 bg-[#ece9d8] border-t border-gray-400 flex items-center justify-between px-2 text-[10px] text-gray-700">
        <div className="flex items-center gap-2"><span>Done</span></div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 border-l border-gray-400 pl-4 h-full"><div className="w-4 h-4 bg-blue-500 rounded-sm" /><span>Internet</span></div>
          <div className="border-l border-gray-400 pl-4 pr-10 h-full flex items-center">100%</div>
        </div>
      </div>
    </div>
  );
}
