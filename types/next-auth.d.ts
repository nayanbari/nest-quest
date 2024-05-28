import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

/** Example on how to extend the built-in session types */
declare module "next-auth" {

  interface User {
    email: string
    accessToken: string
    role: string
  }
  
  interface Session {
    /** This is an example. You can find me in types/next-auth.d.ts */
    email: string
    accessToken: string
    role: string
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    email: string
    accessToken: string
    role: string
  }
}