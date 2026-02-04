const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:false
    }
},{timestamps:true});
module.exports=mongoose.model("Task",taskSchema);