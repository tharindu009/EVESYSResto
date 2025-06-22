import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customerDetails: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        guests: { type: Number, required: true }
    },
    orderStatus: { type: String, required: true },
    orderDate: { type: Date, default: Date.now() },
    bills: {
        total: { type: Number, required: true },
        tax: { type: Number, required: true },
        totalPayable: { type: Number, required: true }
    },
    items: [],
    table: { type: mongoose.Schema.Types.ObjectId, ref: "table" }
}, { timestamps: true });


const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;