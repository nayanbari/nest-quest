"use server";

import { AxiosError } from "axios";
import { get, post, put } from ".";
import { User } from "@/types/user";
import { Property } from "@/types/property";


type RequestType = {
  success: boolean;
  message: string;
  data: Property | null;
  error: AxiosError | null;
}

type RequestTypeAll = {
  success: boolean;
  message: string;
  data: Property[] | null;
  error: AxiosError | null;
}

export async function createProperty(data: Property) {
  try {
    const property = await post<RequestType, Property>("/property", data);
    return property;
  } catch (error) {
    console.error('API Request Error:', error);
  }
}
export async function getUserProperties() {
  try {
    const property = await get<RequestTypeAll>("/property/user");
    return property;
  } catch (error) {
    console.error('API Request Error:', error);
  }
}