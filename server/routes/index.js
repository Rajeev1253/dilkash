import express from "express";
import authRoutes from "./auth.routes.js";
import bookRoutes from "./books.route.js"

const router=express.Router();

router.use("/auth", authRoutes);
router.use("/book", bookRoutes);

export default router;