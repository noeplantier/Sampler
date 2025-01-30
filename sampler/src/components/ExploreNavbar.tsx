import { Search, SlidersHorizontal } from "lucide-react";
import React from "react";

const ExploreNavbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="w-full bg-[#f5e1da] shadow-md py-4 px-6 flex justify-between items-center border-b border-[#d1a799]">
      {/* Logo */}
      <div className="text-[#6b4226] text-xl font-bold tracking-wider">
        Vintage Explore
      </div>

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search samples..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#fff8f2] pl-10 pr-4 py-2 rounded-full border border-[#d1a799] focus:ring-2 focus:ring-[#b37d5e] focus:border-transparent shadow-sm"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#b37d5e]" />
      </div>

      {/* Filters Button */}
      <button className="flex items-center space-x-2 text-[#6b4226] hover:text-[#8c5b3d] transition">
        <SlidersHorizontal className="h-5 w-5" />
        <span className="font-medium">Filters</span>
      </button>
    </nav>
  );
};

export default ExploreNavbar;