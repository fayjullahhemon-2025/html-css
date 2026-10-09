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
import { signIn } from "@/lib/auth-client";

export default function SignIn() {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        const { data:resData, error } = await signIn.email({
            email: data.email, // required, The email address of the user.
            password: data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            rememberMe: true, // If false, the user will be signed out when the browser is closed. (optional) (default: true)
            callbackURL: "/", // An optional URL to redirect to after the user signs in. (optional)
        });
        console.log(resData,error)
    };

    return (
        <Form className="w-full max-w-96" onSubmit={onSubmit}>
            <Fieldset>
                <Fieldset.Legend>Sign In</Fieldset.Legend>
                <Description></Description>
                <FieldGroup>


                    <TextField isRequired name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField className="w-full "
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full "
                                type={isVisible ? "text" : "password"}

                            />
                            <InputGroup.Suffix className="pe-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
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