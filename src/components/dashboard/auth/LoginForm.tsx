"use client";

import { LoginType, loginSchema } from "@/lib/validators/login-form";
import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const LoginForm: FC<{ baseURL: string }> = ({ baseURL }) => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center space-y-6 rounded-lg sm:w-[400px] sm:max-w-md md:mt-0 xl:p-0">
      <div className="space-y-6 p-6 sm:p-8">
        <Tabs defaultValue="student" className="w-full sm:w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student">STUDENT</TabsTrigger>
            <TabsTrigger value="staff">STAFF</TabsTrigger>
          </TabsList>
          <TabsContent value="student">
            <CustomForm entityType="student" baseURL={baseURL} />
          </TabsContent>
          <TabsContent value="staff">
            <CustomForm entityType="staff" baseURL={baseURL} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const CustomForm = ({
  entityType,
  baseURL,
}: {
  entityType: "student" | "staff";
  baseURL: string;
}) => {
  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      code: "",
      password: "",
    },
  });

  const { mutate: onSubmit, isPending } = useMutation({
    mutationFn: async () => {
      const payload: LoginType = form.getValues();
      axios.post(`${baseURL}/auth/login/${entityType}`, payload, {
        withCredentials: true,
      });
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return toast({
            title: "Invalid Credentials",
            description: "Please enter valid credentials",
            variant: "destructive",
          });
        } else {
          return toast({
            title: "Something went wrong",
            description: "Please try again later",
          });
        }
      }
    },
    onSuccess: async () => {
      toast({
        title: "Welcome",
        description: "Login Successfully",
      });
      router.push("/admin/dashboard");
    },
  });
  return (
    <div className="h-full space-y-8 rounded-md border border-border bg-background p-5 pb-8">
      <div className="space-y-3 text-center">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
          Sign in
        </h1>
        <p className="text-sm text-secondary">
          Enter your <span className="font-bold uppercase">{entityType}</span>{" "}
          credentials below to login
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => onSubmit())}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code</FormLabel>
                <FormControl>
                  <Input placeholder={`${entityType}-001`} {...field} />
                </FormControl>
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
                  <Input placeholder="12345" type="password" {...field} />
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
            Sign In
          </Button>
        </form>
      </Form>
      <p className="text-center text-sm text-secondary">
        Is your school not registered?
        <Link
          href="/sign-up"
          className="px-2 underline underline-offset-2 transition-colors hover:text-primary"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
