import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "PostMessage"
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("connect sucessfully...")
    } catch (err) {
        console.log(err);
    }
}
export default connectDB