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
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Denim Jeans',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1519235014485-3a25f3ce0b30?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Sneakers',
    price: 79.99,
    image: 'https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Backpack',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1480859786001-3f3bfdf20f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFja3BhY2t8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 5,
    name: 'Sunglasses',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 6,
    name: 'Watch',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2F0Y2h8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 7,
    name: 'Hoodie',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1542406775-ade58c52d2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 8,
    name: 'Dress',
    price: 69.99,
    image: 'https://plus.unsplash.com/premium_photo-1673384389447-5a4364e7c93b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHJlc3N8ZW58MHx8MHx8fDA%3D',
  },
]
