const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 6600;

app.use(express.json());
app.use(require("./routes/comments.route"));
app.use(require("./routes/twits.route"));
app.use(require("./routes/users.route"));

mongoose
  .connect(
    "mongodb+srv://Intucod:Musaev10@cluster1.yro8beq.mongodb.net/Twitter",
    {}
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером"));

app.listen(port, () => {
  console.log("Сервер запущен успешно");
});
