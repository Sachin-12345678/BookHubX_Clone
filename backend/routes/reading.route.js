const express = require('express');
const Readingrouter = express.Router();
const ReadingList = require('../models/reading');

// Add a book to the reading list
Readingrouter.post('/reading-list/add-book', async (req, res) => {
  try {
    const { user, book } = req.body;
    const readingList = await ReadingList.findOneAndUpdate(
      { user },
      { $addToSet: { books: book } },
      { upsert: true, new: true }
    );
    res.status(200).json(readingList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get reading list for a specific user
Readingrouter.get('/reading-list/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const readingList = await ReadingList.findOne({ user: userId }).populate('books');
    res.status(200).json(readingList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = Readingrouter;
