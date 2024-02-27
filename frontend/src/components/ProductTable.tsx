/* eslint-disable react/jsx-key */
// components/ProductTable.tsx
"use client"
import React from "react";
import { DataTable, TextField } from "@shopify/polaris";

const ProductTable: React.FC = () => {
  return (
    <div>
      <h2>Product Table</h2>
      <DataTable
        columnContentTypes={["text", "text", "numeric", "numeric"]}
        headings={["Product name", "Category", "Price", "Commission percent"]}
        rows={[
          [
            // eslint-disable-next-line react/jsx-key
            <TextField label="Basketball" autoComplete="yes" />,
            // eslint-disable-next-line react/jsx-key
            <TextField label="Sports" autoComplete="yes" />,
            "$30",
            <TextField type="number" autoComplete="yes" label />,
          ],
          [
            <TextField label="Football" autoComplete="yes" />,
            <TextField label="Sports" autoComplete="yes" />,
            "$20",
            <TextField type="number" autoComplete="yes" label />,
          ],
          // Add more rows for other products
        ]}
      />
    </div>
  );
};

export default ProductTable;
