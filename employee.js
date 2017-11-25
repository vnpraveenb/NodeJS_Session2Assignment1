/* 1. Create an nested array of objects to determine the address of an employee.
Properties you need to print:
EmployeeName, EmployeeId, job
hint:
var employee={
address:{
Pin:0000,
City: “Bangalore”,
Country:”India”
}
};
*/

var employeeArray = [
                        {   name: "Rakesh",
                            id: 1,
                            job: "Developer", 
                            address:{
                                pin:12238,
                                city:"Bangalore",
                                country:"India"
                            }
                        },
                       
                        {   name: "Sujit",
                            id: 2,
                            job: "Tester", 
                            address:{
                                pin:12334,
                                city:"Hyderabad",
                                country:"India"
                            }
                        },

                        {   name: "Pramod",
                            id: 3,
                            job: "Designer", 
                            address:{
                                pin:33232,
                                city:"Pune",
                                country:"India"
                            }
                        }
                    ];  // Creats an array of nested objects 


// Prints the Employee details alon with their address
for(var employee of employeeArray)
{
     console.log("\nName: " + employee.name + "\tID: " + employee.id + "\tJob: " + employee.job + "\nAddress: " + "\n\tCity: " + employee.address.city + "\n\tCountry: " + employee.address.country +  "\n\tPin: " + employee.address.pin );
}