import createHttpError from "http-errors";
import userModel from "../models/userModel.js"
import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerUser = async (req, res, next) => {
    try {

        console.log(req.body)
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
            res.json({ success: true, token: token, user: { id: user._id, name: user.name, email: user.email } });
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

export { registerUser, loginUser }