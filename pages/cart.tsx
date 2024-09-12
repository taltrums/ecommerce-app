import withAuth from '../components/withAuth';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

function CartPage() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="mb-8">
            {cart.map((item) => (
              <li key={item.product.id} className="flex justify-between items-center border-b py-2">
                <span>{item.product.name} - ${item.product.price.toFixed(2)}</span>
                <div>
                  <button onClick={() => decreaseQuantity(item.product.id)} className="px-2">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.product.id)} className="px-2">+</button>
                  <button onClick={() => removeFromCart(item.product.id)} className="ml-4 text-red-500">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-8">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Clear Cart
            </button>
          </div>
          <div className="flex justify-between items-center">
            <Link href="/" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Continue Shopping
            </Link>
            <Link href="/checkout" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default withAuth(CartPage);
