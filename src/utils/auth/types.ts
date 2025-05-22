export interface LoginResponse {
  error?: string;
  success?: boolean;
  token?: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface ApiError {
  message: string;
  status: number;
} 