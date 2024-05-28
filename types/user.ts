import z from 'zod';

export const user = z.object({
  _id: z.string().optional(),
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(15),
  password: z.string().min(8).max(255),
  type: z.enum(['SELLER', 'BUYER']).default('BUYER'),
});

export type User = z.infer<typeof user>;