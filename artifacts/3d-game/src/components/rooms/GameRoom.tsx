import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BookmarkItem = { name: string; url?: string; note?: string; isEmbed?: boolean };
type SidebarEntry = BookmarkItem & { locked?: boolean };

const SIDEBAR: Record<string, SidebarEntry[]> = {
  "🎮 Online Games": [
    { name: "Boohbah Zone (Flash Archive)", url: "https://archive.org/embed/boobah_zone_flash" },
    { name: "Starfall", url: "https://web.archive.org/web/20121102000000if_/https://www.starfall.com/h/" },
    { name: "JibJab (2010 Archive)", url: "https://web.archive.org/web/20100930163107if_/http://sendables.jibjab.com/" },
    { name: "Moshi Monsters", url: "https://web.archive.org/web/20130126022802if_/https://www.moshimonsters.com/" },
    { name: "WeeWorld (2013 Archive)", url: "https://web.archive.org/web/20130401004346if_/http://www.weeworld.com/" },
    { name: "SmallWorlds (2014 Archive)", url: "https://web.archive.org/web/20120615000000if_/https://www.smallworlds.com/" },
    { name: "Club Penguin (New CP)", url: "https://newcp.net/play" },
    { name: "GirlsGoGames (2015 Archive)", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/" },
    { name: "Poptropica", url: "https://web.archive.org/web/20130815000000if_/https://www.poptropica.com/" },
    { name: "Fantage (2014 Archive)", url: "https://web.archive.org/web/20140920185941if_/http://www.fantage.com/" },
    { name: "MovieStar Planet", note: "💾 Download Only" },
    { name: "Animal Jam", note: "💾 Download Only" },
    { name: "PBS Kids Flash Games", url: "https://flashmuseum.org/browse/developer/pbs" },
    { name: "Nickelodeon Games (Archive)", url: "https://web.archive.org/web/20151127074613if_/http://www.nick.com/games/?navid=topNav" },
    { name: "Disney Flash Games", url: "https://flashmuseum.org/browse/publisher/disney" },
  ],
  "📚 School": [
    { name: "FunBrain", url: "https://web.archive.org/web/20140209111338if_/http://www.funbrain.com/brain/SweepsBrain/sweepsbrain.html" },
    { name: "Ticket to Read", url: "https://web.archive.org/web/20130402034540if_/http://www.tickettoread.com/" },
    { name: "Class Dojo", note: "🔒 Teacher Access Only", locked: true },
    { name: "GoNoodle", note: "🔒 Teacher Access Only", locked: true },
    { name: "Scratch (1dlovzer)", url: "https://scratch.mit.edu/users/1dlovzer/" },
    { name: "Scratch (jazraz)", url: "https://scratch.mit.edu/users/jazraz/" },
    { name: "CoolMath (2012 Archive)", url: "https://web.archive.org/web/20121002000245if_/http://coolmath.com/" },
    { name: "Reading Plus", url: "https://web.archive.org/web/20170628084733if_/https://login.readingplus.com/" },
    { name: "ALEKS", url: "https://web.archive.org/web/20170903182928if_/https://www.aleks.com/" },
  ],
};

const LINKS_BAR: { category: string; icon: string; items: BookmarkItem[] }[] = [
  { category: "Noggin", icon: "🎠", items: [
    { name: "Upside Down Show: Schmancy Schmashup", url: "https://flashmuseum.org/the-upside-down-show-schmancy-schmashup-game/" },
    { name: "The Missing Scribble Sticks", url: "https://flashmuseum.org/the-missing-scribble-sticks/" },
  ]},
  { category: "Starfall", icon: "⭐", items: [
    { name: "Starfall Me", url: "https://web.archive.org/web/20121102000000if_/https://www.starfall.com/h/me/" },
  ]},
  { category: "Girls Go Games", icon: "👗", items: [
    { name: "Shopaholic", url: "https://flashmuseum.org/?s=Shopaholic" },
    { name: "Snail Bob", url: "https://flashmuseum.org/?s=snail+bob" },
    { name: "Frizzle Fraz", url: "https://flashmuseum.org/?s=frizzle+fraz" },
    { name: "Love Tester", url: "https://web.archive.org/web/20150801083101if_/https://www.girlsgogames.com/game/love-tester" },
  ]},
  { category: "CoolMath", icon: "🧮", items: [
    { name: "Run", url: "https://web.archive.org/web/20121002000245if_/https://www.coolmathgames.com/0-run" },
  ]},
  { category: "PBS Kids", icon: "🐾", items: [
    { name: "Alien Assembly Required", url: "https://flashmuseum.org/alien-assembly-required/" },
    { name: "Binky's Facts & Opinions", url: "https://flashmuseum.org/binkys-facts-and-opinions/" },
    { name: "Lunch-o-Matic", url: "https://web.archive.org/web/20151127074613if_/https://pbskids.org/games/play/lunch-o-matic/8517" },
    { name: "Supermarket Adventure", url: "https://flashmuseum.org/supermarket-adventure/" },
  ]},
  { category: "Disney Jr", icon: "🏰", items: [
    { name: "Zooter's Zippin Zip Along", url: "https://flashmuseum.org/zooters-zippin-zip-along/" },
    { name: "Bungo's Silly Sign Shop", url: "https://flashmuseum.org/bungos-silly-sign-shop/" },
    { name: "Oso's Digi Medal Painter", url: "https://flashmuseum.org/osos-digi-medal-painter/" },
  ]},
  { category: "Disney", icon: "✨", items: [
    { name: "Hot Shot Photo Pro", url: "https://www.disney--games.com/hot_shot_photo_pro_313.html" },
    { name: "Maze of Destiny", url: "https://www.disney--games.com/maze_of_destiny_495.html" },
    { name: "Vacation Vehicles", url: "https://www.disney--games.com/vacation_vehicles_525.html" },
  ]},
  { category: "Nick Jr", icon: "🟠", items: [
    { name: "Kai-Lan's Great Trip to China", url: "https://www.numuki.com/game/kai-lan-s-great-trip-to-china/" },
  ]},
  { category: "Nickelodeon", icon: "🎬", items: [
    { name: "iCarly (2012 Archive)", url: "https://web.archive.org/web/20120831030248if_/http://www.icarly.com/" },
    { name: "The Slap (2014 Archive)", url: "https://web.archive.org/web/20140531193706if_/http://www.theslap.com/" },
    { name: "iCarly: The Ultimate Game", url: "https://flashmuseum.org/icarly-the-ultimate-icarly-game/" },
    { name: "Nick Block Party", url: "https://www.numuki.com/game/nick-block-party/" },
    { name: "Ask the Magic Meatball", url: "https://archive.org/embed/ask-the-magic-meatball" },
  ]},
  { category: "Classics", icon: "🍕", items: [
    { name: "Papa's Games", url: "https://flashmuseum.org/?s=papa%27s" },
    { name: "Sara's Cooking Class", url: "https://flashmuseum.org/?s=sara%27s+cooking+class" },
    { name: "Fireboy & Watergirl", url: "https://flashmuseum.org/browse/series/fireboy-and-watergirl-series/" },
  ]},
  { category: "Videos", icon: "📹", items: [
    { name: "Oh California (Starfall)", url: "https://www.youtube.com/embed/GG_KO-UnXBU", isEmbed: true },
    { name: "Moose & Zee: I Don't Like Candy Corn", url: "https://player.vimeo.com/video/20307100?h=a98f92cbf7", isEmbed: true },
  ]},
];

export default function GameRoom() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [currentTitle, setCurrentTitle] = useState("Jasmyn's World — Home");
  const [isEmbed, setIsEmbed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openFolder, setOpenFolder] = useState<string | null>("🎮 Online Games");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [addressBar, setAddressBar] = useState("about:home");
  const [loading, setLoading] = useState(false);

  const navigate = (url: string, title: string, embed = false) => {
    let cleanUrl = url;
    if (cleanUrl.includes("web.archive.org/web/") && !cleanUrl.includes("if_") && !cleanUrl.includes("oe_")) {
      const match = cleanUrl.match(/(\/web\/\d+)/);
      if (match) {
        cleanUrl = cleanUrl.replace(match[1], match[1] + "if_");
      }
    }

    setCurrentUrl(cleanUrl);
    setCurrentTitle(title);
    setIsEmbed(embed);
    setAddressBar(cleanUrl);
    setOpenDropdown(null);
    setStartMenuOpen(false);
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  const goHome = () => {
    setCurrentUrl(null);
    setCurrentTitle("Jasmyn's World — Home");
    setAddressBar("about:home");
    setOpenDropdown(null);
  };

  return (
    <div
      className="w-full h-full flex flex-col bg-[#ece9d8] select-none overflow-hidden text-black"
      style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 12 }}
      onClick={() => { setOpenDropdown(null); setStartMenuOpen(false); }}
    >
      {/* ── IE TITLE BAR ── */}
      <div
        className="flex items-center justify-between px-2 py-0.5 shrink-0"
        style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 28 }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full" style={{ background: "radial-gradient(circle at 40% 35%, #7ad7f0 0%, #0b6cc4 60%, #0a3d8f 100%)" }} />
          </div>
          <span className="text-white text-xs font-bold drop-shadow" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
            {currentTitle} — Internet Explorer
          </span>
        </div>
        <div className="flex gap-0.5">
          {["_","□","✕"].map((s, i) => (
            <button key={i} className="w-6 h-5 text-white text-[10px] font-bold flex items-center justify-center rounded-sm hover:brightness-125"
              style={{ background: i === 2 ? "linear-gradient(180deg,#e05,#b00)" : "linear-gradient(180deg,#6b9bd2,#3a6db0)", border: "1px solid rgba(0,0,0,0.3)" }}
              onClick={i === 2 ? goHome : undefined}
            >{s}</button>
          ))}
        </div>
      </div>

      {/* ── MENU BAR ── */}
      <div className="flex items-center px-1 shrink-0" style={{ background: "#ece9d8", height: 20, borderBottom: "1px solid #aca899" }}>
        {["File","Edit","View","Favorites","Tools","Help"].map(m => (
          <button key={m} className="px-2 h-full hover:bg-[#316ac5] hover:text-white rounded-sm text-[11px]">{m}</button>
        ))}
      </div>

      {/* ── MAIN TOOLBAR ── */}
      <div className="flex items-center gap-1 px-1 py-0.5 shrink-0" style={{ background: "linear-gradient(180deg,#f0efea,#dbd9d0)", borderBottom: "1px solid #aca899", height: 36 }}>
        <button onClick={goHome}
          className="flex flex-col items-center justify-center w-10 h-8 rounded hover:bg-[#c1d3e8] active:bg-[#316ac5] border border-transparent hover:border-[#316ac5]"
          title="Back"
        >
          <span className="text-base">◀</span>
          <span className="text-[7px] text-[#333]">Back</span>
        </button>
        <button
          className="flex flex-col items-center justify-center w-10 h-8 rounded opacity-40 cursor-default"
          title="Forward"
        >
          <span className="text-base">▶</span>
          <span className="text-[7px] text-[#333]">Forward</span>
        </button>
        <button onClick={() => setLoading(true)}
          className="flex flex-col items-center justify-center w-10 h-8 rounded hover:bg-[#c1d3e8] border border-transparent hover:border-[#316ac5]"
          title="Refresh"
        >
          <span className="text-sm">↻</span>
          <span className="text-[7px] text-[#333]">Refresh</span>
        </button>
        <button onClick={goHome}
          className="flex flex-col items-center justify-center w-10 h-8 rounded hover:bg-[#c1d3e8] border border-transparent hover:border-[#316ac5]"
          title="Home"
        >
          <span className="text-sm">🏠</span>
          <span className="text-[7px] text-[#333]">Home</span>
        </button>
        <button
          onClick={() => setSidebarOpen(s => !s)}
          className="flex flex-col items-center justify-center w-14 h-8 rounded hover:bg-[#c1d3e8] border border-transparent hover:border-[#316ac5]"
          title="Favorites"
        >
          <span className="text-sm">⭐</span>
          <span className="text-[7px] text-[#333]">Favorites</span>
        </button>

        <div className="w-px h-6 bg-[#aca899] mx-1" />

        <div className="flex-1 flex items-center gap-1">
          <span className="text-[11px] text-[#333] whitespace-nowrap">Address:</span>
          <div className="flex-1 flex items-center h-6 bg-white border border-[#7f9db9] rounded-sm overflow-hidden">
            <div className="w-5 h-full flex items-center justify-center bg-[#f5f5f5] border-r border-[#c0c0c0]">
              <div className="w-3 h-3 rounded-full" style={{ background: "radial-gradient(circle, #7ad7f0 0%, #0b6cc4 100%)" }} />
            </div>
            <input
              value={addressBar}
              onChange={e => setAddressBar(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && addressBar.startsWith("http")) navigate(addressBar, addressBar); }}
              className="flex-1 px-1 text-[11px] outline-none bg-white"
              style={{ fontFamily: "monospace" }}
            />
          </div>
          <button
            onClick={() => { if (addressBar.startsWith("http")) navigate(addressBar, addressBar); }}
            className="px-2 h-6 bg-gradient-to-b from-[#f0efea] to-[#dbd9d0] border border-[#aca899] rounded-sm hover:bg-[#c1d3e8] text-[11px] font-bold"
          >Go</button>
        </div>
      </div>

      {/* ── LINKS BAR ── */}
      <div
        className="flex items-center gap-0.5 px-2 shrink-0 overflow-x-auto"
        style={{ background: "linear-gradient(180deg,#eeeae2,#dbd6ca)", borderBottom: "1px solid #aca899", height: 24, scrollbarWidth: "none" }}
        onClick={e => e.stopPropagation()}
      >
        <span className="text-[10px] text-[#555] mr-1 whitespace-nowrap">Links:</span>
        {LINKS_BAR.map(cat => (
          <div key={cat.category} className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === cat.category ? null : cat.category)}
              className="flex items-center gap-0.5 px-2 h-5 text-[10px] rounded-sm border border-transparent hover:border-[#316ac5] hover:bg-[#d5e5f5] whitespace-nowrap"
              style={{ color: openDropdown === cat.category ? "#fff" : "#00008b", background: openDropdown === cat.category ? "#316ac5" : "transparent" }}
            >
              {cat.icon} {cat.category} <span className="text-[8px] ml-0.5">▾</span>
            </button>
            <AnimatePresence>
              {openDropdown === cat.category && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute top-full left-0 z-50 bg-white border border-[#7f9db9] shadow-lg min-w-[240px] py-0.5"
                  style={{ marginTop: 1 }}
                  onClick
