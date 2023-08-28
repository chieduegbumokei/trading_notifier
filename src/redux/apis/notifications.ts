import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosBase } from "utils/axiosConfig";

export const getNotifications = createAsyncThunk(
  "dashboard/getNotifications",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBase.get("/get-notifications");
      const data = response.data;
      return data;
    } catch (error) {
      rejectWithValue("Failed to get user.");
    }
  }
);
