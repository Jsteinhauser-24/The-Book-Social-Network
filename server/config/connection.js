const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://steinhauserjames3:nqFqWHSaVSCtBG16@cluster0.maitduf.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });