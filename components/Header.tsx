import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { cart } = useCart()

  return (
    <header className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          E-commerce Store
        </Link>
        <Link href="/cart" className="hover:underline">
          Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </Link>
      </div>
    </header>
  )
}
