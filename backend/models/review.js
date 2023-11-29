//review.js-->
const mongoose = require('mongoose');

const bookReviewSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, required: true },
}, { timestamps: true });

const BookReview = mongoose.model('BookReview', bookReviewSchema);

module.exports = BookReview;

