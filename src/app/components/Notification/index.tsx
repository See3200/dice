import { Alert, Snackbar, AlertColor, AlertPropsColorOverrides, AlertTitle } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { memo } from "react";

export enum NotificationStatus {
  SUCCESS = "success",
  ERROR = "error",
}

type PropsType = {
  open: boolean;
  status?: NotificationStatus;
};

const Notification = ({ open, status = NotificationStatus.SUCCESS }: PropsType) => {
  const { severity, title, subText } = NotificationConfig[status];
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={{ width: "100%" }}
    >
      <Alert severity={severity} variant="filled" sx={{ width: "600px" }}>
        <AlertTitle>{title}</AlertTitle>
        {subText ? subText : null}
      </Alert>
    </Snackbar>
  );
};

export default memo(Notification);

type NotificationConfigItem = {
  title: string;
  severity: OverridableStringUnion<AlertColor, AlertPropsColorOverrides>;
  subText?: string;
};

type NotificationConfig = {
  [NotificationStatus.SUCCESS]: NotificationConfigItem;
  [NotificationStatus.ERROR]: NotificationConfigItem;
};

const NotificationConfig: NotificationConfig = {
  [NotificationStatus.SUCCESS]: {
    title: "You won",
    severity: "success",
  },
  [NotificationStatus.ERROR]: {
    title: "You lost",
    severity: "error",
    subText: "Number was higher",
  },
};
