export default function HoldingsTable({ holdings, onDelete, onSelect, }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10 text-gray-400">
            <th className="p-4 text-left">종목</th>
            <th className="p-4">평균단가</th>
            <th className="p-4">수량</th>
            <th className="p-4">관리</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(holdings) && holdings.map((item) => (
            <tr key={item.id} className="border-b border-white/5">
              <td className="p-4">
                <button onClick={ () => onSelect(item.stockCode) }>
                  {item.stockCode}
                </button>
              </td>

              <td className="p-4 text-center">${item.averagePrice}</td>

              <td className="p-4 text-center">{item.quantity}</td>

              <td className="p-4 text-center">
                <button
                  onClick={() => onDelete(item.id)}
                  className="rounded-lg bg-red-500 px-3 py-1"
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}