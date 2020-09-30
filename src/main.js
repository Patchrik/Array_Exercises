import {
  getAvailableInstructors,
  getPolyglotStudents,
  getStudentsInCohort,
  getFullTimeStudents,
  getStudentsByLanguage,
} from './filterExercises.js';

let fulltimetest = getFullTimeStudents();

console.log('this is fulltime student', fulltimetest);

let cohortTest = getStudentsInCohort(1);

console.log('this is the cohort test', cohortTest);

let polylotTest = getPolyglotStudents(2);

console.log('this is the polylot test', polylotTest);

let availableInstructors = getAvailableInstructors();

console.log('this is the available instructor test', availableInstructors);

let knownLanguages = getStudentsByLanguage('Javascript');

console.log('these students know Javascript', knownLanguages);
