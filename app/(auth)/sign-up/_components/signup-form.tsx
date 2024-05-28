"use client";

import { FormInput } from "@/components/custom/form-input";
import { FormSelect } from "@/components/custom/form-select";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createUser } from "@/server/user";
import { User, user } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function SignUpForm() {


  const form = useForm<User>({
    resolver: zodResolver(user),
  })

  const router = useRouter();

  async function onSubmit(data: User) {
    const response = await createUser(data);
    if(response?.success) {
      router.push("/sign-in");
    } else {
      alert("Something went wrong!");
    }
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
            <div className="grid grid-cols-2 gap-3">
              <FormInput
                form={form}
                name="firstName"
                label="First Name"
              />
              <FormInput
                form={form}
                name="lastName"
                label="Last Name"
              />
              <FormInput
                form={form}
                name="email"
                label="Email"
                type="email"
              />
              <FormInput
                form={form}
                name="phoneNumber"
                label="Phone Number"
              />
              <FormSelect
                form={form}
                name="type"
                label="Account Type"
                options={[
                  { label: "Seller", value: "SELLER" },
                  { label: "Buyer", value: "BUYER" },
                ]}
              />
              <FormInput
                form={form}
                name="password"
                label="Password"
                type="password"
                className="col-span-2"
              />
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="underline">
              Login
            </Link>
          </div>
        </div>
      </form>
    </Form>
  )
}