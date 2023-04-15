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
async function runCRUDOperation() {
  console.log("Run CRUD Operation");
  let id = "643a0e732aa934796a588f0d";
  let password = "password123";
  let hashPassword = await bcrypt.hash(password, 10);

  //CREATE
  //   const user = new User({
  //     user_name: "jdelacruz",
  //     email: "jdelacruz@email.com",
  //     age: 21,
  //     password: hashPassword,
  //   });

  //   await user.save();

  //RETRIEVE
  //   const users = await User.findById(id);
  //   console.log(users);

  //UPDATE
  //   const user = await User.findById(id);
  //   user.user_name = "jdoe";
  //   user.email = "jdoe@email.com";
  //   user.password = "password123";
  //   user.age = 22;

  //   const updatedUser = await user.save();
  //   console.log(updatedUser);

  //DELETE
  //await User.findByIdAndDelete(id);
}

runCRUDOperation();

app.listen(5000, () => console.log("Server started..."));
