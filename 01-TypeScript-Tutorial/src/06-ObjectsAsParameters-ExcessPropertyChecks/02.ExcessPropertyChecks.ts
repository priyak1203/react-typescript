/* ########## EXCESS PROPERTY CHECKS GOTCHA ########## */

function createStudent(student: { id: number; name: string }) {
  console.log(
    `Welcome to the course ${student.name}. Your id is : ${student.id}`
  );
}

const newStudent = {
  id: 4,
  name: 'Mohit',
  email: 'mohit@gmail.com',
};

createStudent(newStudent);

// createStudent({ id: 5, name: 'Suraj', email:'suraj@gmail.com'}); // This will result in a TypeScript Error
createStudent({ id: 5, name: 'Suraj' });
