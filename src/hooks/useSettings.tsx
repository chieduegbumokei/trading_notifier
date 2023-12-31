import { useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateUser } from "store/apis/users";
import { useAppDispatch, useAppSelector } from "store/hooks";

type FormValues = {
  authCode: string;
  channelId: string;
};

const useSettings = () => {
  const dispatch = useAppDispatch();
  const authCode = useAppSelector((state) => state.dashboard.authCode);
  const channelId = useAppSelector((state) => state.dashboard.channelId);
  const isLookupActive = useAppSelector(
    (state) => state.dashboard.isLookupActive
  );
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      authCode,
      channelId,
    },
  });
  const disabled = useMemo(
    () => isLookupActive || isSubmitting,
    [isSubmitting, isLookupActive]
  );

  useEffect(() => {
    if (authCode) setValue("authCode", authCode);
    if (channelId) setValue("channelId", channelId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authCode, channelId]);

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    dispatch(updateUser(data));

  return {
    control,
    handleSubmit,
    onSubmit,
    disabled,
  };
};

export default useSettings;
