import { format, formatDistance } from "date-fns";

export const formatTimeTo12Hour = (time: Date) => {
  return format(time, "hh:mm a");
};

export const fromNow = (time: Date) =>
  formatDistance(time, new Date(), { addSuffix: true });
