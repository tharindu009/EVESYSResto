import createHttpError from "http-errors";
import tableModel from "../models/tableModel.js";



const addTable = async (req, res, next) => {

    try {

        const { tableNo } = req.body;
        if (!tableNo) {
            const error = createHttpError(400, "Please Provide Table Number");
            return error;
        }

        const isTablePresent = await tableModel.findOne({ tableNo });

        if (isTablePresent) {
            const error = createHttpError(400, "table already exist!");
            return next(error);
        }

        const newTable = new tableModel({ tableNo });
        await newTable.save();

        res.status(200).json({ success: true, message: "Table Created!", data: newTable });

    } catch (error) {
        next(error);
    }

}

const getTables = async (req, res, next) => {
    try {

        const table = await tableModel.find();
        res.status(200).json({ success: true, data: table });

    } catch (error) {
        next(error);
    }
}

const updateTable = async (req, res, next) => {
    try {

        const { status, orderId } = req.body;
        const table = await tableModel.findByIdAndUpdate(req.params.id, { status, currentOrder: orderId }, { new: true });

        if (!table) {
            const error = createHttpError(404, "Table not found");
            return error;
        }

        res.status(200).json({ success: true, message: "Table Updated!", data: table });

    } catch (error) {
        next(error);
    }
}


export { addTable, getTables, updateTable };