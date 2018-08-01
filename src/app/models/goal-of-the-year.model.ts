export class GoalOfTheYearModel {

  constructor(
    public title: string,
    public isEdited: boolean,
    public complete: boolean
  ) {
  }
}

export class GoalOfTheMonthModel {

  constructor(
    public title: string,
    public isEdited: boolean,
    public complete: boolean
  ) {
  }
}

export class GoalOfTheWeekModel {

  constructor(
    public title: string,
    public isEdited: boolean,
    public complete: boolean
  ) {
  }
}

export class DatesY {
  constructor(
    public from?: string,
    public to?: string,
  ) {}
}
export class DatesM {
  constructor(
    public from?: string,
    public to?: string,
  ) {}
}
export class DatesW {
  constructor(
    public from?: string,
    public to?: string,
  ) {}
}
