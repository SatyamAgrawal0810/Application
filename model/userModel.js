import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [100, 'Title must be at most 100 characters long'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    minlength: [3, 'Author name must be at least 3 characters long'],
    maxlength: [50, 'Author name must be at most 50 characters long'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [1000, 'Description must be at most 1000 characters long'],
  },
  release_date: {
    type: Date,
    required: [true, 'Release date is required'],
    validate: {
      validator: function(value) {
        return value <= new Date();
      },
      message: 'Release date cannot be in the future'
    }
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Books','Movies'],
  },
});

// Export the model
export default mongoose.model("Book", bookSchema);
