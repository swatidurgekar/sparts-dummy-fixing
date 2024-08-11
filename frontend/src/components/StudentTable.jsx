import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import profile from "../assets/profile.jpg";

const StudentTable = ({
  displayedStudent,
  handlePreviousPage,
  handleNextPage,
  page,
}) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 text-[0.9rem]">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Photo
            </th>
            <th
              scope="col"
              className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              First Name
            </th>
            <th
              scope="col"
              className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Last Name
            </th>
            <th
              scope="col"
              className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Phone
            </th>
            <th
              scope="col"
              className="px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Year Group
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {displayedStudent.map((student, index) => (
            <tr key={index}>
              <td className="px-6 whitespace-nowrap">
                <img
                  src={profile}
                  alt={`Photo of ${student.attributes.firstName}`}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="px-6 whitespace-nowrap">{student.id}</td>
              <td className="px-6 whitespace-nowrap">
                {student.attributes.firstName
                  ? student.attributes.firstName
                  : "NOT FOUND"}
              </td>
              <td className="px-6 whitespace-nowrap">
                {student.attributes.lastName
                  ? student.attributes.lastName
                  : "NOT FOUND"}
              </td>
              <td className="px-6 py- whitespace-nowrap">
                {student.attributes.parentEmailId
                  ? student.attributes.parentEmailId
                  : "NOT FOUND"}
              </td>
              <td className="px-6 whitespace-nowrap">
                {student.attributes.parentContactNo
                  ? student.attributes.parentContactNo
                  : "NOT FOUND"}
              </td>
              <td className="px-6 whitespace-nowrap">Grade 12</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex justify-center items-center p-4 bg-gray-50">
        <button
          onClick={handlePreviousPage}
          disabled={page === 0 || displayedStudent.length < 10}
          className="px-5 py-2 mx-2 bg-purple-600 text-white rounded-2xl disabled:opacity-50"
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={handleNextPage}
          disabled={displayedStudent.length < 10}
          className="px-5 py-2 mx-2 bg-purple-600 text-white rounded-2xl disabled:opacity-50"
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
