export interface Profile {
  name: string;
  birthDay: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Users {
  contents: User[];
}
