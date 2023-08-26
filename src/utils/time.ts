import { format } from "date-fns";

export const formatTimeTo12Hour = (time: Date) => {
  return format(time, "hh:mm a");
};
