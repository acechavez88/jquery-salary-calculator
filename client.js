$(document).ready(onReady); // linking JQuery

// console log to test connection with HTML..
function onReady() {
    console.log("Here's to the freakin weekend");
}
//create listener for click
$('#submit').on('click', addEmployee);

//## Assignment
//created global array with nested object
const employees = [
  {
    firstName: '',
    lastName: '',
    idNumber: '',
    jobTitle: '',
    annualSalary: ''
  }
];

//making function to push inputs into employeeList array
function newEmployee(InputFirst, InputLast, InputIdNumber, InputJobTitle,InputAnnualSalary){
    const employeeInputObject = {
      first: InputFirst,
      last: InputLast,
      id: InputIdNumber,
      title: InputJobTitle,
      salary:InputAnnualSalary,
    }
    employee.push(employeeInputObject);
    return true;
  } // end newEmployee

// The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.
function addEmployee() {
    //grab employee details from the input fields..
    let fName= $('#InputFirst');
    let lName= $('#InputLast');
    let idNumber= $('#InputIdNumber');
    let jobTitle= $('#InputJobTitle');
    let annualSalary= $('#InputAnnualSalary');

//grabbing values from inputs
newEmployee(fName.val(), lName.val(), idNumber.val(),jobTitle.val(), annualSalary.val());
}
console.log(employees);
//display employeeList array and inputs into the DOM..
   


// A 'Submit' button should collect the form information, 



//store the information to calculate monthly costs, 



//append information to the DOM and clear the input fields. 



//Using the stored information, calculate monthly costs and append this to the to DOM. 



//add a red background color to the total monthly cost If the total monthly cost exceeds $20,000, 



// Create a delete button that removes an employee from the DOM.



//need to remove that Employee's salary from the reported total if removing an employee from the DOM.