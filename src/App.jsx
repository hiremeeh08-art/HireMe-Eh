import { useState, useEffect } from "react";
const MODEL = "claude-sonnet-4-20250514";

// ── MASCOT SVGs inspired by the hand-painted artwork ──────────────────────

// Purple Mammoth mascot (inspired by the purple elephant painting)
function MammothMascot({ size = 120, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="60" cy="72" rx="38" ry="32" fill="#c084fc" stroke="#1a0a2e" strokeWidth="2.5"/>
      {/* Stripes on body */}
      <line x1="32" y1="68" x2="55" y2="62" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
      <line x1="30" y1="76" x2="54" y2="72" stroke="#fde047" strokeWidth="2" strokeLinecap="round"/>
      <line x1="33" y1="84" x2="52" y2="82" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Head */}
      <ellipse cx="62" cy="48" rx="28" ry="24" fill="#d8b4fe" stroke="#1a0a2e" strokeWidth="2.5"/>
      {/* Eye */}
      <ellipse cx="54" cy="44" rx="9" ry="8" fill="white" stroke="#1a0a2e" strokeWidth="2"/>
      <ellipse cx="54" cy="44" rx="5" ry="5" fill="#c026d3"/>
      <ellipse cx="52" cy="42" rx="2" ry="2" fill="#1a0a2e"/>
      <ellipse cx="51" cy="41" rx="0.8" ry="0.8" fill="white"/>
      {/* Eyelashes */}
      <line x1="46" y1="38" x2="44" y2="35" stroke="#1a0a2e" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="49" y1="36" x2="48" y2="33" stroke="#1a0a2e" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="53" y1="36" x2="53" y2="33" stroke="#1a0a2e" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Trunk curling */}
      <path d="M 50 58 Q 38 70 35 78 Q 33 85 40 88 Q 46 90 48 84" fill="none" stroke="#1a0a2e" strokeWidth="3" strokeLinecap="round"/>
      <path d="M 50 58 Q 38 70 35 78 Q 33 85 40 88 Q 46 90 48 84" fill="none" stroke="#d8b4fe" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Tusks */}
      <path d="M 48 62 Q 38 68 36 76" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <path d="M 52 63 Q 44 72 44 80" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Ear */}
      <ellipse cx="86" cy="46" rx="14" ry="18" fill="#a855f7" stroke="#1a0a2e" strokeWidth="2"/>
      {/* Skull detail on chest */}
      <ellipse cx="70" cy="80" rx="7" ry="7" fill="white" stroke="#1a0a2e" strokeWidth="1.5"/>
      <ellipse cx="68" cy="78" rx="1.5" ry="2" fill="#1a0a2e"/>
      <ellipse cx="72" cy="78" rx="1.5" ry="2" fill="#1a0a2e"/>
      <path d="M 66 83 Q 70 86 74 83" fill="none" stroke="#1a0a2e" strokeWidth="1.2"/>
      <line x1="67" y1="84" x2="67" y2="86" stroke="#1a0a2e" strokeWidth="1"/>
      <line x1="70" y1="85" x2="70" y2="87" stroke="#1a0a2e" strokeWidth="1"/>
      <line x1="73" y1="84" x2="73" y2="86" stroke="#1a0a2e" strokeWidth="1"/>
      {/* Legs */}
      <rect x="42" y="98" width="12" height="16" rx="5" fill="#c084fc" stroke="#1a0a2e" strokeWidth="2"/>
      <rect x="66" y="98" width="12" height="16" rx="5" fill="#c084fc" stroke="#1a0a2e" strokeWidth="2"/>
      {/* Spots on feet */}
      <circle cx="46" cy="108" r="2" fill="#f97316"/>
      <circle cx="72" cy="108" r="2" fill="#f97316"/>
      {/* Question marks floating around */}
      <text x="10" y="30" fontSize="10" fill="#fde047" fontWeight="bold">?</text>
      <text x="100" y="25" fontSize="8" fill="#f472b6" fontWeight="bold">?</text>
      <text x="105" y="90" fontSize="9" fill="#60a5fa" fontWeight="bold">?</text>
      {/* Swirl */}
      <path d="M 95 55 Q 108 50 110 62 Q 112 74 100 76 Q 90 77 92 68" fill="none" stroke="#a855f7" strokeWidth="1.5"/>
      <path d="M 98 58 Q 106 55 107 64 Q 108 70 102 71" fill="none" stroke="#fde047" strokeWidth="1"/>
    </svg>
  );
}

