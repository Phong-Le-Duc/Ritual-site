import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

// 4. Create a mock product to use in the test
const mockProduct: Product = {
    id: 1,
    name: "Test Product",
    description: "A great product",
    price: 19.99,
    image: "/images/test.jpg",
    // Add other fields if your Product type has more
};


// 5. Write a test case
test("renders product details", () => {
    // 6. Render the ProductCard with the mock product
    render(<ProductCard product={mockProduct} />);

    // 7. Assert that the product name is displayed
    expect(screen.getByText("Test Product")).toBeInTheDocument();

    // 8. Assert that the product description is displayed
    expect(screen.getByText("A great product")).toBeInTheDocument();

    // 9. Assert that the price is displayed correctly
    expect(screen.getByText("$19.99")).toBeInTheDocument();

    // 10. Assert that the image is rendered with the correct alt text and src
    expect(screen.getByAltText("Test Product")).toHaveAttribute("src", "/images/test.jpg");
});