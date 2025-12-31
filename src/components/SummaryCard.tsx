interface SummaryCardProps {
  label: string;
  value: string | number;
  valueColor?: string;
}

export function SummaryCard({ label, value, valueColor = "text-gray-900" }: SummaryCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500 uppercase font-bold">{label}</p>
      <h3 className={`text-3xl font-bold mt-2 ${valueColor}`}>{value}</h3>
    </div>
  );
}