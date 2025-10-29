// index.mjs
import express from "express";

const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("✅ Ludi Token Server v13.1 is running");
});

// Use Render's assigned port or default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Ludi Token Server running on port ${PORT}`);
});
