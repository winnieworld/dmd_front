import axios, { AxiosError } from "axios";
import { joinType, loginType } from "@/Types/index";

const client = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://api.dearmydiary.com",
});
export const join = async (info: joinType) => {
  try {
    const response = await client.post("/user/signup", { ...info });
    return response.status;
  } catch (error) {
    const e = error as AxiosError;

    return e?.response?.status;
  }
};
export const login = async (info: loginType) => {
  try {
    const response = await client.post("/auth/login", { ...info });
    return response;
  } catch (error) {
    const e = error as AxiosError;

    return e?.response;
  }
};
