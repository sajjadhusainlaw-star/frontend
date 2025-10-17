"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setSelectedTab } from "@/app/features/courtUpdates/courtSlice";
import { MapPin, FileText, Calendar, Gavel } from "lucide-react";

const tabs = ["Supreme Court", "High Courts", "District Courts"];

export default function LiveCourtUpdates() {
  const dispatch = useDispatch();
  const { selectedTab, cases } = useSelector((state: RootState) => state.court);

  const getBadgeColor = (status: string) => {
    switch (status) {
      case "Hearing Scheduled":
        return "bg-blue-600";
      case "Under Review":
        return "bg-yellow-600";
      case "Reserved":
        return "bg-purple-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Live Court Updates
          </h2>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
            View All Courts
          </button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-6 bg-gray-100 rounded-full overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => dispatch(setSelectedTab(tab))}
              className={`w-full md:w-auto px-6 py-2 text-sm font-medium transition ${
                selectedTab === tab
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start">
                  <span
                    className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${getBadgeColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-4 leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600 mt-3">
                  <MapPin size={16} className="mr-2" />
                  {item.court}
                </div>

                <p className="text-sm text-gray-500 mt-2">{item.description}</p>

                <div className="flex items-center text-sm text-gray-600 mt-3">
                  <FileText size={16} className="mr-2" />
                  {item.caseNo}
                </div>

                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-medium">Next:</span>&nbsp;
                  {item.nextDate}
                </div>
              </div>

              <button className="w-full mt-6 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 font-medium text-sm hover:bg-gray-100 transition">
                <Gavel size={16} />
                View Case Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
