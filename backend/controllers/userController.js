import createHttpError from "http-errors";
import userModel from "../models/userModel.js"
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerUser = async (req, res, next) => {
    try {
        const { name, phone, email, password, role } = req.body;
        if (!name || !email || !password) {
            const error = createHttpError(400, "All field are required");
            return next(error);
        }

        const isUserPresent = await userModel.findOne({ email });
        if (isUserPresent) {
            const error = createHttpError(400, "user already exist");
            return next(error);
        }


        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);

        const userData = {
            name: name,
            phone: phone,
            email: email,
            password: hashedPassword,
            role: role
        }
        const newUser = userModel(userData);
        const CreateUser = await newUser.save();

        const token = jwt.sign({ id: CreateUser._id }, process.env.JWT_SECRET);
        res.status(201).json({ success: true, message: "New user created!", data: newUser });

    } catch (error) {
        next(error);
    }

}

const loginUser = async (req, res, next) => {
    try {
        console.log("User Login Controller")
        console.log(req.body);
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        //checking if the request body is empty
        if (!user) {

            const error = createHttpError(400, "Invalid email or password");
            return next(error);
        }

        const isMatch = await bycrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.status(201).json({ success: true, token: token, user: { id: user._id, name: user.name, email: user.email } });
        }
        else {
            const error = createHttpError(400, "Invalid email or password")
            return next(error);
        }

    }
    catch (error) {
        console.log(error.message);
        next(error);
    }
}

const getUserProfile = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const userData = await userModel.findById(userId).select("-password");
        if (!userData) {
            const error = createHttpError(400, "User not found");
            return next(error);
        }
        res.status(201).json({ success: true, message: "Success", data: userData });
    }
    catch (error) {
        console.log(error.message);
        next(error);
    }
}

const getUserData = async (req, res, next) => {
    try {

        const user = await User.findById(req.user._id);
        res.status(200).json({ success: true, data: user });

    } catch (error) {
        next(error);
    }
}

export { registerUser, loginUser, getUserData }