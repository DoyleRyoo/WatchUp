import { useEffect, useState, } from "react";
import { motion } from "framer-motion";
import Chart from "react-apexcharts";
import axios from "axios";

const periods = [
  "5d",
  "1mo",
  "3mo",
  "6mo",
  "1y",
  "5y",
];

export default function StockChart({ symbol, }) {
  const [period, setPeriod] = useState("1mo");

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!symbol) return;

    loadChart();
  }, [symbol, period]);

  const loadChart = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/market/chart/${symbol}?period=${period}`
    );

    setData(res.data);
  };

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      background:
        "transparent",
    },

    theme: {
      mode: "dark",
    },

    xaxis: {
      categories:
        data.map((item) => item.date),
    },
  };

  const series = [{
    name: symbol,
    data: data.map((item) => item.close),
  }];

  useEffect(() => {
    console.log(
      "selected symbol:",
      symbol
    );

    if (!symbol) return;

    loadChart();
  }, [symbol, period]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
    >
      <div className="flex gap-2 mb-4">
        {periods.map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p)}
            className={`px-3 py-1 rounded-lg ${
              period === p ? "bg-blue-500" : "bg-slate-800"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <Chart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </motion.div>
  );
}