// import mongoose from 'mongoose'
// // import dotenv from 'dotenv'


// const connectDB = async ()=>{
//   try { 
//     const conn = await mongoose.connect(process.env.MONGO_URL||`mongodb://localhost:127.0.0.1:27017/salon`);
//     console.log(`Connected to mongodb Database ${conn.connection.host}`);
        
//   } catch (error) {
//     console.log(`Error in mongodb ${error} `)    
//   }
// }

// export default connectDB;




import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/salon');
    console.log(`Connected to MongoDB Database: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error in MongoDB connection: ${error}`);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;







// // const { MongoClient, ServerApiVersion } = require('mongodb');
// import { MongoClient, ServerApiVersion } from 'mongodb';

// const uri = "mongodb+srv://raftaarrashedin100:mUaDMb3FqKsY_Nd@cluster0.rpuomdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// export const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// console.log("hii");
// // export default async function run() {
// //   try {
// //     await client.connect();
// //     await client.db("admin").command({ ping: 1 });
// //     console.log("Pinged your deployment. You successfully connected to MongoDB!");
// //   } finally {
// //     await client.close();
// //   }
// // }

// // exports = { run, client }; // Correct way to export objects in Node.js
