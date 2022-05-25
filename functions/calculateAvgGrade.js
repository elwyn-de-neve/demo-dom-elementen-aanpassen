const calculateAvgGrade = ( student ) => {

    let avgGrade; // Waarom hier geen null?
    let totalOfGrades = null;
    let amountOfGrades = student.grades.length;

    student.grades.map( ( grade, i ) => {  // Waarom hier geen return?
        totalOfGrades += grade;
    } );

    avgGrade = totalOfGrades / amountOfGrades;

    return Math.round( avgGrade * 10 ) / 10; // Afronden op 1 decimaal
};

export default calculateAvgGrade;
