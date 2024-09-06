import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../context/CartContext'
import { Product } from '../data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="border rounded-lg overflow-hidden">
      <Link href={`/product/${product.id}`} className="block relative w-full h-64">
        <Image 
          src={product.image} 
          alt={product.name} 
          layout="fill"
          objectFit="cover"
          className="cursor-pointer"
        />
      </Link>
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <button
          className="bg-blue-500 text-white w-full px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
