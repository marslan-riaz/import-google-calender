import { Router } from "express";
import { google } from 'googleapis';
import axios from 'axios';

const router = Router();

router.post('/', async  (req,res) => {
  const {accessKey}  = req.body;
  console.info('ree', req.body)
  if(!accessKey)
  return res.send('Invalid Access key');

  // import all the events of the google
  try {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
    );
    oauth2Client.setCredentials({
      access_token: accessKey,
    });
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    const fetchedEvents = await calendar.events.list({
      calendarId: 'primary',
      timeZone: 'UTC',
    });
    return res.json({
      data: fetchedEvents
    });
  } catch (error) {
    res.json({
      data: error
    });
  }

  // res.send('hi');
})

export default router;