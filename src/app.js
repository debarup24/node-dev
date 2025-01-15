const express = require("express") ;

const app = express () ;


app.use(express.json()) ;
app.use(express.urlencoded({entended: true})) ;

app.get("/", (req,res) => {
    res.send("chal rha he!")
})

app.get("/profile/:username", (req,res) => {
    res.send(`welcome.. ${req.params.username}`) ;
})


app.listen(2421, () => {
    console.log ("Server is successfully listening on port 2421") ;
}) ;