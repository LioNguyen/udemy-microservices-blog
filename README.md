# Microservices with Node JS and React | Blog

- [Microservices with Node JS and React | Blog](#microservices-with-node-js-and-react--blog)
  - [Resources](#resources)
  - [Structure](#structure)
    - [What is function of Event-Bus service?](#what-is-function-of-event-bus-service)

## Resources

- [Udemy Course](https://www.udemy.com/course/microservices-with-node-js-and-react/?fbclid=IwAR39OSAHmIo5rHVfpb1bjfq_2Mg65P7cPHueP45_N3Gk6_71G5G5S9P8mKU)

## Structure

- Post Service: `port 4000`
- Comment Service: `port 4001`
- Query Service: `port 4002`
- Moderation Service: `port 4003`
- Event-Bus Service: `port 4005`

### What is function of Event-Bus service?

- It will listen events from all services
- Then, it will call other api to action

```js
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
```
