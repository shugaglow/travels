import { useState } from "react";

const DestinationFilter = ({ onFilter }) => {
  const [region, setRegion] = useState("");

  const handleFilter = (value) => {
    setRegion(value);
    onFilter(value);
  };

  return (
    <section className="px-[24px] md:px-[64px] md:py-40 py-16 text-center bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Filter by Region</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {["All", "Asia", "Europe", "Africa", "America", "Oceania"].map((r) => (
          <button
            key={r}
            onClick={() => handleFilter(r)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              region === r ? "bg-rose-600 text-white" : "bg-white text-gray-700 hover:bg-rose-100"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
    </section>
  );
};

export default DestinationFilter;
