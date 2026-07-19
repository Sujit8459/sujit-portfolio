import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Allow only your deployed frontend origin(s) in production.
// Set ALLOWED_ORIGIN in Render's environment variables, e.g.
// https://your-portfolio.vercel.app
const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "Portfolio contact API is running." });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are all required." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: "That doesn't look like a valid email address." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password (not your normal password)
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // messages land in your own inbox
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p><p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form email failed:", err.message);
    res.status(500).json({ error: "Couldn't send your message right now. Please try again shortly." });
  }
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

app.listen(PORT, () => {
  console.log(`Contact API listening on port ${PORT}`);
});
