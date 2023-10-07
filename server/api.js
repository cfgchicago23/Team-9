const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  // Replace with code to fetch data from MongoDB or any other data source
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

module.exports = router;
