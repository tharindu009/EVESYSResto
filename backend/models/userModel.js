import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, default: '000000000', validate: { validator: function (v) { return /\d{10}/.test(v); }, message: "Phone must be 10 digits!" } },
    email: { type: String, required: true, unique: true, validate: { validator: function (v) { return /\S+@\S+\.\S+/.test(v); }, message: "Email must be in valid format!" } },
    role: { type: String, default: 'Not Selected' },
    password: { type: String, required: true },
}, { timestamps: true });

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;