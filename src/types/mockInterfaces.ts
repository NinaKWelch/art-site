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

export interface Artist {
  id: number;
  firstName: string;
  lastName: string;
  nameUrl: string;
  portfolio?: Portfolio[];
}