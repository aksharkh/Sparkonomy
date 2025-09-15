import React from 'react';


export default function CreateInvoiceCard() {
return (
<div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full border-2 border-purple-200 flex items-center justify-center text-purple-600 text-2xl">+</div>
<div>
<h2 className="text-xl font-semibold text-purple-700">Create New Invoice</h2>
<p className="text-sm text-gray-400">Start by creating and sending new invoice</p>
</div>
</div>
<div className="text-sm text-purple-600 hidden sm:block">Or Upload an existing invoice and set payment reminder</div>
</div>
</div>
);
}