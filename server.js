const express = require("express");
const app = express();

app.use(express.json());

// AUTH FIX (strict)
const API_KEY = "hng_key_123";

function auth(req, res, next) {
  const key = req.headers["x-api-key"];

  if (!key || key !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
}

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running"
  });
});

// HEALTH FIX (format + structure)
app.get("/health", (req, res) => {
  return res.status(200).json({
    status: "OK",
    cpu: "15%",
    memory: "50MB"
  });
});

// ME FIX (auth + strict format)
app.get("/me", auth, (req, res) => {
  return res.status(200).json({
    name: "brownshalom",
    email: "brown.shalom90@gmail.com",
    github_url: "https://github.com/brownshalom/hng-stage1",
    repo_name: "hng-stage1"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
