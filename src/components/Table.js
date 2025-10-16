
// import React from "react";

// const Table = ({employees}) =>{
//     return(
//     <table
//       border="1"
//       style={{
//         margin: "20px auto",
//         borderCollapse: "collapse",
//         width: "80%",
//       }}
//     >
//       <thead style={{ backgroundColor: "#f0f0f0" }}>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Role</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees.length > 0 ? (
//           employees.map((emp) => (
//             <tr key={emp.id}>
//               <td>{emp.id}</td>
//               <td>{emp.name}</td>
//               <td>{emp.email}</td>
//               <td>{emp.role}</td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="4">Loading...</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
  

//     )
// };
// export default Table;