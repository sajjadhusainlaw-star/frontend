import { FileText, User, Calendar } from "lucide-react";

const ContentTable = () => {
  const contents = [
    { id: 1, title: "New Client Agreement Drafted", lawyer: "Priya Mehta", date: "Oct 21, 2025" },
    { id: 2, title: "Evidence Added in Arjun vs RTO", lawyer: "Vikas Sharma", date: "Oct 22, 2025" },
    { id: 3, title: "Case Summary Updated", lawyer: "Nisha Rao", date: "Oct 20, 2025" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-4 mt-6">
      <h3 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
        <FileText size={18} className="text-primary" /> Recent Case Updates
      </h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b text-left">
            <th className="py-2">Title</th>
            <th className="py-2">Lawyer</th>
            <th className="py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((item) => (
            <tr key={item.id} className="border-b last:border-none hover:bg-gray-50 transition">
              <td className="py-2">{item.title}</td>
              <td className="py-2 flex items-center gap-2 text-gray-700">
                <User size={14} /> {item.lawyer}
              </td>
              <td className="py-2 flex items-center gap-2 text-gray-600">
                <Calendar size={14} /> {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
