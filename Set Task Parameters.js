// Accept task parameters from environment variables, fallback to defaults if not provided
const taskDifficulty = process.env.TASK_DIFFICULTY || "easy"; // Options: easy, medium, hard
let timeAvailable;
let usedEnv = false;
let invalidInput = false;

if (process.env.TIME_AVAILABLE !== undefined) {
  const parsed = Number(process.env.TIME_AVAILABLE);
  if (!isNaN(parsed) && parsed > 0) {
    timeAvailable = parsed;
    usedEnv = true;
  } else {
    timeAvailable = 30;
    usedEnv = true;
    invalidInput = true;
  }
} else {
  timeAvailable = 30;
}

// Store in context for next step
setContext('taskDifficulty', taskDifficulty);
setContext('timeAvailable', timeAvailable);

console.log(`Task difficulty set to: ${taskDifficulty}`);
console.log(`Time available set to: ${timeAvailable} minutes`);
if (process.env.TASK_DIFFICULTY) {
  console.log('Used TASK_DIFFICULTY from environment variable.');
} else {
  console.log('Used default taskDifficulty.');
}
if (usedEnv) {
  console.log('Used TIME_AVAILABLE from environment variable.');
  if (invalidInput) {
    console.warn(`Invalid TIME_AVAILABLE value ('${process.env.TIME_AVAILABLE}'). Defaulted to 30.`);
  }
} else {
  console.log('Used default timeAvailable.');
}