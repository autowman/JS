import express from "express";

const app = express();
const port = 3000

app.get('/', (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = 'a weekday';
    let adv = 'It is time to work hard';

    if (day === 6 || day === 0) {
        type = 'the weekend';
        adv = 'It is time to have some fun';
    }
    
    res.render('index.ejs', {
        dayType: type,
        advice: adv
    });
});

app.listen(port, () => {
    console.log('Listening to port ', port);
});