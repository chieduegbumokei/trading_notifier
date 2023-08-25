import React from "react";
import { Container } from "./index.styles";
import Input from "components/shared/Input/Input";
import useSettings from "hooks/useSettings";
import { Controller } from "react-hook-form";
import Button from "components/shared/Button/Button";

const Settings: React.FC = () => {
  const { control, handleSubmit, onSubmit, isSubmitting } = useSettings();
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="authCode"
        rules={{
          required: "Please fill the field.",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            title={"Authorization code:"}
            name="authCode"
            value={value}
            error={error?.message}
            onChange={onChange}
            placeholder="Please Insert code here * "
          />
        )}
      />
      <Controller
        control={control}
        name="channelId"
        rules={{
          required: "Please fill the field.",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            title={"Channel Id:"}
            name="channelId"
            value={value}
            error={error?.message}
            onChange={onChange}
            placeholder="Please Insert channel id here * "
          />
        )}
      />
      <Button text="Save" disabled={isSubmitting} type="submit" />
    </Container>
  );
};

export default Settings;
