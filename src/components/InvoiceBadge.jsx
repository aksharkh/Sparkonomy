import React from 'react';


export default function InvoiceBadge({ status }) {
const mapping = {
Paid: 'bg-green-100 text-green-700',
Unpaid: 'bg-gray-100 text-gray-600',
Disputed: 'bg-red-100 text-red-600',
'Partially Paid': 'bg-yellow-100 text-yellow-700',
Overdue: 'bg-red-100 text-red-600',
Awaited: 'bg-yellow-50 text-yellow-700',
Draft: 'bg-gray-50 text-gray-600',
};
return <span className={`px-3 py-1 rounded-full text-xs font-medium ${mapping[status] || 'bg-gray-100 text-gray-600'}`}>{status}</span>;
}