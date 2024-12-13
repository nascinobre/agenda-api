import "dotenv/config";
import express from "express";
import cors from "cors";
import authenticate from "./database/connection.js";
import agendaRoutes from "./routes/agendaRoutes.js";


const servidor = express();

servidor.use(cors({ origin: "*" }));

servidor.use(express.json());

servidor.use(agendaRoutes);

authenticate();

servidor.listen(3000, () => {
    console.log("Servidor em execução.");

});