export interface GameResult {
  status: boolean;
  time: string;
  guess: PlayData;
  result: number;
}

export type PlayData = {
  value: number;
  isOver: boolean;
};
