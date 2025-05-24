"use client";
import Image from 'next/image';
import React from 'react';
import { verify } from '@/utils/auth/action';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { verifySchema, type verifyFormData } from '@/utils/auth/schema';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
    
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<verifyFormData>({
        resolver: zodResolver(verifySchema),
    });

    const onSubmit = async (data: any) => {

        try {

            setIsLoading(true);
            setError(null);

            const result = await verify(data);
        
            if (result?.error) {
                setError(result.error);
                return;
            }
            
            // Redirect to dashboard or home page after successful login
            router.push('/dashboard');

        } catch (err) {
            setError('An error occurred during login. Please try again.');
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <>
            <section className="my-lg-14 my-6">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                            <Image src="/assets/images/svg-graphics/signin-g.svg" alt="" width={400} height={400} className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                            <div className="mb-lg-9 mb-5">
                                <h1 className="mb-1 h2 fw-bold">Verify You're account</h1>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="input" className="form-label">Email address</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.otp ? 'is-invalid' : ''}`}
                                            id="input"
                                            placeholder="********"
                                            {...register('otp')}
                                        />
                                        {errors.otp && (
                                            <div className="invalid-feedback">{errors.otp.message}</div>
                                        )}
                                    </div>
                                    <div className="col-12 d-grid">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    verifying in...
                                                </>
                                            ) : (
                                                'send'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
