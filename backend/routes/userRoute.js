import express from 'express'
import { getUserData, loginUser, registerUser } from '../controllers/userController.js';
import authUser from '../middleware/authUser.js';

// const { isVerifiedUser } = require("../middlewares/tokenVerification");

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
// userRouter.route("/logout").post(authUser, logout)

userRouter.route("/").get(authUser, getUserData);


export default userRouter;