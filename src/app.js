const express = require("express") ;

const app = express () ;

app.get("/user", (req,res) => {
    res.send({firstName: "Dev", lastName: "Sarkar" })
})

app.post("/user", async (req, res) => {
    console.log (req.body) ;
    res.send("Data Successfully saved to database!") ; 
})

app.use("/" , (err,req, res, next) => {
    if (err) {
        res.status(500).send("Something went wrong!") ;
    }
         
     }) ;

// app.use("/home" , (req, res) => {
//     res.send("Welcome to backend - server side !") ; // req handler
// }) ;

// app.use("/greeting" , (req, res) => {
//     res.send("Namaste from the server !") ; 
// })   ;

app.listen(2421, () => {
    console.log ("Server is successfully listening on port 2421") ;
}) ;