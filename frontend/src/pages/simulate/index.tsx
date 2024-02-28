import React, { useState, useEffect } from "react";
import { Card, Select, DataTable, Button, DatePicker } from "@shopify/polaris";
import axios from "axios";
import routes from "../../lib/routes";
import DateRangePicker from "../../lib/bundles/DateRangePicker";

interface StaffMember {
  id: string;
  name: string;
}

interface Order {
  date: string;
  totalCommission: number;
}

interface CommissionData {
  date: string;
  ordersCount: number;
  sumCommissions: number;
}

const CommissionSimulationComponent: React.FC = () => {
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date }>({
    start: new Date(),
    end: new Date(),
  });
  const [staffMembers, setStaffMembers] = useState<
    Array<{ label: string; value: string }>
  >([]);
  const [selectedStaffMember, setSelectedStaffMember] = useState<string>("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [commissionsData, setCommissionsData] = useState<
    Array<Array<string | number>>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStaffMembers = async () => {
      try {
        const response = await axios.get<StaffMember[]>(routes.api.staff);
        setStaffMembers(
          response.data.map((member) => ({
            label: member.name,
            value: member.id,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch staff members:", error);
      }
    };

    fetchStaffMembers();
  }, []);

  const simulateCommissions = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get<Order[]>(routes.api.orders, {
        params: {
          startDate: dateRange.start.toISOString(),
          endDate: dateRange.end.toISOString(),
          staffMemberId: selectedStaffMember,
        },
      });
      setOrders(response.data);
      calculateCommissions(response.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateCommissions = (orders: Order[]) => {
    let dailyCommissions: { [key: string]: CommissionData } = {};
    orders.forEach((order) => {
      const date = new Date(order.date).toLocaleDateString();
      if (!dailyCommissions[date]) {
        dailyCommissions[date] = { date, ordersCount: 0, sumCommissions: 0 };
      }
      dailyCommissions[date].ordersCount += 1;
      dailyCommissions[date].sumCommissions += order.totalCommission;
    });

    setCommissionsData(
      Object.values(
        dailyCommissions
      ).map(({ date, ordersCount, sumCommissions }) => [
        date,
        ordersCount,
        sumCommissions,
      ])
    );
  };

  return (
    <Card roundedAbove="sm">
      <div style={{ marginBottom: "20px" }}>
        {/* <DatePicker
          month={dateRange.start.getMonth()}
          year={dateRange.start.getFullYear()}
          onChange={setDateRange}
          selected={dateRange}
          allowRange
        /> */}
        <DateRangePicker />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Select
          label="Staff Member"
          options={staffMembers}
          onChange={setSelectedStaffMember}
          value={selectedStaffMember}
        />
      </div>
      <Button onClick={simulateCommissions} loading={isLoading}>
        Simulate Commissions
      </Button>
      {commissionsData.length > 0 && (
        <DataTable
          columnContentTypes={["text", "numeric", "numeric"]}
          headings={["Date", "Orders Count", "Sum Commissions"]}
          rows={commissionsData}
        />
      )}
    </Card>
  );
};

export default CommissionSimulationComponent;
