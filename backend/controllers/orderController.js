import createHttpError from "http-errors";
import orderModel from "../models/orderModel.js";


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
        const { orderId } = req.paramas.id;
        const order = await orderModel.findById(orderId);

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
        const order = await orderModel.findByIdAndUpdate(req.paramas.id, { orderStatus }, { new: true });

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