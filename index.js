const app = require('express')();


app.get('/', (req, res)=>{
    res.send('<h1>Hello Nodejs</h1>')
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log("listening now")
})