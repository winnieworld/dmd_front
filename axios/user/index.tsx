import axios, { AxiosError } from "axios";
import { joinType, loginType } from "@/Types/index";

const client = axios.create({
  baseURL: "http://localhost:3000",
});
export const join = async (info: joinType) => {
  try {
    const response = await client.post("/api/user/signup", { ...info });
    return response.status;
  } catch (error) {
    const e = error as AxiosError;

    return e?.response?.status;
  }
};
export const login = async (info: loginType) => {
  try {
    const response = await client.post("/api/auth/login", { ...info });
    return response;
  } catch (error) {
    const e = error as AxiosError;

    return e?.response;
  }
};
