import React, { useState } from "react";

export default function NewInvoiceModal({ onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const submit = (e) => {
    e.preventDefault();
    if (!amount || !dueDate) {
      // minimal validation; keep behavior simple
      alert("Please enter amount and due date.");
      return;
    }
    onCreate({
      title: title || undefined,
      amount,
      dueDate,
      status,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative bg-white rounded-2xl p-6 w-11/12 max-w-md shadow-xl">
        <h3 className="text-lg font-semibold text-gray-700">Create Invoice</h3>

        <form className="mt-4 space-y-3" onSubmit={submit}>
          <div>
            <label className="text-xs text-gray-500">Invoice Title (optional)</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Invoice #1008"
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500">Amount (numbers)</label>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="10000"
              type="number"
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500">Due date</label>
            <input
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder="2024-08-01"
              type="date"
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="text-xs text-gray-500">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
            >
              <option>Pending</option>
              <option>Paid</option>
              <option>Overdue</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 mt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg text-sm"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
