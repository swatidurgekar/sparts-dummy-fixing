import {
  FaUser,
  FaSchool,
  FaCalendar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-16 sm:w-20 bg-purple-800 text-white flex flex-col items-center py-4 sm:py-6 space-y-6 sm:space-y-8 rounded-tl-xl rounded-bl-xl">
      <div className="flex flex-col items-center mb-4 sm:mb-6">
        <FaSchool className="text-2xl sm:text-3xl mb-1 sm:mb-2" />
      </div>
      <nav className="flex flex-col space-y-6 sm:space-y-8">
        <a
          href="#"
          className="flex flex-col items-center space-y-1 sm:space-y-2"
        >
          <FaUser className="text-xl sm:text-2xl" />
        </a>
        <a
          href="#"
          className="flex flex-col items-center space-y-1 sm:space-y-2"
        >
          <FaCalendar className="text-xl sm:text-2xl" />
        </a>
        <a
          href="#"
          className="flex flex-col items-center space-y-1 sm:space-y-2"
        >
          <FaCog className="text-xl sm:text-2xl" />
        </a>
        <a
          href="#"
          className="flex flex-col items-center space-y-1 sm:space-y-2 mt-auto"
        >
          <FaSignOutAlt className="text-xl sm:text-2xl" />
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
