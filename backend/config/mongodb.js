import mongoose from "mongoose";
import config from "./config.js";


const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"));
    await mongoose.connect(`${config.MONGODB_URI}/everesto`);
}

export default connectDB