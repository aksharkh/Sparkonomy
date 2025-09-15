import React from 'react';
import InvoiceBadge from './InvoiceBadge';


export default function InvoiceItem({ invoice, onUpdate }) {
return (
// wrapper div (update className)
<div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-center justify-between gap-4 min-w-0">
  <div className="min-w-0">
    <div className="text-sm font-medium text-gray-700 truncate">{invoice.title}</div>
    <div className="text-xs text-gray-400 truncate">₹{invoice.amount}, Due: {invoice.due}</div>
  </div>
  <div className="flex items-center gap-3 flex-shrink-0">
    <InvoiceBadge status={invoice.status} />
    <button onClick={() => onUpdate(invoice)} className="hidden sm:inline-block px-3 py-2 bg-purple-600 text-white rounded-lg text-sm">Update Status</button>
  </div>
</div>

);
}