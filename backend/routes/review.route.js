//review.route.js-->
const express = require('express');
const reviewrouter = express.Router();
const BookReview = require('../models/review');

// Create a book review
reviewrouter.post('/reviews', async (req, res) => {
  try {
    const { book, user, rating, review } = req.body;
    const newReview = await BookReview.create({ book, user, rating, review });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get reviews for a specific book
reviewrouter.get('/reviews/book/:bookId', async (req, res) => {
  try {
    const { bookId } = req.params;
    const reviews = await BookReview.find({ book: bookId }).populate('user');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get reviews by a specific user
reviewrouter.get('/reviews/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const reviews = await BookReview.find({ user: userId }).populate('book');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = reviewrouter;
