import mongoose from "mongoose";

const addbookSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    title:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        enum: ["Fiction","Horror","Academic","Biography","Science"],
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    coverimage:{
       type:String,
       require:true
    },
    
})

export const bookModel = mongoose.model("Books", addbookSchema);