const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "Missing user name"],
    minLength: 5,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  password: String,
  age: {
    type: Number,
    min: 1,
    max: [105, "Maximum allowed age is 105"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

module.exports = mongoose.model("User", userSchema);
