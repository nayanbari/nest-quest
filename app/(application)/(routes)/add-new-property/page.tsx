"use client";

import { FormInput } from "@/components/custom/form-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createProperty } from "@/server/property";
import { Property, property } from "@/types/property";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AddNewProperty() {

  const form = useForm<Property>({
    resolver: zodResolver(property),
  })

  const session = useSession();

  const router = useRouter();

  async function onSubmit(data: Property) {
    console.log(data);
    const response = await createProperty(data);
    console.log(response);
    if(response?.success) {
      router.push("/my-properties");
    } else {
      alert("Something went wrong!");
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-12">Add New Property</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="max-w-lg grid grid-cols-2 gap-3">
            <FormInput 
              form={form}
              name="place"
              label="Place"
            />
            <FormInput 
              form={form}
              name="area"
              label="Area"
              type="number"
            />
            <FormInput 
              form={form}
              name="bedroom"
              label="Bedroom"
              type="number"
            />
            <FormInput 
              form={form}
              name="bathroom"
              label="Bathroom"
              type="number"
            />
          </div>

          <Button type="submit">Add Property</Button>
        </form>
      </Form>
    </div>
  )
}