'use client';

import { signUp } from '@/lib/auth-client';
import React, { useState } from 'react';

export default function SignUp() {
    const onSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            // include other fields as needed
        };;
        console.log(data)
        const { data: resData, error } = await signUp.email({
            name: data.name, // required, The name of the user.
            email: data.email, // required, The email address of the user.
            password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            // image: "https://example.com/image.png", // An optional profile image of the user.
            callbackURL: "/sign-in", // An optional URL to redirect to after the user signs up.
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit} >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 max-w-7xl mx-auto my-5">
                    <legend className="fieldset-legend">Sign Up</legend>

                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="John dey" name='name' />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />

                    <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                </fieldset>
            </form>
        </div>
    );
}