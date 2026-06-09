const SIDEBAR: Record<string, SidebarEntry[]> = {
"🎮 Online Games": [
    { name: "Boohbah Zone (Flash Archive)", url: "https://archive.org/embed/boohbah_zone_flash" },
    { name: "Boohbah Zone", url: "https://archive.org/embed/boohbah_zone_flash" },
{ name: "Starfall", url: "https://web.archive.org/web/20121102000000if_/https://www.starfall.com/h/" },
    { name: "JibJab (2010 Archive)", url: "https://web.archive.org/web/20100930163107if_/http://sendables.jibjab.com/" },
    { name: "JibJab", url: "https://web.archive.org/web/20100930163107if_/http://sendables.jibjab.com/" },
{ name: "Moshi Monsters", url: "https://moshionline.net/" },
    { name: "WeeWorld (2013 Archive)", url: "https://web.archive.org/web/20130401004346if_/http://www.weeworld.com/" },
    { name: "SmallWorlds (2014 Archive)", url: "https://web.archive.org/web/20140625220230if_/https://www.smallworlds.com/" },
    { name: "Club Penguin (New CP)", url: "https://newcp.net/play" },
    { name: "GirlsGoGames (2015 Archive)", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/" },
    { name: "WeeWorld", url: "https://web.archive.org/web/20130401004346if_/http://www.weeworld.com/" },
    { name: "SmallWorlds", url: "https://web.archive.org/web/20140625220230if_/https://www.smallworlds.com/" },
    { name: "Club Penguin", url: "https://newcp.net/play" },
    { name: "GirlsGoGames", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/" },
{ name: "Poptropica", url: "https://web.archive.org/web/20130815000000if_/https://www.poptropica.com/" },
    { name: "Fantage (2014 Archive)", url: "https://web.archive.org/web/20140920185941if_/http://www.fantage.com/" },
    { name: "Fantage", url: "https://web.archive.org/web/20140920185941if_/http://www.fantage.com/" },
{ name: "MovieStar Planet", note: "💾 Download Only" },
{ name: "Animal Jam", note: "💾 Download Only" },
    { name: "PBS Kids Flash Games", url: "https://web.archive.org/web/20131127074613if_/http://pbskids.org/games/" },
    { name: "Nickelodeon Games (Archive)", url: "https://web.archive.org/web/20151127074613if_/http://www.nick.com/games/?navid=topNav" },
    { name: "Disney Flash Games", url: "https://web.archive.org/web/20131127074613if_/http://disney.go.com/games/" },
    { name: "PBS Kids", url: "https://web.archive.org/web/20131127074613if_/http://pbskids.org/games/" },
    { name: "Nickelodeon", url: "https://web.archive.org/web/20151127074613if_/http://www.nick.com/games/?navid=topNav" },
    { name: "Disney", url: "https://web.archive.org/web/20131127074613if_/http://disney.go.com/games/" },
],
"📚 School": [
{ name: "FunBrain", url: "https://web.archive.org/web/20140209111338if_/http://www.funbrain.com/brain/SweepsBrain/sweepsbrain.html" },
@@ -41,10 +41,10 @@ const LINKS_BAR: { category: string; icon: string; items: BookmarkItem[] }[] = [
{ name: "The Missing Scribble Sticks", url: "https://web.archive.org/web/20120101000000if_/http://www.noggin.com/games/scribble-sticks.php" },
]},
{ category: "Starfall", icon: "⭐", items: [
    { name: "Starfall Me", url: "https://web.archive.org/web/20121102000000if_/https://www.starfall.com/h/me/" },
    { name: "Who Am I?", url: "https://web.archive.org/web/20121102000000if_/https://www.starfall.com/h/me/" },
]},
{ category: "Girls Go Games", icon: "👗", items: [
    { name: "Shopaholic Models", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/game/shopaholic_models.html" },
    { name: "Shopaholic", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/game/shopaholic_models.html" },
{ name: "Snail Bob", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/game/snail_bob.html" },
{ name: "Frizzle Fraz", url: "https://web.archive.org/web/20150801083101if_/http://www.girlsgogames.com/game/frizzle_fraz.html" },
{ name: "Love Tester", url: "https://web.archive.org/web/20150801083101if_/https://www.girlsgogames.com/game/love-tester" },
@@ -53,7 +53,7 @@ const LINKS_BAR: { category: string; icon: string; items: BookmarkItem[] }[] = [
{ name: "Run", url: "https://web.archive.org/web/20121002000245if_/https://www.coolmathgames.com/0-run" },
]},
{ category: "PBS Kids", icon: "🐾", items: [
    { name: "Alien Assembly Required (Cyberchase)", url: "https://web.archive.org/web/20101010000000if_/http://pbskids.org/cyberchase/games/alienassembly/" },
    { name: "Alien Assembly Required (Arthur)", url: "https://web.archive.org/web/20101010000000if_/http://pbskids.org/cyberchase/games/alienassembly/" },
{ name: "Binky's Facts & Opinions (Arthur)", url: "https://web.archive.org/web/20101010000000if_/http://pbskids.org/arthur/games/factsopinions/" },
{ name: "Lunch-o-Matic", url: "https://web.archive.org/web/20151127074613if_/https://pbskids.org/games/play/lunch-o-matic/8517" },
{ name: "Supermarket Adventure (Arthur)", url: "https://web.archive.org/web/20101010000000if_/http://pbskids.org/arthur/games/supermarket/" },
@@ -72,8 +72,8 @@ const LINKS_BAR: { category: string; icon: string; items: BookmarkItem[] }[] = [
{ name: "Kai-Lan's Great Trip to China", url: "https://web.archive.org/web/20101010000000if_/http://www.nickjr.com/ni-hao-kai-lan/games/kai-lans-great-trip-to-china/" },
]},
{ category: "Nickelodeon", icon: "🎬", items: [
    { name: "iCarly (2012 Archive)", url: "https://web.archive.org/web/20120831030248if_/http://www.icarly.com/" },
    { name: "The Slap (2014 Archive)", url: "https://web.archive.org/web/20140531193706if_/http://www.theslap.com/" },
    { name: "iCarly", url: "https://web.archive.org/web/20120831030248if_/http://www.icarly.com/" },
    { name: "The Slap", url: "https://web.archive.org/web/20140531193706if_/http://www.theslap.com/" },
{ name: "iCarly: The Ultimate Game", url: "https://web.archive.org/web/20120831030248if_/http://www.icarly.com/games/ultimate-game.html" },
{ name: "Nick Block Party", url: "https://web.archive.org/web/20140101000000if_/http://www.nick.com/games/nick-block-party.html" },
{ name: "Ask the Magic Meatball", url: "https://archive.org/embed/ask-the-magic-meatball" },
@@ -84,8 +84,8 @@ const LINKS_BAR: { category: string; icon: string; items: BookmarkItem[] }[] = [
{ name: "Fireboy & Watergirl", url: "https://web.archive.org/web/20130101000000if_/http://www.coolmathgames.com/0-fireboy-watergirl-forest-temple" },
]},
{ category: "Videos", icon: "📹", items: [
    { name: "Oh California (Starfall)", url: "https://www.youtube.com/embed/GG_KO-UnXBU", isEmbed: true },
    { name: "Moose & Zee: I Don't Like Candy Corn", url: "https://player.vimeo.com/video/20307100?h=a98f92cbf7", isEmbed: true },
    { name: "Oh California (Starfall)", url: "https://www.youtube.com/embed/GG_KO-UnXBU" , isEmbed: true },
    { name: "Moose & Zee: I Don't Like Candy Corn", url: "https://player.vimeo.com/video/20307100?h=a98f92cbf7" , isEmbed: true },
]},
];

@@ -106,20 +106,15 @@ const USER_PICTURES = [
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
  const [isEmbed, setIsEmbed] = useState(false);
const [sidebarOpen, setSidebarOpen] = useState(true);
const [openFolder, setOpenFolder] = useState<string | null>("🎮 Online Games");
const [openDropdown, setOpenDropdown] = useState<string | null>(null);
const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [picturesWindowOpen, setPicturesWindowOpen] = useState(false);
const [activeLightboxPic, setActiveLightboxPic] = useState<string | null>(null);
const [addressBar, setAddressBar] = useState("about:home");
const [loading, setLoading] = useState(false);
@@ -132,8 +127,10 @@ export default function GameRoom() {
cleanUrl = cleanUrl.replace(match[1], match[1] + "if_");
}
}

setCurrentUrl(cleanUrl);
setCurrentTitle(title);
    setIsEmbed(embed);
setAddressBar(cleanUrl);
setOpenDropdown(null);
setStartMenuOpen(false);
@@ -148,370 +145,430 @@ export default function GameRoom() {
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
      {/* ── MENU BAR ── */}
      <div className="flex items-center px-1 shrink-0 relative z-30" style={{ background: "#ece9d8", height: 20, borderBottom: "1px solid #aca899" }}>
        {["File","Edit","View","Favorites","Tools","Help"].map(m => (
          <button key={m} className="px-2 h-full hover:bg-[#316ac5] hover:text-white rounded-sm text-[11px]">{m}</button>
        ))}
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

      {/* Ambient HUD Control Bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-[#0e081c]/95 px-6 py-2.5 rounded-xl border border-[#492d7e] shadow-2xl backdrop-blur-md flex items-center gap-6">
        <p className="text-[11px] font-bold tracking-wide text-[#c0a3ff]">
          🏨 **Jasmyn's Profile Core:** Click the defined room assets to activate portfolio snapshots and legacy components.
        </p>
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
                      { name: "Papa's Pizzeria", url: "https://web.archive.org/web/20130101000000if_/http://www.coolmathgames.com/0-papas-pizzeria", icon: "🍕" },
                      { name: "Fireboy & Watergirl", url: "https://web.archive.org/web/20130101000000if_/http://www.coolmathgames.com/0-fireboy-watergirl-forest-temple", icon: "🔥" },
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
                )}
              </div>
            </div>

            {/* Bottom Window status indicator */}
            <div className="flex items-center px-2 shrink-0 border-t border-[#aca899] bg-[#ece9d8]" style={{ height: 20 }}>
              <div className="flex-1 text-[10px] text-gray-600">Ready</div>
            </div>
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
                <div className="bg-[#fffbe6] border border-[#e6c800] rounded p-3 text-[11px] text-[#665500]">
                  <strong>💡 Tip:</strong> Use the <strong>Favorites ⭐</strong> button on the toolbar to browse all games by category. Use the <strong>Links bar</strong> above for quick access to specific games!
</div>
              )}
              <div className="ml-auto text-white text-xs px-4">4:20 PM</div>
              </div>
</div>
          </motion.div>
        )}
      </AnimatePresence>
          )}
        </div>
      </div>

      {/* ── POPUP WINDOW: TOY BOX STORAGE SNAPSHOTS ── */}
      {/* ── POPUP WINDOW: MY PICTURES ── */}
<AnimatePresence>
        {activeWindow === "toybox" && (
        {picturesWindowOpen && (
<motion.div
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 m-auto w-1/2 h-2/3 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl z-55 flex flex-col overflow-hidden text-black pointer-events-auto"
            className="absolute top-16 left-1/4 w-1/2 h-2/3 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl z-50 flex flex-col overflow-hidden text-black"
            onClick={e => e.stopPropagation()}
>
<div className="flex items-center justify-between px-2 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 26 }}>
              <span className="text-white text-xs font-bold">📂 Toy Box — Memory Archive Gallery</span>
              <button onClick={() => setActiveWindow(null)} className="w-5 h-4 bg-gradient-to-b from-[#e05] to-[#b00] border border-black/30 rounded text-white text-[10px] font-bold flex items-center justify-center">✕</button>
              <span className="text-white text-xs font-bold flex items-center gap-1">📂 My Pictures</span>
              <button onClick={() => setPicturesWindowOpen(false)} className="w-5 h-4 bg-gradient-to-b from-[#e05] to-[#b00] border border-black/30 rounded text-white text-[10px] font-bold flex items-center justify-center hover:brightness-110">✕</button>
</div>
<div className="flex-1 bg-white p-4 overflow-y-auto grid grid-cols-3 gap-3">
{USER_PICTURES.map((pic, idx) => (
                <div key={idx} onClick={() => setActiveLightboxPic(pic)} className="border p-1 bg-[#f5f3ee] hover:border-blue-600 flex flex-col items-center cursor-pointer transition-shadow">
                  <img src={pic} alt="" className="w-full h-24 object-cover border bg-white" />
                  <span className="text-[10px] text-gray-500 mt-1 truncate max-w-full">picture_{idx + 1}.jpg</span>
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
      {/* ── LIGHTBOX OVERLAY (CLICK TO EXPAND IMAGES) ── */}
<AnimatePresence>
{activeLightboxPic && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveLightboxPic(null)} className="absolute inset-0 bg-black/80 z-60 flex items-center justify-center p-4 cursor-zoom-out pointer-events-auto">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg max-w-[85%] max-h-[85%] flex flex-col shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between px-3 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 26 }}><span className="text-white text-xs font-bold">Windows Picture Viewer</span><button onClick={() => setActiveLightboxPic(null)} className="text-white text-xs font-bold">✕</button></div>
              <div className="p-4 bg-[#666] flex items-center justify-center"><img src={activeLightboxPic} alt="" className="max-w-full max-h-[65vh] object-contain border shadow-xl bg-white" /></div>
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
                <span className="text-white text-xs font-bold truncate">Windows Picture and Document Viewer</span>
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
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold text-black">MS Paint</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold text-black">Dinosaur Game</div>
                  <div className="px-2 py-1 hover:bg-[#316ac5] hover:text-white rounded cursor-pointer text-sm font-bold text-black">Chess</div>
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
