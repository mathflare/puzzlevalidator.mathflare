if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/validate', async (req, res) => {
    const { guess } = req.body;
    if (guess === process.env.SEKRET_RESPONSE) {
        res.json({
            status: 'success',
            message: 'Congrats! You solved the weakly riddle!',
        });
    } else {
        res.json({
            status: 'failure',
            message: 'Wrong answer! Try again!',
        });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}\nAccess it at http://localhost:${PORT}`);
});