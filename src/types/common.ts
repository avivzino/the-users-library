type Name = {
  title: string;
  first: string;
  last: string;
};

type Location = {
  country: string;
  city: string;
  street: {number: number; name: string};
};

export interface User {
  name: Name;
  email: string;
  picture?: {medium: string};
  location: Location;
  login?: {uuid?: string};
  id?: {value?: string};
}

export interface NewUser {
  name: string;
  email: string;
  street: string;
  city: string;
  country: string;
}
