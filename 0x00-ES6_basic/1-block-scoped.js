
mport { taskFirst, taskNext } from './0-constants.js';
rt default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;  // block-scoped variable
    let task2 = false; // block-scoped variable
  }

  return [task, task2];  // returns the outer scope variables
}


console.log(`${taskFirst()} ${taskNext()}`);
