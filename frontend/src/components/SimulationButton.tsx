import React, { useState } from "react";
import { Button, DataTable } from "@shopify/polaris";

// Mock orders data
const orders = [
  {
    id: "1",
    date: new Date("2024-02-01"),
    products: [
      { name: "Basketball", price: 30 },
      { name: "Football", price: 20 },
    ],
  },
  {
    id: "2",
    date: new Date("2024-02-01"),
    products: [
      { name: "Basketball", price: 30 },
      { name: "Football", price: 20 },
    ],
  },
  {
    id: "3",
    date: new Date("2024-02-02"),
    products: [
      { name: "Basketball", price: 30 },
      { name: "Football", price: 20 },
    ],
  },
];

// Calculate total commissions for the staff member
const calculateCommissions = (orders: any[]) => {
  const commissionPlan = {
    Basketball: 10, // 10% commission for Basketball
    Football: 5,    // 5% commission for Football
    // Add commission percentages for other products
  };

  const dailyCommissions: { day: string; ordersCount: number; totalCommissions: number }[] = [];

  orders.forEach((order) => {
    const day = order.date.toISOString().split("T")[0]; // Extract day from date

    let totalCommission = 0;
    order.products.forEach((product: any) => {
      if (commissionPlan.hasOwnProperty(product.name)) {
        const commissionPercent = commissionPlan[product.name];
        totalCommission += (product.price * commissionPercent) / 100;
      }
    });

    const existingDayIndex = dailyCommissions.findIndex((item) => item.day === day);
    if (existingDayIndex !== -1) {
      dailyCommissions[existingDayIndex].ordersCount += 1;
      dailyCommissions[existingDayIndex].totalCommissions += totalCommission;
    } else {
      dailyCommissions.push({ day, ordersCount: 1, totalCommissions: totalCommission });
    }
  });

  return dailyCommissions;
};

const SimulationButton: React.FC = () => {
  const [simulationData, setSimulationData] = useState<any>(null); // You may need to adjust the type according to your simulation data structure

  const handleSimulationClick = async () => {
    try {
      // Mock fetchOrders function (replace with actual API call)
      // const orders = await fetchOrders(); 

      // Calculate total commissions for the staff member
      const commissions = calculateCommissions(orders);

      // Update state with simulation data
      setSimulationData(commissions);
    } catch (error) {
      console.error("Error occurred during simulation:", error);
      // Handle error, display error message to user, etc.
    }
  };

  return (
    <div>
      <Button onClick={handleSimulationClick}>Simulate</Button>
      {simulationData && (
        <div>
          <h2>Simulation Results</h2>
          <DataTable
            columnContentTypes={["text", "numeric", "numeric"]}
            headings={["Day", "Orders Count", "Total Commissions"]}
            rows={simulationData.map((item: any) => [item.day, item.ordersCount, item.totalCommissions.toFixed(2)])}
          />
        </div>
      )}
    </div>
  );
};

export default SimulationButton;
