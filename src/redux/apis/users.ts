import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosBase } from "utils/axiosConfig";
import { listenToNotifications } from "./notifications";

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

export const updateUserLookup = createAsyncThunk(
  "dashboard/updateUserLookup",
  async (payload: { lookupText: string }, { dispatch, rejectWithValue }) => {
    const lookupText = payload.lookupText;
    try {
      const body = {
        lookupText,
      };
      const response = await axiosBase.post("/update-user", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      dispatch(listenToNotifications());
      return data;
    } catch (error) {
      rejectWithValue("Failed to get user.");
    }
  }
);
