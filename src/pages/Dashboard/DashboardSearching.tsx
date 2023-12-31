import React from "react";
import { Container } from "./index.styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import Button from "components/shared/Button/Button";
import { handleStopSearch } from "store/slices/dashboardSlice";
import { updateUserLookup } from "store/apis/users";
import { handleRemoveNotificationsEventSource } from "store/slices/notificationsSlice";

const DashboardSearching: React.FC = () => {
  const dispatch = useAppDispatch();
  const lookupText = useAppSelector((state) => state.dashboard.lookupText);

  const handleClick = () => {
    dispatch(updateUserLookup({ lookupText: "" }));
    dispatch(handleStopSearch());
    dispatch(handleRemoveNotificationsEventSource());
  };

  return (
    <Container>
      <h3>Currently Searching for:</h3>
      <p>{lookupText}</p>
      <Button text="Stop Searching" onClick={handleClick} />
    </Container>
  );
};

export default DashboardSearching;
