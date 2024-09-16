import dotenv from "dotenv";
import express from "express";
import User from "../model/User.js";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));

const PORT = process.env.PORT || 3001;

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`MongoDB Connection Error: ${err}`));

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(`Can't find users ${error}`);
  }
});

app.post("/users", async (req, res) => {
  try {
    const { firstname, lastname, email, password, confirmPassword } = req.body;
    const newUser = new User({
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res
      .status(500)
      .send(`There has been an error saving the saved user ${error}`);
  }
});

app.listen(PORT, () => {
  console.log(`Fitness app listening on port ${PORT}`);
});
console.log(process.env.MONGODB_URI);
