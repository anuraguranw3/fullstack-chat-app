import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (userId) => {
    const token = jwt.sign({userId}, process.env.jWT_SECRET, {
        expiresIn: "7d",
    });

    return token;
};