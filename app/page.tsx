import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center space-x-6 p-24">
      <Link href="/sign-in" className={buttonVariants({ variant: "default" })}>Login</Link>
      <Link href="/sign-up" className={buttonVariants({ variant: "secondary" })}>Register</Link>
    </main>
  );
}
