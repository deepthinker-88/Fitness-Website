import dotenv from "dotenv";
import express from "express";
import User from "../src/model/User.js";
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


app.post("/sign-in", async (req, res) => {
  try {
    const { email,password} = req.body;
    const findUser = await User.findOne({ email,password });
    if (!findUser) {
    res.status(404).json({ message: "User not found" }); 
    
    }
    else{
    return res.status(200).json(findUser);
    };
  }catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/sign-up", async (req, res) => {
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
      console.log(`There has been an error saving the saved user ${error}`);
  }
});


app.get("/user-profile/",async(req,res) => {
  try{
  const {id} = req.params;
  const navigateUser = await User.findById(id);
  if(!navigateUser){
    return res.status(404).json({message:"User not logged in"})

  }else{
    res.status(200).json({message:"User profile found"})
  }
}catch(error){
    console.log(error);
  }
  }
)

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(`Unable to delete user: ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Fitness app listening on port ${PORT}`);
});
console.log(process.env.MONGODB_URI);
