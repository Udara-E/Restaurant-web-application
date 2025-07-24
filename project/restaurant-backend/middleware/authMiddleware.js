import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protect = async(req,res,next)=>{
   let token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select('-password');
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized, no user found' });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized, invalid token' });

    }
};
// admin access only
const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden, not an admin' });
    }
};





export { protect , admin };
