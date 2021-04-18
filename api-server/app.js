const express = require('express');
const morgan = require('morgan')
const addRequestId = require('express-request-id')({setHeader: false})

const app = express();

app.use(addRequestId)

morgan.token('id', (req) => req.id.split('-')[0]);
app.use(morgan(
  "[:date[iso] #:id] Started :method :url for :remote-addr",
  {immediate: true}));
app.use(morgan("[:date[iso] #:id] Completed :status :res[content-length] in :response-time ms"))

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const db = require('./db');

app.get('/ping', (req, res) => {
  return res.json({
    message: 'pong'
  })
})

app.get('/service-users', (req, res) => {
  const serviceUsers = db.serviceUsers.map(su => {
    const suData = { ...su };
    suData.assignedDoctor = db.doctors.find(d => d.id === suData.assignedDoctor);
    return suData;
  })
  return res.json({
    data: serviceUsers
  })
})

app.get('/doctors', (req, res) => {
  return res.json({
    data: db.doctors
  })
})

app.listen(3333, (err) => {
  if (err) {
    console.error(err)
    process.exit(1);
  }
  console.log(`Server running on port 3333`);
});
