require('dotenv').config();
const connectToMongoDB = require('./config/db');
const express = require('express');
const cors = require('cors');
const app = express();

connectToMongoDB();

app.use(cors());
app.use(express.json());

app.use('/api/items', require('./router/tasksRouter'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});