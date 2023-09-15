import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Notification } from "interfaces/";
import { LoadingState, NotificationsMode } from "objects/";
import {
  getNotifications,
  listenToNotifications,
} from "store/apis/notifications";

export type NotificationsState = {
  loading: LoadingState;
  mode: NotificationsMode;
  data: Notification[];
  notificationsEventSource?: EventSource;
};

const initialState: NotificationsState = {
  loading: LoadingState.Idle,
  mode: NotificationsMode.Recent,
  data: [],
  notificationsEventSource: undefined,
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    handleRemoveNotificationsEventSource: (state) => {
      state.notificationsEventSource?.close();
      state.notificationsEventSource = undefined;
      return;
    },
    addNotifications: (state: NotificationsState, action) => {
      const { payload } = action;
      const data = [...state.data, ...payload];
      return {
        ...state,
        data,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNotifications.pending, (state: NotificationsState) => {
      return {
        ...state,
        loading: LoadingState.Pending,
      };
    });
    builder.addCase(
      getNotifications.fulfilled,
      (state: NotificationsState, action: PayloadAction<Notification[]>) => {
        const { payload: data } = action;
        return {
          ...state,
          loading: LoadingState.Succeded,
          data,
        };
      }
    );
    builder.addCase(getNotifications.rejected, (state: NotificationsState) => {
      return {
        ...state,
        loading: LoadingState.Failed,
      };
    });
    builder.addCase(
      listenToNotifications.fulfilled,
      (
        state: NotificationsState,
        action: PayloadAction<
          EventSource | undefined,
          string,
          {
            arg: { lookupText: string };
            requestId: string;
            requestStatus: "fulfilled";
          },
          never
        >
      ) => {
        const { payload } = action;
        state.notificationsEventSource = payload;
        return;
      }
    );
  },
});

export const { handleRemoveNotificationsEventSource, addNotifications } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
