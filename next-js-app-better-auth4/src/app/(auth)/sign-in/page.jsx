"use client";


import { signUp,signIn } from "../../../lib/auth-client";
import { Button, Form, Input, Label, TextField } from "@heroui/react";

export default function SignIn() {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        const { data:resData, error } = await signIn.email({
            email: data.email,
            password: data.password,
        });
        console.log(resData,error)
    };

    return (
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            

            <TextField
                isRequired
                name="email"
                type="email"
            >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />

            </TextField>

            <TextField

                name="password"
                type="password"

            >
                <Label>Password</Label>
                <Input placeholder="Enter your password" />

            </TextField>

            <div className="flex gap-2">
                <Button type="submit">

                    Sign In
                </Button>
                <Button type="reset" variant="secondary">
                    Reset
                </Button>
            </div>
        </Form>
    );
}