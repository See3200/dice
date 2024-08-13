import { memo, useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import { PlayData } from "@/app/types/game";
import FormInputRadio from "../FormRadio";
import { Button, Typography } from "@mui/material";
import FormSlider from "../FormSlider";

type PropsType = {
  submit: (data: PlayData) => void;
};

const Form = ({ submit }: PropsType) => {
  const [isError, setIsError] = useState(false);
  const methods = useForm<PlayData>({ defaultValues: initialValues });
  const watchFields = methods.watch(["isOver", "value"]);

  useEffect(() => {
    const hasError = checkValid(watchFields[0], watchFields[1]);
    if (hasError !== isError) {
      setIsError(hasError);
    }
  }, [watchFields]);

  const submitHandler = useCallback(
    (formData: PlayData) => {
      submit(formData);
    },
    [submit],
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)}>
        <Box sx={{ marginBottom: "32px" }}>
          <FormInputRadio name="isOver" options={options} />
        </Box>
        <Box sx={{ marginBottom: "16px" }}>
          <FormSlider name="value" />
        </Box>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          sx={{ width: "100%" }}
          disabled={checkValid(watchFields[0], watchFields[1])}
        >
          Play
        </Button>
        <Typography color="red" height="20px">
          {isError && "Change your value"}
        </Typography>
      </form>
    </FormProvider>
  );
};

export default memo(Form);

const initialValues = {
  value: 50,
  isOver: false,
};

const options = [
  {
    label: "Under",
    value: false,
  },
  {
    label: "Over",
    value: true,
  },
];

const checkValid = (isOver: boolean, value: number) => {
  if ((isOver && value === 100) || (!isOver && value === 0)) return true;
  return false;
};
