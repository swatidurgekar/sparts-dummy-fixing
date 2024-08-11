import { MdOutlineFilterAlt } from "react-icons/md";

const Filter = () => {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <select className="p-2 border border-gray-300 rounded w-full sm:w-auto">
          <option value="Big Ben">Big Ben</option>
          <option value="St. George's">St. George's</option>
          <option value="Delhi Public">Delhi Public</option>
        </select>

        <div className="flex space-x-2 w-full sm:w-auto justify-center sm:justify-start">
          <button className="p-2 bg-gray-200 rounded items-center sm:w-auto flex justify-center">
            <MdOutlineFilterAlt size={25} />
          </button>
          <button className="p-2 bg-purple-600 text-white rounded-2xl flex items-center justify-center w-full sm:w-auto">
            + Add a student
          </button>
        </div>
      </div>
    );
}

export default Filter;