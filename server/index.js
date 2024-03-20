import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import connectDB from './mongoDB/connection.js';
import router from './routes/route.js';

const app = express();
config({path: './.env'});

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
connectDB();

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Welcome to the  my Server");
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})