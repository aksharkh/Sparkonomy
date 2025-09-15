import React from 'react';


export default function StatCard({ title, value }) {
return (
<div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
<div className="text-sm text-gray-500">{title}</div>
<div className="mt-2 text-xl font-bold text-purple-700">{value}</div>
</div>
);
}