// Write your solution in this file!

const employee = {
    name: "Anna",
    streetAddress: "Syokimau"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
 
  console.log(employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  console.log(updatedEmployee); 
  
  const destructiveUpdate = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Anna");
  console.log(destructiveUpdate); 
  
  const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employeeWithoutAddress); 
  
  const destructiveDeletion = destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log(destructiveDeletion); 
  
  console.log(employee); 
  