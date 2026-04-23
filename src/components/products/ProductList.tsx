import ProductCard from "./ProductCard";
import { Product } from "@/types";


export default function ProductList({ products }: { products: Product[] }) {
    return (
        <div style={{ display: "flex", gap: "2rem", marginTop: 24, flexWrap: "wrap" }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}