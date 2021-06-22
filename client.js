$(document).ready(onReady); // linking JQuery

// console log to test connection with HTML..
function onReady() {
    console.log("Here's to the freakin weekend");
    //create listener for click
    $('#Submit').on('click', submitEmployee);
    
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
//create handle to make table row with employee info into DOM..
$("#panel").append(createTable);


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
  for (const employee of employees) {
    const salary = Number (employee.annualSalary).toLocateString('en-US',{style: 'currency', currency: 'USD'});
    console.log('salary:', salary);
    
    $('#panel').append(`
    <tr>
      <td>${tableFirstName}</td>
      <td>${tableLastName}</td>
      <td>${tableIdNumber}</td>
      <td>${tableJobTitle}</td>
      <td>${tableAnnualSalary}</td>
     </tr>
        `);
}

}

// Function for creating the HTML for an employee in the table.
function employeeRow(Employee) {
  const salary = Number(Employee.annualSalary).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  console.log(salary);
  return `
    <tr>
        <td scope="row">${Employee.tableFirstName}</td>
        <td>${Employee.tableLastName}</td>
        <td>${Employee.tableIdNumber}</td>
        <td>${Employee.tableJobTitle}</td>
        <td>${tableAnnualSalary}</td>
        <td><button data-id="${
          Employee.employeeId
        }" class="btn btn-danger btn-sm">Delete</button>
      </tr>
  `;
}

// Iterate through the employee[] and populate the table
function populateTable() {
  for (const employee of employees) {
    $('#employeeList').append(employeeRow(employee));
  }
}
  
 
   


// A 'Submit' button should collect the form information, 



//store the information to calculate monthly costs, 



//append information to the DOM


//Using the stored information, calculate monthly costs and append this to the to DOM. 
function getMonthlyTotal() {
  let total = 0;
  for (const emp of employees) {
    total += Number(emp.annualSalary);
  }
  return total / 12;
}

//add a red background color to the total monthly cost If the total monthly cost exceeds $20,000, 



// Create a delete button that removes an employee from the DOM.



//need to remove that Employee's salary from the reported total if removing an employee from the DOM.