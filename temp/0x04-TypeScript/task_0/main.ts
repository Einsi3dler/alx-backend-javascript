// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Los Angeles"
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Render the table
const table = document.createElement('table');

// Iterate over the students list and create a row for each student
studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
