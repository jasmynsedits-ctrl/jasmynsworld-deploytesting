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
    { name: "Upside Down Show: Schmancy Schmashup", url: "https://web.archive.org/web/20151127074613if_/http://www.nickjr.com/the-upside-down-show/games/schmancy-schmashup/" },
    { name: "The Missing Scribble Sticks", url: "https://web.archive.org/web/20120101000000if_/http://www.noggin.com/games/scribble-sticks.php" },
  ]},
  { category: "Starfall", icon: "⭐", items: [
    { name: "Starfall Me", url: "https://web.archive.org/web/20121102000000if_/https://www.starfall.com/h/me/" },
  ]},
  { category: "Girls Go Games", icon: "👗", items: [
    { name: "Shopaholic Models", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/game/shopaholic_models.html" },
    { name: "Snail Bob", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/game/snail_bob.html" },
    { name: "Frizzle Fraz", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/game/frizzle_fraz.html" },
    { name: "Love Tester", url: "https://web.archive.org/web/20150801083101if_/https://www.girlsgogames.com/game/love-tester" },
  ]},
  { category: "CoolMath", icon: "🧮", items: [
    { name: "Run", url: "https://web.archive.org/web/20121002000245if_/https://www.coolmathgames.com/0-run" },
  ]},
  { category: "PBS Kids", icon: "🐾", items: [
    { name: "Alien Assembly Required (Cyberchase)", url: "https://web.archive.org/web/20101010000000if_/http://pbskids.org/cyberchase/games/alienassembly/" },
    { name: "Binky's Facts & Opinions (Arthur)", url: "https://web.archive.org/web/20101010000000if_/http://pbskids.org/arthur/games/factsopinions/" },
    { name: "Lunch-o-Matic", url: "https://web.archive.org/web/20151127074613if_/https://pbskids.org/games/play/lunch-o-matic/8517" },
    { name: "Supermarket Adventure (Arthur)", url: "https://web.archive.org/web/20101010000000if_/http://pbskids.org/arthur/games/supermarket/" },
  ]},
  { category: "Disney Jr", icon: "🏰", items: [
    { name: "Zooter's Zippin Zip Along", url: "https://web.archive.org/web/20120101000000if_/http://disney.go.com/disneyjunior/jungle-junction/games/" },
    { name: "Bungo's Silly Sign Shop", url: "https://web.archive.org/web/20120101000000if_/http://disney.go.com/disneyjunior/special-agent-oso/games/" },
    { name: "Oso's Digi Medal Painter", url: "https://web.archive.org/web/20120101000000if_/http://disney.go.com/disneyjunior/special-agent-oso/games/digi-medal-painter.html" },
  ]},
  { category: "Disney", icon: "✨", items: [
    { name: "Hannah Montana: Hot Shot Photo Pro", url: "https://web.archive.org/web/20100101000000if_/http://disney.go.com/hannahmontana/games/" },
    { name: "Wizards: Maze of Destiny", url: "https://web.archive.org/web/20100101000000if_/http://disney.go.com/wizards/games/" },
    { name: "Good Luck Charlie: Vacation Vehicles", url: "https://web.archive.org/web/20110401000000if_/http://disney.go.com/disneychannel/originalmovies/goodluckcharlie/games/" },
  ]},
  { category: "Nick Jr", icon: "🟠", items: [
    { name: "Kai-Lan's Great Trip to China", url: "https://web.archive.org/web/20101010000000if_/http://www.nickjr.com/ni-hao-kai-lan/games/kai-lans-great-trip-to-china/" },
  ]},
  { category: "Nickelodeon", icon: "🎬", items: [
    { name: "iCarly (2012 Archive)", url: "https://web.archive.org/web/20120831030248if_/http://www.icarly.com/" },
    { name: "The Slap (2014 Archive)", url: "https://web.archive.org/web/20140531193706if_/http://www.theslap.com/" },
    { name: "iCarly: The Ultimate Game", url: "https://web.archive.org/web/20120831030248if_/http://www.icarly.com/games/ultimate-game.html" },
    { name: "Nick Block Party", url: "https://web.archive.org/web/20140101000000if_/http://www.nick.com/games/nick-block-party.html" },
    { name: "Ask the Magic Meatball", url: "https://archive.org/embed/ask-the-magic-meatball" },
  ]},
  { category: "Classics", icon: "🍕", items: [
    { name: "Papa's Pizzeria", url: "https://web.archive.org/web/20130101000000if_/http://www.coolmathgames.com/0-papas-pizzeria" },
    { name: "Sara's Cooking Class", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/game/saras_cooking_class_cherry_cheesecake.html" },
    { name: "Fireboy & Watergirl", url: "https://web.archive.org/web/20130101000000if_/http://www.coolmathgames.com/0-fireboy-watergirl-forest-temple" },
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

const getIsoCoords = (x: number, y: number, tileWidth = 64, tileHeight = 32) => {
  const screenX = (x - y) * (tileWidth / 2);
  const screenY = (x + y) * (tileHeight / 2);
  return { left: screenX, top: screenY };
};

export default function GameRoom() {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [currentTitle, setCurrentTitle] = useState("Jasmyn's World — Home");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openFolder, setOpenFolder] = useState<string | null>("🎮 Online Games");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
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

  const gridSize = 8;
  const tileW = 64;
  const tileH = 32;

  return (
    <div className="w-full h-full bg-[#160f24] text-white relative font-sans overflow-hidden select-none flex items-center justify-center">
      
      {/* ── MAP BACK NAVIGATION BUTTON ── */}
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#2d1b4e]/80 border-2 border-[#6b4aa5] rounded-full text-xs font-bold tracking-wide hover:bg-[#492e7c] transition-all shadow-lg active:scale-95"
        >
          ← Back to Map
        </button>
      </div>

      {/* ── DEFINED RETRO HABBO ISOMETRIC WORLD CONTAINER ── */}
      <div className="relative scale-110 transform translate-y-[-20px]" style={{ width: gridSize * tileW, height: gridSize * tileH * 2.5 }}>
        
        {/* ── PIXEL PANELLED BACKGROUND WALLS ── */}
        {/* Left Isometric Wall */}
        <div 
          className="absolute origin-top-left bg-[#2b1c40] border-r-4 border-t-4 border-[#140b21] shadow-2xl"
          style={{
            width: gridSize * tileW / Math.sqrt(2),
            height: 200,
            transform: "rotate(30deg) skewX(-30deg) translate(-218px, -114px)",
            zIndex: 1,
            backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 31px, #180e26 31px, #180e26 32px)",
            boxShadow: "inset -10px 0 20px rgba(0,0,0,0.4)"
          }}
        />

        {/* Right Isometric Wall */}
        <div 
          className="absolute origin-top-right bg-[#35234e] border-l-4 border-t-4 border-[#140b21] shadow-2xl"
          style={{
            width: gridSize * tileW / Math.sqrt(2),
            height: 200,
            transform: "rotate(-30deg) skewX(30deg) translate(218px, -114px)",
            zIndex: 1,
            backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 31px, #1c102b 31px, #1c102b 32px)",
            boxShadow: "inset 10px 0 20px rgba(0,0,0,0.4)"
          }}
        />

        {/* ── FLOORTILE COORDINATE SURFACE GRID ── */}
        <div className="absolute top-[180px] left-1/2 transform translate-x-[-50%] relative">
          {Array.from({ length: gridSize }).map((_, x) =>
            Array.from({ length: gridSize }).map((_, y) => {
              const coords = getIsoCoords(x, y, tileW, tileH);
              return (
                <div
                  key={`${x}-${y}`}
                  className="absolute border border-[#1b0f30] bg-[#49316d] hover:bg-[#5a3f85] transition-colors duration-150"
                  style={{
                    width: tileW,
                    height: tileH,
                    left: coords.left,
                    top: coords.top,
                    transform: "rotateX(60deg) rotateZ(45deg)",
                    zIndex: 2,
                    boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.05)"
                  }}
                />
              );
            })
          )}

          {/* ── HIGH-DEFINED RETRO BED SPRITE ── */}
          {(() => {
            const coords = getIsoCoords(2, 1, tileW, tileH);
            return (
              <div 
                onClick={() => setActiveWindow("bed")}
                className="absolute cursor-pointer group"
                style={{ left: coords.left + 4, top: coords.top + 55, zIndex: 12 }}
              >
                <div className="relative w-28 h-24 transform transition-transform duration-200 group-hover:translate-y-[-4px]">
                  {/* Outer Bed Base Frame (Dark Plum Outlines) */}
                  <div className="absolute bottom-0 left-0 w-full h-10 bg-[#351c4f] border-2 border-[#120521] rounded-xs shadow-md">
                    {/* Front Bed Foot Posts */}
                    <div className="absolute -bottom-1 left-1 w-2 h-3 bg-[#1c0c2b] border border-black" />
                    <div className="absolute -bottom-1 right-1 w-2 h-3 bg-[#1c0c2b] border border-black" />
                  </div>
                  {/* Layered Lilac Mattress Layer */}
                  <div className="absolute bottom-3 left-1 w-[104px] h-12 bg-[#8c5bc4] border-2 border-[#120521] rounded-xs">
                    {/* Folded Duvet Accent Line */}
                    <div className="absolute top-0 right-0 w-10 h-full bg-[#7544ad] border-l border-[#120521]" />
                  </div>
                  {/* Defined Pillows with Borders */}
                  <div className="absolute top-1 left-3 w-8 h-6 bg-white border-2 border-[#120521] rounded-sm shadow-xs transform rotate-[-4deg]" />
                  <div className="absolute top-2 left-12 w-8 h-6 bg-white border-2 border-[#120521] rounded-sm shadow-xs transform rotate-[4deg]" />
                  {/* Floating Tag Indicator */}
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#120521]/80 text-[#d8b4fe] text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Bed Log</span>
                </div>
              </div>
            );
          })()}

          {/* ── HIGH-DEFINED COMPUTER DESK & CRT MONITOR ── */}
          {(() => {
            const coords = getIsoCoords(5, 2, tileW, tileH);
            return (
              <div 
                onClick={() => setActiveWindow("computer")}
                className="absolute cursor-pointer group"
                style={{ left: coords.left + 16, top: coords.top + 50, zIndex: 18 }}
              >
                <div className="relative w-24 h-28 flex flex-col items-center justify-end transform transition-transform duration-200 group-hover:translate-y-[-4px]">
                  
                  {/* Retro CRT Computer Monitor Sprite */}
                  <div className="w-16 h-14 bg-[#e6e2d3] border-2 border-[#1a1915] rounded shadow-md p-1 flex flex-col items-center justify-center relative mb-1">
                    {/* Inner Bezel Border */}
                    <div className="w-full h-10 bg-[#2b2a26] border border-[#1a1915] rounded-xs p-0.5 flex items-center justify-center">
                      {/* Active Blue Desktop Screen Area */}
                      <div className="w-full h-full bg-[#0055e5] rounded-xs animate-pulse flex items-center justify-center text-[8px] text-white font-bold tracking-tighter shadow-inner" style={{ textShadow: "1px 1px 0px #0022aa" }}>
                        IE_XP
                      </div>
                    </div>
                    {/* Monitor Ventilation Grill Marks */}
                    <div className="absolute top-0.5 w-8 h-0.5 bg-[#b5b1a1] flex justify-between px-1"><div className="w-0.5 h-full bg-black/40"/><div className="w-0.5 h-full bg-black/40"/><div className="w-0.5 h-full bg-black/40"/></div>
                    {/* Screen Stand Pivot Neck */}
                    <div className="absolute -bottom-2 w-4 h-2 bg-[#bda891] border-x-2 border-b-2 border-[#1a1915]" />
                  </div>

                  {/* Desktop Keyboard Sprite */}
                  <div className="w-12 h-2 bg-[#dedaca] border border-[#1a1915] shadow-xs mb-0.5 z-10 relative transform rotateX(20deg)" />

                  {/* Wood-Panel Tabletop Surface */}
                  <div className="w-24 h-4 bg-[#7a4b26] border-2 border-[#1a1915] shadow-md relative rounded-xs">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#a36837]" />
                  </div>

                  {/* Detailed Desk Base Legs */}
                  <div className="flex justify-between w-20 h-10 px-1">
                    <div className="w-2 h-full bg-[#2b2a26] border-x border-b border-black shadow-sm" />
                    <div className="w-2 h-full bg-[#2b2a26] border-x border-b border-black shadow-sm" />
                  </div>
                  
                  {/* Floating Tag Label */}
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1a1915]/80 text-[#ffe599] text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">Terminal</span>
                </div>
              </div>
            );
          })()}

          {/* ── HIGH-DEFINED RETRO ACCENT CHEST TOYBOX ── */}
          {(() => {
            const coords = getIsoCoords(1, 5, tileW, tileH);
            return (
              <div 
                onClick={() => setActiveWindow("toybox")}
                className="absolute cursor-pointer group"
                style={{ left: coords.left + 12, top: coords.top + 65, zIndex: 16 }}
              >
                <div className="w-20 h-16 bg-[#9c6233] border-2 border-[#1f1105] shadow-xl relative flex flex-col items-center justify-start rounded-xs transform transition-transform duration-200 group-hover:translate-y-[-4px]">
                  {/* Reinforced Heavy Wooden Lid Panel */}
                  <div className="w-[84px] h-4 bg-[#bd7e4a] border-b-2 border-t border-x border-[#1f1105] rounded-t-xs shadow-xs relative">
                    <div className="absolute top-0.5 left-1 w-[74px] h-0.5 bg-[#e09e67]" />
                  </div>
                  {/* Gold Metal Corner Trim Accents */}
                  <div className="absolute top-4 left-0 w-1.5 h-10 bg-[#e0b434] border-r border-b border-[#1f1105]" />
                  <div className="absolute top-4 right-0 w-1.5 h-10 bg-[#e0b434] border-l border-b border-[#1f1105]" />
                  {/* Heavy Iron Padlock / Latch Plate */}
                  <div className="w-4 h-5 bg-[#e0b434] border border-[#1f1105] rounded-xs mt-1 shadow relative flex items-center justify-center">
                    <div className="w-1 h-2 bg-black rounded-full" />
                  </div>
                  <span className="absolute bottom-1 text-[8px] font-bold text-[#ffd966] tracking-widest opacity-60 group-hover:opacity-100 uppercase">Chest</span>
                </div>
              </div>
            );
          })()}

        </div>
      </div>

      {/* Ambient HUD Control Bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-[#0e081c]/95 px-6 py-2.5 rounded-xl border border-[#492d7e] shadow-2xl backdrop-blur-md flex items-center gap-6">
        <p className="text-[11px] font-bold tracking-wide text-[#c0a3ff]">
          🏨 **Jasmyn's Profile Core:** Click the defined room assets to activate portfolio snapshots and legacy components.
        </p>
      </div>

      {/* ── POPUP WINDOW: INTERACTIVE OS STATION (COMPUTER CLICK) ── */}
      <AnimatePresence>
        {activeWindow === "computer" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: "spring", damping: 25 }}
            className="absolute inset-4 z-50 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl flex flex-col text-black pointer-events-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* IE Title Bar */}
            <div className="flex items-center justify-between px-2 py-0.5 shrink-0 relative z-30" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 28 }}>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full" style={{ background: "radial-gradient(circle at 40% 35%, #7ad7f0 0%, #0b6cc4 60%, #0a3d8f 100%)" }} />
                <span className="text-white text-xs font-bold drop-shadow">{currentTitle} — Internet Explorer</span>
              </div>
              <button onClick={() => { setActiveWindow(null); setStartMenuOpen(false); }} className="w-6 h-5 bg-gradient-to-b from-[#e05] to-[#b00] border border-black/30 rounded text-white text-xs font-bold flex items-center justify-center hover:brightness-110">✕</button>
            </div>

            {/* Menu options row */}
            <div className="flex items-center px-1 shrink-0 relative z-30 bg-[#ece9d8]" style={{ height: 20, borderBottom: "1px solid #aca899" }}>
              {["File","Edit","View","Favorites","Tools","Help"].map(m => <button key={m} className="px-2 h-full hover:bg-[#316ac5] hover:text-white rounded-sm text-[11px]">{m}</button>)}
            </div>

            {/* Main Toolbar Panel */}
            <div className="flex items-center gap-1 px-1 py-0.5 shrink-0 relative z-30" style={{ background: "linear-gradient(180deg,#f0efea,#dbd9d0)", borderBottom: "1px solid #aca899", height: 36 }}>
              <button onClick={goHome} className="flex flex-col items-center justify-center w-10 h-8 rounded hover:bg-[#c1d3e8] active:bg-[#316ac5] border border-transparent hover:border-[#316ac5]"><span className="text-base">◀</span><span className="text-[7px]">Back</span></button>
              <button onClick={() => setLoading(true)} className="flex flex-col items-center justify-center w-10 h-8 rounded hover:bg-[#c1d3e8] border border-transparent hover:border-[#316ac5]"><span className="text-sm">↻</span><span className="text-[7px]">Refresh</span></button>
              <button onClick={goHome} className="flex flex-col items-center justify-center w-10 h-8 rounded hover:bg-[#c1d3e8] border border-transparent hover:border-[#316ac5]"><span className="text-sm">🏠</span><span className="text-[7px]">Home</span></button>
              <button onClick={() => setSidebarOpen(s => !s)} className="flex flex-col items-center justify-center w-14 h-8 rounded hover:bg-[#c1d3e8] border border-transparent hover:border-[#316ac5]"><span className="text-sm">⭐</span><span className="text-[7px]">Favorites</span></button>
              <div className="w-px h-6 bg-[#aca899] mx-1" />
              <div className="flex-1 flex items-center gap-1">
                <span className="text-[11px] text-[#333]">Address:</span>
                <div className="flex-1 flex items-center h-6 bg-white border border-[#7f9db9] rounded-sm overflow-hidden">
                  <input value={addressBar} onChange={e => setAddressBar(e.target.value)} onKeyDown={e => e.key === "Enter" && navigate(addressBar, addressBar)} className="flex-1 px-1 text-[11px] outline-none" style={{ fontFamily: "monospace" }} />
                </div>
              </div>
            </div>

            {/* Links Bookmark Bar */}
            <div className="flex items-center gap-0.5 px-2 shrink-0 overflow-visible relative z-40 bg-[#dbd6ca]" style={{ borderBottom: "1px solid #aca899", height: 24 }} onClick={e => e.stopPropagation()}>
              <span className="text-[10px] text-[#555] mr-1">Links:</span>
              {LINKS_BAR.map(cat => (
                <div key={cat.category} className="relative">
                  <button onClick={() => setOpenDropdown(openDropdown === cat.category ? null : cat.category)} className="flex items-center gap-0.5 px-2 h-5 text-[10px] rounded-sm border border-transparent hover:border-[#316ac5] hover:bg-[#d5e5f5]" style={{ color: openDropdown === cat.category ? "#fff" : "#00008b", background: openDropdown === cat.category ? "#316ac5" : "transparent" }}>
                    {cat.icon} {cat.category} <span className="text-[8px]">▾</span>
                  </button>
                  {openDropdown === cat.category && (
                    <div className="absolute top-full left-0 z-50 bg-white border border-[#7f9db9] shadow-lg min-w-[240px] py-0.5">
                      {cat.items.map((item, i) => (
                        <button key={i} onClick={() => item.url && navigate(item.url, item.name, item.isEmbed)} className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[11px] hover:bg-[#316ac5] hover:text-white" style={{ color: "#00008b" }}>
                          <span>{item.isEmbed ? "🎥" : "🌐"}</span>{item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Main Layout Framework Content Grid */}
            <div className="flex flex-1 overflow-hidden relative z-10 bg-white">
              {sidebarOpen && (
                <div className="w-52 h-full flex flex-col overflow-hidden shrink-0 border-r border-[#aca899] bg-[#f5f3ee]">
                  <div className="flex items-center justify-between px-3 py-1.5 text-white text-xs font-bold" style={{ background: "linear-gradient(90deg,#2559b5,#4e82d0)" }}>Favorites</div>
                  <div className="flex-1 overflow-y-auto p-1">
                    {Object.entries(SIDEBAR).map(([folder, items]) => (
                      <div key={folder}>
                        <button onClick={() => setOpenFolder(openFolder === folder ? null : folder)} className="w-full flex items-center gap-1.5 px-2 py-1 text-left text-[11px] font-bold text-[#00008b] hover:bg-[#c1d3e8] rounded">
                          <span>{openFolder === folder ? "📂" : "📁"}</span>{folder}
                        </button>
                        {openFolder === folder && items.map((item, i) => (
                          <button key={i} onClick={() => item.url && navigate(item.url, item.name)} disabled={!item.url} className="w-full flex items-center gap-1.5 px-5 py-1 text-left text-[11px] text-[#00008b] hover:bg-[#316ac5] hover:text-white rounded disabled:opacity-40">
                            <span>{item.locked ? "🔒" : "🌐"}</span><span className="truncate">{item.name}</span>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex-1 relative overflow-hidden bg-[#e8f4ff]">
                {currentUrl ? (
                  <>
                    {loading && <div className="absolute inset-0 bg-white flex items-center justify-center text-[#00008b] font-bold">Loading Port Node...</div>}
                    <iframe key={currentUrl} src={currentUrl} className="w-full h-full border-none" allow="autoplay; encrypted-media; fullscreen; gamepad" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation" onLoad={() => setLoading(false)} />
                  </>
                ) : (
                  <div className="p-8 max-w-xl mx-auto text-center">
                    <h2 className="text-xl font-bold text-[#003399] mb-4">Welcome to Jasmyn's Portal Home</h2>
                    <div className="bg-white border p-4 rounded shadow-xs grid grid-cols-2 gap-2">
                      <button onClick={() => navigate("https://newcp.net/play", "Club Penguin")} className="p-3 border rounded hover:bg-[#e8f0fb] font-bold text-xs text-[#00008b]">🐧 Club Penguin</button>
                      <button onClick={() => navigate("https://archive.org/embed/boohbah_zone_flash", "Boohbah Zone")} className="p-3 border rounded hover:bg-[#e8f0fb] font-bold text-xs text-[#00008b]">🟣 Boohbah Zone</button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Window status indicator */}
            <div className="flex items-center px-2 shrink-0 border-t border-[#aca899] bg-[#ece9d8]" style={{ height: 20 }}>
              <div className="flex-1 text-[10px] text-gray-600">Ready</div>
            </div>

            {/* Desktop Taskbar Component */}
            <div className="h-10 shrink-0 flex items-center px-1 gap-1 relative z-30" style={{ background: "linear-gradient(180deg,#245edb 0%,#3f8cf3 40%,#245edb 100%)" }}>
              <button onClick={e => { e.stopPropagation(); setStartMenuOpen(!startMenuOpen); }} className="h-8 px-3 bg-gradient-to-b from-[#349c42] to-[#298334] text-white font-bold italic rounded-r-xl text-sm shadow">start</button>
              {startMenuOpen && (
                <div className="absolute bottom-10 left-0 w-72 bg-[#ece9d8] border border-[#0055e5] rounded-t-lg shadow-2xl flex flex-col text-black z-50">
                  <div className="h-12 bg-blue-700 p-3 text-white font-bold">Jasmyn</div>
                  <div className="flex min-h-[160px]">
                    <div className="flex-1 bg-white p-2 text-xs font-bold flex flex-col gap-1">
                      <div className="p-1 hover:bg-blue-600 hover:text-white rounded cursor-pointer">Internet Explorer</div>
                      <div className="p-1 hover:bg-blue-600 hover:text-white rounded cursor-pointer">AIM</div>
                    </div>
                    <div className="w-1/3 bg-[#d3e5fa] p-2 text-[10px] font-bold text-blue-900 flex flex-col gap-1">
                      <div onClick={() => { setActiveWindow("toybox"); setStartMenuOpen(false); }} className="p-1 hover:bg-blue-600 hover:text-white rounded cursor-pointer">My Pictures</div>
                    </div>
                  </div>
                </div>
              )}
              <div className="ml-auto text-white text-xs px-4">4:20 PM</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── POPUP WINDOW: TOY BOX STORAGE SNAPSHOTS ── */}
      <AnimatePresence>
        {activeWindow === "toybox" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 m-auto w-1/2 h-2/3 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl z-55 flex flex-col overflow-hidden text-black pointer-events-auto"
          >
            <div className="flex items-center justify-between px-2 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 26 }}>
              <span className="text-white text-xs font-bold">📂 Toy Box — Memory Archive Gallery</span>
              <button onClick={() => setActiveWindow(null)} className="w-5 h-4 bg-gradient-to-b from-[#e05] to-[#b00] border border-black/30 rounded text-white text-[10px] font-bold flex items-center justify-center">✕</button>
            </div>
            <div className="flex-1 bg-white p-4 overflow-y-auto grid grid-cols-3 gap-3">
              {USER_PICTURES.map((pic, idx) => (
                <div key={idx} onClick={() => setActiveLightboxPic(pic)} className="border p-1 bg-[#f5f3ee] hover:border-blue-600 flex flex-col items-center cursor-pointer transition-shadow">
                  <img src={pic} alt="" className="w-full h-24 object-cover border bg-white" />
                  <span className="text-[10px] text-gray-500 mt-1 truncate max-w-full">picture_{idx + 1}.jpg</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── COZY JOURNAL OVERLAY ── */}
      <AnimatePresence>
        {activeWindow === "bed" && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute inset-0 m-auto w-80 h-40 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl z-55 flex flex-col text-black pointer-events-auto">
            <div className="flex items-center justify-between px-2 py-1" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 24 }}><span className="text-white text-xs font-bold">📝 Bedroom Journal</span><button onClick={() => setActiveWindow(null)} className="text-white text-xs font-bold">✕</button></div>
            <div className="flex-1 bg-[#fffee0] p-4 font-mono text-xs overflow-y-auto leading-relaxed">
              <strong>📌 Bedroom Node Log:</strong><br />
              "Welcome back! Click onto the computer monitor asset stack on your desk layout to activate your local Internet Explorer application window mesh."
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LIGHTBOX EXPAND VIEW OVERLAY ── */}
      <AnimatePresence>
        {activeLightboxPic && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveLightboxPic(null)} className="absolute inset-0 bg-black/80 z-60 flex items-center justify-center p-4 cursor-zoom-out pointer-events-auto">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg max-w-[85%] max-h-[85%] flex flex-col shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between px-3 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 26 }}><span className="text-white text-xs font-bold">Windows Picture Viewer</span><button onClick={() => setActiveLightboxPic(null)} className="text-white text-xs font-bold">✕</button></div>
              <div className="p-4 bg-[#666] flex items-center justify-center"><img src={activeLightboxPic} alt="" className="max-w-full max-h-[65vh] object-contain border shadow-xl bg-white" /></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
