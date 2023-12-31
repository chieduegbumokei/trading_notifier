import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SidebarTile, User } from "interfaces/";
import { initialPanels } from "../../data/utils/initialPanels";
import { LoadingState, DashbaordMode } from "objects/";
import { getUser, updateUser, updateUserLookup } from "store/apis/users";

export type DashboardState = {
  lookupText?: string;
  isLookupActive: boolean;
  loading: LoadingState;
  mode: DashbaordMode;
  authCode?: string;
  channelId?: string;
  panels: SidebarTile[];
};

const initialState: DashboardState = {
  lookupText: "",
  isLookupActive: false,
  loading: LoadingState.Idle,
  mode: DashbaordMode.Insert,
  authCode: "",
  channelId: "",
  panels: initialPanels,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    handleStopSearch: (state) => {
      state.isLookupActive = false;
      state.mode = DashbaordMode.Insert;
      state.lookupText = "";
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
    builder.addCase(updateUserLookup.pending, (state: DashboardState) => {
      state.mode = DashbaordMode.Loading;
      return state;
    });
    builder.addCase(
      updateUserLookup.fulfilled,
      (state: DashboardState, action: PayloadAction<User>) => {
        const { payload } = action;
        const lookupText = payload.lookupText;
        const mode =
          lookupText.trim().length > 0
            ? DashbaordMode.Searching
            : DashbaordMode.Insert;
        const isLookupActive = lookupText.trim().length > 0;

        state.lookupText = lookupText;
        state.isLookupActive = isLookupActive;
        state.mode = mode;
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

export const { handleStopSearch } = dashboardSlice.actions;

export default dashboardSlice.reducer;
