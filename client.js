$(document).ready(onReady); // linking JQuery

// console log to test connection with HTML..
function onReady() {
    console.log("Here's to the freakin weekend");
    //create listener for click
    $('#Submit').on('click', newEmployee);
    //create handle to make table row with employee info into DOM..
    createTable('panel');
}



//## Assignment
//created global array with nested object
const employees = [];

//making function to push inputs into employeeList array
function newEmployee(){
  let fName= $('#InputFirst');
  let lName= $('#InputLast');
  let idNumber= $('#InputIdNumber');
  let jobTitle= $('#InputJobTitle');
  let annualSalary= $('#InputAnnualSalary');

//grabbing values from inputs
addEmployee(fName.val(), lName.val(), idNumber.val(),jobTitle.val(), annualSalary.val());
//pushing inputs to global array to update employee list
employees.push();
//clear the input fields. 
$('#InputFirst').val('')
$('#InputLast').val('')
$('#InputIdNumber').val('')
$('#InputJobTitle').val('')
$('#InputAnnualSalary').val('')

} // end newEmployee

// The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

//grab employee details from the input fields..
function addEmployee(firstName, lastName, idNumber, jobTitle, annualSalary){
  console.log('in add employee:', firstName, lastName, idNumber, jobTitle, annualSalary);
  const inputInfoObject = {
    firstName: firstName,
    lastName: lastName,
    idNumber: idNumber,
    jobTitle: jobTitle,
    annualSalary: annualSalary
  }
  employees.push(inputInfoObject);
  console.log(employees);
  return true;
}//end addEmployee

//display employeeList array and inputs into the DOM for new table row..
function createTable() {
  $('panel').prepend(`
    <tr id= "panel">
      <td class="tableFirstName">First Name</td>
      <td class="tableLastName">Last Name</td>
      <td class="tableIdNumber">ID Number</td>
      <td class="tableJobTitle">job title</td>
      <td class="tableAnnualSalary">annual salary</td>
     </tr>
        `);
}
   


// A 'Submit' button should collect the form information, 



//store the information to calculate monthly costs, 



//append information to the DOM


//Using the stored information, calculate monthly costs and append this to the to DOM. 
function calculateSalary(employee) {
  let monthlySalary = parseInt(employees.annualSalary/12) ;
  if (employees.annualSalary > 0 ) {
  }
  return (monthlySalary)
}

//add a red background color to the total monthly cost If the total monthly cost exceeds $20,000, 



// Create a delete button that removes an employee from the DOM.



//need to remove that Employee's salary from the reported total if removing an employee from the DOM.