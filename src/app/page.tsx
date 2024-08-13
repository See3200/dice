"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Notification, { NotificationStatus } from "./components/Notification";
import { useCallback, useState } from "react";
import { PlayData, GameResult } from "./types/game";
import Form from "./components/Form";
import { containerStyle, displayStyle, wrapperStyle } from "./pageStyle";
import HistoryTable from "./components/HistoryTable";
import { getResult, makeNewHistory } from "./utils";

export default function Home() {
  const [resultStatus, setResultStatus] = useState<NotificationStatus | undefined>(undefined);
  const [history, setHistory] = useState<GameResult[]>([]);
  const lastHistoryLine = history[history.length - 1];

  const play = useCallback((data: PlayData) => {
    setResultStatus(undefined);
    const result = getResult(data);
    setHistory((prevHistory) => makeNewHistory(prevHistory, result));
    setResultStatus(result.status ? NotificationStatus.SUCCESS : NotificationStatus.ERROR);
  }, []);

  return (
    <main style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Container maxWidth="sm" sx={containerStyle}>
        <Notification open={!!resultStatus} status={resultStatus} />
        <Box sx={wrapperStyle}>
          <Box sx={displayStyle}>{lastHistoryLine?.result || ""}</Box>
          <Box sx={{ width: "320px", marginBottom: "4px" }}>
            <Form submit={play} />
          </Box>
          <Box>
            <HistoryTable data={history.slice().reverse()} />
          </Box>
        </Box>
      </Container>
    </main>
  );
}
