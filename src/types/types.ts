export type CalculatorHeaderInterface = { value: string };

export type CalculatorBodyInterface = {
  onHandleDelete: () => void;
  onHandleInput: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onHandleOperation: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type CalculatorButtonInterface = {
  color: string;
  textContent: string;
  space: number;
  onHandleEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
