import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Review submitted", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to submit" });
  }
};
export const deleteReview = async (req, res) => {
  const { reviewId, tourId } = req.params;

  try {
    // ลบรีวิวออกจาก collection Review
    await Review.findByIdAndDelete(reviewId);

    // ลบ reviewId ออกจากฟิลด์ reviews ใน Tour
    await Tour.findByIdAndUpdate(tourId, {
      $pull: { reviews: reviewId },
    });

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete review",
    });
  }
};

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find(); // ดึงข้อมูลรีวิวทั้งหมด
    res.status(200).json({
      success: true,
      message: "All reviews fetched successfully",
      data: reviews,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews",
    });
  }
};

export const getReviewsByTour = async (req, res) => {
  const { tourId } = req.params; // รับ tourId จาก params

  try {
    const reviews = await Review.find({ tour: tourId }); // ดึงรีวิวเฉพาะที่เกี่ยวกับ tourId
    res.status(200).json({
      success: true,
      message: `Reviews for tour ${tourId} fetched successfully`,
      data: reviews,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews for the tour",
    });
  }
};
