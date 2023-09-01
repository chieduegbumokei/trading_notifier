import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "constants/endpoints";
import { DashboardState } from "store/slices/dashboardSlice";
import { axiosBase } from "utils/axiosConfig";

export const getNotifications = createAsyncThunk(
  "dashboard/getNotifications",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosBase.get("/get-notifications");
      const data = response.data;
      return data;
    } catch (error) {
      rejectWithValue("Failed to get notifications.");
    }
  }
);

export const listenToNotifications = createAsyncThunk(
  "dashboard/listenToNotifications",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Inside listenToNotifications:");
      const eventSource = new EventSource(`${baseUrl}/listen-to-notifications`);
      eventSource.onmessage = (e) => {
        console.log(e);
        console.log(e.data);
      };
      return eventSource;
    } catch (error) {
      rejectWithValue("Failed to get notifications.");
    }
  },
  {
    condition: (_, { getState }) => {
      const { dashboard } = getState() as { dashboard: DashboardState };
      const notificationsEventSource = dashboard.notificationsEventSource;
      if (notificationsEventSource) return false;
    },
  }
);
