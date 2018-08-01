
export class GoalOfLife {
  constructor(
    public index: number,
    public title?: string,
  ) {}
}
export class FirstLevelSteps {
  constructor(
    public index: number,
    public title?: string,
    public second_level_steps?: SecondLevelSteps
  ) {}
}

export class SecondLevelSteps {
  constructor(
    public index: number,
    public title?: string,
    public third_level_steps?: ThirdLevelSteps
  ) {}
}

export class ThirdLevelSteps {
  constructor(
    public index: number,
    public title?: string,
    public fourth_level_steps?: FourthLevelSteps
  ) {}
}
export class FourthLevelSteps {
  constructor(
    public index: number,
    public title?: string,
    public fifth_level_steps?: FifthLevelSteps
  ) {}
}

export class FifthLevelSteps {
  constructor(
    public index: number,
    public title?: string,
  ) {}
}

