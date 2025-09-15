import React from 'react';


export default function Header({ onBack }) {
return (
<header className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<button
onClick={onBack}
aria-label="back"
className="p-2 rounded-full hover:bg-gray-100 md:hidden"
>
{/* simple icon */}
<span className="text-lg">◀</span>
</button>
<h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
</div>


<div className="flex items-center gap-3">
<img
src="https://i.pravatar.cc/300"
alt="avatar"
className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
/>
</div>
</header>
);
}