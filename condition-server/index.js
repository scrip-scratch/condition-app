require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`on ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();