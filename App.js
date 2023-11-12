// Import the `format` function from the 'date-fns' library
const { format } = require('date-fns');

// Create a new Date object representing the current date and time
const currentDate = new Date();

// Use the `format` function to format the current date
// The second parameter is the format string, where:
// - 'yyyyMMdd' represents the year, month, and day
// - 'hh:mm:ss' represents the hour, minute, and second
// - '\t' represents a tab character
const formattedDate = format(currentDate, 'yyyyMMdd\thh:mm:ss');

// Log the formatted date to the console
console.log(formattedDate);
