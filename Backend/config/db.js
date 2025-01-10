require('dotenv').config();
const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(process.env.DATABASE_CONNECTED_MESSAGE);
  } catch (error) {
    console.error(`${process.env.DATABASE_CONNECTERROR_MESSAGE}: ${error}`);
    process.exit(1);
  }
}

module.exports = connectToMongoDB;