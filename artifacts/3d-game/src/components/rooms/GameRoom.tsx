import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BookmarkItem = { name: string; url?: string; note?: string; isEmbed?: boolean };
type SidebarEntry = BookmarkItem & { locked?: boolean };

const SIDEBAR: Record<string, SidebarEntry[]> = {
  "🎮 Online Games": [
    { name: "Boohbah Zone (Flash Archive)", url: "https://archive.org/embed/boohbah_zone_flash" },
    { name: "Starfall", url: "https://web.archive.org/web/20121102000000if_/https://www.starfall.com/h/" },
    { name: "JibJab (2010 Archive)", url: "https://web.archive.org/web/20100930163107if_/http://sendables.jibjab.com/" },
    { name: "Moshi Monsters", url: "https://moshionline.net/" },
    { name: "WeeWorld (2013 Archive)", url: "https://web.archive.org/web/20130401004346if_/http://www.weeworld.com/" },
    { name: "SmallWorlds (2014 Archive)", url: "https://web.archive.org/web/20140625220230if_/https://www.smallworlds.com/" },
    { name: "Club Penguin (New CP)", url: "https://newcp.net/play" },
    { name: "GirlsGoGames (2015 Archive)", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/" },
    { name: "Poptropica", url: "https://web.archive.org/web/20130815000000if_/https://www.poptropica.com/" },
    { name: "Fantage (2014 Archive)", url: "https://web.archive.org/web/20140920185941if_/http://www.fantage.com/" },
    { name: "MovieStar Planet", note: "💾 Download Only" },
    { name: "Animal Jam", note: "💾 Download Only" },
    { name: "PBS Kids Flash Games", url: "https://web.archive.org/web/20131127074613if_/http://pbskids.org/games/" },
    { name: "Nickelodeon Games (Archive)", url: "https://web.archive.org/web/20151127074613if_/http://www.nick.com/games/?navid=topNav" },
    { name: "Disney Flash Games", url: "https://web.archive.org/web/20131127074613if_/http://disney.go.com/games/" },
  ],
  "📚 School": [
    { name: "FunBrain", url: "https://web.archive.org/web/20140209111338if_/http://www.funbrain.com/brain/SweepsBrain/sweepsbrain.html" },
    { name: "Ticket to Read", url: "https://web.archive.org/web/20130402034540if_/https://www.tickettoread.com/" },
    { name: "Class Dojo", note: "🔒 Teacher Access Only", locked: true },
    { name: "GoNoodle", note: "🔒 Teacher Access Only", locked: true },
    { name: "Scratch (1dlovzer)", url: "https://scratch.mit.edu/projects/embed/275685552/" },
    { name: "Scratch (jazraz)", url: "https://scratch.mit.edu/projects/embed/275685552/" },
    { name: "CoolMath (2012 Archive)", url: "https://web.archive.org/web/20121002000245if_/http://coolmath.com/" },
    { name: "Reading Plus", url: "https://web.archive.org/web/20170628084733if_/https://login.readingplus.com/" },
    { name: "ALEKS", url: "https://web.archive.org/web/20170903182928if_/https://www.aleks.com/" },
  ],
};

const LINKS_BAR: { category: string; icon: string; items: BookmarkItem[] }[] = [
  { category: "Noggin", icon: "🎠", items: [
    { name: "Upside Down Show: Schmancy Schmashup", url: "https://www.numuki.com/game/embed/the-upside-down-show-schmancy-schmashup/" },
    { name: "The Missing Scribble Sticks", url: "https://www.numuki.com/game/embed/the-missing-scribble-sticks/" },
  ]},
  { category: "Starfall", icon: "⭐", items: [
    { name: "Starfall Me", url: "https://web.archive.org/web/20121102000000if_/https://www.starfall.com/h/me/" },
  ]},
  { category: "Girls Go Games", icon: "👗", items: [
    { name: "Shopaholic Models", url: "https://www.numuki.com/game/embed/shopaholic-models/" },
    { name: "Snail Bob", url: "https://www.numuki.com/game/embed/snail-bob/" },
    { name: "Frizzle Fraz", url: "https://www.numuki.com/game/embed/frizzle-fraz/" },
    { name: "Love Tester", url: "https://www.numuki.com/game/embed/love-tester/" },
  ]},
  { category: "CoolMath", icon: "🧮", items: [
    { name: "Run", url: "https://web.archive.org/web/20121002000245if_/https://www.coolmathgames.com/0-run" },
  ]},
  { category: "PBS Kids", icon: "🐾", items: [
    { name: "Alien Assembly Required (Cyberchase)", url: "https://www.numuki.com/game/embed/alien-assembly-required/" },
    { name: "Binky's Facts & Opinions (Arthur)", url: "https://www.numuki.com/game/embed/binkys-facts-and-opinions/" },
    { name: "Lunch-o-Matic", url: "https://www.numuki.com/game/embed/lunch-o-matic/" },
    { name: "Supermarket Adventure (Arthur)", url: "https://www.numuki.com/game/embed/supermarket-adventure/" },
  ]},
  { category: "Disney Jr", icon: "🏰", items: [
    { name: "Zooter's Zippin Zip Along", url: "https://www.numuki.com/game/embed/zooters-zippin-zip-along/" },
    { name: "Bungo's Silly Sign Shop", url: "https://www.numuki.com/game/embed/bungos-silly-sign-shop/" },
    { name: "Oso's Digi Medal Painter", url: "https://www.numuki.com/game/embed/osos-digi-medal-painter/" },
  ]},
  { category: "Disney", icon: "✨", items: [
    { name: "Hannah Montana: Photo Pro", url: "https://www.numuki.com/game/embed/hot-shot-photo-pro/" },
    { name: "Wizards: Maze of Destiny", url: "https://www.numuki.com/game/embed/maze-of-destiny/" },
    { name: "Phineas & Ferb: Vacation Vehicles", url: "https://www.numuki.com/game/embed/vacation-vehicles/" },
  ]},
  { category: "Nick Jr", icon: "🟠", items: [
    { name: "Kai-Lan's Great Trip to China", url: "https://www.numuki.com/game/kai-lan-s-great-trip-to-china/" },
  ]},
  { category: "Nickelodeon", icon: "🎬", items: [
    { name: "iCarly (2012 Archive)", url: "https://web.archive.org/web/20120831030248if_/http://www.icarly.com/" },
    { name: "The Slap (2014 Archive)", url: "https://web.archive.org/web/20140531193706if_/http://www.theslap.com/" },
    { name: "iCarly: The Ultimate Game", url: "https://www.numuki.com/game/embed/icarly-the-ultimate-icarly-game/" },
    { name: "Nick Block Party", url: "https://www.numuki.com/game/embed/nick-block-party/" },
    { name: "Ask the Magic Meatball", url: "https://archive.org/embed/ask-the-magic-meatball" },
  ]},
  { category: "Classics", icon: "🍕", items: [
    { name: "Papa's Pizzeria", url: "https://www.numuki.com/game/embed/papa-s-pizzeria/" },
    { name: "Sara's Cooking Class", url: "https://www.numuki.com/game/embed/saras-cooking-class-cherry-cheesecake/" },
    { name: "Fireboy & Watergirl", url: "https://www.numuki.com/game/embed/fireboy-and-watergirl-1-the-forest-temple/" },
  ]},
  { category: "Videos", icon: "📹", items: [
    { name: "Oh California (Starfall)", url: "https://www.youtube.com/embed/GG_KO-UnXBU", isEmbed: true },
    { name: "Moose & Zee: I Don't Like Candy Corn", url: "https://player.vimeo.com/video/20307100?h=a98f92cbf7", isEmbed: true },
  ]},
];

const USER_PICTURES = [
  "https://lh3.googleusercontent.com/pw/AP1GczO9h7ZueRzC2Ku5DbYT4-QXm4rVm6GnXcG2ksbDC_O4CnJy14GMmk-QcGEMr0MWdnD_5fjedssjwHyYn12gp2MukVui42cTBfNxA2xsxAOkYZLIx1wyV1dXHQ1V9I4yZvoxYpFsOKHWGFzDgRbrJX4OGQ=w710-h947-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczPLFsT4WiNiCMIM5J541J_Ka3FoiV_kml4HfUj7nhrVaBpkxqptdpPdkQdQaUoiY7Uz2UZXIPdqnkDs1PQkwu8Pqx1kaVbGARz9baY8VTA8fTsAukb_cI1zOj6InO-s5-e6-C4tZzORsPwSO7OezUJOHg=w710-h947-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczPHTSK8fyI6TLKwklNU0i2B2c54Gv0xVrjdV0EVz-HATLXAJ6JK59PWf8hZh5UEM2QaMmqGRQ3Ybfq138zDqXYrfqc-Zygbn-im2yue13TdSETrKEoZRwecTljs_Be6-ouFUJpyeQY1GVBOcoZlxVbynA=w993-h560-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczPqn4yWYgvvod_k5pg3mA17q67ah1rWV17ssbSdVxJrg3dnp5fMa6qqnnWwUWFxNDIVV08xBJgTRxtO_oYjoYrQdAlkmatK5j66qVKE5IAXaQnpuD__hQvrMPQ1pw0MnqBpPm5nh2y60FR5o6sz133zGg=w993-h818-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczPFLa8beCIaNERaYmN7lPXqxo8E2AstSE7rb7wpxK7wHFypTTd_Awms1vRDTaZV0g4AsatPpIR79BHhdt8XtHmZVYKY72ybZmMy6wDUfyTe2ZJv_HcIX9E8CeeaHwdicf-nxcJuWTClOKiuxJToLRPNJQ=w675-h900-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczP-XoUH6OZOTO4bfOIqwPCJP89y-vvtVyJ5DvHzja_Fx9mvl4UHv_9H1OYELQY1eR0yAGZfTcmlbkSqgIjV90B0zVhjU1bLsejtQk_bovl7GonK36odvFz85Jswv0xjv4wFsFKl0cKCIb_8cqjttS1pFg=w993-h572-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczPX9vaPGC1sZmhWSvBadJdtlnvqzh4_vBW4T-PumEkF2HyNmyCbCHVIUri7AXLs6eiqPgdq5qFE3g3b_JygG7pdXpUbrpSIPrWw-oGUvyhMghs4jiYlz5ExUFRfGldy8_24ZoFIYRDqN_lf1Z4mn5Y4oA=w993-h746-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczNiDK1pk_cmITa1c8O_Cz7WF05tUL_XuokAfmcOUKFUp2-8GDVMWi9OXyNSEtvr4T76BxOmVsZEXXmAqUb50yvQvfVlMnjkLqFHF3e7_uSWv8Q-HE1oOaYNw7xrlTrbPR7nmgmaQQQ2aEdqYsKiLkyQRQ=w993-h746-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczOf1W-Rw-ktzY6alBAnXlKW240cfoywlWl_vUTRI8Y2TzrnsdXPdx47vvw5kCk6A7yL8hHrYJrOuhKI0qLEveKpAf0oGQUExZr-93sMD-_MUN5HR56nXkG4AtVNmYFyWefSpXrA_AFUnFT9TBpEobdWdA=w710-h947-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczNkIBuOWYmh4psNaPMof9faWkBJmi_l14GAdgs4FlvlgUgdlve6L769pb7kyYxznJ3o7TWk5qVmTs6yp-TdEq4L5NiT63It1eOpe6xSoIksrxf0YTiOYAhy3L-YMPp1VqqubEkrwZYWMMXn7pYFDQCVYw=w1262-h947-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczNifPONBuEurNIqHsVRtut9WgUt-WEO7aDzeTw7y4oRkc5bk7WOHQUqHs9DNFUFm2Wf9fVIpGy6b33LhXYId3v_VtWA3TVJev1s3V1BryZ1UTahfOjWdNOUx9GwM_SFE1p7yVX7rQdyLFmI9WpouSVojg=w1262-h947-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczNKdQrnPXwzMpysoBgQTAQergpZPbUn5L9Ca8TdasOiGriA4sdHjTD55yqfvRGH4qbZ-R89ovX1KXpIWicRhGS5EQquNMQ79dn3ELC2ZYQTguBi0uxgcUxu8diTmw1tKgLQ-QsNJn2-5e44-CqBGY1I_w=w710-h947-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczO7SaZMny7NGEljPsCV_1qFpp4AjvDOGyFB6fnjYPMSfjAZnwBxetG5CVGe8LLgrWACE708V1lFwJltxsjcfqUncVHiHus9KIWEFmXtMwJELDFm_ayPSc-QEXa5WHsYcRIg4cxvnIZ57XFTqEE69lQRyA=w1262-h947-s-no-gm",
  "https://lh3.googleusercontent.com/pw/AP1GczP1xM94hC6Gt24piPlLo5pyephWAqGETFH4DOamsaxzyNKESB1eCfx3k6bE56_P90ulbtQDtyMwnz769A6cCSzN2REdMLetZUMUc5HAO4x8a8NEyQiE42gmtTdmSX4TnZSudm808F8ohozFaX9oYQygvg=w512-h384-s-no-gm"
];

export default function GameRoom() {
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [currentTitle, setCurrentTitle] = useState("Jasmyn's World — Home");
  const [isEmbed, setIsEmbed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openFolder, setOpenFolder] = useState<string | null>("🎮 Online Games");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [picturesWindowOpen, setPicturesWindowOpen] = useState(false);
  const [activeLightboxPic, setActiveLightboxPic] = useState<string | null>(null);
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
      className="w-full h-full flex flex-col bg-[#ece9d8] select-none overflow-hidden text-black relative z-0"
      style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 12 }}
      onClick={() => { setOpenDropdown(null); setStartMenuOpen(false); }}
    >
      {/* ── IE TITLE BAR ── */}
      <div
        className="flex items-center justify-between px-2 py-0.5 shrink-0 relative z-30"
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
      <div className="flex items-center px-1 shrink-0 relative z-30" style={{ background: "#ece9d8", height: 20, borderBottom: "1px solid #aca899" }}>
        {["File","Edit","View","Favorites","Tools","Help"].map(m => (
          <button key={m} className="px-2 h-full hover:bg-[#316ac5] hover:text-white rounded-sm text-[11px]">{m}</button>
        ))}
      </div>

      {/* ── MAIN TOOLBAR ── */}
      <div className="flex items-center gap-1 px-1 py-0.5 shrink-0 relative z-30" style={{ background: "linear-gradient(180deg,#f0efea,#dbd9d0)", borderBottom: "1px solid #aca899", height: 36 }}>
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
          disabled
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
        className="flex items-center gap-0.5 px-2 shrink-0 overflow-visible relative z-40"
        style={{ background: "linear-gradient(180deg,#eeeae2,#dbd6ca)", borderBottom: "1px solid #aca899", height: 24 }}
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
                  onClick={e => e.stopPropagation()}
                >
                  {cat.items.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => item.url && navigate(item.url, item.name, item.isEmbed)}
                      className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[11px] hover:bg-[#316ac5] hover:text-white"
                      style={{ color: "#00008b" }}
                    >
                      <span>{item.isEmbed ? "🎥" : "🌐"}</span>
                      {item.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* Favorites Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 220, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col overflow-hidden shrink-0"
              style={{ borderRight: "1px solid #aca899", background: "#f5f3ee" }}
            >
              <div className="flex items-center justify-between px-3 py-1.5 shrink-0" style={{ background: "linear-gradient(90deg,#2559b5,#4e82d0)", borderBottom: "1px solid #aca899" }}>
                <span className="text-white text-xs font-bold">Favorites</span>
                <button onClick={() => setSidebarOpen(false)} className="text-white text-xs hover:bg-white/20 w-4 h-4 flex items-center justify-center rounded">✕</button>
              </div>

              <div className="flex-1 overflow-y-auto p-1">
                {Object.entries(SIDEBAR).map(([folder, items]) => (
                  <div key={folder}>
                    <button
                      onClick={() => setOpenFolder(openFolder === folder ? null : folder)}
                      className="w-full flex items-center gap-1.5 px-2 py-1 text-left text-[11px] font-bold hover:bg-[#c1d3e8] rounded"
                      style={{ color: "#00008b" }}
                    >
                      <span className="text-xs">{openFolder === folder ? "▾" : "▸"}</span>
                      <span className="text-sm">{openFolder === folder ? "📂" : "📁"}</span>
                      <span>{folder}</span>
                    </button>
                    <AnimatePresence>
                      {openFolder === folder && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          {items.map((item, i) => (
                            <button
                              key={i}
                              onClick={() => item.url && navigate(item.url, item.name)}
                              disabled={!item.url}
                              className="w-full flex items-center gap-1.5 px-5 py-1 text-left text-[11px] hover:bg-[#316ac5] hover:text-white rounded disabled:cursor-default"
                              style={{ color: item.url ? "#00008b" : "#888" }}
                            >
                              <span className="shrink-0">{item.locked ? "🔒" : item.note?.includes("💾") ? "💾" : "🌐"}</span>
                              <span className="truncate">{item.name}</span>
                              {item.note && !item.url && (
                                <span className="ml-auto text-[9px] text-[#888] whitespace-nowrap shrink-0">{item.note}</span>
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Page Content */}
        <div className="flex-1 relative overflow-hidden bg-white z-0">
          {currentUrl ? (
            <>
              {loading && (
                <div className="absolute inset-0 z-10 bg-white flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-4 border-[#316ac5] border-t-transparent rounded-full animate-spin" />
                    <span className="text-[#00008b] text-sm">Loading...</span>
                  </div>
                </div>
              )}
              <iframe
                key={currentUrl}
                src={currentUrl}
                className="w-full h-full border-none relative z-0"
                title={currentTitle}
                allow="autoplay; encrypted-media; fullscreen; gamepad; screen-wake-lock"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                onLoad={() => setLoading(false)}
              />
            </>
          ) : (
            <div className="w-full h-full overflow-y-auto" style={{ background: "linear-gradient(135deg, #e8f4ff 0%, #f0e8ff 100%)" }}>
              <div className="max-w-2xl mx-auto p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full" style={{ background: "radial-gradient(circle at 40% 35%, #7ad7f0 0%, #0b6cc4 60%, #0a3d8f 100%)" }} />
                    <h1 className="text-2xl font-bold" style={{ color: "#003399", fontFamily: "Tahoma" }}>Jasmyn's Internet Explorer</h1>
                  </div>
                  <p className="text-sm text-gray-500">Welcome back, Jasmyn! ⭐</p>
                </div>

                <div className="bg-white border border-[#7f9db9] rounded shadow-sm p-4 mb-4">
                  <h2 className="text-[#003399] font-bold text-sm mb-3 border-b border-[#c0d8f0] pb-1">⭐ Quick Launch — Click to play!</h2>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: "Club Penguin", url: "https://newcp.net/play", icon: "🐧" },
                      { name: "Starfall", url: "https://web.archive.org/web/20121102000000if_/https://www.starfall.com/h/", icon: "⭐" },
                      { name: "Moshi Monsters", url: "https://moshionline.net/", icon: "👾" },
                      { name: "Poptropica", url: "https://web.archive.org/web/20130815000000if_/https://www.poptropica.com/", icon: "🏝️" },
                      { name: "PBS Kids Games", url: "https://web.archive.org/web/20131127074613if_/http://pbskids.org/games/", icon: "🐾" },
                      { name: "CoolMath: Run", url: "https://web.archive.org/web/20121002000245if_/https://www.coolmathgames.com/0-run", icon: "🧮" },
                      { name: "Papa's Pizzeria", url: "https://www.numuki.com/game/embed/papa-s-pizzeria/", icon: "🍕" },
                      { name: "Fireboy & Watergirl", url: "https://www.numuki.com/game/embed/fireboy-and-watergirl-1-the-forest-temple/", icon: "🔥" },
                      { name: "Boohbah", url: "https://archive.org/embed/boohbah_zone_flash", icon: "🟣" },
                    ].map(item => (
                      <button
                        key={item.name}
                        onClick={() => navigate(item.url, item.name)}
                        className="flex items-center gap-2 p-2 text-left text-[11px] border border-[#c0d8f0] rounded hover:bg-[#e8f0fb] hover:border-[#316ac5] transition-colors"
                        style={{ color: "#00008b" }}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-bold">{item.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-[#7f9db9] rounded shadow-sm p-4 mb-4">
                  <h2 className="text-[#003399] font-bold text-sm mb-3 border-b border-[#c0d8f0] pb-1">📹 Videos</h2>
                  <div className="flex gap-3">
                    {[
                      { name: "Oh California (Starfall)", url: "https://www.youtube.com/embed/GG_KO-UnXBU", icon: "🎵" },
                      { name: "Moose & Zee: Candy Corn", url: "https://player.vimeo.com/video/20307100?h=a98f92cbf7", icon: "🦌" },
                    ].map(v => (
                      <button
                        key={v.name}
                        onClick={() => navigate(v.url, v.name, true)}
                        className="flex items-center gap-2 px-3 py-2 border border-[#c0d8f0] rounded hover:bg-[#e8f0fb] hover:border-[#316ac5] text-[11px]"
                        style={{ color: "#00008b" }}
                      >
                        <span className="text-xl">{v.icon}</span>
                        <span className="font-bold">{v.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-[#fffbe6] border border-[#e6c800] rounded p-3 text-[11px] text-[#665500]">
                  <strong>💡 Tip:</strong> Use the <strong>Favorites ⭐</strong> button on the toolbar to browse all games by category. Use the <strong>Links bar</strong> above for quick access to specific games!
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── POPUP WINDOW: MY PICTURES ── */}
      <AnimatePresence>
        {picturesWindowOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-16 left-1/4 w-1/2 h-2/3 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl z-50 flex flex-col overflow-hidden text-black"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-2 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 26 }}>
              <span className="text-white text-xs font-bold flex items-center gap-1">📂 My Pictures</span>
              <button onClick={() => setPicturesWindowOpen(false)} className="w-5 h-4 bg-gradient-to-b from-[#e05] to-[#b00] border border-black/30 rounded text-white text-[10px] font-bold flex items-center justify-center hover:brightness-110">✕</button>
            </div>
            <div className="flex-1 bg-white p-4 overflow-y-auto grid grid-cols-3 gap-3">
              {USER_PICTURES.map((pic, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveLightboxPic(pic)}
                  className="border border-[#aca899] p-1 bg-[#f5f3ee] rounded shadow-sm hover:border-[#316ac5] hover:bg-[#e8f0fb] flex flex-col items-center cursor-pointer transition-colors"
                >
                  <img src={pic} alt={`Pic ${idx + 1}`} className="w-full h-24 object-cover border border-white" />
                  <span className="text-[10px] text-gray-600 mt-1 truncate max-w-full">picture_{idx + 1}.jpg</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LIGHTBOX OVERLAY (CLICK TO EXPAND IMAGES) ── */}
      <AnimatePresence>
        {activeLightboxPic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxPic(null)}
            className="absolute inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg max-w-[85%] max-h-[85%] flex flex-col shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-3 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 26 }}>
                <span className="text-white text-xs font-bold truncate">Windows Picture and Fax Viewer</span>
                <button onClick={() => setActiveLightboxPic(null)} className="w-5 h-4 bg-gradient-to-b from-[#e05] to-[#b00] border border-black/30 rounded text-white text-[10px] font-bold flex items-center justify-center hover:brightness-110">✕</button>
              </div>
              <div className="p-3 bg-[#7f7f7f] flex items-center justify-center overflow-hidden">
                <img src={activeLightboxPic} alt="Expanded Preview" className="max-w-full max-h-[65vh] object-contain border border-black shadow-lg bg-white" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── STATUS BAR ── */}
      <div className="flex items-center px-2 shrink-0 border-t border-[#aca899] relative z-30" style={{ background: "#ece9d8", height: 20 }}>
        <div className="flex-1 text-[10px] text-[#555]">
          {loading ? "Opening page..." : currentUrl ? `Done | ${currentUrl.substring(0, 60)}${currentUrl.length > 60 ? "..." : ""}` : "Ready"}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full" style={{ background: "radial-gradient(circle, #7ad7f0 0%, #0b6cc4 100%)" }} />
          <span className="text-[10px] text-[#555]">Internet Explorer</span>
        </div>
      </div>

      {/* ── XP TASKBAR ── */}
      <div className="h-10 shrink-0 flex items-center px-1 gap-1 relative z-30" style={{ background: "linear-gradient(180deg,#245edb 0%,#3f8cf3 40%,#245edb 100%)", borderTop: "1px solid #1a4bb8" }}>
        <button
          onClick={e => { e.stopPropagation(); setStartMenuOpen(!startMenuOpen); }}
          className="h-8 px-3 flex items-center gap-1.5 rounded-r-xl rounded-l-sm text-white font-bold italic text-sm shadow-inner hover:brightness-110"
          style={{ background: "linear-gradient(180deg,#349c42,#298334)", border: "1px solid #1d6b26" }}
        >
          <div className="grid grid-cols-2 gap-px w-3.5 h-3.5">
            <div className="rounded-tl bg-red-500" /><div className="rounded-tr bg-green-400" />
            <div className="rounded-bl bg-blue-500" /><div className="rounded-br bg-yellow-400" />
          </div>
          start
        </button>

        {currentUrl && (
          <div className="h-8 px-3 flex items-center gap-1 bg-[#1f50b5] border border-[#123681] rounded-sm text-white text-xs max-w-[200px] truncate shadow-inner">
            🌐 {currentTitle}
          </div>
        )}

        <div className="ml-auto h-8 px-3 flex items-center text-white text-xs bg-[#0d8ee8] border border-[#095ea8] rounded-sm shadow-inner" style={{ fontFamily: "Tahoma" }}>
          4:20 PM
        </div>

        {/* Start Menu Popup */}
        <AnimatePresence>
          {startMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-10 left-0 w-72 bg-[#ece9d8] rounded-t-lg shadow-[0_-5px_20px_rgba(0,0,0,0.3)] border border-[#0055e5] overflow-hidden z-50 text-black"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-14 bg-gradient-to-r from-[#0b3394] to-[#1250d4] flex items-center px-4 gap-3 border-b-2 border-orange-400">
                <div className="w-10 h-10 bg-pink-400 border-2 border-white rounded-md" />
                <span className="text-white font-bold text-lg drop-shadow">Jasmyn</span>
              </div>
              <div className="flex min-h-[220px]">
                <div className="flex-1 bg-white p-2 flex flex-col gap-0.5">
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold text-black">Internet Explorer</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold text-black">AIM</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold text-black">Limewire</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold text-black">Pinball</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold text-black">Minesweeper</div>
                </div>
                <div className="w-1/3 bg-[#d3e5fa] border-l border-[#95bcee] p-2 flex flex-col gap-0.5 text-[11px] text-[#00136b] font-bold">
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer">My Documents</div>
                  <div onClick={() => { setPicturesWindowOpen(true); setStartMenuOpen(false); }} className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-[#00136b]">My Pictures</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer">Control Panel</div>
                </div>
              </div>
              <div className="h-10 bg-gradient-to-r from-[#0b3394] to-[#1250d4] flex items-center justify-end px-4 gap-2">
                <button className="text-white text-xs flex items-center gap-1 hover:underline">
                  <div className="w-4 h-4 bg-orange-500 rounded-sm" /> Log Off
                </button>
                <button onClick={goHome} className="text-white text-xs flex items-center gap-1 hover:underline">
                  <div className="w-4 h-4 bg-red-500 rounded-sm" /> Turn Off
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
