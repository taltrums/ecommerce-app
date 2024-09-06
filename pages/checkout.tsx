import { useState } from 'react'
import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js'
import { useCart } from '../context/CartContext'

// Replace with your Stripe publishable key
const stripePromise = loadStripe('pk_test_51Pw5YrRqQXNWtCgu2szE1Vah8TcIMAAxdLYvbzRHuL1DRxhLztPyvTynT2kWrwJ3qP9bGkGnnMw98fPKqqK1P8yF009B24X0sA')

export default function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { cart } = useCart()

  const handleCheckout = async () => {
    setIsLoading(true)

    try {
      const stripe = await stripePromise

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const session = await response.json()

      const result = await stripe!.redirectToCheckout({
        sessionId: session.id,
      })

      if (result.error) {
        alert(result.error.message)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      {cart.map((item) => (
        <div key={item.product.id} className="flex justify-between items-center mb-4">
          <span>{item.product.name} x {item.quantity}</span>
          <span>${(item.product.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">Total:</span>
          <span className="font-bold">
            ${cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}
          </span>
        </div>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        onClick={handleCheckout}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Proceed to Payment'}
      </button>
    </div>
  )
}
