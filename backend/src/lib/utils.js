import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
    const token = jwt.sign({userId}, process.env.jWT_SECRET, {
        expiresIn: "7d",
    });

    return token;
};