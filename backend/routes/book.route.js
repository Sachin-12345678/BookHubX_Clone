const express=require("express");
const BookModel=require("../models/book");
const bookRouter=express.Router();


// Get all books
bookRouter.get('/allbooks', async (req, res) => {
    try {
      const books = await BookModel.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


// Add a new book  
bookRouter.post("/", async(req,res)=>{
    const book=new BookModel(req.body);
    try {
        const newBook=await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({message: err.message})
    }
}) 


// Update a book
bookRouter.patch('/:id', getBook, async (req, res) => {
  try {
    const updatedBook = await BookModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } // This option returns the updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

  
  // Delete a book
  bookRouter.delete('/:id', getBook, async (req, res) => {
    try {
      await BookModel.deleteOne({ _id: req.params.id });
      res.json({ message: 'Book deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

  // Middleware function to get a specific book by ID
  async function getBook(req, res, next) {
    try {
      const book = await BookModel.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.locals.book = book.toObject();
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

module.exports={
    bookRouter
}