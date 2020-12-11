const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const routerEmployee = require('./routes/Employees');
const routerTestingTwo = require('./routes/TestingTwo');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/employees', routerEmployee);
app.use('/api', routerTestingTwo);

const port = process.env.PORT || 2000;
app.listen(port, async () => {
    try {
        await db.authenticate();
        await db.sync({ force: false });
        console.log('Connection has been connect in database and server port: ' + port);
    } catch (err) {
        console.error('Unable to connect to the database: ', err.message);
    }
})