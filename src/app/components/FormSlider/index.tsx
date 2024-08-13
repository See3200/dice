import { Slider } from "@mui/material";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

type PropsType = {
  name: string;
};

const FormSlider = ({ name }: PropsType) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Slider
          value={value}
          onChange={onChange}
          valueLabelDisplay="auto"
          min={0}
          max={100}
          step={1}
          marks={marks}
          color="secondary"
        />
      )}
    />
  );
};

export default memo(FormSlider);

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 17,
    label: "",
  },
  {
    value: 33,
    label: "",
  },
  {
    value: 50,
    label: "",
  },
  {
    value: 67,
    label: "",
  },
  {
    value: 83,
    label: "",
  },
  {
    value: 100,
    label: "100",
  },
];
