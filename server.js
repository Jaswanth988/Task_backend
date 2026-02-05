const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
const taskroutes=require("./routes/TaskRoute");
const {notFound,errorHandler}=require("./middleware/errorMiddleware");
require("dotenv").config();
dotenv.config();
connectDB();

const app=express();

app.use(cors({
  origin: "https://task-backend.onrender.com/api",
  credentials: true
}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("API is Running...");
});

app.use("/api/tasks",taskroutes);
app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on the ${PORT}`));
