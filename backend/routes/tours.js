import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getFeaturedTour,
  getSingleTour,
  getTourBySearch,
  getTourCount,
  updateTour,
} from "./../controllers/tourController.js";
import { adminAuth, userAuth } from "./../utils/verifyToken.js";

const router = express.Router();

// // create new tour
router.post("/create", userAuth, createTour);

// // update tour
router.put("/:id", userAuth, updateTour);

// // delete tour
router.delete("/:id", userAuth, deleteTour);

// // get single tour
router.get("/:id", getSingleTour);

// // get all tours
router.get("/", getAllTour);

// Test route for debugging or health check
router.get("/koko", function (req, res) {
  console.log("aaaaa");
  res.send("Wiki home page");
});

router.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});

// search and featured tours
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
