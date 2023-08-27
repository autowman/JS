import express from "express";

const app = express();

app.get('/', (req, res) => {
    const data = {
        title: "EJS tags",
        seconds: new Date().getSeconds(),
        items: ['apple', 'banana', 'orange'],
        htmlContent: '<em> This is some em text.</em>',
    };
    res.render('index.ejs', data)
});

app.listen(3000, ()=> {
    console.log("listening on port 3000.")
});