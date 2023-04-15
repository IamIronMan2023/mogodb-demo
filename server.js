require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

mongoose.connect(process.env.CONNECTION_STRING + process.env.DB_NAME);
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database successfully connected..."));

//CRUD OPERATIONS
let id = "643a1d4a9019e473a011171f";
let password = "password123";
// let hashPassword = await bcrypt.hash(password, 10);

//CREATE
// const user = new User({
//   user_name: "jbond",
//   email: "jbond2@email.com",
//   age: 100,
//   password: hashPassword,
// });

// await user.save();

app.get("/create_user", async (req, res) => {
  const user = await User.create({
    user_name: "admin",
    email: "admin@email.com",
    password: "password123",
  });

  res.status(201).json({ msg: `Data inserted with id ${user._id}` });
});

//RETRIEVE
//   const users = await User.findById(id);
//   console.log(users);

//UPDATE
// const user = await User.findById(id);
// user.user_name = "jdoe";
// user.email = "jdoe@email.com";
// user.password = "password123";
// user.age = 22;

// user.createdAt = "2023-04-14T03:43:06.297+00:00";

// const updatedUser = await user.save();
// console.log(updatedUser);

//DELETE
//await User.findByIdAndDelete(id);
// }

app.listen(5000, () => console.log("Server started..."));
