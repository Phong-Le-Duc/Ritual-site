import Image from "next/image";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border border-gray-300 rounded-lg p-4 w-full">
            <Image
                src={product.image}
                alt={product.name}
                width={640}
                height={240}
                unoptimized
                sizes="100vw"
                className="w-full h-30 object-cover rounded"
            />
            <h2 className="mt-3 mb-1 text-lg font-semibold">{product.name}</h2>
            <p className="m-0">{product.description}</p>
            <div className="mt-2 font-bold">${product.price.toFixed(2)}</div>
        </div>
    );
}