import axios from "axios";
import useAxiosWithAuth from "../useAxiosWithAuth";
const client = useAxiosWithAuth();

export const createBoard = async (formData: any) => {
  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const key of formData.keys()) {
      console.log(key, ":", formData.get(key));
    }
    const response = await client.post("/boards", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error: any) {
    console.log(error);
    // alert('다시 시도해주세요');
    return error;
  }
};
