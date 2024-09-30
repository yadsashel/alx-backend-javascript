export default function taskBlock(trueOrFalse) {
  let task = false; // Use let to allow block scope
  let task2 = true; // Use let to allow block scope

  if (trueOrFalse) {
    task = true; // Update the outer variable
    task2 = false; // Update the outer variable
  }

  return [task, task2];
}
