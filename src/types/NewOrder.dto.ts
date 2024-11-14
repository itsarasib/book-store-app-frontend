interface Address {
  street: string;
  city: string;
  country: string;
  state: string;
  zipcode: string;
}

export interface NewOrder {
  name: string;
  email: string;
  address: Address;
  phone: number;
  productIds: string[];
  totalPrices: number;
}
