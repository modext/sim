"use client";

import React from "react";
import ProductTable from "../components/ProductTable";
import DateRangeAndStaffForm from "../components/DateRangeAndStaffForm";
import Simulation from "../components/SimulationButton";

const Home = () => {
  return (
    <div>
      <h1>Commission Plan Simulator</h1>
      <ProductTable />
      <DateRangeAndStaffForm />
      <Simulation />
    </div>
  );
};

export default Home;
