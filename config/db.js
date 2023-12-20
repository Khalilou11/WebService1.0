import mongoose from 'mongoose';

const connectDB = async () => {
   
    try {
        mongoose.connect("mongodb+srv://ELFallega:PD6MM7YnOaqP3fv8@cluster0.jq3trgp.mongodb.net/FallegaDB");
        console.log("Connected to database successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!");
    }
}

export default connectDB;