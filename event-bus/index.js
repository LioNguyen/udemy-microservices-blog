import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";

const PORT = 4005;

const app = express();
app.use(bodyParser.json());
// app.use(cors());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  // * Use catch to handle error, if not, app will crash when 1 api dies
  axios.post("http://localhost:4000/events", event).catch(console.log);
  axios.post("http://localhost:4001/events", event).catch(console.log);
  axios.post("http://localhost:4002/events", event).catch(console.log);
  axios.post("http://localhost:4003/events", event).catch(console.log);

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
