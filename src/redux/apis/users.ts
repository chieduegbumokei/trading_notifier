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

export const updateUser = createAsyncThunk(
  "dashboard/updateUser",
  async (
    payload: { authCode: string; channelId: string },
    { rejectWithValue }
  ) => {
    const authCode = payload.authCode;
    const channelId = payload.channelId;
    try {
      const body = {
        authCode,
        channelId,
      };
      const response = await axiosBase.post("/update-user", body, {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      });
      const data = response.data;
      return data;
    } catch (error) {
      rejectWithValue("Failed to get user.");
    }
  }
);
