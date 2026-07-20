Sujit Nagawade — Portfolio

Two folders:


frontend/ — React + Vite + Tailwind site → deploy on Vercel
backend/ — Express API for the contact form → deploy on Render


Before you deploy — check these

Your real photo, resume, email, and LinkedIn URL are already wired into frontend/src/data/site.js and frontend/public/. Double-check before deploying:


frontend/public/profile-photo.jpg — your real photo
frontend/public/resume.pdf — your current resume (make sure it matches what's on the live site — projects/skills should tell the same story on both)
frontend/public/certificates/ — your ICRACE participation certificate
frontend/public/papers/ — the actual SmartConnect research paper (linked from the "Read paper" button, separate from the certificate)


Projects and skills live in frontend/src/data/projects.js and frontend/src/data/skills.js — edit those files to add/change project details without touching any component code.

1. Deploy the backend on Render


Push this whole repo to GitHub.
On Render: New → Web Service, connect your repo, set Root Directory to backend.
Build command: npm install
Start command: npm start
Add environment variables (Render dashboard → Environment):

EMAIL_USER — your Gmail address
EMAIL_PASS — a Gmail App Password (see backend/.env.example for how to generate one — this is not your normal Gmail password)
ALLOWED_ORIGIN — your Vercel URL once you have it (e.g. https://sujit-portfolio.vercel.app). You can use * at first and tighten it after step 2.



Deploy. Note the resulting URL (e.g. https://sujit-portfolio-api.onrender.com).


Render's free tier spins down when idle — the first contact-form submission after inactivity may take ~30-50 seconds to respond while it wakes up. That's expected, not a bug.

2. Deploy the frontend on Vercel


On Vercel: Add New → Project, import the same repo, set Root Directory to frontend.
Framework preset: Vite (should auto-detect).
Add environment variable:

VITE_API_URL — the Render URL from step 1 (e.g. https://sujit-portfolio-api.onrender.com)



Deploy.
Once deployed, go back to Render and update ALLOWED_ORIGIN to your real Vercel URL for security, then redeploy the backend.


Local development

bash# backend
cd backend
cp .env.example .env   # then fill in real values
npm install
npm run dev             # runs on http://localhost:4000

# frontend (separate terminal)
cd frontend
cp .env.example .env    # VITE_API_URL=http://localhost:4000
npm install
npm run dev              # runs on http://localhost:5173

What's real vs. placeholder right now


All project descriptions, skills, and bio content are your real, accurate details
Contact form actually sends email via Nodemailer — not a fake success message
Profile photo, resume PDF, email, and LinkedIn URL are your real information
ICRACE certificate and research paper are real, linked from the SmartConnect card and Certifications section
Before deploying, do a final check that your resume PDF's content matches what's live on the site — they should tell the same story
