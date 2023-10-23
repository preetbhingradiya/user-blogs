const mongoose =require("mongoose")


const connect=async()=>{
    await mongoose.connect("mongodb+srv://preetbhingradiya6:node@cluster0.1fauq0z.mongodb.net/?retryWrites=true&w=majority")
    console.log("conncet to db");
}

module.exports=connect