// Teal Monster mascot (inspired by the teal creature painting)
function MonsterMascot({ size = 120, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="60" cy="78" rx="30" ry="28" fill="#2dd4bf" stroke="#0a1a1a" strokeWidth="2.5"/>
      {/* Drip effect bottom */}
      <path d="M 38 100 Q 35 112 40 114 Q 45 116 46 106" fill="#2dd4bf" stroke="#0a1a1a" strokeWidth="1.5"/>
      <path d="M 60 104 Q 58 116 63 116 Q 68 116 66 104" fill="#2dd4bf" stroke="#0a1a1a" strokeWidth="1.5"/>
      {/* Head */}
      <ellipse cx="60" cy="50" rx="28" ry="26" fill="#2dd4bf" stroke="#0a1a1a" strokeWidth="2.5"/>
      {/* Pointy ears/horns */}
      <polygon points="40,30 33,12 47,25" fill="#2dd4bf" stroke="#0a1a1a" strokeWidth="2"/>
      <polygon points="80,30 87,12 73,25" fill="#2dd4bf" stroke="#0a1a1a" strokeWidth="2"/>
      {/* Big white eyes */}
      <ellipse cx="48" cy="46" rx="11" ry="12" fill="white" stroke="#0a1a1a" strokeWidth="2.5"/>
      <ellipse cx="72" cy="46" rx="11" ry="12" fill="white" stroke="#0a1a1a" strokeWidth="2.5"/>
      {/* Pupils */}
      <ellipse cx="48" cy="47" rx="6" ry="7" fill="#0a1a1a"/>
      <ellipse cx="72" cy="47" rx="6" ry="7" fill="#0a1a1a"/>
      {/* Eye shine */}
      <ellipse cx="45" cy="43" rx="2.5" ry="2.5" fill="white"/>
      <ellipse cx="69" cy="43" rx="2.5" ry="2.5" fill="white"/>
      {/* Big grinning mouth */}
      <path d="M 40 62 Q 60 76 80 62" fill="white" stroke="#0a1a1a" strokeWidth="2.5"/>
      <path d="M 40 62 Q 60 64 80 62" fill="#2dd4bf"/>
      {/* Teeth */}
      <rect x="44" y="62" width="6" height="7" rx="1" fill="white" stroke="#0a1a1a" strokeWidth="1"/>
      <rect x="52" y="63" width="5" height="7" rx="1" fill="white" stroke="#0a1a1a" strokeWidth="1"/>
      <rect x="59" y="63" width="5" height="7" rx="1" fill="white" stroke="#0a1a1a" strokeWidth="1"/>
      <rect x="66" y="63" width="5" height="7" rx="1" fill="white" stroke="#0a1a1a" strokeWidth="1"/>
      <rect x="72" y="62" width="5" height="7" rx="1" fill="white" stroke="#0a1a1a" strokeWidth="1"/>
      {/* Red tongue */}
      <ellipse cx="60" cy="72" rx="8" ry="5" fill="#ef4444"/>
      {/* Arms */}
      <path d="M 32 72 Q 18 68 16 78 Q 15 86 26 84" fill="#2dd4bf" stroke="#0a1a1a" strokeWidth="2"/>
      <path d="M 88 72 Q 102 68 104 78 Q 105 86 94 84" fill="#2dd4bf" stroke="#0a1a1a" strokeWidth="2"/>
      {/* Wiggly fingers left */}
      <path d="M 16 78 Q 10 72 8 76" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 16 82 Q 8 80 7 85" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 18 86 Q 12 88 13 93" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Mushroom in right hand */}
      <circle cx="100" cy="76" r="6" fill="#a855f7" stroke="#0a1a1a" strokeWidth="1.5"/>
      <circle cx="97" cy="73" r="1.5" fill="#f97316"/>
      <circle cx="101" cy="71" r="1.5" fill="#f97316"/>
      <circle cx="104" cy="74" r="1.5" fill="#f97316"/>
      <rect x="98" y="80" width="3" height="7" rx="1" fill="#4ade80" stroke="#0a1a1a" strokeWidth="1"/>
      {/* Ghost/skull bottom */}
      <ellipse cx="60" cy="106" rx="10" ry="8" fill="white" stroke="#0a1a1a" strokeWidth="1.5"/>
      <ellipse cx="57" cy="104" rx="1.5" ry="2" fill="#0a1a1a"/>
      <ellipse cx="63" cy="104" rx="1.5" ry="2" fill="#0a1a1a"/>
      <path d="M 54 108 Q 60 112 66 108" fill="none" stroke="#0a1a1a" strokeWidth="1.2"/>
      {/* Stars around */}
      <text x="5" y="20" fontSize="10" fill="#fde047">★</text>
      <text x="105" y="30" fontSize="8" fill="#f472b6">★</text>
      <text x="108" y="100" fontSize="9" fill="#60a5fa">✦</text>
    </svg>
  );
}

// ── COLORS & STYLES ───────────────────────────────────────────────────────
const C = {
  black:"#080b12", dark:"#0e1420", card:"#131926", border:"#1e2d47",
  gold:"#f0a500", blue:"#0066ff", white:"#f0f4ff", gray:"#5a6880",
  green:"#00c97a", red:"#ff4d4d", purple:"#a855f7", teal:"#2dd4bf",
};

