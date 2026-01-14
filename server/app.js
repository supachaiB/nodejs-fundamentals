const express = require('express')
const app = express()
const logger = require('./middlewares/logger.middleware')
app.use(logger)

// รับข้อมูล API
app.use(express.json());

//รับข้อมูล HTML Form
app.use(express.urlencoded({ extended: true }))

// เชื่อมต่อฐานข้อมูล mongoDB
require('dotenv').config();
const connectDB = require('./config/db');
connectDB();


// user routes
const users = require('./routes/users.routes');
app.use('/api/users', users);


// import route modules
const sentText = require('./routes/2sentText');
const restAPI = require('./routes/3restAPI');
const testStatus = require('./routes/4httpStatus')
const requestResponse = require('./routes/5requestResponse');
const userRouter = require('./routes/6user.routes'); 
const asyncAwait = require('./routes/7asyncAwait')
const formHandler = require('./routes/8form.routes')

// กำหนด path
app.use('/sent-text', sentText);
app.use('/rest', restAPI);
app.use('/status', testStatus);
app.use('/req-res', requestResponse);
app.use('/users', userRouter);
app.use('/async', asyncAwait);
app.use('/api/form', formHandler);

app.listen(3000, () => {
  console.log('Server running');
});