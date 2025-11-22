"use client";

export function TeamAndAccessControl({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="bg-white p-8 rounded-xl w-96 shadow-xl space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Add Team Member</h2>

      <input className="border p-2 rounded w-full" placeholder="Enter Name" />
      <input className="border p-2 rounded w-full" placeholder="Enter Role" />
      <textarea className="border p-2 rounded w-full" placeholder="Permissions" />

      <div className="flex gap-3">
        
        <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded w-full">
          Cancel
        </button>
        <button className="px-4 py-2 bg-black text-white rounded w-full">Save</button>
      </div>
    </div>
  );
}