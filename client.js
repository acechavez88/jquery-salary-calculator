$(document).ready(onReady); // linking JQuery

// console log to test connection with HTML..
function onReady() {
    console.log("Here's to the freakin weekend");
    //create listener for click
    $('#Submit').on('click', submitEmployee);
    //create handle to make table row with employee info into DOM..
    createTable('panel');
}



//## Assignment
//created global array with nested object
const employees = [];

//making function to push inputs into employeeList array & grab employee details from the input fields..
function submitEmployee() {
  
let newEmployee= {
   fName: $('#InputFirst').val(),
   lName: $('#InputLast').val(),
   idNumber: $('#InputIdNumber').val(),
   jobTitle: $('#InputJobTitle').val(),
   annualSalary: $('#InputAnnualSalary').val()
}
//pushing inputs to global array to update employee list
employees.push(newEmployee);

//clear the input fields. 
$('#InputFirst').val('')
$('#InputLast').val('')
$('#InputIdNumber').val('')
$('#InputJobTitle').val('')
$('#InputAnnualSalary').val('')

console.log(employees);

} // end submitEmployee

//display employeeList array and inputs into the DOM for new table row..
function createTable() {
  $('panel').append(`
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
  
  return (monthlySalary);
}

//add a red background color to the total monthly cost If the total monthly cost exceeds $20,000, 



// Create a delete button that removes an employee from the DOM.



//need to remove that Employee's salary from the reported total if removing an employee from the DOM.