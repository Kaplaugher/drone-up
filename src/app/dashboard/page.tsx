import React from "react";

import Data from "@/components/Data";

async function DashboardPage() {
  return (
    <div>
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Dashboard
        </h3>
      </div>
      <Data />
    </div>
  );
}

export default DashboardPage;
