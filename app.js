//app.js

const express = require('express');
const teacherController = require('./controller/teacher');
const postTeacherController = require('./controller/insertTeacher');
const updateTeacherController = require('./controller/updateTeacher');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is working");
});

app.get('/getteacher', teacherController);

app.post('/postteacher', postTeacherController);

app.put('/updateteacher:name', updateTeacherController);



const port = 2000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
