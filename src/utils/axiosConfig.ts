declare global {
  interface Window {
    jwtToken: string;
  }
}

import axios from "axios";
import { baseUrl } from "constants/endpoints";

export const axiosBase = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    Authorization: `Bearer ${window["jwtToken"]}`,
  },
});
