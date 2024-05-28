"use client";

import { TooltipProvider } from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import useCollapsed from "@/hooks/use-collapsed";
import Image from "next/image";
import { Navbar } from "./navbar";
import { Button } from "../ui/button";
import { Bell, Home, Loader2 } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { ModeToggle } from "./mode-toggle";
import { LayoutDashboard, File, Users, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut } from "next-auth/react";

export const PRIMARY_NAVLINKS = [
  {
    title: "My Properties",
    href: "/my-properties",
    icon: Home,
  },
]


type ApplicationLayoutProps = {
  children: React.ReactNode;
};

export function ApplicationLayout({
  children,
}: ApplicationLayoutProps) {

  const isCollapsed = useCollapsed()

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className="relative flex flex-row h-full max-h-screen items-stretch overflow-hidden"
      >
        <div
          className={cn("h-screen flex flex-col transition-all duration-300 ease-in-out border-e",
            isCollapsed ? "min-w-[52px] max-w-[52px]" : "min-w-[260px] max-w-[260px]"
          )}
        >
          <div
            className={cn(
              isCollapsed ? "flex h-[52px] items-center justify-center" : "px-2 flex h-[52px] items-center"
            )}
          >
            {isCollapsed ? (
              <Image
                src="/logo-mark.png"
                alt="Peinvoice"
                width={32}
                height={32}
              />
            ) : (
              <Image
                src="/logo.png"
                alt="Peinvoice"
                width={132}
                height={32}
                className="pl-4"
              />
            )}
          </div>          
          <Separator />
          <Navbar navlinks={PRIMARY_NAVLINKS} isCollapsed={isCollapsed} />
        </div>
        <div className="flex-1 h-screen">
          <div className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">Welcome back!</h1>
            <div className="ml-auto flex items-center space-x-3">
              <ModeToggle />
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="sm" onClick={async () => await signOut({
                callbackUrl: "/",
              })}>Sign out</Button>
            </div>
          </div>
          <Separator />
          <ScrollArea className="h-full">
            <div className="px-4 py-8">
              {children}
              <div className="w-full p-8"></div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </TooltipProvider>
  );
}