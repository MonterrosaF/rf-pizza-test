import { Product } from './product.interface';
export interface Store {
  id: number;
  name: string;
  address: string;
  description: string;
  products: Product[];
}
