import {
	getAvailableInstructors,
	getPolyglotStudents,
	getStudentsInCohort,
	getFullTimeStudents,
	getStudentsByLanguage,
} from "./filterExercises.js";
import {
	getInstructorById,
	getStudentById,
	getStudentByLastName,
	getStudentByName,
	getInstructorOfStudent,
	getStudentWithMostLangs,
} from "./findExercises.js";

import { getStudentNames } from "./mapExercises.js";

let fulltimetest = getFullTimeStudents();

console.log("this is fulltime student", fulltimetest);

let cohortTest = getStudentsInCohort(1);

console.log("this is the cohort test", cohortTest);

let polylotTest = getPolyglotStudents(2);

console.log("this is the polylot test", polylotTest);

let availableInstructors = getAvailableInstructors();

console.log("this is the available instructor test", availableInstructors);

let knownLanguages = getStudentsByLanguage("Javascript");

console.log("these students know Javascript", knownLanguages);

let studentId = getStudentById(3);

console.log("This should be the student with the id of 3", studentId);

let instructorId = getInstructorById(1);

console.log("This should be the student with the id of 1", instructorId);

let studentLastName = getStudentByLastName("mASoN");

console.log(
	"This should be the student with the last name of Mason",
	studentLastName
);

let letStudentFullname = getStudentByName("TaddY MaSOn");
console.log(
	"This should be the student with the full name of Taddy Mason",
	letStudentFullname
);
let StudentsAssignedTeacher = getInstructorOfStudent(3);
console.log(
	"This should be the student rick sanchez who is assigned Andy Collins",
	StudentsAssignedTeacher
);

let theMostLiterate = getStudentWithMostLangs();
console.log(
	"This should be the student rick sanchez who knows the most languages",
	theMostLiterate
);

let studentFullNameArr = getStudentNames();
console.log("This will be an array of students full names", studentFullNameArr);
