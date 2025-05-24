export interface Response {
  error: string | null;
  success: boolean;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
}


// form types
export interface LoginForm{
  input: string | number
};

export interface VerifyForm{
  otp: string | number
};

export type resendType = {
  email: string
}