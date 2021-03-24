import React from 'react';

//its nested objcts we have nested object addressinside of employee
//lets say if we have same variable in main and sub object
//i.e salary we will have to use aliasing then, like we will give
//it another name for employee slaary
const employee ={
    id: "1000",
    name:"kainat",
    salary: "80000",
    address:{
        salary:"40000",
        street:"ICM",
        country:"Pakistan",
        province:"KPK"
    }
};

function Employee() {
    const {id,name,salary:employeeSalary,address} = employee;
   const {street, country,  province, salary:addressSalary} = address;
    return(
        <div>
            <p>id:{id} name: {name} Employee salary: {employeeSalary}</p>
            <h3>Address of Employee:</h3>
   <h2>{address.street} {address.province},{address.country}</h2>
       <p>Address Salary is {addressSalary}</p>
       
        </div>
    )
}
export default Employee;