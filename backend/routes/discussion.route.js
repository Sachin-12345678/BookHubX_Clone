const express = require('express');
const Discussion = require("../models/discussion");
const {authenticate}=require("../middlewares/authenticate.middleware");

const disrouter = express.Router();

// Example API endpoint for creating a discussion
disrouter.post('/discussions', authenticate, async (req, res) => {
  const { title, content, bookId } = req.body;

  try {
    const newDiscussion = new Discussion({
      title,
      content,
      user: req.user._id,
      book: bookId,
    });

    const savedDiscussion = await newDiscussion.save();
    res.status(201).json(savedDiscussion);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Example API endpoint for getting all discussions
disrouter.get('/discussions', async (req, res) => {
  try {
    const discussions = await Discussion.find().populate('user').populate('book');
    res.json(discussions);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports={
    disrouter
}
