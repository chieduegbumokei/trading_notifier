import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Notification, SidebarTile, User } from "interfaces/";
import { initialPanels } from "../../data/utils/initialPanels";
import { LoadingState, DashbaordMode } from "objects/";
import { getUser, updateUser, updateUserLookup } from "store/apis/users";
import {
  getNotifications,
  listenToNotifications,
} from "store/apis/notifications";

export type DashboardState = {
  lookupText?: string;
  isLookupActive: boolean;
  loading: LoadingState;
  mode: DashbaordMode;
  notifications: Notification[];
  authCode?: string;
  channelId?: string;
  panels: SidebarTile[];
  notificationsEventSource?: EventSource;
};

const initialState: DashboardState = {
  lookupText: "",
  isLookupActive: false,
  loading: LoadingState.Idle,
  mode: DashbaordMode.Insert,
  notifications: [],
  authCode: "",
  channelId: "",
  panels: initialPanels,
  notificationsEventSource: undefined,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    handleRemoveNotificationsEventSource: (state) => {
      state.notificationsEventSource?.close();
      state.notificationsEventSource = undefined;
      return;
    },
    handleStopSearch: (state) => {
      state.isLookupActive = false;
      state.mode = DashbaordMode.Insert;
      return;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state: DashboardState) => {
      return {
        ...state,
        loading: LoadingState.Pending,
      };
    });
    builder.addCase(
      getUser.fulfilled,
      (state: DashboardState, action: PayloadAction<User>) => {
        const { payload } = action;
        const loading = LoadingState.Succeded;
        const channelId = payload.channelId;
        const authCode = payload.authCode;
        const lookupText = payload.lookupText;
        const isLookupActive = lookupText.trim().length > 0;
        let mode = state.mode;

        if (isLookupActive) mode = DashbaordMode.Searching;
        if (channelId.trim().length === 0 && authCode.trim().length === 0)
          mode = DashbaordMode.Welcome;

        return {
          ...state,
          loading,
          channelId,
          authCode,
          lookupText,
          mode,
        };
      }
    );
    builder.addCase(getUser.rejected, (state: DashboardState) => {
      return {
        ...state,
        loading: LoadingState.Failed,
      };
    });
    builder.addCase(
      updateUser.fulfilled,
      (state: DashboardState, action: PayloadAction<User>) => {
        const { payload } = action;
        const authCode = payload.authCode;
        const channelId = payload.channelId;

        return {
          ...state,
          authCode,
          channelId,
        };
      }
    );
    builder.addCase(
      getNotifications.fulfilled,
      (state: DashboardState, action: PayloadAction<Notification[]>) => {
        const { payload: notifications } = action;
        console.log(notifications);
        return {
          ...state,
          notifications,
        };
      }
    );
    builder.addCase(
      listenToNotifications.fulfilled,
      (
        state: DashboardState,
        action: PayloadAction<
          EventSource | undefined,
          string,
          { arg: void; requestId: string; requestStatus: "fulfilled" },
          never
        >
      ) => {
        const { payload } = action;
        state.notificationsEventSource = payload;
        return;
      }
    );
    builder.addCase(updateUserLookup.pending, (state: DashboardState) => {
      state.mode = DashbaordMode.Loading;
      return state;
    });
    builder.addCase(
      updateUserLookup.fulfilled,
      (state: DashboardState, action: PayloadAction<User>) => {
        const { payload } = action;
        const lookupText = payload.lookupText;
        state.lookupText = lookupText;
        state.isLookupActive = true;
        state.mode = DashbaordMode.Searching;
        return state;
      }
    );
    builder.addCase(updateUserLookup.rejected, (state: DashboardState) => {
      state.mode = DashbaordMode.Denied;
      state.isLookupActive = false;
      state.lookupText = initialState.lookupText;
      return state;
    });
  },
});

export const { handleRemoveNotificationsEventSource, handleStopSearch } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
