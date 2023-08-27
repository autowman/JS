import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const dadds = ['1 hour coding']
const workadds = ['Cleaning the office'];

app.get('/', (req, res) => {
    res.render('index.ejs', {
        listTitle: "Daily List",
        adds: dadds
    });
});

app.post("/", (req, res) => {
    const text = req.body["newItem"];
    dadds.push(text);
    res.redirect('/');
});

app.get('/work', (req, res) => {
    res.render('worklist.ejs', {
        listTitle: "Work List",
        workAdds: workadds,
    });
});

app.post('/work', (req, res) => {
    const item = req.body['newItem'];
    workadds.push(item);
    res.redirect('/work');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});