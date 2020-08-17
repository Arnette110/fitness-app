const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan('short'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'localhost:3001',
 {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    },
    () => console.log("Connected to MongoDB!")
);

app.listen(PORT, () => {
    console.log(`Currently listening to on http://localhost:${PORT}`)
});