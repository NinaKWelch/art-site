export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Portfolio {
  id: number;
  category: Category;
  image: string;
  name?: string;
  description?: string;
}

export interface Artist extends User {
  nameUrl: string;
  portfolio?: Portfolio[];
}