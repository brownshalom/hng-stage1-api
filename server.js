const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "healthy"
  });
});

app.get("/me", (req, res) => {
  res.status(200).json({
    name: "Your Full Name",
    email: "you@example.com",
    github: "https://github.com/yourusername"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
