const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Developer Version Control System! Remember, effective version control is essential for collaboration. Enjoy your stay.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});