const mongoose = require("mongoose");

// Connect to MongoDB:
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Could not connect database:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
