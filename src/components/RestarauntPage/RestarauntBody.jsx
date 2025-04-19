import React, { useState } from "react";

import AllDetails from "./AllDetails";

import RestarauntCategories from "./RestarauntCategories";

export default function RestarauntBody() {
  return (
    <div className="max-w-7xl mx-auto container min-md:p-10 max-md:p-2 grid grid-cols-12  gap-3">
      <AllDetails />
      <RestarauntCategories />
    </div>
  );
}
