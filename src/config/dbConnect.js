import mongoose , { mongo }from "mongoose";

async function ConnectDatabase() {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.dg2dehd.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
}

export default ConnectDatabase;