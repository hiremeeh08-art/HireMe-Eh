# WorkWise GTA 🇨🇦
### Ontario's #1 AI-Powered Job Search Platform

---

## 🚀 DEPLOY IN 4 STEPS — NO CODING NEEDED

### STEP 1 — Create a Free GitHub Account
1. Go to **github.com**
2. Click "Sign Up" — use your email, create a username and password
3. Verify your email

---

### STEP 2 — Upload Your Files to GitHub
1. Once logged in, click the **"+"** icon (top right) → "New repository"
2. Name it: `workwise-gta`
3. Make sure it's set to **Public**
4. Click **"Create repository"**
5. On the next page, click **"uploading an existing file"**
6. Upload ALL the files from this folder maintaining the folder structure:
   - `index.html`
   - `package.json`
   - `vite.config.js`
   - `vercel.json`
   - `src/App.jsx`
   - `src/main.jsx`
   - `api/claude.js`
7. Click **"Commit changes"**

---

### STEP 3 — Deploy to Vercel (Free Hosting)
1. Go to **vercel.com**
2. Click "Sign Up" → choose "Continue with GitHub"
3. Click **"New Project"**
4. Find and click on your `workwise-gta` repository
5. Under "Framework Preset" — it should auto-detect **Vite**
6. Click **"Deploy"** — wait about 60 seconds
7. 🎉 Your site is now LIVE at `workwise-gta.vercel.app`

---

### STEP 4 — Add Your Anthropic API Key (IMPORTANT)
Without this, the AI features won't work.

1. Go to **console.anthropic.com** → Sign up / Log in
2. Click "API Keys" → "Create Key" → copy the key (starts with `sk-ant-...`)
3. Go back to **vercel.com** → Your Project → "Settings" → "Environment Variables"
4. Add:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** paste your key here
5. Click "Save"
6. Go to "Deployments" → click the three dots on your latest deploy → "Redeploy"

✅ Your app is now fully live with AI features working!

---

## 💰 OPTIONAL: Add Your Custom Domain
1. Buy `workwisegta.ca` at **ca.godaddy.com** (~$15/year)
2. In Vercel → Settings → Domains → type `workwisegta.ca` → Add
3. Follow the DNS instructions Vercel shows you (copy 2 values into GoDaddy)
4. Wait 10-30 minutes → your site is live at `workwisegta.ca`

---

## 📁 File Structure
```
workwise-gta/
├── index.html          ← The webpage shell
├── package.json        ← App dependencies
├── vite.config.js      ← Build settings  
├── vercel.json         ← Hosting config
├── src/
│   ├── App.jsx         ← Your entire app (the main code)
│   └── main.jsx        ← App entry point
└── api/
    └── claude.js       ← Secure AI proxy (keeps your API key safe)
```

---

## 💡 Need Help?
Continue your conversation at **claude.ai** — all your work is saved there.
