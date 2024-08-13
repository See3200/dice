import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GameResult } from "@/app/types/game";
import { memo } from "react";

type PropsType = {
  data: GameResult[];
};

const HistoryTable = ({ data }: PropsType) => {
  if (!data.length) return null;

  return (
    <TableContainer>
      <Table sx={{ width: 600 }}>
        <TableHead>
          <TableRow>
            {thData.map((th) => (
              <TableCell key={th} sx={{ fontWeight: 500 }}>
                {th}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={`${row.time} ${row.result}`}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell>
                {row.guess.isOver ? "Over" : "Under"} {row.guess.value}
              </TableCell>
              <TableCell sx={{ color: row.status ? "green" : "red" }}>{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(HistoryTable);

const thData = ["Time", "Guess", "Result"];
