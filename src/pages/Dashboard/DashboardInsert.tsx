import React from "react";
import { InsertContainer } from "./index.styles";
import Button from "components/shared/Button/Button";
import { Controller } from "react-hook-form";
import useInsert from "hooks/useInsert";
import Input from "components/shared/Input/Input";

const DashboardInsert: React.FC = () => {
  const { control, handleSubmit, onSubmit, isSubmitting } = useInsert();

  return (
    <InsertContainer onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="lookupText"
        rules={{
          required: "Please fill the field.",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            title={
              "Please enter the text for which you wish to receive notifications:"
            }
            name="lookupText"
            value={value}
            error={error?.message}
            onChange={onChange}
            placeholder="Insert text here * "
          />
        )}
      />
      <Button text="Start Searching" disabled={isSubmitting} type="submit" />
    </InsertContainer>
  );
};

export default DashboardInsert;
