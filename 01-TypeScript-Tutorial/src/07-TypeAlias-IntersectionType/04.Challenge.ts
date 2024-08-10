/* ########## CHALLENGE ########## */

// Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).
// Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).
// Create a Union Type: Define a type Staff that is a union of Employee and Manager.
// Create the printStaffDetails function: This function should accept a parameter of type Staff.
// Inside the function, use a type guard to check if the 'employees' property exists in the passed object.
// If it does, print a message indicating that the person is a manager and the number of employees they manage.
// If it doesn't, print a message indicating that the person is an employee and the department they belong to.

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department`
    );
  }
}

const alice: Employee = {
  id: 1,
  name: 'alice',
  department: 'Sales',
};

const steve: Employee = {
  id: 2,
  name: 'steve',
  department: 'HR',
};

const john: Manager = {
  id: 3,
  name: 'john',
  employees: [alice, steve],
};

printStaffDetails(alice);
printStaffDetails(steve);
printStaffDetails(john);
