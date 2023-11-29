//reading.js-->
const mongoose = require('mongoose');

const readingListSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
}, { timestamps: true });

const ReadingList = mongoose.model('ReadingList', readingListSchema);

module.exports = ReadingList;
