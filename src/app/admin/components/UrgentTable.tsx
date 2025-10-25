import { AlertTriangle, Clock } from "lucide-react";

const UrgentTable = () => {
  const urgentCases = [
    { id: 1, title: "Hearing: Meera vs XYZ Corp", time: "Tomorrow, 10:00 AM", priority: "High" },
    { id: 2, title: "File Submission: Ravi vs Delhi Police", time: "Today, 3:00 PM", priority: "Medium" },
    { id: 3, title: "Client Meeting: Arjun vs RTO", time: "Oct 25, 2:00 PM", priority: "Low" },
  ];

  const priorityColor = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-4 mt-6">
      <h3 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
        <AlertTriangle size={18} className="text-red-500" /> Urgent Cases
      </h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b text-left">
            <th className="py-2">Case</th>
            <th className="py-2">Time</th>
            <th className="py-2">Priority</th>
          </tr>
        </thead>
        <tbody>
          {urgentCases.map((item) => (
            <tr key={item.id} className="border-b last:border-none hover:bg-gray-50 transition">
              <td className="py-2">{item.title}</td>
              <td className="py-2 flex items-center gap-2 text-gray-700">
                <Clock size={14} /> {item.time}
              </td>
              <td className="py-2">
                <span className={`text-xs px-2 py-1 rounded-md `}>
                  {item.priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrgentTable;
