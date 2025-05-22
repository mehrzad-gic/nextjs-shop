"use server";
import { redirect } from "next/navigation";
import { LoginResponse, ApiError } from './types';
import { AUTH_CONFIG, AUTH_ENDPOINTS } from './config';

export const login = async (formData: FormData): Promise<LoginResponse> => {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const response = await fetch(`${AUTH_CONFIG.API_URL}${AUTH_ENDPOINTS.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.message || 'Login failed. Please check your credentials.',
      };
    }

    // Store the token in cookies
    if (data.token) {
      document.cookie = `${AUTH_CONFIG.TOKEN_KEY}=${data.token}; path=/; max-age=${AUTH_CONFIG.TOKEN_EXPIRY}`;
    }

    return {
      success: true,
      token: data.token,
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      error: 'An unexpected error occurred. Please try again.',
    };
  }
};

export const register = async (formData: FormData): Promise<LoginResponse> => {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const response = await fetch(`${AUTH_CONFIG.API_URL}${AUTH_ENDPOINTS.REGISTER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.message || 'Registration failed. Please try again.',
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      error: 'An unexpected error occurred. Please try again.',
    };
  }
};

export const logout = async (): Promise<void> => {
  try {
    await fetch(`${AUTH_CONFIG.API_URL}${AUTH_ENDPOINTS.LOGOUT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Clear cookies
    document.cookie = `${AUTH_CONFIG.TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    document.cookie = `${AUTH_CONFIG.REFRESH_TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;

    redirect('/login');
  } catch (error) {
    console.error('Logout error:', error);
    throw new Error('Failed to logout');
  }
};

export const verify = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${AUTH_CONFIG.API_URL}${AUTH_ENDPOINTS.VERIFY_TOKEN}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.ok;
  } catch (error) {
    console.error('Token verification error:', error);
    return false;
  }
};