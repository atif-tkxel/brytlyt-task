import { Result } from "../src/typings";
import { getRollsRest } from "../src/task";

describe("test getRollsRest function", () => {
  const mockInput: number[] = [1, 1, 2, 3, 4, 5, 5, NaN, 1, 3, 5, 4, 6, 8, 2];
  const mockCorrectResult: Partial<Result> = {
    "1": { rolls: 0, rest: 3 },
    "2": { rolls: 0, rest: 2 },
    "5": { rolls: 0, rest: 3 }
  };
  const mockWrongResult: Partial<Result> = {
    "1": { rolls: 10, rest: 3 },
    "2": { rolls: 50, rest: 2 },
    "5": { rolls: 80, rest: 3 }
  };

  it("should pass for correct mock input and result", () => {
    expect(getRollsRest([])).toStrictEqual({});
    expect(getRollsRest(mockInput)).toStrictEqual(mockCorrectResult);
  });

  it("should fail for wrong mock result", () => {
    expect(getRollsRest(mockInput)).not.toStrictEqual(mockWrongResult);
  });
});
