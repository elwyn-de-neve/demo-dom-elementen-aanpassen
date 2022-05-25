// Import variables
import students from "./data/students.js";

// Import functions
import createTableOfStudents from "./functions/createTableOfStudents.js";
import createSubTitle from "./functions/createSubTitle.js";
import createFootnote from "./functions/createFootnote.js";


// Inject title in directly HTML
// Stap 1
// const title = "Student Dashboard"
const titleContainer = document.getElementById( "title" );
titleContainer.innerText = "Student Dashboard";
// titleContainer.innerText = `${title}`

// Execute functions to inject data in HTML
// Stap 2
createSubTitle();
// Stap 3
createFootnote( "2022 students" );
// Stap 4
createTableOfStudents( students );

console.log('Dit is functie X');
// console.log(functieAanroep());