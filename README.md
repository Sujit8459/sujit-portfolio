# Sujit Nagawade — Portfolio

Two folders:
- `frontend/` — React + Vite + Tailwind site → deploy on **Vercel**
- `backend/` — Express API for the contact form → deploy on **Render**

## Before you deploy — replace these placeholders

Open `frontend/src/data/site.js` and fill in:
- `email` — your real email address
- `linkedinUrl` — your real LinkedIn URL
- `resumeUrl` — leave as `/resume.pdf` and add your actual resume PDF to `frontend/public/resume.pdf`
- `photoUrl` — leave as `/profile-photo.jpg` and add your real photo to `frontend/public/profile-photo.jpg` (NOT an AI-generated image — use a real photo of yourself)

Projects and skills live in `frontend/src/data/projects.js` and `frontend/src/data/skills.js` — edit those files to add/change project details without touching any component code.

## 1. Deploy the backend on Render

1. Push this whole repo to GitHub.
2. On Render: **New → Web Service**, connect your repo, set **Root Directory** to `backend`.
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variables (Render dashboard → Environment):
   - `EMAIL_USER` — your Gmail address
   - `EMAIL_PASS` — a Gmail **App Password** (see `backend/.env.example` for how to generate one — this is not your normal Gmail password)
   - `ALLOWED_ORIGIN` — your Vercel URL once you have it (e.g. `https://sujit-portfolio.vercel.app`). You can use `*` at first and tighten it after step 2.
6. Deploy. Note the resulting URL (e.g. `https://sujit-portfolio-api.onrender.com`).

Render's free tier spins down when idle — the first contact-form submission after inactivity may take ~30-50 seconds to respond while it wakes up. That's expected, not a bug.

## 2. Deploy the frontend on Vercel

1. On Vercel: **Add New → Project**, import the same repo, set **Root Directory** to `frontend`.
2. Framework preset: Vite (should auto-detect).
3. Add environment variable:
   - `VITE_API_URL` — the Render URL from step 1 (e.g. `https://sujit-portfolio-api.onrender.com`)
4. Deploy.
5. Once deployed, go back to Render and update `ALLOWED_ORIGIN` to your real Vercel URL for security, then redeploy the backend.

## Local development

```bash
# backend
cd backend
cp .env.example .env   # then fill in real values
npm install
npm run dev             # runs on http://localhost:4000

# frontend (separate terminal)
cd frontend
cp .env.example .env    # VITE_API_URL=http://localhost:4000
npm install
npm run dev              # runs on http://localhost:5173
```

## What's real vs. placeholder right now

- ✅ All project descriptions, skills, and bio content are your real, accurate details
- ✅ Contact form actually sends email via Nodemailer — not a fake success message
- ⚠️ Profile photo, resume PDF, email, and LinkedIn URL are placeholders — see "Before you deploy" above
