import Joi from 'joi';

const bookValidationSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  author: Joi.string().min(3).max(50).required(),
  description: Joi.string().min(10).max(1000).required(),
  release_date: Joi.date().max('now').required(),
  category: Joi.string().valid('Books','Movies').required(),
});

export default bookValidationSchema;
