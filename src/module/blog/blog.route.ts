import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogSchemaUpdateZod, BlogSchemaZod } from './blog.validation';
import { BlogController } from './blog.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/create',
  validateRequest(BlogSchemaZod),
  auth(USER_ROLE.admin),
  BlogController.createBlog,
);
router.put(
  '/update/:id',
  validateRequest(BlogSchemaUpdateZod),
  auth(USER_ROLE.admin),
  BlogController.updateBlog,
);
router.delete('/delete/:id', auth(USER_ROLE.admin), BlogController.deleteBlog);
router.get('/all', BlogController.getAllBlogs);
router.get('/byId/:id', BlogController.getSingleBlog);

export const BlogRouts = router;
