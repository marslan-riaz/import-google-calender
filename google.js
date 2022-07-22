import { Router } from "express";
import { google } from 'googleapis';
import axios from 'axios';

const router = Router();

router.post('/', (req,res) => {
  const {accessKey}  = req.body;
  console.info('ree', req.body)
  if(!accessKey)
  return res.send('Invalid Access key');

  // import all the events of the google
  res.send('hi');
})

export default router;