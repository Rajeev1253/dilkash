import mongoose from "mongoose";
const connectdb= async() =>{
    try{
        const con = await mongoose.connect(
            process.env.DB_URL
        );

        console.log(`connected succesfully ${con.connection.host}`);
    }
    catch(error)
    {
        console.log(error);
    }
};
export default connectdb;