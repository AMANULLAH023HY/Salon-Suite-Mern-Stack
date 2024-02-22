import express from 'express'
import connectDB from './server/config/config.js';

const app = express();
import dotenv from 'dotenv';

// database config
connectDB();

const PORT = process.env.PORT ||5000;

app.listen(PORT,()=>{
	console.log(`Server Running on ${PORT}`);
})










// import express from "express";
// import {client } from "./server/config/config.js"; 
// import colors from 'colors'
// import dotenv from 'dotenv'

// import authRoute from './routes/authRoute.js'


// configure env 
// dotenv.config();
// import morgan from 'morgan

// const app = express();
// const port = process.env.PORT;

// // run().catch(condole.dir);

// app.listen(port, () => {
// 	console.log("Server is running on 5000 PORT")
// })