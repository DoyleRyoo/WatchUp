export default function EmptyState() {
  return (
    <div
      className="
        rounded-2xl
        border border-dashed
        border-slate-700
        p-10
        text-center
      "
    >
      <h3 className="text-xl font-semibold">
        보유 종목이 없습니다
      </h3>

      <p className="mt-2 text-slate-400">
        첫 번째 종목을 추가해보세요.
      </p>
    </div>
  );
}