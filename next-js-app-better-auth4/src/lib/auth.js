import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from 'resend';
const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);
const db = client.db('better-auth-practice');
const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,

    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url }) => {
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
    database: mongodbAdapter(db, {
        client,
    }),
});