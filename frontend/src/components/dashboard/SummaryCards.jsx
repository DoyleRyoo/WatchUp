import SummaryCard from "./SummaryCard";

export default function SummaryCards({
  holdings,
}) {
  const totalValue = holdings.reduce(
    (sum, item) =>
      sum +
      item.averagePrice * item.quantity,
    0
  );

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-4
      "
    >
      <SummaryCard
        title="총 자산"
        value={`$${totalValue.toFixed(2)}`}
      />

      <SummaryCard
        title="보유 종목"
        value={holdings.length}
      />

      <SummaryCard
        title="평가손익"
        value="$0"
        color="text-green-400"
      />

      <SummaryCard
        title="수익률"
        value="0%"
        color="text-green-400"
      />
    </div>
  );
}