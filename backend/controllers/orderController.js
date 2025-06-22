import createHttpError from "http-errors";
import orderModel from "../models/orderModel.js";
import mongoose from "mongoose";


const addOrder = async (req, res, next) => {
    try {

        const { customerDetails, orderStatus, bills, items } = req.body;
        const orderData = {
            customerDetails,
            orderStatus,
            bills,
            items
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        res.status(200).json({ success: true, message: "Order Created!", data: newOrder });

    } catch (error) {
        next(error);
    }
}

const getOrderById = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            const error = createHttpError(404, "Invalid Order Id");
            return next(error);
        }

        const order = await orderModel.findById(id);

        if (!order) {
            const error = createHttpError(404, "Order Not Found!");
            return next(error);
        }

        res.status(200).json({ success: true, data: order });

    } catch (error) {
        next(error);
    }
}

const getOrders = async (req, res, next) => {
    try {
        const orders = await orderModel.find();

        res.status(200).json({ success: true, data: orders });

    } catch (error) {
        next(error);
    }
}

const updateOrder = async (req, res, next) => {
    try {

        const { orderStatus } = req.body;

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            const error = createHttpError(404, "Invalid Order Id");
            return next(error);
        }

        const order = await orderModel.findByIdAndUpdate(id, { orderStatus }, { new: true });

        if (!order) {
            const error = createHttpError(404, "Order Not Found!");
            return next(error);
        }

        res.status(200).json({ success: true, message: "Order Updated", data: order });

    } catch (error) {
        next(error);
    }
}

export { addOrder, getOrderById, getOrders, updateOrder };