// File operations using node JS
// CURD Operation using nodejs {fs module}

const fs = require("fs");

// Read Operation
let data = fs.readFileSync("read.txt");
data = data.toString();
console.log(data);

// Write Operation
fs.writeFileSync("abc.txt", "I am Atharv Joundal Pursuing BE in Computer Engineering ");

// Append operation
fs.appendFileSync(
  "abc.txt",
  "From Dr. D. Y. Patil College of Engineering Akurdi, Pune."
);

// Rename Operation
fs.renameSync("abc.txt", "xyz.txt");

// Read Operation
let data1 = fs.readFileSync("xyz.txt");
data1 = data1.toString();
console.log(data1);

// Path of the file
console.log(fs.realpathSync("xyz.txt"));





// Delete operations
// For Deleting the file and Directory
const datas = fs.readFileSync("pqr.txt", "utf-8");
fs.unlinkSync("pqr.txt");
fs.rmdirSync("data");
