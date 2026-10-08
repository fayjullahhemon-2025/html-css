"use client";

import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { resetPassword } from "../../../../lib/auth-client";
import { useSearchParams } from 'next/navigation'
import { Suspense } from "react";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token')

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newPass = Object.fromEntries(formData.entries());
    const { data: resData, error } = await resetPassword({
      newPassword: newPass.password,
      token,
    });
    console.log('after reset submit '+ resData);
  };

  return (
    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>


      <Suspense fallback="loading.." >
        <TextField
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
          <Input placeholder="Enter your password" />
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
        </TextField>
      </Suspense>

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