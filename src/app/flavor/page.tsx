
import RitHeader1 from "@/components/header";
// import Hero from "@/components/hero";
import { getAllProducts } from "@/lib/dal/products";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

export default async function page() {
    const products: Product[] = await getAllProducts();

    return (
        <>

            <RitHeader1 />
            {/* <Hero /> */}


            <div style={{ display: "flex", gap: "2rem", marginTop: 24, flexWrap: "wrap" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, width: 220 }}>
                        <img src={product.image} alt={product.name} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 4 }} />
                        <h2 style={{ margin: "12px 0 4px 0" }}>{product.name}</h2>
                        <p style={{ margin: 0 }}>{product.description}</p>
                        <div style={{ marginTop: 8, fontWeight: "bold" }}>${product.price.toFixed(2)}</div>
                    </div>
                ))}
            </div>
        </>
    );
}