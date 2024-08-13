import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type PropsType = {
  name: string;
  options: FormRadioItem[];
};

const FormInputRadio = ({ name, options }: PropsType) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup value={value} onChange={onChange} row sx={{ display: "flex", justifyContent: "center" }}>
          {generateRadioOptions(options)}
        </RadioGroup>
      )}
    />
  );
};

export default FormInputRadio;

const generateRadioOptions = (options: FormRadioItem[]) => {
  return options.map((option) => (
    <FormControlLabel
      key={option.label}
      value={option.value}
      label={option.label}
      control={<Radio color="secondary" size="small" />}
    />
  ));
};

type FormRadioItem = {
  label: string;
  value: boolean;
};
