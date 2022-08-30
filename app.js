const express = require('express');
const app = express();


const personObject = {
    Id : 1,
    Name : "hasan",
    Surname : "gursoy"
}
app.get('/',(req,res)=> {
    res.send(personObject);
});


const port = 3000;
app.listen(port,() => {
    console.log(`Sunucu ${port} portun da başlatıldı ...`)
});
