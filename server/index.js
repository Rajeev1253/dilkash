import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import cors from "cors";
import Routes from "./routes/index.js"
import morgan from "morgan";

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(express.json())
app.use(morgan())
app.use('/uploads',express.static("uploads"))

// routes
app.use("/",Routes);

// connection
connectdb();


const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(port)
})

