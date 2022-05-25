import calculateAvgGrade from "./calculateAvgGrade.js";

const createTableOfStudents = ( students ) => {

    const tableOfStudents = document.getElementById( "tableOfStudents" );

    return students.map( ( student ) => {

        let studentAvgGrade = calculateAvgGrade( student )

        tableOfStudents.innerHTML += `
          <tr>
            <td>${ student.id }</td>
            <td>${ student.firstName }</td>
            <td>${ student.lastName }</td>
            <td>${ student.education }</td>
            <!-- Stap 5 -->
            <td>${ studentAvgGrade }</td>
         </tr>
    `;
    } );
};

export default createTableOfStudents;