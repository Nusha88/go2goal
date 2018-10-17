
export class Posts {

  constructor(
    public _id: string,
    public title: string,
    public isEdited: boolean,
    public postText: string,
    public upload: string,
    public author: string,
    public date: Date,
    public category: string,
    public likes?: Likes[],
    public favorites?: Favorites[],
  ) {
  }
}

export class Likes {
  constructor(
    public count: number,
    public isLike: boolean,
    public likers: Liker,
  ) {}
}
export class Favorites {
  constructor(
    public count: number,
    public users: Liker,
  ) {}
}
export class Liker {
  constructor(
    public username: string,
    public isLike: boolean,
  ) {}
}
