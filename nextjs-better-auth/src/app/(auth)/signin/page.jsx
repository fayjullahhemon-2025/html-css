
"use client";

import React, { useState } from "react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { signIn } from "@/app/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("form er data", data);

    const { data: resData, error } = await signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(resData, error);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <Form
          className="flex w-full flex-col gap-5"
          onSubmit={onSubmit}
        >
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="mb-1.5 text-sm font-medium">
              Email address
            </Label>

            <Input
              placeholder="john@example.com"
              className="w-full"
            />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            minLength={8}
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
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">
                Password
              </Label>

              <button
                type="button"
                className="text-xs font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </button>
            </div>

            <InputGroup className="mt-1.5">
              <InputGroup.Input
                name="password"
                placeholder="Enter your password"
                className="w-full"
                type={isVisible ? "text" : "password"}
              />

              <InputGroup.Suffix className="pe-1">
                <Button
                  isIconOnly
                  aria-label={
                    isVisible ? "Hide password" : "Show password"
                  }
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            <Description className="mt-1.5 text-xs">
              At least 8 characters, 1 uppercase letter and 1 number.
            </Description>

            <FieldError />
          </TextField>

          {/* Sign In */}
          <Button
            type="submit"
            className="mt-2 w-full"
            color="primary"
            size="lg"
          >
            Sign in
          </Button>

          {/* Divider */}
          <div className="flex w-full items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />

            <span className="text-xs text-zinc-400">
              OR
            </span>

            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
          </div>

          {/* Sign Up */}
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Don't have an account?{" "}
            <a
              href="/sign-up"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              Create account
            </a>
          </p>
        </Form>
      </div>
    </main>
  );
}

