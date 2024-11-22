const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5173;

app.use(express.json());

app.post("/submit", (req, res) => {
  const data = req.body;

  const filePath = path.join(__dirname, "formData.json");

  let existingData = [];
  if (fs.existsSync(filePath)) {
    const rawData = fs.readFileSync(filePath);
    existingData = JSON.parse(rawData);
  }

  existingData.push(data);

  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

  res.status(200).send({ message: "Data saved successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
