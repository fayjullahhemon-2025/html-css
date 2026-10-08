import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
console.log(resend) 
const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db('better-auth-practice-2');

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword:async ({user, url, token}, request)=>{
            void resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: user.email,
                subject: 'Reset your password',
                html: `Click <a href="${url}">here</a> to reset your password.`,
            })
        }
    },
    emailVerification: {
        sendVerificationEmail: async({ user, url }) => {
            void resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: user.email,
                subject: 'Verify your email address',
                html: `Click <a href="${url}">here</a> to verify your email.`,
            });
        },
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        expiresIn: 3600 // 1 hour
    },
    socialProviders: {
        google: {
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT,
            clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET,
        },
        github: {
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT,
            clientSecret: process.env.BETTER_AUTH_GITHUB_SECRET
        },
        discord: {
            clientId: process.env.BETTER_AUTH_DISCORD_CLIENT,
            clientSecret: process.env.BETTER_AUTH_DISCORD_SECRET
        }
    }
});