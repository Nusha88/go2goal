export class Goals {

  constructor(
    public id: string,
    public goal_of_live?: string,
    public first_level_steps?: FirstLevelSteps,
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
    // public second_level_steps?: SecondLevelSteps
  ) {}
}
