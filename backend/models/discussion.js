const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  title: String,
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  createdAt: { type: Date, default: Date.now },
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
