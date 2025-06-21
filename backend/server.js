import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'dotenv/config';

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();


// middlewares
app.use(express.json());
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000',
    'http://localhost:4000'
];
app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}));




//-----
app.get("/", (req, res) => {
    res.send("EVERESTO API Working")
});


app.listen(port, () => console.log(`Server started on PORT:${port}`));