const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Review = require("../models/review");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware");
const reviewController = require("../controllers/reviews");

const router = express.Router({ mergeParams: true });

// Post Reviews
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
