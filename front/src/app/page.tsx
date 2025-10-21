// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans flex flex-col gap-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Welcome to Your Store
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover our latest collection of quality products.
        </p>
        <Link
          href="/products"
          className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium hover:opacity-90"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Product Card Example */}
          {[1, 2, 3].map((id) => (
            <div key={id} className="border rounded-lg p-4 hover:shadow-md transition">
              <Image
                src={`/products/product-${id}.jpg`}
                alt={`Product ${id}`}
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded"
              />
              <h3 className="mt-4 font-semibold text-lg">Product Name {id}</h3>
              <p className="text-sm text-gray-500 mb-2">$49.99</p>
              <Link
                href={`/products/product-${id}`}
                className="text-sm text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
