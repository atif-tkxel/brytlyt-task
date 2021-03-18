import { Result, Rule, StringKeyValue } from "./typings";
import { dataset } from "./dataset";

// Denomication Rule
const rule: Rule = {
  "1": 40,
  "2": 40,
  "5": 30,
  "10": 50,
  "20": 20,
  "50": 40
};

export const getRollsRest = (coins: number[]): Partial<Result> => {
  // The input coins array is transformed into an object containing the coins with their respective counts
  const coinsCount: StringKeyValue = coins.reduce(
    (acc: StringKeyValue, val: number) => ({
      ...acc,
      [val]: acc[val] + 1 || 1
    }),
    {}
  );

  const result: Partial<Result> = {};
  // Calculating the rolls and rest values for each coin
  for (const key in coinsCount) {
    if (key in rule)
      // Only considering coins which are present in denomination rules and discarding the rest
      result[key as keyof Result] = {
        rolls: ~~(coinsCount[key] / rule[key as keyof Rule]),
        rest: coinsCount[key] % rule[key as keyof Rule]
      };
  }
  return result;
};

console.log(getRollsRest(dataset));
