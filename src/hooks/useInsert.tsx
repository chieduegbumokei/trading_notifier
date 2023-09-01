import { SubmitHandler, useForm } from "react-hook-form";
import { updateUserLookup } from "store/apis/users";
import { useAppDispatch, useAppSelector } from "store/hooks";

type FormValues = {
  lookupText: string;
};

const useInsert = () => {
  const dispatch = useAppDispatch();
  const lookupText = useAppSelector((state) => state.dashboard.lookupText);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      lookupText,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(updateUserLookup(data));
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    isSubmitting,
  };
};

export default useInsert;
