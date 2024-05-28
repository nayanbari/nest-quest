import Image from "next/image";
import { SignInForm } from "./_components/signin-form";

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <SignInForm />
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