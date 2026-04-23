import RitHeader1 from "@/components/header";
// import Hero from "@/components/hero";
import { getAllProducts } from "@/lib/dal/products";
import ProductList from "@/components/products/ProductList";
import { Product } from "@/types";
import FlavorHero from "@/components/hero/FlavorHero";




export default async function page() {
    const products: Product[] = await getAllProducts();

    return (
        <>
            <RitHeader1 />

            <FlavorHero />

            <section className="px-6">
                <ProductList products={products} />
            </section>
        </>
    );
}