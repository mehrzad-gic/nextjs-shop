import * as z from 'zod';

export const loginSchema = z.object({
  input: z.string().email('Please enter a valid email address'),
});

export const verifySchema = z.object({
  otp: z.string().max(6).min(6),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type verifyFormData = z.infer<typeof verifySchema>;
