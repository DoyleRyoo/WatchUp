export default function SummaryCard({
  title,
  value,
  color = "text-white",
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-700
        bg-slate-800/50
        backdrop-blur
        p-5
      "
    >
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3
        className={`mt-2 text-2xl font-bold ${color}`}
      >
        {value}
      </h3>
    </div>
  );
}