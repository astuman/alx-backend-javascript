export interface Student {
    firstName: String;
    lastName: String;
    age: number;
    location: string;
}
const Student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    location: "New york",

};
const Student2: Student = {
    firstName: "Mati",
    lastName: "Alex",
    age: 25,
    location: "London",

};
const studentsList: Array<Student> = [
    Student1,
    Student2,
];

// const css = 
// html{
//     margin: 0;
//     height: 100%;
// }
// body {
//     box-sizing: border-box;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 80%
//     margin: 25%;
// }
// table {
//     border-collapse: collapse;
//   }
// thead {
//     font-weight: bold;
//   }
// td {
//     padding: 10px;
//     border: 1px solid gray;
//     cursor: pointer;
//   }
//   td:hover {
//     background: gainsboro;
//   }
//   td:nth-child(1) {
//     text-align: center;
//   }
// ;
export const viewStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
    thead.insertAdjacentElement('beforeend', headRow);
    for (const student of students) {
        const BRow = document.createElement('tr');
        BRow.insertAdjacentHTML('beforeend', '<td>${student.firstName}</td>');
        BRow.insertAdjacentHTML('beforeend', '<td>${student.location}</td>');
        tableBody.insertAdjacentElement('beforeend', BRow);
    }
        table.insertAdjacentElement('beforeend', thead);
        table.insertAdjacentElement('beforeend', tableBody);
        document.body.insertAdjacentElement('beforeend', table);

};

viewStudents(studentsList);
// const styleSheetElement = document.createElement('style');
// styleSheetElement.innerHTML = css;
// document.head.insertAdjacentElement('beforeend', styleSheetElement);
// document.title = "Task 0";
