/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { searchableFields } from './blog.constant';
import { IBlog } from './blog.interface';
import { Blog } from './blog.model';
import mongoose from 'mongoose';

const createBlog = async (payload: IBlog) => {
  const result = (await Blog.create(payload)).populate('author');
  return result;
};
const updateBlog = async (
  blogId: string,
  userId: string,
  payload: Partial<IBlog>,
) => {
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Blog not found');
  }
  if (blog.author.toString() !== userId) {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      'You are not authorized to delete this blog',
    );
  }
  const result = await Blog.findByIdAndUpdate(blogId, payload, {
    new: true,
    runValidators: true,
  }).populate('author');
  return result;
};

// const deleteBlog = async (id: string, userId: string) => {
//   const blog = await Blog.findById(id);
//   if (!blog) {
//     throw new AppError(StatusCodes.FORBIDDEN, 'Blog not found');
//   }

//   if (blog.author.toString() !== userId) {
//     throw new AppError(
//       StatusCodes.UNAUTHORIZED,
//       'You are not authorized to delete this blog',
//     );
//   }
//   const result = await Blog.findByIdAndDelete(id);
//   return result;
// };

const deleteBlog = async (id: string, userId: string) => {
  const blog = await Blog.findById(id);
  if (!blog) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Blog not found');
  }
  if (blog.author.toString() !== userId) {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      'You are not authorized to delete this blog',
    );
  }
  const result = await Blog.findByIdAndDelete(id);

  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id).populate('author');
  return result;
};

const getAllBlog = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    .search(searchableFields)
    .filter()
    .sort();

  const result = await blogQuery.modelQuery;
  return result;
};

export const BlogService = {
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  getAllBlog,
};
