import {printEmployeeName, printEmployeeAddress} from "./employee.js";
import {printingStudentName, printStudentAddress} from "./student.js";
import default_example, {hun1} from "./default_case.js";

printEmployeeName("Harshit Raj");
printEmployeeAddress("West of housing colony, Chapra, Bihar");


printingStudentName("Manikesh Ranjan");
printStudentAddress("Inderpuri, Bhopal");


console.log(default_example);
default_example.fun1();
default_example.gun1();
hun1();