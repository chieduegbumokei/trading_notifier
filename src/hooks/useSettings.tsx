import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "store/hooks";

type FormValues = {
  authCode: string;
  channelId: string;
};

const useSettings = () => {
  const authCode = useAppSelector((state) => state.dashboard.authCode);
  const channelId = useAppSelector((state) => state.dashboard.channelId);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      authCode,
      channelId,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    isSubmitting,
  };
};

export default useSettings;
