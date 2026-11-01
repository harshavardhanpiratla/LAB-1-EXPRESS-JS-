// Step 2: the same server rewritten with Express, plus routes and a 404 handler
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// GET / -> welcome text
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Lab 1: Node.js and Express server!");
});

// GET /about -> JSON with name and section
app.get("/about", (req, res) => {
  res.status(200).json({
    name: "P S HARSHAVARDHAN",
    registrationNumber: "252U1R9111",
    section: "111 CSE GEN AI 2B",
  });
});

// GET /time -> current date and time
app.get("/time", (req, res) => {
  const now = new Date();
  res.status(200).json({
    iso: now.toISOString(),
    local: now.toLocaleString(),
  });
});

// Any unknown path -> 404 (must stay AFTER all other routes)
app.use((req, res) => {
  res.status(404).send(`404 Not Found: ${req.method} ${req.originalUrl} does not exist`);
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
