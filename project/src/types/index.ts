export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  category: string;
  image: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  school?: string;
  role: 'individual' | 'school_admin';
}