// Route arguments/params
// const fs = require('fs');
// const { argv } = require('process');
// console.log("passed aruguments: ", argv)
// if (argv[2] == 'add' && argv[3]) {
//     fs.writeFileSync(argv[3], argv[4])
// } else if (argv[2] == "remove") {
//     fs.unlinkSync(argv[3])
// } else {
//     console.log("Invalid inpugt!")
// }

// Wtiting/Creating file in folder
// const fs = require('fs');
// const path = require("path");
// const direPath = path.join(__dirname, "files")
// for(i=1; i<=5; i++)
// {
//     fs.writeFileSync(`${direPath}/text${i}.txt`, `${i} file created`)
// }

//Reading Files from Folders
// const fs = require('fs');
// const path = require("path");
// const direPath = path.join(__dirname, "files")
// fs.readdir(direPath, (err, files) =>{
//     files?.forEach(file => {
//         console.log("this is file: ", file );
//         fs.readFile(direPath)
//     })
// })


//CRuD with FileSystem
// const fs = require('fs');
// const path = require("path");
// const direPath = path.join(__dirname, "files")

// Creating File
// fs.writeFileSync(direPath+"/crud.txt", "the is being generated to perom some crud operations.")

//Read File
// fs.readFile(direPath+"/crud.txt", "utf8", (err, item) =>{
//     console.log("file content: ", item)
// })

//Update file
// fs.appendFile(direPath+"/crud.txt", "The File was originally created to perform crud oprations.", (err) => {
//     if(!err) console.log("File updated successfully!")
// })

//Delete file
// fs.unlink(direPath+"/updtedCrud.txt", (err) => {
// !err ? console.log("file deleted successfully.") : console.log("error accured: ", err)
// } )



//Express Usage With Basic Routes
// const users = require("./users");
// const express = require("express");
// const app = express();

// app.get("", (req, res) => {
//     const findUser = users.find((user, index) => user.id == req?.query?.user_id)
//     res.send(findUser)

// });

// app.get("/about-us", (req, res) => {
//     res.send(`<div>
//     <h1>About Us Page</h1>
//     <p>Some text about who we are and what we do.</p>
//     <p>Resize the browser window to see that this page is responsive by the way.</p>
//   </div>`)
// })


//Loading/Rendering HTML Pages
// const express = require("express");
// const path = require("path")
// const app = express();

// const direPath = path.join(__dirname, "public");

// app.get("", (req, res) => {
//     res.sendFile(direPath+"/index.html")
// })

// app.get("/about", (req, res) => {
//     res.sendFile(direPath+"/about.html")
// })

// app.get("*", (req, res) => {
//     res.sendFile(direPath+"/404.html")
// })


//NodeJS EJS Templating
// const express = require("express");
// const path = require("path")
// const app = express();
// const direPath = path.join(__dirname, "public");

// app.set("view engine", "ejs")

// app.get("/profile", (req, res) => {
//     let user = {name: "Jam Abdul Ghafoor", email: "jamghafoor1122@gmail.com"}

//     res.render("profile", {user})
// })


//Basic Middleware 
const express = require("express");
const path = require("path")
const app = express();
const direPath = path.join(__dirname, "public");

const basicMiddle = (req, res, next) =>{
    if(req.query.age > 17){
        next();
    } else{
        res.send("You can not access this page. ")
    }
}
app.use(basicMiddle)

app.get("", (req, res) => {
    res.sendFile(direPath+"/index.html")
})






app.listen(2300);