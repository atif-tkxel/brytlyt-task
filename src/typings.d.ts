export interface Rule {
  "1": number;
  "2": number;
  "5": number;
  "10": number;
  "20": number;
  "50": number;
}

export interface StringKeyValue {
  [key: string]: number;
}

export interface Result {
  "1": RollsRest;
  "2": RollsRest;
  "5": RollsRest;
  "10": RollsRest;
  "20": RollsRest;
  "50": RollsRest;
}

export interface RollsRest {
  rolls: number;
  rest: number;
}
