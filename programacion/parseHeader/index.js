const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const cors = require("cors")


app.use(cors())

app.use(express.json())

app.use("/", require("./router/api/parseHeader"));

app.listen(PORT, () =>
  console.log("Sevidor corriendo 🔥 en el puerto: ", PORT)
);
