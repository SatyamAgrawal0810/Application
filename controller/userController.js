import mongoose from 'mongoose';
import bookValidationSchema from '../validation/book.js';
import Book from '../model/userModel.js';

export const create = async (req, res) => {
  try {
    const { error, value } = bookValidationSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { title } = value;

    const bookExist = await Book.findOne({ title });
    if (bookExist) {
      return res.status(400).json({ message: "It already exists." });
    }

    const bookData = new Book(value);
    const savedBook = await bookData.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};
export const fetch = async (req, res) => {
    try {
      const books = await Book.find();
      if (books.length === 0) {
        return res.status(404).json({ message: "Books not found." });
      }
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  };
  export const single = async (req, res) => {
    try {
      const id = req.params.id;
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ message: "Book not found." });
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  };
  export const update = async (req, res) => {
    try {
      const id = req.params.id;
  
      const { error, value } = bookValidationSchema.validate(req.body);
  
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      const bookExist = await Book.findById(id);
      if (!bookExist) {
        return res.status(404).json({ message: "Book not found." });
      }
  
      const updatedBook = await Book.findByIdAndUpdate(id, value, { new: true });
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  };
  export const deleted = async (req, res) => {
    try {
      const id = req.params.id;
  
      const bookExist = await Book.findById(id);
      if (!bookExist) {
        return res.status(404).json({ message: "Book not found." });
      }
  
      await Book.findByIdAndDelete(id);
      res.status(200).json({ message: "Book deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  };
  export const findByCategory = async (req, res) => {
    try {
      const category = req.params.category;
  
      const books = await Book.find({ category });
      if (books.length === 0) {
        return res.status(404).json({ message: "No books found in this category." });
      }
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  };
  