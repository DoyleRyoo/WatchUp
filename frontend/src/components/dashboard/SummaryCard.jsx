import { motion } from "framer-motion";

export default function SummaryCard({ title, value, color = "text-white", }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
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
    </motion.div>
  );
}