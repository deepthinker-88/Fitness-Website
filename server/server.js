import express from 'express';
import dotenv from 'dotenv';


const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();

app.listen(PORT, () =>{
    console.log(`Fitness app listening on port ${PORT}`)
})
