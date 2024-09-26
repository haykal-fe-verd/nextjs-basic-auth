/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import { H1, P } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

function FormLogin() {
  // hooks
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // states
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  // events
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("🚀  values ==>", values);
  };

  return (
    <div className="h-full w-full p-5">
      <div className="flex h-full flex-col items-center justify-center rounded-lg md:px-10">
        <H1>Welcome back!</H1>

        <div className="mt-5 w-full space-y-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        autoFocus
                        placeholder="kidzeroll"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          {...field}
                        />
                        <div
                          className="absolute inset-y-0 right-0 flex cursor-pointer items-center rounded-r-md bg-primary px-2 text-primary-foreground"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <Eye className="h-5 w-5" />
                          ) : (
                            <EyeOff className="h-5 w-5" />
                          )}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </div>

        <div className="mt-8 flex w-full flex-row items-center justify-center gap-5 overflow-hidden">
          <Separator />
          <p>or</p>
          <Separator />
        </div>

        <div className="mt-8">
          <P className="text-sm">
            Already have an account?{" "}
            <Link
              href="/register"
              className="hover:text-primary hover:underline"
            >
              Register here
            </Link>
          </P>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
