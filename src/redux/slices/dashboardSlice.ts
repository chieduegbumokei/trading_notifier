import { createSlice } from "@reduxjs/toolkit";
import { Notification, SidebarTile } from "interfaces/";
import { initialPanels } from "../../data/utils/initialPanels";
import { LoadingState, DashbaordMode } from "objects/";

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
  loading: LoadingState.Succeded,
  mode: DashbaordMode.Searching,
  notifications: [],
  authCode: "",
  channelId: "",
  panels: initialPanels,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
