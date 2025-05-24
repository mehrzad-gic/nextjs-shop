"use server";
import { redirect } from "next/navigation";
import { LoginForm, Response, VerifyForm, resendType } from './types';
import { AUTH_ENDPOINTS } from "./config";
 

export const login = async (formData: LoginForm) => {

  try {
        
    const response = await fetch(`${process.env.BACKEND_URL}${AUTH_ENDPOINTS.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.message || 'Login failed. Please check your credentials.',
        success: false,
      };
    }

    return {
      success: true,
      error: data.success == false ? data.message : null,
    };

  } catch (error) {
    console.error('Login error:', error);
    return {
      error: 'An unexpected error occurred. Please try again.',
      success: false,
    };
  }

};


export const logout = async (): Promise<Response> => {

  try {

    const response = await fetch(`${process.env.BACKEND_URL}${AUTH_ENDPOINTS.LOGOUT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.message || 'Logout failed. Please try again.',
        success: false,
      };
    }

    return {
      success: true,
      error: data.success == false ? data.message : null,
    };

  } catch (error) {
    console.error('Logout error:', error);
    return {
      error: 'An unexpected error occurred. Please try again.',
      success: false,
    };
  }

};


export const verify = async (formData: VerifyForm): Promise<Response> => {
  
  try {

    const response = await fetch(`${process.env.BACKEND_URL}${AUTH_ENDPOINTS.VERIFY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.message || 'Token verification failed. Please try again.',
        success: false,
      };
    }

    return {
      success: true,
      error: data.success == false ? data.message : null,
    };

  } catch (error) {
    console.error('Token verification error:', error);
    return {
      error: 'An unexpected error occurred. Please try again.',
      success: false,
    };
  }

};

export async function resend(value: resendType): Promise<Response> {

  try{

    const response:any = await fetch(`${process.env.BACKEND_URL}${AUTH_ENDPOINTS.RESEND}/email?${value.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        error: data.message || 'resend Token failed. Please try again.',
        success: false,
      };
    }

    return {
      success: true,
      error: data.success == false ? data.message : null,
    };
     
  } catch (e: any) {
    console.error('resend Token error:', e);
    return {
      error: e.message || 'An unexpected error occurred. Please try again.',
      success: false
    };
  }

}