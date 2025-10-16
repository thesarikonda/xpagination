import React, { useEffect, useState } from "react";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        if (!response.ok) throw new Error("Network error");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        alert("failed to fetch data");
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentEmployees = employees.slice(indexOfFirst, indexOfLast);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Employee Data</h1>
      <table
        border="1"
        style={{
          margin: "20px auto",
          borderCollapse: "collapse",
          width: "80%",
        }}
      >
        <thead style={{ backgroundColor: "#599d16ff" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          style={{ margin: "10px", padding: "8px 16px" }}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{ margin: "10px", padding: "8px 16px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
