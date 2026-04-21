const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ GET route
app.get("/api/status", (req, res) => {
  res.send("Server running");
});

// ✅ POST route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("📩 New Contact:", name, email, message);

  res.json({
    success: true,
    message: "Message sent successfully!"
  });
});

const PORT = 5000;

// ✅ server start LAST me
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});