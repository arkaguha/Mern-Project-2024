const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", () => {
  "<h1>Test</h1>";
});

app.listen(PORT, (e) => {
  if (e) {
    console.log(e);
    return;
  }
  console.log(`connected to port: ${PORT}`);
  console.log(`https://localhost:${PORT}`);
});
