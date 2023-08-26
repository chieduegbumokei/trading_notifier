import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "store/hooks";

type FormValues = {
  lookupText: string;
};

const useInsert = () => {
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
    console.log(data);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    isSubmitting,
  };
};

export default useInsert;
