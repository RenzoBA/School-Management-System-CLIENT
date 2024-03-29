"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { SigninType, signinSchema } from "@/lib/validators/signin-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";

const SignupForm: FC = ({}) => {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:3001";

  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<SigninType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      name: "",
      email: "",
      schoolName: "",
    },
  });

  const { mutate: onSubmit, isPending } = useMutation({
    mutationFn: async () => {
      const payload: SigninType = form.getValues();

      await axios.post(`${BASE_URL}/auth/signup`, payload, {
        withCredentials: true,
      });
    },
    onError: (err) => {
      return toast({
        title: "Something went wrong",
        description: "Please try again later",
      });
    },
    onSuccess: async () => {
      toast({
        title: "Thanks! We will contact you 💜",
        description: "Signup Successfully",
      });
      router.push("/");
    },
  });

  return (
    <div className="bg-background border-border my-6 flex w-full max-w-[400px] flex-col space-y-8 rounded-md border p-5 pb-8">
      <div className="space-y-3 text-center">
        <h1 className="text-primary text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Sign up
        </h1>
        <p className="text-secondary text-sm">
          Enter your data below to contact you
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => onSubmit())}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jonathan Mitchell" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="school@school.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schoolName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>School Name</FormLabel>
                <FormControl>
                  <Input placeholder="The Coolest Awesome School" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isPending}
            type="submit"
            className="w-full"
            size="lg"
          >
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign up
          </Button>
        </form>
      </Form>
      <p className="text-secondary text-center text-sm">
        You already have an account?
        <Link
          href="/sign-in"
          className="hover:text-primary px-2 underline underline-offset-2 transition-colors"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
