"use client";

import { signIn, signUp } from "../../../lib/auth-client";
// import {Check} from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

export default function SignUp() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const { data:resData, error } = await signUp.email({
            name: data.name, 
            email: data.email, 
            password: data.password, 
            
            
        });
        console.log(resData, error)
    };

    return (
        <Form
            className="flex w-96 flex-col gap-4"
            // render={(props) => <form {...props} data-custom="foo" />}
            onSubmit={onSubmit}
        >

            <Input name="name" type="text" placeholder="John doe" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />

            <Button type="submit">Sign In</Button>
        </Form>
    );
}