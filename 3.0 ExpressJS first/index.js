import express from 'express';
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello,  Welcome back!');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Me</h1>');
});
app.get('/contact', (req, res) => {
    res.send('Contact Me');
});

app.listen(3000, () => {
    console.log('The programm is running on port 3000!');
});