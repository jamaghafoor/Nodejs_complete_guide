const fs = require('fs');
// const { argv } = require('process');
// console.log("passed aruguments: ", argv)
// if (argv[2] == 'add' && argv[3]) {
//     fs.writeFileSync(argv[3], argv[4])
// } else if (argv[2] == "remove") {
//     fs.unlinkSync(argv[3])
// } else {
//     console.log("Invalid inpugt!")
// }

const path = require("path");
const direPath = path.join(__dirname)
console.log("direPath: ", direPath)
