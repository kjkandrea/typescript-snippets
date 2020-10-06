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

export interface Product {
  id: number;
  title: string;
  price: number;
  subProducts?: Product[];
}

export interface Products {
  contents: Product[];
}
