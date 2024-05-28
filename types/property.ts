import z from 'zod';

export const property = z.object({
  _id: z.string().optional(),
  place: z.string().min(2).max(255),
  area: z.number().min(1),
  bedroom: z.number().min(1),
  bathroom: z.number().min(1),
});

export type Property = z.infer<typeof property>;