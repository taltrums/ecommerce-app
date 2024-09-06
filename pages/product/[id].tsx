import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useCart } from '../../context/CartContext'
import { Product, products } from '../../data/products'
import Image from 'next/image'

interface ProductPageProps {
  product: Product
}

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter()
  const { addToCart } = useCart()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="space-y-8">
        <Image 
          src={product.image} 
          alt={product.name} 
          width={600} 
          height={600} 
          className="w-full"
        />
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find((p) => p.id.toString() === params?.id)

  if (!product) {
    return { notFound: true }
  }

  return { props: { product } }
}
