const socket = require("socket.io");
const { Chat } = require("./models/index.js");

module.exports = (server) => {
  const io = socket(server);

  io.on("connection", (ws) => {
    Chat.findAll().then((data) => {
      console.log(data);
      ws.emit("list", { list: data });
    });

    ws.on("login", (data) => {
      ws.userId = data.id;

      ws.broadcast.emit("loginInfo", { id: ws.userId });
      ws.emit("login", { id: ws.userId });
    });

    ws.on("logout", (data) => {
      ws.emit("logout");
      ws.broadcast.emit("logoutInfo", { id: ws.userId });
      ws.userId = undefined;
    });

    ws.on("chat", async (data) => {
      try {
        if (ws.userId) {
          await Chat.create({ userId: ws.userId, text: data.text });
          io.emit("chat", { id: ws.userId, text: data.text });
        } else {
          ws.emit("chat", { text: "로그인 해주세요" });
        }
      } catch (error) {
        ws.emit("chat", { text: "에러" });

        console.error(error);
      }
    });
  });
};
