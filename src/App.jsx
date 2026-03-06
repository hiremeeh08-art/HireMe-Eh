import { useState, useEffect } from "react";

const CLAUDE_MODEL = "claude-sonnet-4-20250514";

const C = {
  black: "#080b12", dark: "#0e1420", card: "#131926", border: "#1e2d47",
  gold: "#f0a500", blue: "#0066ff", white: "#f0f4ff", gray: "#5a6880",
  green: "#00c97a", red: "#ff4d4d",
};

const G = {
  app: { fontFamily: "'Trebuchet MS', 'Lucida Grande', sans-serif", background: C.black, minHeight: "100vh", color: C.white },
  header: { background: "rgba(8,11,18,0.96)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.border}`, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 200, height: 62, gap: "1rem" },
  logoMark: { width: 32, height: 32, background: `linear-gradient(135deg, ${C.gold}, #e07000)`, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1rem", color: C.black, flexShrink: 0 },
  logoText: { fontSize: "1.05rem", fontWeight: 800, letterSpacing: "-0.02em" },
  logoSub: { fontSize: "0.58rem", color: C.gold, letterSpacing: "0.15em", textTransform: "uppercase" },
  navBtn: (a) => ({ background: a ? `rgba(240,165,0,0.12)` : "transparent", color: a ? C.gold : C.gray, border: `1px solid ${a ? C.gold : "transparent"}`, padding: "0.4rem 0.85rem", borderRadius: "7px", cursor: "pointer", fontFamily: "inherit", fontSize: "0.78rem", fontWeight: a ? 700 : 400, transition: "all 0.15s" }),
  main: { maxWidth: 940, margin: "0 auto", padding: "2.5rem 1.25rem" },
  card: { background: C.card, border: `1px solid ${C.border}`, borderRadius: "14px", padding: "1.75rem", marginBottom: "1.25rem" },
  h1: { fontSize: "clamp(1.9rem,5vw,3.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1rem" },
  badge: { display: "inline-block", background: "rgba(240,165,0,0.1)", border: `1px solid ${C.gold}`, color: C.gold, borderRadius: "20px", padding: "0.2rem 0.8rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" },
  label: { display: "block", fontSize: "0.72rem", fontWeight: 700, marginBottom: "0.3rem", color: C.gray, letterSpacing: "0.1em", textTransform: "uppercase" },
  input: { width: "100%", background: "#0a0f1a", border: `1px solid ${C.border}`, borderRadius: "9px", color: C.white, fontFamily: "inherit", fontSize: "0.92rem", padding: "0.72rem 1rem", outline: "none", boxSizing: "border-box", marginBottom: "0.9rem" },
  textarea: { width: "100%", background: "#0a0f1a", border: `1px solid ${C.border}`, borderRadius: "9px", color: C.white, fontFamily: "inherit", fontSize: "0.92rem", padding: "0.72rem 1rem", outline: "none", boxSizing: "border-box", marginBottom: "0.9rem", resize: "vertical", minHeight: 88 },
  btn: { background: `linear-gradient(135deg, ${C.gold}, #d07000)`, color: C.black, border: "none", borderRadius: "9px", padding: "0.85rem 2rem", fontFamily: "inherit", fontSize: "0.92rem", fontWeight: 800, cursor: "pointer", letterSpacing: "0.03em", transition: "all 0.2s", width: "100%" },
  btnGhost: { background: "transparent", color: C.white, border: `1px solid ${C.border}`, borderRadius: "9px", padding: "0.7rem 1.4rem", fontFamily: "inherit", fontSize: "0.82rem", cursor: "pointer", transition: "all 0.2s" },
  btnBlue: { background: C.blue, color: C.white, border: "none", borderRadius: "9px", padding: "0.85rem 2rem", fontFamily: "inherit", fontSize: "0.92rem", fontWeight: 700, cursor: "pointer", width: "100%" },
  divider: { border: "none", borderTop: `1px solid ${C.border}`, margin: "1.25rem 0" },
  two: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem" },
  three: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.1rem" },
  four: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.9rem" },
  tag: { display: "inline-block", background: "rgba(0,102,255,0.1)", border: "1px solid rgba(0,102,255,0.25)", borderRadius: "5px", padding: "0.12rem 0.5rem", fontSize: "0.7rem", color: "#7aadff", marginRight: "0.3rem", marginBottom: "0.3rem" },
  spinner: { display: "inline-block", width: 20, height: 20, border: `3px solid rgba(240,165,0,0.2)`, borderTop: `3px solid ${C.gold}`, borderRadius: "50%", animation: "spin 0.7s linear infinite" },
};

const PLANS = [
  { name: "Free", price: "$0", period: "", color: C.gray, highlight: false, cta: "Start Free", features: ["5 job searches/day","Basic resume builder","GTA job listings","Community support"], locked: ["Cover letter AI","LinkedIn optimizer","Interview coach","Employer direct contact","Featured profile"] },
  { name: "Pro", price: "$9.99", period: "/mo", color: C.gold, highlight: true, cta: "Start Pro — 7 Days Free", features: ["Unlimited job searches","AI resume builder","AI cover letter generator","LinkedIn profile optimizer","Interview prep coach","Priority support"], locked: ["Employer contact","Featured profile badge"] },
  { name: "Employer", price: "$49.99", period: "/mo", color: C.blue, highlight: false, cta: "Post Jobs Now", features: ["Post unlimited jobs","Browse candidate profiles","Featured job listings","Applicant tracking","Direct candidate messaging","Hiring analytics dashboard"], locked: [] },
];

// ── HOME ──
function Home({ setTab }) {
  const [tick, setTick] = useState(0);
  const tickers = ["2,847 GTA jobs indexed this week","412 resumes built today","Ontario's fastest job search","Join 8,200+ job seekers"];
  useEffect(() => { const t = setInterval(() => setTick(n => (n+1) % tickers.length), 2800); return () => clearInterval(t); }, []);
  return (
    <div>
      <div style={{ ...G.card, background: "linear-gradient(135deg,#0e1420 55%,#0a1828)", padding: "3rem 2rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, background: "radial-gradient(circle,rgba(240,165,0,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={G.badge}>🇨🇦 Ontario's #1 AI Job Platform</div>
        <div style={G.h1}>Get Hired in the GTA.<br /><span style={{ color: C.gold }}>Faster Than Anyone.</span></div>
        <p style={{ color: C.gray, fontSize: "1rem", lineHeight: 1.7, maxWidth: 540, marginBottom: "2rem" }}>Real-time postings across Toronto, Brampton, Mississauga & beyond. AI resumes that get callbacks. Built for the people of Ontario who deserve better tools.</p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
          <button style={{ ...G.btn, width: "auto", padding: "0.85rem 2.2rem" }} onClick={() => setTab("jobs")}>🔍 Search Jobs — Free</button>
          <button style={G.btnGhost} onClick={() => setTab("pricing")}>View Plans →</button>
        </div>
        <div style={{ fontSize: "0.78rem", color: C.gold, fontWeight: 700 }}>↗ {tickers[tick]}</div>
      </div>

      <div style={G.four}>
        {[{n:"47K+",l:"Jobs Indexed"},{n:"8.2K",l:"Resumes Built"},{n:"94%",l:"Interview Rate (Pro)"},{n:"$0",l:"To Start"}].map((s,i) => (
          <div key={i} style={{ ...G.card, padding: "1.1rem", textAlign: "center" }}>
            <div style={{ fontSize: "1.6rem", fontWeight: 900, color: C.gold }}>{s.n}</div>
            <div style={{ fontSize: "0.72rem", color: C.gray, marginTop: "0.15rem" }}>{s.l}</div>
          </div>
        ))}
      </div>

      <div style={G.card}>
        <div style={{ fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.35rem" }}>Three Ways to Use WorkWise GTA</div>
        <div style={{ color: C.gray, fontSize: "0.82rem", marginBottom: "1.25rem" }}>Whether you're looking for work or hiring — we've got you.</div>
        <div style={G.three}>
          {[
            { icon: "🔍", t: "Job Seekers — Free", d: "Search thousands of fresh GTA postings. No account needed.", action: () => setTab("jobs"), cta: "Find Jobs" },
            { icon: "✨", t: "Pro Members — $9.99/mo", d: "Unlimited searches + AI resume, cover letter & interview coach.", action: () => setTab("pricing"), cta: "Go Pro" },
            { icon: "🏢", t: "Employers — $49.99/mo", d: "Post jobs, browse candidates, hire faster across the GTA.", action: () => setTab("employer"), cta: "Post a Job" },
          ].map((f,i) => (
            <div key={i} style={{ background: "#0a0f1a", border: `1px solid ${C.border}`, borderRadius: "11px", padding: "1.4rem" }}>
              <div style={{ fontSize: "1.7rem", marginBottom: "0.6rem" }}>{f.icon}</div>
              <div style={{ fontWeight: 800, marginBottom: "0.35rem", fontSize: "0.9rem" }}>{f.t}</div>
              <div style={{ color: C.gray, fontSize: "0.8rem", lineHeight: 1.5, marginBottom: "1rem" }}>{f.d}</div>
              <button style={{ ...G.btn, padding: "0.55rem 1rem", fontSize: "0.78rem", width: "auto" }} onClick={f.action}>{f.cta} →</button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...G.card, textAlign: "center", padding: "1.25rem" }}>
        <div style={{ color: C.gray, fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Serving Every Corner of the GTA</div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.4rem" }}>
          {["Toronto","Mississauga","Brampton","Markham","Vaughan","Richmond Hill","Oakville","Scarborough","North York","Etobicoke","Ajax","Pickering","Oshawa","Burlington"].map(c => (
            <span key={c} style={G.tag}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── JOB SEARCH ──
function Jobs({ userPlan, setTab }) {
  const [q, setQ] = useState(""); const [loc, setLoc] = useState("Toronto, GTA Ontario"); const [type, setType] = useState("Any");
  const [results, setResults] = useState(null); const [loading, setLoading] = useState(false); const [err, setErr] = useState(""); const [searches, setSearches] = useState(0);

  async function search() {
    if (!q.trim()) return;
    if (userPlan === "Free" && searches >= 5) { setErr("Daily limit reached. Upgrade to Pro for unlimited searches!"); return; }
    setLoading(true); setResults(null); setErr("");
    try {
      const res = await fetch("/api/claude", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: CLAUDE_MODEL, max_tokens: 1000,
          tools: [{ type: "web_search_20250305", name: "web_search" }],
          messages: [{ role: "user", content: `You are a job search assistant for Greater Toronto Area, Ontario, Canada. Find the most RECENT job postings (last 1-3 weeks) for: "${q}" in ${loc}, type: ${type}. Search Indeed.ca, LinkedIn, Workopolis, Job Bank Canada. Return ONLY a valid JSON array of 6 jobs. Each object: {title, company, location (GTA city), type, posted (e.g. "3 days ago"), salary ("Not listed" if unknown), description (2 sentences), applyUrl, skills (array of 4)}. No markdown, no explanation, just the JSON array.` }],
        }),
      });
      const data = await res.json();
      const text = data.content.filter(b => b.type === "text").map(b => b.text).join("");
      setResults(JSON.parse(text.replace(/```json|```/g, "").trim()));
      setSearches(s => s + 1);
    } catch (e) { setErr("Search failed. Please try again."); }
    setLoading(false);
  }

  return (
    <div>
      <div style={G.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
          <div><div style={{ fontWeight: 800, fontSize: "1.3rem" }}>🔍 GTA Job Search</div><div style={{ color: C.gray, fontSize: "0.82rem" }}>Live results from across Ontario's job market</div></div>
          {userPlan === "Free" && <div style={{ background: "#0a0f1a", border: `1px solid ${C.border}`, borderRadius: "9px", padding: "0.5rem 0.9rem", fontSize: "0.75rem", color: C.gray, textAlign: "center" }}><span style={{ color: C.gold, fontWeight: 700 }}>{5 - searches}</span> free searches left</div>}
        </div>
        <label style={G.label}>Role, Skills, or Keywords</label>
        <input style={G.input} placeholder="warehouse worker, customer service, PSW, software developer..." value={q} onChange={e => setQ(e.target.value)} onKeyDown={e => e.key === "Enter" && search()} />
        <div style={G.two}>
          <div>
            <label style={G.label}>City</label>
            <select style={{ ...G.input, marginBottom: 0 }} value={loc} onChange={e => setLoc(e.target.value)}>
              {["Toronto, GTA Ontario","Mississauga, Ontario","Brampton, Ontario","Markham, Ontario","Vaughan, Ontario","Oakville, Ontario","Scarborough, Ontario","North York, Ontario","Anywhere in GTA"].map(l => <option key={l} value={l} style={{ background: C.dark }}>{l}</option>)}
            </select>
          </div>
          <div>
            <label style={G.label}>Type</label>
            <select style={{ ...G.input, marginBottom: 0 }} value={type} onChange={e => setType(e.target.value)}>
              {["Any","Full-time","Part-time","Contract","Remote","Hybrid","Entry Level"].map(t => <option key={t} value={t} style={{ background: C.dark }}>{t}</option>)}
            </select>
          </div>
        </div>
        <div style={{ marginTop: "1.1rem" }}>
          <button style={{ ...G.btn, opacity: loading ? 0.6 : 1 }} onClick={search} disabled={loading}>{loading ? "Scanning GTA job market..." : "Search Latest Jobs"}</button>
        </div>
      </div>
      {err && <div style={{ background: "rgba(255,77,77,0.1)", border: `1px solid ${C.red}`, borderRadius: "9px", padding: "0.9rem 1.1rem", marginBottom: "1rem", fontSize: "0.85rem", color: "#ffaaaa" }}>⚠️ {err} {userPlan === "Free" && <span style={{ color: C.gold, cursor: "pointer", fontWeight: 700 }} onClick={() => setTab("pricing")}>Upgrade →</span>}</div>}
      {loading && <div style={{ ...G.card, textAlign: "center", padding: "3rem" }}><div style={G.spinner} /><div style={{ marginTop: "1.1rem", color: C.gray, fontSize: "0.88rem" }}>Scanning Indeed.ca, Job Bank, LinkedIn & more...</div></div>}
      {results && (
        <div style={G.card}>
          <div style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.2rem" }}>{results.length} Fresh GTA Postings</div>
          <div style={{ color: C.gray, fontSize: "0.78rem", marginBottom: "1.25rem" }}>From the last 1–3 weeks</div>
          {results.map((job, i) => (
            <div key={i} style={{ background: "#0a0f1a", border: `1px solid ${C.border}`, borderLeft: `3px solid ${C.gold}`, borderRadius: "9px", padding: "1.1rem 1.25rem", marginBottom: "0.9rem" }}>
              <div style={{ fontWeight: 800, fontSize: "0.98rem", marginBottom: "0.25rem" }}>{job.title}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", fontSize: "0.77rem", color: C.gold, marginBottom: "0.55rem" }}>
                <span>🏢 {job.company}</span><span>📍 {job.location}</span><span>🕐 {job.posted}</span><span>💼 {job.type}</span>
                {job.salary !== "Not listed" && <span>💰 {job.salary}</span>}
              </div>
              <div style={{ color: C.gray, fontSize: "0.83rem", lineHeight: 1.6, marginBottom: "0.65rem" }}>{job.description}</div>
              <div style={{ marginBottom: "0.65rem" }}>{job.skills?.map((s, si) => <span key={si} style={G.tag}>{s}</span>)}</div>
              {job.applyUrl && <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: C.gold, color: C.black, padding: "0.38rem 1rem", borderRadius: "6px", fontSize: "0.77rem", fontWeight: 800, textDecoration: "none" }}>Apply Now →</a>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── RESUME BUILDER ──
const STEPS = ["Personal Info","Work Experience","Education","Skills","Your Resume"];
function Resume({ userPlan, setTab }) {
  const [step, setStep] = useState(0); const [loading, setLoading] = useState(false); const [resume, setResume] = useState(""); const [cover, setCover] = useState(""); const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", city:"", target:"", exp:[{title:"",company:"",duration:"",duties:""}], edu:[{degree:"",school:"",year:""}], skills:"", extras:"" });
  const set = (k,v) => setForm(f => ({...f,[k]:v}));
  const setExp = (i,k,v) => setForm(f => { const e=[...f.exp]; e[i]={...e[i],[k]:v}; return {...f,exp:e}; });
  const setEdu = (i,k,v) => setForm(f => { const e=[...f.edu]; e[i]={...e[i],[k]:v}; return {...f,edu:e}; });

  async function generate() {
    setLoading(true); setResume(""); setCover("");
    try {
      const r1 = await fetch("/api/claude", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ model:CLAUDE_MODEL, max_tokens:1000, messages:[{role:"user",content:`You are a top Canadian resume writer. Build a complete ATS-optimized resume for: ${form.name} | ${form.email} | ${form.phone} | ${form.city}, Ontario GTA | Target: ${form.target}\nWork: ${form.exp.map(e=>`${e.title} at ${e.company} (${e.duration}) — ${e.duties}`).join(" | ")}\nEducation: ${form.edu.map(e=>`${e.degree}, ${e.school} ${e.year}`).join(" | ")}\nSkills: ${form.skills}\nOther: ${form.extras}\nWrite a complete professional resume: header, professional summary (3-4 lines), work experience with 3-4 bullet points using action verbs and metrics, education, organized skills. Make it compelling for ${form.target} roles in the GTA.`}] }) });
      const d1 = await r1.json(); setResume(d1.content.filter(b=>b.type==="text").map(b=>b.text).join(""));
      if (userPlan !== "Free") {
        const r2 = await fetch("/api/claude", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ model:CLAUDE_MODEL, max_tokens:1000, messages:[{role:"user",content:`Write a professional Canadian cover letter for ${form.name} applying for ${form.target} in the GTA. Background: ${form.exp[0]?.duties}. 3 paragraphs, confident and warm, Canadian workplace tone. No placeholders.`}] }) });
        const d2 = await r2.json(); setCover(d2.content.filter(b=>b.type==="text").map(b=>b.text).join(""));
      }
      setStep(4);
    } catch(e) { console.error(e); }
    setLoading(false);
  }

  const pct = (step/4)*100;
  const selectOpts = ["Toronto","Mississauga","Brampton","Markham","Vaughan","Richmond Hill","Oakville","Scarborough","North York","Etobicoke"];

  return (
    <div>
      <div style={G.card}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.4rem" }}>
          <div style={{ fontWeight:800, fontSize:"1.3rem" }}>📄 AI Resume Builder</div>
          {userPlan==="Free" && step<4 && <button style={{...G.btn,width:"auto",padding:"0.45rem 0.9rem",fontSize:"0.75rem"}} onClick={()=>setTab("pricing")}>✨ Unlock Cover Letter</button>}
        </div>
        <div style={{ color:C.gray, fontSize:"0.8rem", marginBottom:"1.1rem" }}>Step {step+1}/{STEPS.length}: {STEPS[step]}</div>
        <div style={{ background:C.border, borderRadius:"20px", height:4, marginBottom:"1.75rem" }}>
          <div style={{ background:C.gold, height:"100%", width:`${pct}%`, borderRadius:"20px", transition:"width 0.4s" }} />
        </div>

        {step===0 && (<>
          <label style={G.label}>Full Name</label><input style={G.input} placeholder="Jane Doe" value={form.name} onChange={e=>set("name",e.target.value)} />
          <div style={G.two}>
            <div><label style={G.label}>Email</label><input style={G.input} placeholder="jane@email.com" value={form.email} onChange={e=>set("email",e.target.value)} /></div>
            <div><label style={G.label}>Phone</label><input style={G.input} placeholder="(416) 555-0100" value={form.phone} onChange={e=>set("phone",e.target.value)} /></div>
          </div>
          <div style={G.two}>
            <div><label style={G.label}>GTA City</label><select style={G.input} value={form.city} onChange={e=>set("city",e.target.value)}><option value="" style={{background:C.dark}}>Select...</option>{selectOpts.map(c=><option key={c} value={c} style={{background:C.dark}}>{c}</option>)}</select></div>
            <div><label style={G.label}>Target Job Title</label><input style={G.input} placeholder="Warehouse Associate" value={form.target} onChange={e=>set("target",e.target.value)} /></div>
          </div>
        </>)}

        {step===1 && (<>
          {form.exp.map((e,i) => (<div key={i}>{i>0 && <hr style={G.divider} />}<div style={{color:C.gold,fontSize:"0.72rem",fontWeight:700,marginBottom:"0.65rem",letterSpacing:"0.1em"}}>POSITION {i+1}</div>
            <div style={G.two}><div><label style={G.label}>Job Title</label><input style={G.input} placeholder="Cashier" value={e.title} onChange={ev=>setExp(i,"title",ev.target.value)} /></div><div><label style={G.label}>Company</label><input style={G.input} placeholder="Tim Hortons" value={e.company} onChange={ev=>setExp(i,"company",ev.target.value)} /></div></div>
            <label style={G.label}>Duration</label><input style={G.input} placeholder="Jan 2023 – Present" value={e.duration} onChange={ev=>setExp(i,"duration",ev.target.value)} />
            <label style={G.label}>Duties & Achievements</label><textarea style={G.textarea} placeholder="What did you do? Any wins or numbers?" value={e.duties} onChange={ev=>setExp(i,"duties",ev.target.value)} />
          </div>))}
          <button style={G.btnGhost} onClick={()=>setForm(f=>({...f,exp:[...f.exp,{title:"",company:"",duration:"",duties:""}]}))}>+ Add Role</button>
        </>)}

        {step===2 && (<>
          {form.edu.map((e,i) => (<div key={i}>{i>0 && <hr style={G.divider} />}
            <div style={G.two}><div><label style={G.label}>Degree / Diploma</label><input style={G.input} placeholder="OSSD / Diploma / Degree" value={e.degree} onChange={ev=>setEdu(i,"degree",ev.target.value)} /></div><div><label style={G.label}>School</label><input style={G.input} placeholder="Humber College" value={e.school} onChange={ev=>setEdu(i,"school",ev.target.value)} /></div></div>
            <label style={G.label}>Year</label><input style={G.input} placeholder="2021" value={e.year} onChange={ev=>setEdu(i,"year",ev.target.value)} />
          </div>))}
          <button style={G.btnGhost} onClick={()=>setForm(f=>({...f,edu:[...f.edu,{degree:"",school:"",year:""}]}))}>+ Add Another</button>
        </>)}

        {step===3 && (<>
          <label style={G.label}>Your Skills (comma-separated)</label>
          <textarea style={G.textarea} placeholder="Customer service, forklift certified, MS Office, bilingual, cash handling..." value={form.skills} onChange={e=>set("skills",e.target.value)} />
          <label style={G.label}>Anything Else? (certifications, languages, volunteering)</label>
          <textarea style={G.textarea} placeholder="First Aid cert, fluent in Tagalog, volunteer experience..." value={form.extras} onChange={e=>set("extras",e.target.value)} />
          {userPlan!=="Free" && <div style={{background:"rgba(0,201,122,0.08)",border:"1px solid rgba(0,201,122,0.3)",borderRadius:"9px",padding:"0.8rem 1rem",fontSize:"0.82rem",color:C.green}}>✅ Pro: We'll also generate an AI cover letter automatically.</div>}
        </>)}

        {step===4 && resume && (<>
          <div style={{display:"flex",gap:"0.65rem",marginBottom:"1.25rem",flexWrap:"wrap"}}>
            <button style={G.btnGhost} onClick={()=>{navigator.clipboard.writeText(resume);setCopied(true);setTimeout(()=>setCopied(false),2000);}}>{copied?"✅ Copied!":"📋 Copy Resume"}</button>
            <button style={G.btnGhost} onClick={()=>{setStep(0);setResume("");}}>🔄 Start Over</button>
          </div>
          <div style={{background:"#f8f9fc",color:"#1a1a2e",borderRadius:"11px",padding:"1.75rem",fontFamily:"Georgia,serif",lineHeight:1.7,whiteSpace:"pre-wrap",fontSize:"0.86rem"}}>{resume}</div>
          {cover && (<><hr style={G.divider} /><div style={{fontWeight:800,marginBottom:"0.9rem"}}>✉️ AI Cover Letter (Pro)</div><div style={{background:"#f8f9fc",color:"#1a1a2e",borderRadius:"11px",padding:"1.75rem",fontFamily:"Georgia,serif",lineHeight:1.7,whiteSpace:"pre-wrap",fontSize:"0.86rem"}}>{cover}</div></>)}
        </>)}

        {loading && <div style={{textAlign:"center",padding:"2.5rem"}}><div style={G.spinner}/><div style={{marginTop:"1rem",color:C.gray,fontSize:"0.88rem"}}>Building your resume{userPlan!=="Free"?" + cover letter":""}...</div></div>}

        {step<4 && !loading && (
          <div style={{display:"flex",justifyContent:"space-between",marginTop:"1.75rem"}}>
            <button style={{...G.btnGhost,visibility:step===0?"hidden":"visible"}} onClick={()=>setStep(s=>s-1)}>← Back</button>
            {step<3 ? <button style={{...G.btn,width:"auto"}} onClick={()=>setStep(s=>s+1)}>Next →</button> : <button style={{...G.btn,width:"auto"}} onClick={generate}>✨ Generate Resume</button>}
          </div>
        )}
      </div>
    </div>
  );
}

// ── PRICING ──
function Pricing({ userPlan, setUserPlan }) {
  return (
    <div>
      <div style={{textAlign:"center",marginBottom:"2rem"}}>
        <div style={G.badge}>Simple Pricing</div>
        <div style={{...G.h1,fontSize:"2rem"}}>Invest in Your Career</div>
        <div style={{color:C.gray}}>Start free. Upgrade when ready. Cancel anytime.</div>
      </div>
      <div style={G.three}>
        {PLANS.map((p,i) => (
          <div key={i} style={{...G.card,border:p.highlight?`2px solid ${C.gold}`:`1px solid ${C.border}`,position:"relative",background:p.highlight?"linear-gradient(160deg,#1c1a0a,#131926)":C.card}}>
            {p.highlight && <div style={{position:"absolute",top:-12,left:"50%",transform:"translateX(-50%)",background:C.gold,color:C.black,fontSize:"0.66rem",fontWeight:800,padding:"0.18rem 0.85rem",borderRadius:"20px",letterSpacing:"0.1em",whiteSpace:"nowrap"}}>MOST POPULAR</div>}
            <div style={{color:p.color,fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:"0.4rem"}}>{p.name}</div>
            <div style={{fontSize:"2.2rem",fontWeight:900,marginBottom:"0.15rem"}}>{p.price}<span style={{fontSize:"0.9rem",color:C.gray,fontWeight:400}}>{p.period}</span></div>
            <hr style={G.divider} />
            {p.features.map((f,fi) => <div key={fi} style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem",fontSize:"0.82rem"}}><span style={{color:C.green}}>✓</span>{f}</div>)}
            {p.locked.map((f,fi) => <div key={fi} style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem",fontSize:"0.82rem",color:C.gray}}><span>✕</span>{f}</div>)}
            <button style={{...(p.highlight?G.btn:p.name==="Employer"?{...G.btnBlue,borderRadius:"9px",fontFamily:"inherit",padding:"0.85rem"}:G.btnGhost),marginTop:"1.1rem",width:"100%",opacity:userPlan===p.name?0.55:1}} onClick={()=>setUserPlan(p.name)} disabled={userPlan===p.name}>{userPlan===p.name?"✓ Current Plan":p.cta}</button>
          </div>
        ))}
      </div>
      <div style={{...G.card,textAlign:"center"}}>
        <div style={{fontWeight:800,marginBottom:"0.4rem"}}>🤝 Staffing Agencies & Enterprise</div>
        <div style={{color:C.gray,fontSize:"0.85rem"}}>Volume hiring? Multi-location? Custom pricing available — <span style={{color:C.gold,cursor:"pointer"}}>contact us →</span></div>
      </div>
    </div>
  );
}

// ── EMPLOYER PORTAL ──
function Employer({ userPlan, setTab }) {
  const [post, setPost] = useState({title:"",company:"",location:"",type:"Full-time",salary:"",description:""});
  const [done, setDone] = useState(false);
  const set = (k,v) => setPost(p=>({...p,[k]:v}));
  if (userPlan!=="Employer") return (
    <div style={{...G.card,textAlign:"center",padding:"3rem"}}>
      <div style={{fontSize:"3rem",marginBottom:"1rem"}}>🏢</div>
      <div style={{fontWeight:800,fontSize:"1.2rem",marginBottom:"0.6rem"}}>Employer Portal</div>
      <div style={{color:C.gray,marginBottom:"1.5rem",fontSize:"0.88rem"}}>Post jobs, browse candidates, and hire faster. Starting at $49.99/mo.</div>
      <button style={{...G.btn,width:"auto"}} onClick={()=>setTab("pricing")}>Upgrade to Employer Plan →</button>
    </div>
  );
  return (
    <div>
      <div style={G.card}>
        <div style={{fontWeight:800,fontSize:"1.3rem",marginBottom:"0.35rem"}}>🏢 Post a Job</div>
        <div style={{color:C.gray,fontSize:"0.82rem",marginBottom:"1.25rem"}}>Reach thousands of active GTA job seekers instantly</div>
        {done ? (
          <div style={{textAlign:"center",padding:"2rem"}}>
            <div style={{fontSize:"2.5rem"}}>🎉</div>
            <div style={{fontWeight:800,fontSize:"1.15rem",margin:"0.85rem 0 0.4rem"}}>Job Posted!</div>
            <div style={{color:C.gray,fontSize:"0.85rem",marginBottom:"1.25rem"}}>Your listing is now live to GTA job seekers.</div>
            <button style={{...G.btn,width:"auto"}} onClick={()=>{setDone(false);setPost({title:"",company:"",location:"",type:"Full-time",salary:"",description:""});}}>Post Another</button>
          </div>
        ) : (<>
          <div style={G.two}>
            <div><label style={G.label}>Job Title</label><input style={G.input} placeholder="Forklift Operator" value={post.title} onChange={e=>set("title",e.target.value)} /></div>
            <div><label style={G.label}>Company Name</label><input style={G.input} placeholder="Maple Logistics Inc." value={post.company} onChange={e=>set("company",e.target.value)} /></div>
          </div>
          <div style={G.two}>
            <div><label style={G.label}>Location</label><select style={{...G.input,marginBottom:0}} value={post.location} onChange={e=>set("location",e.target.value)}><option value="" style={{background:C.dark}}>Select city...</option>{["Toronto","Mississauga","Brampton","Markham","Vaughan","Oakville","Scarborough"].map(c=><option key={c} value={c} style={{background:C.dark}}>{c}</option>)}</select></div>
            <div><label style={G.label}>Job Type</label><select style={{...G.input,marginBottom:0}} value={post.type} onChange={e=>set("type",e.target.value)}>{["Full-time","Part-time","Contract","Remote","Hybrid"].map(t=><option key={t} value={t} style={{background:C.dark}}>{t}</option>)}</select></div>
          </div>
          <label style={G.label}>Salary Range</label>
          <input style={G.input} placeholder="$18–$22/hr or $55,000–$65,000/yr" value={post.salary} onChange={e=>set("salary",e.target.value)} />
          <label style={G.label}>Job Description</label>
          <textarea style={{...G.textarea,minHeight:130}} placeholder="Describe the role, responsibilities, requirements, and perks..." value={post.description} onChange={e=>set("description",e.target.value)} />
          <button style={G.btn} onClick={()=>setDone(true)}>📢 Post Job Listing</button>
        </>)}
      </div>
    </div>
  );
}

// ── ROOT ──
export default function App() {
  const [tab, setTab] = useState("home");
  const [userPlan, setUserPlan] = useState("Free");

  return (
    <div style={G.app}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}*{box-sizing:border-box}select option{background:#0e1420;color:#f0f4ff}input::placeholder,textarea::placeholder{color:#2a3a56}input:focus,textarea:focus,select:focus{border-color:#f0a500!important;box-shadow:0 0 0 2px rgba(240,165,0,0.1)}button:hover:not(:disabled){filter:brightness(1.12);transform:translateY(-1px)}a:hover{opacity:0.8}`}</style>
      <header style={G.header}>
        <div style={{display:"flex",alignItems:"center",gap:"0.55rem",flexShrink:0}}>
          <div style={G.logoMark}>W</div>
          <div><div style={G.logoText}>WorkWise GTA</div><div style={G.logoSub}>Ontario's AI Job Platform</div></div>
        </div>
        <nav style={{display:"flex",gap:"0.2rem",flexWrap:"wrap"}}>
          {[["home","🏠 Home"],["jobs","🔍 Jobs"],["resume","📄 Resume"],["employer","🏢 Employers"],["pricing","💎 Pricing"]].map(([id,label]) => (
            <button key={id} style={G.navBtn(tab===id)} onClick={()=>setTab(id)}>{label}</button>
          ))}
        </nav>
        <div style={{display:"flex",alignItems:"center",gap:"0.4rem",flexShrink:0}}>
          <span style={{fontSize:"0.68rem",color:C.gray}}>Plan:</span>
          <span style={{background:"rgba(240,165,0,0.1)",border:`1px solid ${C.gold}`,borderRadius:"6px",padding:"0.2rem 0.6rem",fontSize:"0.72rem",color:C.gold,fontWeight:700}}>{userPlan}</span>
        </div>
      </header>
      <main style={G.main}>
        {tab==="home" && <Home setTab={setTab} />}
        {tab==="jobs" && <Jobs userPlan={userPlan} setTab={setTab} />}
        {tab==="resume" && <Resume userPlan={userPlan} setTab={setTab} />}
        {tab==="employer" && <Employer userPlan={userPlan} setTab={setTab} />}
        {tab==="pricing" && <Pricing userPlan={userPlan} setUserPlan={setUserPlan} />}
      </main>
    </div>
  );
}
