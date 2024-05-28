import Image from "next/image";
import { SignUpForm } from "./_components/signup-form";

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <SignUpForm />
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}