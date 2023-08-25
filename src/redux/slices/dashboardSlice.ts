import { createSlice } from "@reduxjs/toolkit";
import { Notification, SidebarTile } from "interfaces/";
import { initialPanels } from "../../data/utils/initialPanels";

type DashboardState = {
  lookupText?: string;
  isLookupActive: boolean;
  loading: string;
  notifications: Notification[];
  authCode?: string;
  channelId?: string;
  panels: SidebarTile[];
};

const initialState: DashboardState = {
  lookupText: undefined,
  isLookupActive: false,
  loading: "",
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
