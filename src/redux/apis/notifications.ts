import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "constants/endpoints";
import { DashboardState } from "store/slices/dashboardSlice";
import {
  NotificationsState,
  addNotifications,
} from "store/slices/notificationsSlice";
import { axiosBase } from "utils/axiosConfig";
import { sendNotification } from "utils/notifications";

export const getNotifications = createAsyncThunk(
  "notifications/getNotifications",
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
  "notifications/listenToNotifications",
  async (
    payload: { lookupText: string },
    { dispatch, getState, rejectWithValue }
  ) => {
    try {
      const { dashboard } = getState() as { dashboard: DashboardState };
      const channelId = dashboard.channelId;
      const authCode = dashboard.authCode;
      const lookupText = payload.lookupText;
      const url = `${baseUrl}listen-to-notifications?channelId=${channelId}&authCode=${authCode}&lookupText=${lookupText}`;
      const eventSource = new EventSource(url);
      eventSource.onmessage = (e) => {
        const data = JSON.parse(e.data);
        if (data.length > 0) {
          dispatch(addNotifications(data));
          sendNotification();
        }
      };
      return eventSource;
    } catch (error) {
      rejectWithValue("Failed to get notifications.");
    }
  },
  {
    condition: (_, { getState }) => {
      const { notifications } = getState() as {
        notifications: NotificationsState;
      };
      const notificationsEventSource = notifications.notificationsEventSource;
      if (notificationsEventSource) return false;
    },
  }
);
