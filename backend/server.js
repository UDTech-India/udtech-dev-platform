const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS — allow frontend origin (set FRONTEND_URL env var in production)
const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

// ✅ GET /api/status
app.get("/api/status", (req, res) => {
  res.json({ status: "ok", message: "Server running" });
});

// ✅ POST /api/contact
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  console.log("📩 New Contact:", name, email, message);

  res.json({
    success: true,
    message: "Message sent successfully!"
  });
});

// ✅ PORT from environment (required for Render/Railway)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
