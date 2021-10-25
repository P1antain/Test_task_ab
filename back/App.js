const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/test-task-ab', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
})



app.use('/card', require('./routes/card'))

app.listen(PORT, () => {
    console.log('Ссылка на сервер');
    console.log(BASE_PATH);
});
