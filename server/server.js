import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import express from "express";
import User from "../src/model/User.js";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import authenticateToken from './middleware/authMiddleware.js';
dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));

const PORT = process.env.PORT || 3001;

app.use(express.json());


const connectToMongoDB = async ()=> {
  try{
    const mongoDBConnection  = await mongoose.connect(process.env.MONGODB_URI);
    if(mongoDBConnection){
      console.log("Connected to MongoDB Succesfully")
    }
  }catch(err){
    console.log("Err",err.message);

  }
}
connectToMongoDB()

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(`Can't find users ${error}`);
  }
});


app.post("/sign-up", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new User({
      firstname,
      lastname,
      email,
      password:hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res
      .status(500)
      console.log(`There has been an error saving the saved user ${error}`);
  }
});



app.post("/sign-in",async (req, res) => {
  try {
    const {email,password} = req.body;
    const findUser = await User.findOne({ email});
    if(!findUser){
      throw new Error("User not found")
    }
    const passwordComparison = await bcrypt.compare(password,findUser.password)
    if(!passwordComparison){
      return res.status(404).json({message:"Incorrect credentials"})
    }
  const token = jwt.sign(
    { email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1m" },)
  
    return res.status(200).json({token,message:"Sign-In Successful"});
    
  }catch (error) {
    res.status(500).json({ message: error });
    
  }
});



app.post("/user-profile",authenticateToken,async(req,res,next) => {
  try{
  const {email,password} = req.body;
  const navigateUser = await User.findOne({email,password});
  
    if(!navigateUser){
      return res.status(404).json(({"Error":"User not found"}))

  }else{
    res.status(200).json({message:"User profile found"})
  }
}catch(error){
    next(error)
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
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Fitness app listening on port ${PORT}`);
});
