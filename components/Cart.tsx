import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative">
      <Link href="/cart" passHref>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Cart ({totalItems})
        </button>
      </Link>
    </div>
  );
}
