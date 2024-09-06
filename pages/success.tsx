import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
      <p className="mb-8">Your order has been successfully processed.</p>
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Continue Shopping
      </Link>
    </div>
  )
}
