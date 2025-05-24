import mongoose , { mongo } from "mongoose";

async function ConnectDatabase() {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default ConnectDatabase;