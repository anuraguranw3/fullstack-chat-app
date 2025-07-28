import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cors from "cors";
import { app, server } from "./lib/socket.js";

import path from "path";


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

const __dirname = path.resolve();

app.get("/", (req, res) => {
    res.send("home");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/*splat", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});