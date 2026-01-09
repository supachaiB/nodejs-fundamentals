const express = require('express')
const app = express()

const logger = require('./middlewares/logger.middleware')
app.use(logger)
app.use(express.json());

// import route modules
const sentText = require('./routes/2sentText');
const restAPI = require('./routes/3restAPI');
const testStatus = require('./routes/4httpStatus')
const requestResponse = require('./routes/5requestResponse');


app.use('/sent-text', sentText);
app.use('/rest', restAPI);
app.use('/status', testStatus);
app.use('/req-res', requestResponse);

app.listen(3000, () => {
  console.log('Server running');
});