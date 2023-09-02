import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboardSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [
          "dashboard.panels",
          "dashboard.notificationsEventSource",
        ],
        ignoredPaths: [
          "dashboard.panels",
          "dashboard.notificationsEventSource",
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
