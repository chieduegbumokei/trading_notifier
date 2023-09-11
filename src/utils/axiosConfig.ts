import axios from "axios";
import { baseUrl } from "constants/endpoints";

export const axiosBase = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqYWFnZnhqc2JxZXlkeWlwbnVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNTI5MDMsImV4cCI6MjAwODYyODkwM30.Yo0ST6aywLuiN0p3qtZCBwD5gLQztzwpliyiU-9aXsg`,
  },
});
