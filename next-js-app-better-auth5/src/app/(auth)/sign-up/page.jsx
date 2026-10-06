"use client";

import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

export default function Basic() {
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

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