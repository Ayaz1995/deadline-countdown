const express = require("express");
const app = express();
const port = 3000;

// Mock API route for /api/deadline
app.get("/api/deadline", (req, res) => {
  res.json({ secondsLeft: 120 }); // Example response, you can make it dynamic
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
