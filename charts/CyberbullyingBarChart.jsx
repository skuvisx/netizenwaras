'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { platformStats } from '../data/cyberbullyingStats';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = platformStats.find(p => p.platform === label);
    return (
      <div className="p-4 rounded-xl border border-purple-700/30 bg-[#0F0A1E]/95 backdrop-blur-xl shadow-2xl max-w-xs">
        <p className="font-semibold text-white mb-1">{data?.icon} {label}</p>
        <p className="text-purple-300 text-sm mb-2">
          <span className="text-2xl font-bold text-white">{payload[0].value}%</span> kasus cyberbullying
        </p>
        <p className="text-xs text-purple-400/60 leading-relaxed">{data?.description}</p>
        <p className="text-xs text-purple-500/40 mt-2 font-mono">📚 {data?.source}</p>
      </div>
    );
  }
  return null;
};

export default function CyberbullyingBarChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={platformStats}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          barCategoryGap="30%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(124,58,237,0.1)"
            vertical={false}
          />
          <XAxis
            dataKey="platform"
            tick={{ fill: '#A78BFA', fontSize: 12, fontFamily: 'Plus Jakarta Sans' }}
            axisLine={{ stroke: 'rgba(124,58,237,0.2)' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#7C6BC0', fontSize: 11, fontFamily: 'JetBrains Mono' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => `${v}%`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(124,58,237,0.07)' }} />
          <Bar dataKey="percentage" radius={[8, 8, 0, 0]} maxBarSize={72}>
            {platformStats.map((entry, index) => (
              <Cell key={index} fill={entry.color} opacity={0.85} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
