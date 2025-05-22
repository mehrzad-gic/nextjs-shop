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
  email: string
};

export interface VerifyForm{
  token: string | number
};