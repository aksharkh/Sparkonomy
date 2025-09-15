import React from 'react';
import InvoiceItem from './InvoiceItem';


export default function InvoiceList({ items, onUpdate }) {
return (
<div className="space-y-3">
{items.map((inv, idx) => (
<InvoiceItem key={idx} invoice={inv} onUpdate={onUpdate} />
))}
</div>
);
}