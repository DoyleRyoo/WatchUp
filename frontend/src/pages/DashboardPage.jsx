import { useEffect, useState } from "react";

import HoldingsTable from "../components/table/HoldingsTable";

import SummaryCards from "../components/dashboard/SummaryCards";

import EmptyState from "../components/dashboard/EmptyState";

import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";

import { stockApi } from "../services/api/stockApi";

export default function DashboardPage() {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHoldings = async () => {
    try {
      const data = await stockApi.getHoldings();

      setHoldings(
        Array.isArray(data) ? data : []
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHoldings();
  }, []);

  const handleDelete = async (id) => {
    await stockApi.deleteHolding(id);

    loadHoldings();
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-6">
      <SummaryCards
        holdings={holdings}
      />

      {holdings.length === 0 ? (
        <EmptyState />
      ) : (
        <HoldingsTable
          holdings={holdings}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}