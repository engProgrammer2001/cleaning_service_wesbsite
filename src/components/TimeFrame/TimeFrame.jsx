import React from "react";

const timeFrameData = [
  { service: "Full deep cleaning", time: "6-8 hours" },
  { service: "Normal Bathroom cleaning", time: "30-45 min" },
  { service: "Machine bathroom cleaning", time: "45-60 min" },
  { service: "Kitchen cleaning", time: "1-2 hours" },
  { service: "Chimney cleaning", time: "1-1:30 hours" },
  { service: "Carpet cleaning", time: "1-2 hours" },
  { service: "Sofa cleaning", time: "1-1:30 hours" },
  { service: "Mattress cleaning", time: "2 hours" },
  { service: "Window", time: "2 hours" },
  { service: "Balcony", time: "1 hour" },
  { service: "Chair", time: "30 min" },
  { service: "Office cleaning", time: "6-8 hours" },
  { service: "Painting", time: "6-10 hours" },
  { service: "Pest control", time: "40-60 min" },
];

const TimeFrame = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-[#ac00b7] mb-4 text-center">
        Time Frame Details
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-[#ac00b7] text-white">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Service</th>
              <th className="px-4 py-2 border border-gray-300">Time</th>
            </tr>
          </thead>
          <tbody>
            {timeFrameData.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="px-4 py-2 border border-gray-300 font-medium">
                  {item.service}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeFrame;
