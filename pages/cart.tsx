import { useCart } from '../context/CartContext'
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="w-full mb-8">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Product</th>
                <th className="text-left py-2">Price</th>
                <th className="text-left py-2">Quantity</th>
                <th className="text-left py-2">Total</th>
                <th className="text-left py-2"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.product.id} className="border-b">
                  <td className="py-2">{item.product.name}</td>
                  <td className="py-2">${item.product.price.toFixed(2)}</td>
                  <td className="py-2">
                    <button onClick={() => decreaseQuantity(item.product.id.toString())}>-</button>
                    {item.quantity}
                    <button onClick={() => increaseQuantity(item.product.id.toString())}>+</button>
                  </td>
                  <td className="py-2">${(item.product.price * item.quantity).toFixed(2)}</td>
                  <td className="py-2">
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                      onClick={() => removeFromCart(item.product.id.toString())}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mb-8">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={clearCart}
            >
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
