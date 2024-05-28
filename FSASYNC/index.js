//It includes file operations in async
const fs = require("fs");

fs.mkdir("ABCD", (err) => {
  console.log("Folder created Successfully");
});

fs.writeFile("./ABCD/abc.txt", "Hi Myself Atharv Joundal ", (err) => {
  console.log("File created Successfully");
});

fs.appendFile("./ABCD/abc.txt", "I am pursuing BE from Dr. D. Y. Patil College of Engineering Akurdi Pune ", (err) => {
  console.log("Data appended Successfully");
});

fs.readFile("./ABCD/abc.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.rename("./ABCD/abc.txt", "./ABCD/xyz.txt", (err) => {
  console.log("File Renamed Successfully");
});

fs.unlink("./ABCD/xyz.txt", (err) => {
  console.log("File Deleted Successfully");
});

fs.rmdir("./ABCD", (err) => {
  console.log("Folder Deleted Successfully ");
});
