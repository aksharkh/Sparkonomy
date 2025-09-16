import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Line,
} from "recharts";

const CombinedChart = ({ data, barKey = "income", lineKey = "momGrowth" }) => {
  const legendPayload = [
    { value: "income", type: "square", color: "#9f7aea" },
    { value: "momGrowth", type: "line", color: "#7f1d1d" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4">
      <h3 className="text-lg font-semibold text-gray-600 mb-1">Income Trend</h3>
      <p className="text-sm text-gray-400 mb-3">
        Your monthly income and growth for the last 6 months.
      </p>

      <div style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 10, right: 20, left: 10, bottom: 40 }} 
          >
            <CartesianGrid stroke="#f3f2f8" vertical={false} />

            <XAxis
              dataKey="month"
              tick={{ fill: "#6b7280", fontSize: 13 }}
              axisLine={{ stroke: "#efe9fb" }}
              padding={{ left: 0, right: 0 }}
            />

            <YAxis
              yAxisId="left"
              tickFormatter={(value) => `$${Math.round(value / 1000)}k`}
              tick={{ fill: "#6b7280", fontSize: 13 }}
              axisLine={{ stroke: "#efe9fb" }}
              width={60}
              domain={[0, "dataMax + dataMax * 0.15"]}
            />

            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(value) => `${value}%`}
              tick={{ fill: "#6b7280", fontSize: 13 }}
              axisLine={{ stroke: "#eddede" }}
              width={50}
              domain={["dataMin - 10", "dataMax + 10"]}
            />

            <Tooltip
              formatter={(value, name) => {
                if (name === lineKey) return [`${value}%`, "Growth"];
                return [`$${value.toLocaleString()}`, "Income"];
              }}
              labelFormatter={(label) => `Month: ${label}`}
            />

            <Legend
              payload={legendPayload}
              verticalAlign="bottom"
              align="center" 
              wrapperStyle={{ marginTop: 12 }}
            />

            <Bar
              yAxisId="left"
              dataKey={barKey}
              name="Income"
              barSize={24} 
              barCategoryGap="15%"
              radius={[6, 6, 0, 0]}
              fill="#9f7aea"
            />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey={lineKey}
              name="Growth"
              stroke="#7f1d1d"
              strokeWidth={3}
              dot={{ r: 4, fill: "#ffffff", stroke: "#7f1d1d", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CombinedChart;
