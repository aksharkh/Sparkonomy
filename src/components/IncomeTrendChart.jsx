import React from 'react';


export default function IncomeTrendChart() {
return (
<div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
<div className="text-sm text-gray-500">Income Trend</div>
<div className="mt-3 text-xs text-gray-400">Your monthly income and growth for the last 6 months.</div>


<div className="mt-4 w-full h-48 flex items-center justify-center">
<svg viewBox="0 0 360 160" className="w-full h-full">
<g stroke="#f0f0f0">
<line x1="0" y1="20" x2="360" y2="20" />
<line x1="0" y1="50" x2="360" y2="50" />
<line x1="0" y1="80" x2="360" y2="80" />
<line x1="0" y1="110" x2="360" y2="110" />
<line x1="0" y1="140" x2="360" y2="140" />
</g>


<g fill="#8b5cf6" opacity="0.95">
<rect x="18" y="60" width="32" height="80" rx="6" />
<rect x="70" y="40" width="32" height="100" rx="6" />
<rect x="122" y="20" width="32" height="120" rx="6" />
<rect x="174" y="80" width="32" height="60" rx="6" />
<rect x="226" y="34" width="32" height="106" rx="6" />
<rect x="278" y="18" width="32" height="122" rx="6" />
</g>


<polyline points="34,100 86,70 138,48 190,110 242,60 294,140" fill="none" stroke="#7c2d12" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />


<g fontSize="10" fill="#6b7280">
<text x="18" y="155">Jan</text>
<text x="70" y="155">Feb</text>
<text x="122" y="155">Mar</text>
<text x="174" y="155">Apr</text>
<text x="226" y="155">May</text>
<text x="278" y="155">Jun</text>
</g>
</svg>
</div>


<div className="mt-3 flex items-center gap-3 text-xs">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-purple-500 inline-block"></span> income</div>
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full border border-red-400 inline-block"></span> momGrowth</div>
</div>
</div>
);
}