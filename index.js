const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Developer Version Control System! Effective version control is vital for collaboration. Happy coding!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});