
//import {app} from './app.js'  
import connectMongoDB from "./db/mongodb.js";
import dotenv from 'dotenv';
import express from "express";


const app = express();
//console.log(app);
dotenv.config({path:'./.env'});
connectMongoDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


// import User from '../models/User.model.js';

// export const registerUser = async (req, res) => {
//   try {
//     const { username, email, password, fullName, currentEducation } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({
//       where: {
//         [Op.or]: [
//           { email: email },
//           { username: username }
//         ]
//       }
//     });

//     if (existingUser) {
//       return res.status(409).json({
//         success: false,
//         message: "User already exists"
//       });
//     }

//     // Create user
//     const user = await User.create({
//       username,
//       email,
//       passwordHash: password, // will be hashed by hook
//       fullName,
//       currentEducation
//     });

//     const createdUser = await User.findByPk(user.id, {
//       attributes: { exclude: ['passwordHash'] }
//     });

//     return res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       data: createdUser
//     });

//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Registration failed",
//       error: error.message
//     });
//   }
// };
