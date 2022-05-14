const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  setInterval(() => {
    socket.emit("event", new Date().toLocaleString());
  }, 1000);
});

server.listen(5000, () => {
  console.log("listening on *:5000");
});
