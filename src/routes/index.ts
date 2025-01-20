import { Router } from 'express';
import { UserRoutes } from '../module/user/user.route';
import { BlogRouts } from '../module/blog/blog.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/blogs',
    route: BlogRouts,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
