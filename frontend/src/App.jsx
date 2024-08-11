import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StudentTable from "./components/StudentTable";
import Filter from "./components/Filter";

const App = () => {
  const [students, setStudents] = useState([]);
  const [displayedStudent, setDisplayStudent] = useState([]);
  const [page, setPage] = useState(27);
  const [search, setSearch] = useState([]);

  //fetch the data from api

  useEffect(() => {
    async function getStudents() {
      const studentData = await axios.get(`/api`);
      console.log(studentData);

      setStudents(studentData.data.data);
      const displayedStudentsData = studentData.data.data.slice(
        page * 10,
        10 * page + 10
      );
      setDisplayStudent(displayedStudentsData);
    }
    getStudents();
  }, []);

  //function to decrease page number and show data
  const handlePreviousPage = async () => {
    if (page > 0) {
      setPage(page - 1);
      const displayedStudentsData = await axios.get(
        `http://3.223.98.72:1337/api/students?pagination[page]=${
          page - 1
        }&pagination[pageSize]=10`
      );
      setDisplayStudent(displayedStudentsData.data.data);
    }
  };

  //function to increase page number and show data
  const handleNextPage = async () => {
    console.log(page + 1);

    const displayedStudentsData = await axios.get(
      `http://3.223.98.72:1337/api/students?pagination[page]=${
        page + 1
      }&pagination[pageSize]=10`
    );
    setDisplayStudent(displayedStudentsData.data.data);
    setPage(page + 1);
  };

  //function to filter according to search

  const searchStudents = (keyword) => {
    const filteredStudent = students.filter((student) => {
      // student.id.includes(keyword) ||
      return student.attributes.firstName
        .toLowerCase()
        .includes(keyword.toLowerCase());
    });
    setSearch(filteredStudent);
    const displayFilteredStudent = filteredStudent.slice(0, 10);
    setDisplayStudent(displayFilteredStudent);
  };

  return (
    <div className="flex h-screen bg-purple-800 p-4">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-white rounded-xl shadow-lg overflow-hidden">
        <Navbar searchStudents={searchStudents} />
        <div className="flex-1 p-4 font-sans">
          {/* Only design implemented for filter */}
          <Filter />

          <StudentTable
            displayedStudent={displayedStudent}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            page={page}
          />

        </div>
      </div>
    </div>
  );
};

export default App;
