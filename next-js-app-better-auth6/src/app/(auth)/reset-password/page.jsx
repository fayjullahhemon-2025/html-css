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
import { resetPassword, signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ResetPassword() {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        console.log(token)
        const { data:resData, error } = await resetPassword({
            newPassword: data.password, // required, The new password to set
            token, // required, The token to reset the password
        });
        console.log(resData)
    };

    return (
        <>
            <Form className="w-full max-w-96" onSubmit={onSubmit}>
                <Fieldset>
                    <Fieldset.Legend>Reset Password</Fieldset.Legend>
                    <Description></Description>
                    <FieldGroup>

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
            {/* <p>Forgot Password? <Link href='/forgot-password' className='text-blue-400 underline' >Click here</Link> </p> */}
        </>
    );
}