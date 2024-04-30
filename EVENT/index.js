// Events Module
// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events.

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");
