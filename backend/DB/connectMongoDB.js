import mongoose from "mongoose";

const connectMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected To MOngoDB");
    } catch (error) {
        console.log("Error While Connecting MongoDB",error);
        process.exit(1)
    }
}

export default connectMongoDB;