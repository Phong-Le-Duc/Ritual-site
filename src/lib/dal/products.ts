
"use server";
// import { cookies } from "next/headers";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}


export async function getAllProducts(): Promise<Product[]> {
    try {
        const res = await fetch("http://localhost:4000/api/products");
        if (!res.ok) {
            throw new Error("Something went wrong");
        }

        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data: Product[] = await res.json();
            console.log("getAllProducts data:", data);
            return data;
        }

        throw new Error("Not JSON");
    } catch (error) {
        console.log("getAllProducts error:", error);
        return [];
    }
}