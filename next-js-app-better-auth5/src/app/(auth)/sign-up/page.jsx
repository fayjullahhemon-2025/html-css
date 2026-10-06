"use client";

import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { signUp } from "../../../../lib/auth-client";

export default function Basic() {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const { data:resData, error } = await signUp.email({
            name: data.name, // required, The name of the user.
            email: data.email, // required, The email address of the user.
            password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            callbackURL: "/sign-in", // An optional URL to redirect to after the user signs up.
        });
        console.log(resData,error)
    };

    return (
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            <TextField
                name="name"

            >
                <Label>Name</Label>
                <Input placeholder="John Doe" />

            </TextField>
            <TextField

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
                    <Check />
                    Submit
                </Button>
                <Button type="reset" variant="secondary">
                    Reset
                </Button>
            </div>
        </Form>
    );
}