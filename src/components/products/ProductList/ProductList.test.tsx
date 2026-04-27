import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { Product } from "@/types";

const mockProducts: Product[] = [
    { id: 1, name: "Product 1", description: "Desc 1", price: 10, image: "/img1.jpg" },
    { id: 2, name: "Product 2", description: "Desc 2", price: 20, image: "/img2.jpg" },
];

test("renders a ProductCard for each product", () => {
    render(<ProductList products={mockProducts} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
});

test("renders nothing when products is empty", () => {
    render(<ProductList products={[]} />);
    // Check that a known product name is not in the document
    expect(screen.queryByText("Product 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
});

test("shows a message when products is empty", () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText("No products found.")).toBeInTheDocument();
});