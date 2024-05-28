"use server";

import { AxiosError } from "axios";
import { get, post, put } from ".";
import { User } from "@/types/user";


type RequestType = {
  success: boolean;
  message: string;
  data: User | null;
  error: AxiosError | null;
}

export async function createUser(data: User) {
  try {
    const user = await post<RequestType, User>("/user", data);
    return user;
  } catch (error) {
    console.error('API Request Error:', error);
  }
}