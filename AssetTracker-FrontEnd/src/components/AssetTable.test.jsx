import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AssetTable from "./AssetTable";

describe("AssetTable", () => {
  it("renders the table with data correctly", () => {
    const mockResponse = [
      {
        id: 1,
        name: "Laptop",
        pricePaid: 1200.0,
        datePurchased: "2021-01-01",
        ownerFirstName: "Jane",
        ownerLastName: "Doe",
      },
    ];

    render(
      <AssetTable
        response={mockResponse}
        setShowDetails={() => {}}
        report="default"
      />
    );

    // Check for table presence
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    // Check for specific data rendering
    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("1200.00")).toBeInTheDocument();
  });
});
