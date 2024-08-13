import { GameResult, PlayData } from "./types/game";

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getResult = (data: PlayData) => {
  const date = new Date();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const { value, isOver } = data;
  const result = getRandomInt(1, 100);
  const diff = isOver ? value - result : result - value;
  const time = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return {
    time: `${date.getHours()}:${time}`,
    guess: {
      isOver,
      value,
    },
    result,
    status: diff > 0,
  };
};

export const makeNewHistory = (history: GameResult[], data: GameResult) => {
  const newHistory = [...history];
  if (newHistory.length === 10) newHistory.pop();
  newHistory.push(data);
  return newHistory;
};