const G = {
  app:{ fontFamily:"'Trebuchet MS','Lucida Grande',sans-serif", background:C.black, minHeight:"100vh", color:C.white },
  header:{ background:"rgba(8,11,18,0.96)", backdropFilter:"blur(20px)", borderBottom:`1px solid ${C.border}`, padding:"0 1.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:200, height:66, gap:"1rem" },
  logoMark:{ display:"flex", alignItems:"center", gap:"0.5rem", flexShrink:0 },
  logoText:{ fontSize:"1.2rem", fontWeight:900, letterSpacing:"-0.02em", background:`linear-gradient(90deg, ${C.gold}, ${C.purple})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" },
  logoSub:{ fontSize:"0.55rem", color:C.gold, letterSpacing:"0.15em", textTransform:"uppercase" },
  navBtn:(a)=>({ background:a?"rgba(240,165,0,0.12)":"transparent", color:a?C.gold:C.gray, border:`1px solid ${a?C.gold:"transparent"}`, padding:"0.4rem 0.85rem", borderRadius:"7px", cursor:"pointer", fontFamily:"inherit", fontSize:"0.78rem", fontWeight:a?700:400, transition:"all 0.15s" }),
  main:{ maxWidth:960, margin:"0 auto", padding:"2rem 1.25rem" },
  card:{ background:C.card, border:`1px solid ${C.border}`, borderRadius:"16px", padding:"1.75rem", marginBottom:"1.25rem" },
  h1:{ fontSize:"clamp(1.8rem,5vw,3rem)", fontWeight:900, lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:"1rem" },
  badge:(col=C.gold)=>({ display:"inline-block", background:`rgba(240,165,0,0.1)`, border:`1px solid ${col}`, color:col, borderRadius:"20px", padding:"0.2rem 0.8rem", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"1rem" }),
  label:{ display:"block", fontSize:"0.72rem", fontWeight:700, marginBottom:"0.3rem", color:C.gray, letterSpacing:"0.1em", textTransform:"uppercase" },
  input:{ width:"100%", background:"#0a0f1a", border:`1px solid ${C.border}`, borderRadius:"9px", color:C.white, fontFamily:"inherit", fontSize:"0.92rem", padding:"0.72rem 1rem", outline:"none", boxSizing:"border-box", marginBottom:"0.9rem" },
  textarea:{ width:"100%", background:"#0a0f1a", border:`1px solid ${C.border}`, borderRadius:"9px", color:C.white, fontFamily:"inherit", fontSize:"0.92rem", padding:"0.72rem 1rem", outline:"none", boxSizing:"border-box", marginBottom:"0.9rem", resize:"vertical", minHeight:88 },
  btn:{ background:`linear-gradient(135deg,${C.gold},#d07000)`, color:C.black, border:"none", borderRadius:"10px", padding:"0.9rem 2rem", fontFamily:"inherit", fontSize:"0.95rem", fontWeight:800, cursor:"pointer", letterSpacing:"0.03em", transition:"all 0.2s", width:"100%" },
  btnPurple:{ background:`linear-gradient(135deg,${C.purple},#7c3aed)`, color:C.white, border:"none", borderRadius:"10px", padding:"0.9rem 2rem", fontFamily:"inherit", fontSize:"0.95rem", fontWeight:800, cursor:"pointer", transition:"all 0.2s", width:"100%" },
  btnTeal:{ background:`linear-gradient(135deg,${C.teal},#0d9488)`, color:C.black, border:"none", borderRadius:"10px", padding:"0.9rem 2rem", fontFamily:"inherit", fontSize:"0.95rem", fontWeight:800, cursor:"pointer", transition:"all 0.2s", width:"100%" },
  btnGhost:{ background:"transparent", color:C.white, border:`1px solid ${C.border}`, borderRadius:"10px", padding:"0.75rem 1.5rem", fontFamily:"inherit", fontSize:"0.85rem", cursor:"pointer", transition:"all 0.2s" },
  btnBlue:{ background:C.blue, color:C.white, border:"none", borderRadius:"10px", padding:"0.9rem 2rem", fontFamily:"inherit", fontSize:"0.92rem", fontWeight:700, cursor:"pointer", width:"100%" },
  divider:{ border:"none", borderTop:`1px solid ${C.border}`, margin:"1.25rem 0" },
  two:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.9rem" },
  three:{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.1rem" },
  four:{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0.9rem" },
  tag:{ display:"inline-block", background:"rgba(0,102,255,0.1)", border:"1px solid rgba(0,102,255,0.25)", borderRadius:"5px", padding:"0.12rem 0.5rem", fontSize:"0.7rem", color:"#7aadff", marginRight:"0.3rem", marginBottom:"0.3rem" },
  spinner:{ display:"inline-block", width:22, height:22, border:`3px solid rgba(240,165,0,0.2)`, borderTop:`3px solid ${C.gold}`, borderRadius:"50%", animation:"spin 0.7s linear infinite" },
};

const PLANS=[
  { name:"Free", price:"$0", period:"", color:C.gray, highlight:false, cta:"Start Free", mascot:"both",
    features:["Unlimited job searches","Basic resume builder","GTA job listings","Community support"],
    locked:["Cover letter AI","LinkedIn optimizer","Interview coach"] },
  { name:"Pro", price:"$9.99", period:"/mo", color:C.gold, highlight:true, cta:"Start Pro — 7 Days Free", mascot:"mammoth",
    features:["Unlimited job searches","AI resume builder","AI cover letter generator","LinkedIn profile optimizer","Interview prep coach","Priority support"],
    locked:["Employer contact"] },
  { name:"Employer", price:"$49.99", period:"/mo", color:C.blue, highlight:false, cta:"Post Jobs Now", mascot:"monster",
    features:["Post unlimited jobs","Browse candidates","Featured listings","Applicant tracking","Direct messaging","Analytics"],
    locked:[] },
];

// ── HOME ──────────────────────────────────────────────────────────────────
function Home({ setTab }) {
  const [tick, setTick] = useState(0);
  const msgs = [
    "Hey! 👋 Let's find you a job today!",
    "We search Job Bank Canada, Indeed & LinkedIn for you!",
    "Free forever for job seekers. No tricks. 🇨🇦",
    "Your next chapter starts here. Let's go! 🚀",
  ];
  useEffect(() => { const t = setInterval(() => setTick(n=>(n+1)%msgs.length), 3000); return ()=>clearInterval(t); }, []);

  return (
    <div>
      {/* HERO */}
      <div style={{ ...G.card, background:"linear-gradient(135deg,#0e1420 40%,#1a0a2e)", padding:"2.5rem 2rem", position:"relative", overflow:"hidden", border:`1px solid rgba(168,85,247,0.3)` }}>
        <div style={{ position:"absolute", top:-60, right:-40, opacity:0.15, pointerEvents:"none" }}>
          <MammothMascot size={260}/>
        </div>
        <div style={{ position:"absolute", bottom:-30, right:120, opacity:0.12, pointerEvents:"none" }}>
          <MonsterMascot size={200}/>
        </div>

        <div style={G.badge()}>🇨🇦 The Job Search App Ontario Was Waiting For</div>
        <div style={G.h1}>
          Find Work in the GTA.<br/>
          <span style={{ background:`linear-gradient(90deg,${C.gold},${C.purple})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            We've Got Your Back. Eh.
          </span>
        </div>
        <p style={{ color:C.gray, fontSize:"1rem", lineHeight:1.75, maxWidth:520, marginBottom:"2rem" }}>
          Finding a job in Ontario shouldn't be stressful. Our two mascots — <strong style={{color:C.purple}}>Mammo</strong> and <strong style={{color:C.teal}}>Teelo</strong> — are here to guide you every step of the way. Real job listings. AI resumes. 100% free to start.
        </p>

        {/* Mascot speech bubble */}
        <div style={{ display:"flex", alignItems:"flex-start", gap:"1rem", marginBottom:"2rem", background:"rgba(168,85,247,0.08)", border:`1px solid rgba(168,85,247,0.25)`, borderRadius:"14px", padding:"1rem 1.25rem" }}>
          <MammothMascot size={60} style={{flexShrink:0}}/>
          <div>
            <div style={{ fontSize:"0.72rem", color:C.purple, fontWeight:700, letterSpacing:"0.1em", marginBottom:"0.3rem" }}>MAMMO SAYS</div>
            <div style={{ fontSize:"0.95rem", color:C.white, fontStyle:"italic", transition:"all 0.3s" }}>"{msgs[tick]}"</div>
          </div>
        </div>

        <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
          <button style={{ ...G.btn, width:"auto", padding:"0.9rem 2.5rem" }} onClick={()=>setTab("jobs")}>
            🔍 Search Jobs — Free
          </button>
          <button style={{ ...G.btnGhost }} onClick={()=>setTab("resume")}>
            📄 Build My Resume
          </button>
        </div>
      </div>

      {/* MASCOT FEATURE CARDS */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.25rem", marginBottom:"1.25rem" }}>
        {/* Mammo card */}
        <div style={{ ...G.card, border:`1px solid rgba(168,85,247,0.4)`, background:"linear-gradient(135deg,#131926,#1a0a2e)", display:"flex", gap:"1.25rem", alignItems:"center" }}>
          <MammothMascot size={90} style={{flexShrink:0}}/>
          <div>
            <div style={{ color:C.purple, fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.1em", marginBottom:"0.3rem" }}>MEET MAMMO</div>
            <div style={{ fontWeight:800, fontSize:"1rem", marginBottom:"0.4rem" }}>Your Job Search Buddy</div>
            <div style={{ color:C.gray, fontSize:"0.82rem", lineHeight:1.6 }}>Mammo scours Job Bank Canada, Indeed & LinkedIn to find you the freshest GTA postings every day.</div>
            <button style={{ ...G.btnPurple, width:"auto", padding:"0.5rem 1.1rem", fontSize:"0.8rem", marginTop:"0.75rem" }} onClick={()=>setTab("jobs")}>
              Find Jobs with Mammo →
            </button>
          </div>
        </div>
        {/* Teelo card */}
        <div style={{ ...G.card, border:`1px solid rgba(45,212,191,0.4)`, background:"linear-gradient(135deg,#131926,#0a1f1e)", display:"flex", gap:"1.25rem", alignItems:"center" }}>
          <MonsterMascot size={90} style={{flexShrink:0}}/>
          <div>
            <div style={{ color:C.teal, fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.1em", marginBottom:"0.3rem" }}>MEET TEELO</div>
            <div style={{ fontWeight:800, fontSize:"1rem", marginBottom:"0.4rem" }}>Your Resume Monster</div>
            <div style={{ color:C.gray, fontSize:"0.82rem", lineHeight:1.6 }}>Teelo builds you a professional, ATS-crushing resume in minutes. No experience with resumes needed!</div>
            <button style={{ ...G.btnTeal, width:"auto", padding:"0.5rem 1.1rem", fontSize:"0.8rem", marginTop:"0.75rem" }} onClick={()=>setTab("resume")}>
              Build Resume with Teelo →
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={G.four}>
        {[{n:"47K+",l:"Jobs Indexed",c:C.gold},{n:"Free",l:"To Start",c:C.green},{n:"2 min",l:"Resume Built",c:C.teal},{n:"GTA",l:"Focused",c:C.purple}].map((s,i)=>(
          <div key={i} style={{ ...G.card, padding:"1.1rem", textAlign:"center" }}>
            <div style={{ fontSize:"1.6rem", fontWeight:900, color:s.c }}>{s.n}</div>
            <div style={{ fontSize:"0.72rem", color:C.gray, marginTop:"0.15rem" }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* CITIES */}
      <div style={{ ...G.card, textAlign:"center", padding:"1.25rem" }}>
        <div style={{ color:C.gray, fontSize:"0.68rem", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.75rem" }}>Serving Every Corner of the GTA 🇨🇦</div>
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"0.4rem" }}>
          {["Toronto","Mississauga","Brampton","Markham","Vaughan","Richmond Hill","Oakville","Scarborough","North York","Etobicoke","Ajax","Pickering","Oshawa","Burlington"].map(c=>(
            <span key={c} style={G.tag}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── JOBS ──────────────────────────────────────────────────────────────────
function Jobs({ userPlan }) {
  const [q,setQ]=useState(""); const [loc,setLoc]=useState("Toronto, Ontario"); const [type,setType]=useState("Any");
  const [results,setResults]=useState(null); const [loading,setLoading]=useState(false);
  const [err,setErr]=useState(""); const [msg,setMsg]=useState("");

  const tips = ["Try: warehouse","Try: customer service","Try: PSW","Try: driver","Try: cashier","Try: construction"];
  const [tip,setTip]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setTip(n=>(n+1)%tips.length),2000);return()=>clearInterval(t);},[]);

  async function search(){
    if(!q.trim()){setErr("Please enter a job title or keyword.");return;}
    setLoading(true);setResults(null);setErr("");
    let all=[];
    try{
      setMsg("Mammo is sniffing out Job Bank Canada listings...");
      const r1=await fetch("/api/claude",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:MODEL,max_tokens:1000,tools:[{type:"web_search_20250305",name:"web_search"}],messages:[{role:"user",content:`Search the web for "${q}" jobs near ${loc} Ontario Canada on jobbank.gc.ca. Look for real current job postings. Return ONLY a valid JSON array (no markdown, no code blocks, just the raw array starting with [) of up to 5 jobs. Each object must have: title (string), company (string), location (string), type (string), posted (string), salary (string), description (string, 1-2 sentences), applyUrl (string, real URL), skills (array of 3 strings). If you cannot find jobs, return an empty array [].`}]})});
      const d1=await r1.json();
      const raw1=(d1.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("");
      const m1=raw1.match(/\[[\s\S]*\]/);
      if(m1){try{all=[...all,...JSON.parse(m1[0]).map(j=>({...j,source:"Job Bank Canada"}))]}catch(pe){console.log("parse1",pe)}}
    }catch(e){console.log("jb err",e);}
    try{
      setMsg("Teelo is grabbing Indeed & LinkedIn results...");
      const r2=await fetch("/api/claude",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:MODEL,max_tokens:1000,tools:[{type:"web_search_20250305",name:"web_search"}],messages:[{role:"user",content:`Search the web for "${q}" ${type!=="Any"?type:""} jobs near ${loc} Ontario Canada. Check Indeed.ca, LinkedIn, and Workopolis. Find real job postings from the last month. Return ONLY a valid JSON array (no markdown, no code blocks, just the raw array starting with [) of up to 5 real jobs. Each object: title (string), company (string), location (string), type (string), posted (string), salary (string), description (string), applyUrl (real URL string), skills (array of 3 strings). If no jobs found, return [].`}]})});
      const d2=await r2.json();
      const raw2=(d2.content||[]).filter(b=>b.type==="text").map(b=>b.text).join("");
      const m2=raw2.match(/\[[\s\S]*\]/);
      if(m2){try{all=[...all,...JSON.parse(m2[0]).map(j=>({...j,source:"Indeed / LinkedIn"}))]}catch(pe){console.log("parse2",pe)}}
    }catch(e){console.log(e);}
    setLoading(false);
    if(all.length===0)setErr("No results found. Try different keywords!");
    else setResults(all);
  }

  return(
    <div>
      {/* Mammo search header */}
      <div style={{ ...G.card, background:"linear-gradient(135deg,#131926,#1a0a2e)", border:`1px solid rgba(168,85,247,0.3)` }}>
        <div style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"1.25rem" }}>
          <MammothMascot size={70} style={{flexShrink:0}}/>
          <div>
            <div style={{ fontWeight:900, fontSize:"1.3rem" }}>Mammo's Job Finder</div>
            <div style={{ color:C.gray, fontSize:"0.82rem" }}>Searching Job Bank Canada, Indeed & LinkedIn for you</div>
            <div style={{ color:C.green, fontSize:"0.75rem", fontWeight:700, marginTop:"0.25rem" }}>✓ Unlimited Free Searches — No Account Needed</div>
          </div>
        </div>

        <label style={G.label}>Job Title or Keywords</label>
        <input style={G.input} placeholder={`${tips[tip]}...`} value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==="Enter"&&search()}/>
        <div style={G.two}>
          <div><label style={G.label}>City</label>
            <select style={{...G.input,marginBottom:0}} value={loc} onChange={e=>setLoc(e.target.value)}>
              {["Toronto, Ontario","Mississauga, Ontario","Brampton, Ontario","Markham, Ontario","Vaughan, Ontario","Oakville, Ontario","Scarborough, Ontario","North York, Ontario","Etobicoke, Ontario","Ajax, Ontario","Pickering, Ontario","Newmarket, Ontario","Aurora, Ontario","Keswick, Ontario","Holland Landing, Ontario","Sutton, Ontario","Georgina, Ontario","East Gwillimbury, Ontario","Stouffville, Ontario","Uxbridge, Ontario","Whitchurch-Stouffville, Ontario","King City, Ontario","Nobleton, Ontario","Schomberg, Ontario","Bradford, Ontario","Barrie, Ontario","Orillia, Ontario","Oshawa, Ontario","Whitby, Ontario","Anywhere in York Region","Anywhere in Ontario"].map(l=>(
                <option key={l} value={l} style={{background:C.dark}}>{l}</option>
              ))}
            </select>
          </div>
          <div><label style={G.label}>Job Type</label>
            <select style={{...G.input,marginBottom:0}} value={type} onChange={e=>setType(e.target.value)}>
              {["Any","Full-time","Part-time","Contract","Remote","Hybrid","Entry Level"].map(t=>(
                <option key={t} value={t} style={{background:C.dark}}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div style={{marginTop:"1.1rem"}}>
          <button style={{...G.btn,opacity:loading?0.6:1}} onClick={search} disabled={loading}>
            {loading ? msg : "🔍 Search Latest Jobs — Free"}
          </button>
        </div>
      </div>

      {err&&<div style={{background:"rgba(255,77,77,0.1)",border:`1px solid ${C.red}`,borderRadius:"9px",padding:"0.9rem 1.1rem",marginBottom:"1rem",fontSize:"0.88rem",color:"#ffaaaa"}}>⚠️ {err}</div>}

      {loading&&(
        <div style={{...G.card,textAlign:"center",padding:"3rem",border:`1px solid rgba(168,85,247,0.3)`}}>
          <MammothMascot size={80} style={{margin:"0 auto 1rem",display:"block"}}/>
          <div style={{color:C.purple,fontWeight:700,fontSize:"0.95rem"}}>{msg}</div>
          <div style={{marginTop:"0.5rem",color:C.gray,fontSize:"0.78rem"}}>Mammo is working hard — takes about 15-20 seconds...</div>
        </div>
      )}

      {results&&(
        <div style={G.card}>
          <div style={{fontWeight:800,fontSize:"1.05rem",marginBottom:"0.2rem"}}>
            🎉 {results.length} Real Jobs Found!
          </div>
          <div style={{color:C.gray,fontSize:"0.78rem",marginBottom:"1.25rem"}}>Live from Job Bank Canada, Indeed & LinkedIn</div>
          {results.map((job,i)=>(
            <div key={i} style={{background:"#0a0f1a",border:`1px solid ${C.border}`,borderLeft:`3px solid ${job.source==="Job Bank Canada"?C.gold:C.teal}`,borderRadius:"9px",padding:"1.1rem 1.25rem",marginBottom:"0.9rem"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"0.5rem"}}>
                <div style={{fontWeight:800,fontSize:"0.98rem"}}>{job.title}</div>
                <span style={{fontSize:"0.68rem",background:job.source==="Job Bank Canada"?"rgba(240,165,0,0.1)":"rgba(45,212,191,0.1)",border:`1px solid ${job.source==="Job Bank Canada"?C.gold:C.teal}`,borderRadius:"20px",padding:"0.1rem 0.6rem",color:job.source==="Job Bank Canada"?C.gold:C.teal}}>
                  {job.source==="Job Bank Canada"?"🇨🇦 Job Bank Canada":"🌐 Indeed / LinkedIn"}
                </span>
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:"0.8rem",fontSize:"0.77rem",color:C.gold,margin:"0.4rem 0 0.55rem"}}>
                <span>🏢 {job.company}</span><span>📍 {job.location}</span><span>🕐 {job.posted}</span><span>💼 {job.type}</span>
                {job.salary&&job.salary!=="Not listed"&&<span>💰 {job.salary}</span>}
              </div>
              <div style={{color:C.gray,fontSize:"0.83rem",lineHeight:1.6,marginBottom:"0.65rem"}}>{job.description}</div>
              {job.skills?.length>0&&<div style={{marginBottom:"0.65rem"}}>{job.skills.map((s,si)=><span key={si} style={G.tag}>{s}</span>)}</div>}
              {job.applyUrl&&<a href={job.applyUrl} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:C.gold,color:C.black,padding:"0.38rem 1rem",borderRadius:"6px",fontSize:"0.77rem",fontWeight:800,textDecoration:"none"}}>Apply Now →</a>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── RESUME ────────────────────────────────────────────────────────────────
const STEPS=["Personal Info","Work Experience","Education","Skills","Your Resume"];
function Resume({userPlan,setTab}){
  const [step,setStep]=useState(0);const [loading,setLoading]=useState(false);const [resume,setResume]=useState("");const [cover,setCover]=useState("");const [copied,setCopied]=useState(false);
  const [form,setForm]=useState({name:"",email:"",phone:"",city:"",target:"",exp:[{title:"",company:"",duration:"",duties:""}],edu:[{degree:"",school:"",year:""}],skills:"",extras:""});
  const set=(k,v)=>setForm(f=>({...f,[k]:v}));
  const setExp=(i,k,v)=>setForm(f=>{const e=[...f.exp];e[i]={...e[i],[k]:v};return{...f,exp:e};});
  const setEdu=(i,k,v)=>setForm(f=>{const e=[...f.edu];e[i]={...e[i],[k]:v};return{...f,edu:e};});
  async function generate(){
    setLoading(true);setResume("");setCover("");
    try{
      const r1=await fetch("/api/claude",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:MODEL,max_tokens:1000,messages:[{role:"user",content:`You are a top Canadian resume writer. Build a complete ATS-optimized resume for:\n${form.name} | ${form.email} | ${form.phone} | ${form.city} Ontario GTA | Target: ${form.target}\nWork: ${form.exp.map(e=>`${e.title} at ${e.company} (${e.duration}) — ${e.duties}`).join(" | ")}\nEducation: ${form.edu.map(e=>`${e.degree}, ${e.school} ${e.year}`).join(" | ")}\nSkills: ${form.skills}\nOther: ${form.extras}\nWrite a complete Canadian resume: header, 3-4 line professional summary, work experience with 3-4 bullet points using action verbs and metrics, education, and skills. Make it compelling for ${form.target} roles in the GTA.`}]})});
      const d1=await r1.json();setResume(d1.content.filter(b=>b.type==="text").map(b=>b.text).join(""));
      if(userPlan!=="Free"){
        const r2=await fetch("/api/claude",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:MODEL,max_tokens:1000,messages:[{role:"user",content:`Write a professional Canadian cover letter for ${form.name} applying for ${form.target} in the GTA. Background: ${form.exp[0]?.duties}. 3 paragraphs, confident warm tone, no placeholders.`}]})});
        const d2=await r2.json();setCover(d2.content.filter(b=>b.type==="text").map(b=>b.text).join(""));
      }
      setStep(4);
    }catch(e){console.error(e);}
    setLoading(false);
  }
  const pct=(step/4)*100;
  const cities=["Toronto","Mississauga","Brampton","Markham","Vaughan","Richmond Hill","Oakville","Scarborough","North York","Etobicoke"];
  return(<div>
    <div style={{...G.card,border:`1px solid rgba(45,212,191,0.3)`,background:"linear-gradient(135deg,#131926,#0a1f1e)"}}>
      <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"}}>
        <MonsterMascot size={70} style={{flexShrink:0}}/>
        <div>
          <div style={{fontWeight:900,fontSize:"1.3rem"}}>Teelo's Resume Builder</div>
          <div style={{color:C.gray,fontSize:"0.82rem"}}>Step {step+1}/{STEPS.length}: {STEPS[step]}</div>
          {userPlan==="Free"&&step<4&&<button style={{...G.btnTeal,width:"auto",padding:"0.35rem 0.85rem",fontSize:"0.72rem",marginTop:"0.4rem"}} onClick={()=>setTab("pricing")}>✨ Unlock Cover Letter</button>}
        </div>
      </div>
      <div style={{background:C.border,borderRadius:"20px",height:5,marginBottom:"1.75rem"}}>
        <div style={{background:`linear-gradient(90deg,${C.teal},${C.gold})`,height:"100%",width:`${pct}%`,borderRadius:"20px",transition:"width 0.4s"}}/>
      </div>
      {step===0&&(<><label style={G.label}>Full Name</label><input style={G.input} placeholder="Jane Doe" value={form.name} onChange={e=>set("name",e.target.value)}/><div style={G.two}><div><label style={G.label}>Email</label><input style={G.input} placeholder="jane@email.com" value={form.email} onChange={e=>set("email",e.target.value)}/></div><div><label style={G.label}>Phone</label><input style={G.input} placeholder="(416) 555-0100" value={form.phone} onChange={e=>set("phone",e.target.value)}/></div></div><div style={G.two}><div><label style={G.label}>GTA City</label><select style={G.input} value={form.city} onChange={e=>set("city",e.target.value)}><option value="" style={{background:C.dark}}>Select...</option>{cities.map(c=><option key={c} value={c} style={{background:C.dark}}>{c}</option>)}</select></div><div><label style={G.label}>Target Job</label><input style={G.input} placeholder="Warehouse Associate" value={form.target} onChange={e=>set("target",e.target.value)}/></div></div></>)}
      {step===1&&(<>{form.exp.map((e,i)=>(<div key={i}>{i>0&&<hr style={G.divider}/>}<div style={{color:C.teal,fontSize:"0.72rem",fontWeight:700,marginBottom:"0.65rem"}}>POSITION {i+1}</div><div style={G.two}><div><label style={G.label}>Job Title</label><input style={G.input} placeholder="Cashier" value={e.title} onChange={ev=>setExp(i,"title",ev.target.value)}/></div><div><label style={G.label}>Company</label><input style={G.input} placeholder="Tim Hortons" value={e.company} onChange={ev=>setExp(i,"company",ev.target.value)}/></div></div><label style={G.label}>Duration</label><input style={G.input} placeholder="Jan 2023 to Present" value={e.duration} onChange={ev=>setExp(i,"duration",ev.target.value)}/><label style={G.label}>Duties & Achievements</label><textarea style={G.textarea} placeholder="What did you do? Any wins or numbers?" value={e.duties} onChange={ev=>setExp(i,"duties",ev.target.value)}/></div>))}<button style={G.btnGhost} onClick={()=>setForm(f=>({...f,exp:[...f.exp,{title:"",company:"",duration:"",duties:""}]}))}>+ Add Another Role</button></>)}
      {step===2&&(<>{form.edu.map((e,i)=>(<div key={i}>{i>0&&<hr style={G.divider}/>}<div style={G.two}><div><label style={G.label}>Degree / Diploma</label><input style={G.input} placeholder="OSSD / Diploma / Degree" value={e.degree} onChange={ev=>setEdu(i,"degree",ev.target.value)}/></div><div><label style={G.label}>School</label><input style={G.input} placeholder="Humber College" value={e.school} onChange={ev=>setEdu(i,"school",ev.target.value)}/></div></div><label style={G.label}>Year</label><input style={G.input} placeholder="2021" value={e.year} onChange={ev=>setEdu(i,"year",ev.target.value)}/></div>))}<button style={G.btnGhost} onClick={()=>setForm(f=>({...f,edu:[...f.edu,{degree:"",school:"",year:""}]}))}>+ Add Another</button></>)}
      {step===3&&(<><label style={G.label}>Your Skills</label><textarea style={G.textarea} placeholder="Customer service, forklift certified, MS Office, bilingual, cash handling..." value={form.skills} onChange={e=>set("skills",e.target.value)}/><label style={G.label}>Anything Else?</label><textarea style={G.textarea} placeholder="First Aid cert, languages, volunteer work..." value={form.extras} onChange={e=>set("extras",e.target.value)}/>{userPlan!=="Free"&&<div style={{background:"rgba(0,201,122,0.08)",border:"1px solid rgba(0,201,122,0.3)",borderRadius:"9px",padding:"0.8rem 1rem",fontSize:"0.82rem",color:C.green}}>✅ Pro: Teelo will also write your cover letter automatically!</div>}</>)}
      {step===4&&resume&&(<><div style={{display:"flex",gap:"0.65rem",marginBottom:"1.25rem"}}><button style={G.btnGhost} onClick={()=>{navigator.clipboard.writeText(resume);setCopied(true);setTimeout(()=>setCopied(false),2000);}}>{copied?"✅ Copied!":"📋 Copy Resume"}</button><button style={G.btnGhost} onClick={()=>{setStep(0);setResume("");}}>🔄 Start Over</button></div><div style={{background:"#f8f9fc",color:"#1a1a2e",borderRadius:"11px",padding:"1.75rem",fontFamily:"Georgia,serif",lineHeight:1.7,whiteSpace:"pre-wrap",fontSize:"0.86rem"}}>{resume}</div>{cover&&(<><hr style={G.divider}/><div style={{fontWeight:800,marginBottom:"0.9rem"}}>✉️ AI Cover Letter (Pro)</div><div style={{background:"#f8f9fc",color:"#1a1a2e",borderRadius:"11px",padding:"1.75rem",fontFamily:"Georgia,serif",lineHeight:1.7,whiteSpace:"pre-wrap",fontSize:"0.86rem"}}>{cover}</div></>)}</>)}
      {loading&&<div style={{textAlign:"center",padding:"2.5rem"}}><MonsterMascot size={80} style={{margin:"0 auto 1rem",display:"block"}}/><div style={{color:C.teal,fontWeight:700}}>Teelo is crafting your resume...</div></div>}
      {step<4&&!loading&&(<div style={{display:"flex",justifyContent:"space-between",marginTop:"1.75rem"}}><button style={{...G.btnGhost,visibility:step===0?"hidden":"visible"}} onClick={()=>setStep(s=>s-1)}>← Back</button>{step<3?<button style={{...G.btn,width:"auto"}} onClick={()=>setStep(s=>s+1)}>Next →</button>:<button style={{...G.btnTeal,width:"auto"}} onClick={generate}>✨ Build My Resume!</button>}</div>)}
    </div>
  </div>);
}

// ── PRICING ───────────────────────────────────────────────────────────────
function Pricing({userPlan,setUserPlan}){
  return(<div>
    <div style={{textAlign:"center",marginBottom:"2rem"}}>
      <div style={{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"1rem"}}>
        <MammothMascot size={80}/><MonsterMascot size={80}/>
      </div>
      <div style={{...G.h1,fontSize:"2rem"}}>Pick Your Plan</div>
      <div style={{color:C.gray}}>Mammo & Teelo are ready to help — whatever plan you choose!</div>
    </div>
    <div style={G.three}>{PLANS.map((p,i)=>(<div key={i} style={{...G.card,border:p.highlight?`2px solid ${C.gold}`:`1px solid ${C.border}`,position:"relative",background:p.highlight?"linear-gradient(160deg,#1c1a0a,#131926)":C.card,textAlign:"center"}}>
      {p.highlight&&<div style={{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:C.gold,color:C.black,fontSize:"0.66rem",fontWeight:800,padding:"0.18rem 0.85rem",borderRadius:"20px",whiteSpace:"nowrap"}}>MOST POPULAR</div>}
      <div style={{display:"flex",justifyContent:"center",marginBottom:"0.5rem"}}>
        {p.mascot==="mammoth"&&<MammothMascot size={70}/>}
        {p.mascot==="monster"&&<MonsterMascot size={70}/>}
        {p.mascot==="both"&&<div style={{display:"flex",gap:"0.25rem"}}><MammothMascot size={50}/><MonsterMascot size={50}/></div>}
      </div>
      <div style={{color:p.color,fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.4rem"}}>{p.name}</div>
      <div style={{fontSize:"2.2rem",fontWeight:900,marginBottom:"0.15rem"}}>{p.price}<span style={{fontSize:"0.9rem",color:C.gray,fontWeight:400}}>{p.period}</span></div>
      <hr style={G.divider}/>
      {p.features.map((f,fi)=><div key={fi} style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem",fontSize:"0.82rem",textAlign:"left"}}><span style={{color:C.green}}>✓</span>{f}</div>)}
      {p.locked.map((f,fi)=><div key={fi} style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem",fontSize:"0.82rem",color:C.gray,textAlign:"left"}}><span>✕</span>{f}</div>)}
      <button style={{...(p.highlight?G.btn:p.name==="Employer"?{...G.btnBlue,borderRadius:"10px",fontFamily:"inherit",padding:"0.85rem"}:G.btnGhost),marginTop:"1.1rem",width:"100%",opacity:userPlan===p.name?0.55:1}} onClick={()=>setUserPlan(p.name)} disabled={userPlan===p.name}>{userPlan===p.name?"✓ Current Plan":p.cta}</button>
    </div>))}</div>
  </div>);
}

// ── EMPLOYER ──────────────────────────────────────────────────────────────
function Employer({userPlan,setTab}){
  const [post,setPost]=useState({title:"",company:"",location:"",type:"Full-time",salary:"",description:""});
  const [done,setDone]=useState(false);
  const set=(k,v)=>setPost(p=>({...p,[k]:v}));
  if(userPlan!=="Employer")return(<div style={{...G.card,textAlign:"center",padding:"3rem",border:`1px solid rgba(45,212,191,0.3)`}}>
    <MonsterMascot size={100} style={{margin:"0 auto",display:"block",marginBottom:"1rem"}}/>
    <div style={{fontWeight:800,fontSize:"1.2rem",marginBottom:"0.6rem"}}>Teelo's Employer Portal</div>
    <div style={{color:C.gray,marginBottom:"0.5rem",fontSize:"0.88rem"}}>Post jobs and find great candidates across the GTA.</div>
    <div style={{color:C.teal,marginBottom:"1.5rem",fontSize:"0.88rem",fontWeight:700}}>Starting at just $49.99/mo</div>
    <button style={{...G.btnTeal,width:"auto"}} onClick={()=>setTab("pricing")}>Upgrade to Employer Plan →</button>
  </div>);
  return(<div><div style={{...G.card,border:`1px solid rgba(45,212,191,0.3)`}}>
    <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.25rem"}}>
      <MonsterMascot size={60} style={{flexShrink:0}}/>
      <div><div style={{fontWeight:800,fontSize:"1.3rem"}}>Post a Job</div><div style={{color:C.gray,fontSize:"0.82rem"}}>Reach thousands of active GTA job seekers instantly</div></div>
    </div>
    {done?(<div style={{textAlign:"center",padding:"2rem"}}><div style={{fontSize:"2.5rem"}}>🎉</div><div style={{fontWeight:800,fontSize:"1.15rem",margin:"0.85rem 0 0.4rem"}}>Job Posted!</div><div style={{color:C.gray,fontSize:"0.85rem",marginBottom:"1.25rem"}}>Your listing is now live to GTA job seekers!</div><button style={{...G.btnTeal,width:"auto"}} onClick={()=>{setDone(false);setPost({title:"",company:"",location:"",type:"Full-time",salary:"",description:""});}}>Post Another</button></div>):(<>
      <div style={G.two}><div><label style={G.label}>Job Title</label><input style={G.input} placeholder="Forklift Operator" value={post.title} onChange={e=>set("title",e.target.value)}/></div><div><label style={G.label}>Company</label><input style={G.input} placeholder="Maple Logistics" value={post.company} onChange={e=>set("company",e.target.value)}/></div></div>
      <div style={G.two}><div><label style={G.label}>Location</label><select style={{...G.input,marginBottom:0}} value={post.location} onChange={e=>set("location",e.target.value)}><option value="" style={{background:C.dark}}>Select...</option>{["Toronto","Mississauga","Brampton","Markham","Vaughan","Oakville","Scarborough"].map(c=><option key={c} value={c} style={{background:C.dark}}>{c}</option>)}</select></div><div><label style={G.label}>Type</label><select style={{...G.input,marginBottom:0}} value={post.type} onChange={e=>set("type",e.target.value)}>{["Full-time","Part-time","Contract","Remote","Hybrid"].map(t=><option key={t} value={t} style={{background:C.dark}}>{t}</option>)}</select></div></div>
      <label style={G.label}>Salary Range</label><input style={G.input} placeholder="$18-$22/hr or $55,000/yr" value={post.salary} onChange={e=>set("salary",e.target.value)}/>
      <label style={G.label}>Job Description</label><textarea style={{...G.textarea,minHeight:130}} value={post.description} onChange={e=>set("description",e.target.value)}/>
      <button style={G.btnTeal} onClick={()=>setDone(true)}>📢 Post Job Listing</button>
    </>)}
  </div></div>);
}

// ── ROOT ──────────────────────────────────────────────────────────────────
export default function App() {
  const [tab,setTab]=useState("home");
  const [userPlan,setUserPlan]=useState("Free");

  return(
    <div style={G.app}>
      <style>{`
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        *{box-sizing:border-box}
        select option{background:#0e1420;color:#f0f4ff}
        input::placeholder,textarea::placeholder{color:#2a3a56}
        input:focus,textarea:focus,select:focus{border-color:#f0a500!important;box-shadow:0 0 0 2px rgba(240,165,0,0.1)}
        button:hover:not(:disabled){filter:brightness(1.12);transform:translateY(-1px)}
        a:hover{opacity:0.8}
      `}</style>

      <header style={G.header}>
        <div style={G.logoMark}>
          <MammothMascot size={38}/>
          <MonsterMascot size={38}/>
          <div style={{marginLeft:"0.25rem"}}>
            <div style={G.logoText}>HireMe.eh</div>
            <div style={G.logoSub}>The Job Search App Ontario Was Waiting For</div>
          </div>
        </div>
        <nav style={{display:"flex",gap:"0.2rem",flexWrap:"wrap"}}>
          {[["home","🏠 Home"],["jobs","🔍 Jobs"],["resume","📄 Resume"],["employer","🏢 Employers"],["pricing","💎 Pricing"]].map(([id,label])=>(
            <button key={id} style={G.navBtn(tab===id)} onClick={()=>setTab(id)}>{label}</button>
          ))}
        </nav>
        <div style={{display:"flex",alignItems:"center",gap:"0.4rem",flexShrink:0}}>
          <span style={{fontSize:"0.68rem",color:C.gray}}>Plan:</span>
          <span style={{background:"rgba(240,165,0,0.1)",border:`1px solid ${C.gold}`,borderRadius:"6px",padding:"0.2rem 0.6rem",fontSize:"0.72rem",color:C.gold,fontWeight:700}}>{userPlan}</span>
        </div>
      </header>

      <main style={G.main}>
        {tab==="home"&&<Home setTab={setTab}/>}
        {tab==="jobs"&&<Jobs userPlan={userPlan} setTab={setTab}/>}
        {tab==="resume"&&<Resume userPlan={userPlan} setTab={setTab}/>}
        {tab==="employer"&&<Employer userPlan={userPlan} setTab={setTab}/>}
        {tab==="pricing"&&<Pricing userPlan={userPlan} setUserPlan={setUserPlan}/>}
      </main>
    </div>
  );
}
