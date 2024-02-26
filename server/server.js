import app from "./app.js";

import express from "express";
const exapp = express();

import dotenv from "dotenv"
dotenv.config()

import config from "./config/config.js"

import auth_routes from './routes/auth_routes.js'
exapp.use(bodyParser.json())

exapp.use(cors())
exapp.use('/api', auth_routes);

const PORT = process.env.PORT || 5000;

// Error Handling
exapp.use((errors,req,res,next) => {
  errors.statusCode = errors.statusCode || 500;
  errors.message = errors.message || "Internal Server Error";
  res.status(errors.statusCode).json({
    message : errors.message
  });
})
exapp.listen(5000, () => console.log('Server is running on 5000 port number'))
