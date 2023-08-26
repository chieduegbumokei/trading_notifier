import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Notification, SidebarTile, User } from "interfaces/";
import { initialPanels } from "../../data/utils/initialPanels";
import { LoadingState, DashbaordMode } from "objects/";
import { getUser } from "store/apis/users";

type DashboardState = {
  lookupText?: string;
  isLookupActive: boolean;
  loading: LoadingState;
  mode: DashbaordMode;
  notifications: Notification[];
  authCode?: string;
  channelId?: string;
  panels: SidebarTile[];
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
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
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
  },
});

export default dashboardSlice.reducer;
