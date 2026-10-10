'use client';

import { signIn } from "@/lib/auth-client";




export default function SignIn() {
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as {
            email: string,
            password: string
        };
        console.log(data);
        const { data: resData, error } = await signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/"
        })
    }
    const googleSignIn = async () => {
        const data = await signIn.social({
            provider: "google",
        })
    }
    const githubSignIn = async () => {
        const data = await signIn.social({
            provider: "github",
        })
    }

    return (
        <>
            <form onSubmit={onSubmit} >
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 max-w-7xl mx-auto my-5">
                    <legend className="fieldset-legend">Sign Up</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name='email' />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" name='password' />

                    <button type='submit' className="btn btn-neutral mt-4">Sign In</button>
                </fieldset>
            </form>
            <p>Or</p>
            <div className="flex justify-center items-center gap-2" >
                <button onClick={googleSignIn} className='btn-accent'>Google</button>
                <button onClick={githubSignIn} className='btn-accent'>Github</button>
            </div>
        </>
    );
}