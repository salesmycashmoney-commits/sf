import { http } from 'msw';
import type { HttpResponseResolver, DefaultBodyType, PathParams } from 'msw';

export const handlers = [
  // Example: mock login endpoint
  http.post('/api/auth/login', ((info: any, res: any, ctx: any) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '1',
        name: 'Admin User',
        email: 'admin@sewapay.com',
        role: 'Admin',
        permissions: ['view_reports', 'manage_b2c', 'manage_distributors', 'manage_retailers'],
        token: 'mock-jwt-token',
      })
    );
  }) as HttpResponseResolver<PathParams, DefaultBodyType, DefaultBodyType>),
  // Add more handlers as needed
];
