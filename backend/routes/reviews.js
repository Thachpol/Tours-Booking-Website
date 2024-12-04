import express from "express";
import {
  deleteReview,
  getAllReviews,
  createReview,
  getReviewsByTour,
} from "../controllers/reviewController.js";
import { userAuth } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:tourId", userAuth, createReview);
// Route สำหรับลบรีวิว
router.delete("/:tourId/:reviewId", userAuth, deleteReview);

// Route สำหรับดึงข้อมูลรีวิวทั้งหมด
router.get("/", getAllReviews);

// Route สำหรับดึงข้อมูลรีวิวของทัวร์เฉพาะ
router.get("/:tourId", getReviewsByTour);

export default router;
// Import ฟังก์ชัน createReview


