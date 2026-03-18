'use client';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { roleDistribution } from '../data/cyberbullyingStats';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-4 rounded-xl border border-purple-700/30 bg-[#0F0A1E]/95 backdrop-blur-xl shadow-2xl max-w-xs">
        <p className="font-semibold text-white mb-2">{data.role}</p>
        <p className="text-3xl font-bold mb-2" style={{ color: data.color }}>{data.percentage}%</p>
        <p className="text-xs text-purple-200/70 leading-relaxed mb-2">{data.description}</p>
        <p className="text-xs text-purple-500/40 font-mono">📚 {data.source}</p>
      </div>
    );
  }
  return null;
};

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, role }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight="700">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function RolePieChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={roleDistribution}
            cx="50%"
            cy="50%"
            outerRadius={120}
            innerRadius={60}
            dataKey="percentage"
            labelLine={false}
            label={CustomLabel}
            stroke="none"
          >
            {roleDistribution.map((entry, index) => (
              <Cell key={index} fill={entry.color} opacity={0.9} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex flex-col gap-3 mt-2">
        {roleDistribution.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0 mt-0.5"
              style={{ background: item.color }}
            />
            <div>
              <p className="text-sm font-medium text-white">{item.role} — <span style={{ color: item.color }}>{item.percentage}%</span></p>
              <p className="text-xs text-purple-300/50 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
