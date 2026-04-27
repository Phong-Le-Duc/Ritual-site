import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/types";


export default function ProductList({ products }: { products: Product[] }) {
    return (
        <div className="grid gap-8 mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.length === 0 ? (
                <div>No products found.</div>
            ) : (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    );
}

