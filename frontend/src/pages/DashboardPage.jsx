import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DashboardLayout from "../layouts/DashboardLayout";

import HoldingsTable from "../components/table/HoldingsTable";

import SummaryCards from "../components/dashboard/SummaryCards";

import EmptyState from "../components/dashboard/EmptyState";

import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";

import { stockApi } from "../services/api/stockApi";

import socket from "../services/socket/socket";

import StockChart from "../components/chart/StockChart";

export default function DashboardPage() {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

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

  const handleMarketUpdate = (marketData) => {
    setHoldings((prev) =>
      prev.map((holding) => {
        const market = marketData.find((item) =>
          item.symbol === holding.stockCode
        );

        if (!market) {
          return holding;
        }

        return {
          ...holding,
          currentPrice: market.currentPrice,
        };
      })
    );
  };

  socket.on("market:update", handleMarketUpdate);

  return () => {
    socket.off("market:update", handleMarketUpdate);
  };
}, []);

  const handleDelete = async (id) => {
    await stockApi.deleteHolding(id);

    loadHoldings();
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <DashboardLayout>
      <motion.div
        className="space-y-6"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <SummaryCards
          holdings={holdings}
        />

        {holdings.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <HoldingsTable
              holdings={holdings}
              onDelete={handleDelete}
              onSelect={setSelectedSymbol}
            />
            {
              selectedSymbol && (<StockChart symbol={ selectedSymbol } />)
            }
          </>
        )}
      </motion.div>
    </DashboardLayout>
  );
}