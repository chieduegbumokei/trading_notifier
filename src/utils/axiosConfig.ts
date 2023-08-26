import axios from "axios";
import { baseUrl } from "constants/endpoints";

export const axiosBase = axios.create({
  baseURL: `${baseUrl}`,
  // headers: {
  //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0`,
  // },
});
