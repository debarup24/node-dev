const express = require("express") ;

const app = express () ;

app.use((req, res) => {
    res.send("Hello fro the server side !") ; // req handler
})   ;

app.listen(2421, () => {
    console.log ("Server is successfully listening on port 2421") ;
}) ;