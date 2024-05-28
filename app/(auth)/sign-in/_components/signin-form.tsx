"use client";

import { FormInput } from "@/components/custom/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormSchema = z.infer<typeof formSchema>;

export function SignInForm() {

  const session = useSession()
  const router = useRouter()
  useEffect(() => {
    console.log(session)
    // if(session.status === "authenticated") router.push("/dashboard")
  }, [session, router])

  const [isLoading, setIsLoading] = useState<boolean>(false)


  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data: FormSchema) {
    setIsLoading(true)
    signIn("credentials", {
      ...data,
      redirect: true,
      callbackUrl: "/my-properties"
    })
    setIsLoading(false)
  }


  return (
    <Form {...form}>
      <form className="min-h-screen flex items-center justify-center" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mx-auto grid w-[500px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your details below to create an account
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <FormInput
                form={form}
                name="email"
                label="Email"
                type="email"
              />
              <FormInput
                form={form}
                name="password"
                label="Password"
                type="password"
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="underline">
              Register
            </Link>
          </div>
        </div>
      </form>
    </Form>
  )
}