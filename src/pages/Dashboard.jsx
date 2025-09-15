// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import CreateInvoiceCard from '../components/CreateInvoiceCard';
import TimePeriodSelector from '../components/TimePeriodSelector';
import StatCard from '../components/StatCard';
import IncomeTrendChart from '../components/IncomeTrendChart';
import InvoiceList from '../components/InvoiceList';

export default function Dashboard() {
  const [invoices, setInvoices] = useState([
    { title: 'Client Name', amount: '1,25,000', due: '2024-06-15', status: 'Unpaid' },
    { title: 'Client Name', amount: '1,25,000', due: '2024-06-15', status: 'Disputed' },
    { title: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Paid' },
    { title: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Paid' },
    { title: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Partially Paid' },
    { title: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Paid' },
    { title: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Overdue' },
    { title: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Awaited' },
    { title: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Draft' },
    { title: 'Income Trend', amount: '1,25,000', due: '2024-06-15', status: 'Paid' },
  ]);

  const handleUpdate = (invoice) => {
    setInvoices((prev) =>
      prev.map((inv) => (inv === invoice ? { ...inv, status: inv.status === 'Paid' ? 'Unpaid' : 'Paid' } : inv))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-4">
      {/* wider max width for laptop */}
      <div className="max-w-7xl mx-auto">
        <Header onBack={() => window.history.back()} />

        {/* outer grid: mobile 1 col, desktop 4 cols (3 main + 1 sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* MAIN (left) */}
          <main className="lg:col-span-3 space-y-6">
            {/* top card */}
            <CreateInvoiceCard />

            {/* Time selector + summary cards (arranged responsively) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {/* Time selector spans 2 columns on md+ */}
              <div className="md:col-span-2">
                <TimePeriodSelector />
              </div>

              {/* compact summary block on the right */}
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">Total Earnings</div>
                  <div className="mt-2 text-xl font-bold text-purple-700">₹1,25,000</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-500">Payment Awaited</div>
                    <div className="mt-2 text-lg font-semibold text-purple-700">₹25,000</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="text-sm text-gray-500">Payment Overdue</div>
                    <div className="mt-2 text-lg font-semibold text-purple-700">₹25,000</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Income chart across full width of left column */}
            <div>
              <IncomeTrendChart />
            </div>

            {/* optional other main content... */}
          </main>

          {/* SIDEBAR (right) */}
          <aside className="lg:col-span-1">
            {/* make sidebar sticky on large screens so it stays visible */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100
                            lg:sticky lg:top-24 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-700">Your Invoices</h3>
                <button className="text-xs text-gray-500">▾</button>
              </div>

              <div className="mt-4 space-y-3">
                {/* InvoiceList component will render fine here. Ensure its children are flexible (min-w-0) */}
                <InvoiceList items={invoices} onUpdate={handleUpdate} />
              </div>
            </div>
          </aside>
        </div>

        <footer className="py-6 text-center text-xs text-gray-400">Sparkonomy — sparking the creator economy</footer>
      </div>
    </div>
  );
}
