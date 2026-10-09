"use client";

import { FloppyDisk, Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField, InputGroup
} from "@heroui/react";
import { requestPasswordReset, signIn } from "@/lib/auth-client";

export default function ForgotPassword() {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log(data)
        const { data:resData, error } = await requestPasswordReset({
            email: data.email, // required, The email address of the user to send a password reset email to
            redirectTo: "/reset-password", // The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN
        });
    };

    return (
        <Form className="w-full max-w-96" onSubmit={onSubmit}>
            <Fieldset>
                <Fieldset.Legend>Forgot password</Fieldset.Legend>
                <Description></Description>
                <FieldGroup>


                    <TextField isRequired name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                </FieldGroup>
                <Fieldset.Actions>
                    <Button type="submit">
                        <FloppyDisk />
                        Save changes
                    </Button>
                    <Button type="reset" variant="secondary">
                        Cancel
                    </Button>
                </Fieldset.Actions>
            </Fieldset>
        </Form>
    );
}