export class Goals {

  constructor(
    public goal_of_live?: string,
    public first_level_steps?: FirstLevelSteps,
    // public second_level_steps: SecondLevelSteps[],
    // public third_level_steps: ThirdLevelSteps[],
    // public goals_of_year: GoalOfYear[],
    // public goals_of_month: GoalOfMonth[],
    // public goals_of_week: GoalOfWeek[],
  ) {}
}

export class FirstLevelSteps {
  constructor(
    public index: number,
    public name?: string,
    // public second_level_step?: string
  ) {}
}

export class SecondLevelSteps {
  constructor(
    public _id?: string,
    public name?: string,
  ) {}
}

export class ThirdLevelSteps {
  constructor(
    public _id: string,
    public name: Array<any>,
  ) {}
}

export class GoalOfYear {
  constructor(
    public _id: string,
    public name: string,
  ) {}
}

export class GoalOfMonth {
  constructor(
    public _id: string,
    public name: string,
  ) {}
}

export class GoalOfWeek {
  constructor(
    public _id: string,
    public name: string,
  ) {}
}
