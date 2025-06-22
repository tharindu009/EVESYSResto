import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';

//user authentication middleware
const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            const error = createHttpError(400, 'Invalid Credentials');
            return next(error);
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        req.body.userId = token_decode.id;

        next();

    }
    catch (error) {
        console.log(error);
        next(error);
    }

}

export default authUser;