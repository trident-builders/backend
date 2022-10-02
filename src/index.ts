import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import RoutePaths from './controllers';
import { mongoDbConnection } from './dbConnection';
import { connect } from "mongoose"

const server = express();
const PORT = 3000;

server.use(cors());
server.use(bodyParser.json());
server.use("/api", RoutePaths);

server.listen(PORT, async () => {
    console.log(`Server is listening on the PORT ${PORT}`);
    mongoDbConnection();
})

