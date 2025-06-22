import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import config from './config/config.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';
import createHttpError from 'http-errors';
import userRouter from './routes/userRoute.js';
import orderRouter from './routes/orderRoute.js';

// App config
const app = express();
const port = config.PORT || 4000;
connectDB();


// middlewares
app.use(express.json());
// const allowedOrigins = config.CORS_ALLOWED_ORIGINS;
// app.use(cors({
//     origin: function (origin, callback) {
//         if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true,
//     optionsSuccessStatus: 200
// }));


//API endpoints
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);


//-----
app.get("/", (req, res) => {
    res.send("EVERESTO API Working")
});


//Error handling middleware
app.use(globalErrorHandler);


app.listen(port, () => console.log(`Server started on PORT:${port}`));