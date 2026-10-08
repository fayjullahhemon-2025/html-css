"use client";

import { FloppyDisk } from "@gravity-ui/icons";
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
    TextField,
} from "@heroui/react";
import { requestPasswordReset } from "../../../../lib/auth-client";


export default function ForgotPassword() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const { data: resData, error } = await requestPasswordReset({
            email: data.email, // required, The email address of the user to send a password reset email to
            redirectTo: "/reset-password", // The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN
        });
        console.log(resData,error)
    };

    return (
        <Form className="w-full max-w-96" onSubmit={onSubmit}>
            <Fieldset>
                <Fieldset.Legend>Profile Settings</Fieldset.Legend>
                <Description>Update your profile information.</Description>
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