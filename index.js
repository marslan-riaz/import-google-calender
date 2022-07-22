import express from "express";
import 'dotenv/config';
import google from './google.js';


const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use('/import', google);


const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Test api works ...');
});



app.listen(port ,() => {
  console.info(`server is listning at ${port}`)
})