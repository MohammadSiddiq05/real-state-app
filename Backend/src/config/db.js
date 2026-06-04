import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        await mongoose.connect(process.env.DATABASE_URL);

        console.log("DB Connected");
    } catch (err) {
        console.error(err);
    }
};
