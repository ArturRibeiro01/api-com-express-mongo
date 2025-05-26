import mongoose from "mongoose";

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Conectado ao banco de dados com sucesso!");

        const db = mongoose.connection;

        db.on("error", (error) => {
            console.error("Erro na conexão com o banco:", error);
        });

        return db;
    } catch (error) {
        console.error("Não foi possível conectar ao banco de dados:", error);
        process.exit(1);
    }
}

export default connectDatabase;