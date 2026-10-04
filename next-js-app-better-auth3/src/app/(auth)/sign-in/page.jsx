"use client";
import {Eye, EyeSlash} from "@gravity-ui/icons";
import { signIn } from "../../../lib/auth-client";
// import {Check} from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";

export default function SignIn() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/", // An optional URL to redirect to after the user signs up.
    });
    console.log(resData,error)
  };
const [isVisible, setIsVisible] = useState(false);
  return (
    <Form
      className="flex w-96 flex-col gap-4"
      // render={(props) => <form {...props} data-custom="foo" />}
      onSubmit={onSubmit}
    >
      <Input name="email" type="email" placeholder="Email" />

      <TextField className="w-full " name="password">
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
    </TextField>

      <Button type="submit">Sign In</Button>
    </Form>
  );
}