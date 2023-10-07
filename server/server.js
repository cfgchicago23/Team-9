const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});