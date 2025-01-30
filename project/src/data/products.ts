import type { Product } from '../types';

export const allProducts: Product[] = [
  {
    id: "1",
    name: "Classic School Blazer",
    description: "Premium wool blend blazer with school crest option",
    price: 899.99,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black"],
    category: "Blazers",
    image: "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?auto=format&fit=crop&w=800",
    stock: 100
  },
  {
    id: "2",
    name: "School Shirt",
    description: "Comfortable cotton blend short-sleeve shirt",
    price: 249.99,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Light Blue"],
    category: "Shirts",
    image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?auto=format&fit=crop&w=800",
    stock: 200
  },
  {
    id: "3",
    name: "Pleated Skirt",
    description: "Classic pleated skirt in durable fabric",
    price: 349.99,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Gray", "Black"],
    category: "Skirts",
    image: "https://images.unsplash.com/photo-1585914924626-15adac1e6402?auto=format&fit=crop&w=800",
    stock: 150
  },
  {
    id: "4",
    name: "School Trousers",
    description: "Durable formal trousers with adjustable waist",
    price: 399.99,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy"],
    category: "Trousers",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800",
    stock: 200
  },
  {
    id: "5",
    name: "School Shoes",
    description: "Comfortable leather school shoes",
    price: 599.99,
    sizes: ["UK3", "UK4", "UK5", "UK6", "UK7", "UK8", "UK9", "UK10"],
    colors: ["Black"],
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800",
    stock: 150
  },
  {
    id: "6",
    name: "V-Neck Jersey",
    description: "Warm wool blend V-neck school jersey",
    price: 449.99,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Gray"],
    category: "Jerseys",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800",
    stock: 120
  },
  {
    id: "7",
    name: "School Socks",
    description: "Cotton-rich knee-high school socks",
    price: 79.99,
    sizes: ["S", "M", "L"],
    colors: ["Navy", "Gray", "White"],
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800",
    stock: 300
  },
  {
    id: "8",
    name: "School Tie",
    description: "Classic striped school tie",
    price: 149.99,
    sizes: ["One Size"],
    colors: ["Navy/Red", "Navy/Gold", "Black/Red"],
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=800",
    stock: 200
  }
];

export const featuredProducts = allProducts.slice(0, 3);