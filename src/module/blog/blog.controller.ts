import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const payload = req.body;
  payload.author = req.user?.userId;
  const result = await BlogService.createBlog(payload);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'blog  created successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const userId = req.user?.userId;

  const result = await BlogService.updateBlog(id, userId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'blog is updated succesfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const id = req.params.id;
  const userId = req.user?.userId;
  const result = await BlogService.deleteBlog(id, userId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog is deleted succesfully',
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogService.getSingleBlog(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'blog is retrieved succesfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogService.getAllBlog(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'blogs are retrieved successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
  getAllBlogs,
};
