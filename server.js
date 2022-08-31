var mysql = require('mysql');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path')
const fs = require('fs')
const Request = require("request");

const authLoginRouter = require("./routers/authLogin.router");
const projectsRouter = require("./routers/projects.router");

const logStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})

app.use('/authLogin', authLoginRouter.router);
app.use('/project', projectsRouter.router);

app.use('/favicon.ico', ((req, res) => {
    res.sendStatus(200)
}));

app.use((req, res) => {
    res.status(500).send('Something is broken!');
});

app.listen(PORT, () => console.log('Express server is running on port ', PORT));