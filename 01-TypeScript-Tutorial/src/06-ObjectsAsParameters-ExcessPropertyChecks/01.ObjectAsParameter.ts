/* ########## OBJECT AS PARAMETERS ########## */

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

const firstEmpolyee = createEmployee({ id: 1 });
const secondEmpolyee = createEmployee({ id: 2 });
console.log(firstEmpolyee, secondEmpolyee);

// Alternative approach
function createStudent(student: { id: number; name: string }) {
  console.log(`Welcome to the course ${student.name}`);
}

const newStudent = { id: 3, name: 'Priya' };
createStudent(newStudent);
createStudent({ id: 4, name: 'Rohit' });
