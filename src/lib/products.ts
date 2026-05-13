export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  mrp: number;
  discount: number;
  badge?: "NEW" | "SALE";
  image: string;
};

export const products: Product[] = [
  { id: "1", name: "Floral Wrap Dress", brand: "Rhodium", price: 799, mrp: 1299, discount: 38, badge: "SALE", image: "https://picsum.photos/seed/prod1/300/400" },
  { id: "2", name: "Slim Fit Chinos", brand: "Rhodium", price: 999, mrp: 1499, discount: 33, badge: "NEW", image: "https://picsum.photos/seed/prod2/300/400" },
  { id: "3", name: "Printed Kurta", brand: "Rhodium", price: 649, mrp: 999, discount: 35, badge: "SALE", image: "https://picsum.photos/seed/prod3/300/400" },
  { id: "4", name: "Casual T-Shirt", brand: "Rhodium", price: 399, mrp: 599, discount: 33, badge: "NEW", image: "https://picsum.photos/seed/prod4/300/400" },
  { id: "5", name: "A-Line Skirt", brand: "Rhodium", price: 549, mrp: 899, discount: 39, badge: "SALE", image: "https://picsum.photos/seed/prod5/300/400" },
  { id: "6", name: "Linen Shirt", brand: "Rhodium", price: 1199, mrp: 1799, discount: 33, image: "https://picsum.photos/seed/prod6/300/400" },
  { id: "7", name: "Kids Dungaree", brand: "Rhodium", price: 499, mrp: 799, discount: 37, badge: "NEW", image: "https://picsum.photos/seed/prod7/300/400" },
  { id: "8", name: "Night Suit Set", brand: "Rhodium", price: 699, mrp: 999, discount: 30, badge: "SALE", image: "https://picsum.photos/seed/prod8/300/400" },
  { id: "9", name: "Denim Jacket", brand: "Rhodium", price: 1499, mrp: 2299, discount: 35, badge: "NEW", image: "https://picsum.photos/seed/prod9/300/400" },
  { id: "10", name: "Palazzo Pants", brand: "Rhodium", price: 599, mrp: 899, discount: 33, image: "https://picsum.photos/seed/prod10/300/400" },
  { id: "11", name: "Sport Track Pant", brand: "Rhodium", price: 799, mrp: 1199, discount: 33, badge: "NEW", image: "https://picsum.photos/seed/prod11/300/400" },
  { id: "12", name: "Ethnic Co-ord Set", brand: "Rhodium", price: 1299, mrp: 1999, discount: 35, badge: "SALE", image: "https://picsum.photos/seed/prod12/300/400" },
];

export const getProduct = (id: string) => products.find((p) => p.id === id) ?? products[0];
