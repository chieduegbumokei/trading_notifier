import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosBase } from "utils/axiosConfig";

export const getUser = createAsyncThunk(
  "dashboard/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBase.get("/get-user");
      const data = response.data;
      return data;
    } catch (error) {
      rejectWithValue("Failed to get user.");
    }
  }
);
