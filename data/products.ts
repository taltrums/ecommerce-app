export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 19.99,
    image: 'https://source.unsplash.com/featured/?tshirt',
  },
  {
    id: 2,
    name: 'Denim Jeans',
    price: 49.99,
    image: 'https://source.unsplash.com/featured/?jeans',
  },
  {
    id: 3,
    name: 'Sneakers',
    price: 79.99,
    image: 'https://source.unsplash.com/featured/?sneakers',
  },
  {
    id: 4,
    name: 'Backpack',
    price: 39.99,
    image: 'https://source.unsplash.com/featured/?backpack',
  },
  {
    id: 5,
    name: 'Sunglasses',
    price: 29.99,
    image: 'https://source.unsplash.com/featured/?sunglasses',
  },
  {
    id: 6,
    name: 'Watch',
    price: 99.99,
    image: 'https://source.unsplash.com/featured/?watch',
  },
  {
    id: 7,
    name: 'Hoodie',
    price: 44.99,
    image: 'https://source.unsplash.com/featured/?hoodie',
  },
  {
    id: 8,
    name: 'Dress',
    price: 69.99,
    image: 'https://source.unsplash.com/featured/?dress',
  },
]
