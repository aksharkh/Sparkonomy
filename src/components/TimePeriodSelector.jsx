import React from 'react';


export default function TimePeriodSelector() {
return (
<div className="mt-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
<div className="flex flex-wrap gap-2 items-center">
<div className="text-xs text-gray-400 w-full sm:w-auto">Time Period</div>
<div className="flex gap-2">
<button className="px-3 py-1 rounded-full border text-sm text-gray-500">1Month</button>
<button className="px-3 py-1 rounded-full border bg-purple-50 text-purple-600 text-sm">3Months</button>
<button className="px-3 py-1 rounded-full border text-sm text-gray-500">1Year</button>
<button className="px-3 py-1 rounded-full border text-sm text-gray-500">Custom</button>
</div>
</div>
</div>
);
}