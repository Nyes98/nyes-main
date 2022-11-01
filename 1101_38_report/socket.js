const socket = require("socket.io");

module.exports = (server) => {
  const io = socket(server);

  io.on("connection", (ws) => {
    ws.on("chat", (data) => {
      console.log(data);
      io.emit("msg1", data);
      //   ws.broadcast.emit("msg1", data.id);
    });
    ws.on("login", (data) => {
      console.log(data);
      io.emit("login1", data);
    });
    ws.on("logout", (data) => {
      console.log(data);
      io.emit("logout1", data);
    });
    ws.on("disconnect", () => {
      console.log("연결 끊김");
      io.emit("disconnect1", "끝");
    });
  });
};
