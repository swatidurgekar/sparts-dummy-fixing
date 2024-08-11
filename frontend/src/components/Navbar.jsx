import { FaBell, FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import profile from "../assets/profile.jpg";
import { useEffect, useState } from "react";

const Navbar = ({ searchStudents }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      searchStudents(search);
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="bg-white h-16 w-full flex items-center justify-between px-4 md:px-6 shadow rounded-tr-xl">
      <div className="flex items-center space-x-2 md:space-x-4">
        <h1 className="font-bold text-xl md:text-2xl">Students</h1>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <div className="flex items-center space-x-2">
          <FiSearch className="text-gray-600 text-xl text-purple-600" />
          <input
            type="text"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search"
            className="placeholder:text-purple-400 font-semibold hidden sm:block border-b border-gray-300 text-gray-900 text-sm focus:ring-0 focus:outline-none w-40 sm:w-64 p-2"
          />
        </div>
        <FaBell className="text-gray-600 text-lg md:text-xl" />
        <div className="flex items-center space-x-2">
          <img
            src={profile}
            alt="Profile"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
          <FaChevronDown className="text-gray-600 text-lg md:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
