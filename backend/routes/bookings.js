import express from "express";
import {
  createBooking,
  getAllBooking,
  getBooking,
  deleteBooking, // นำเข้า deleteBooking
} from "../controllers/bookingController.js";

import { adminAuth, userAuth } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", userAuth, createBooking);
router.get("/:id", userAuth, getBooking);
router.get("/", userAuth, getAllBooking);
router.delete("/:id", userAuth, deleteBooking); // เพิ่ม Route ลบ Booking

export default router;
