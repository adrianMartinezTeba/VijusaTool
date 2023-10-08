const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); // Para poder usar dotenv
const PORT = process.env.PORT || 3001;

const { dbConnection } = require("./config/config");

app.use(express.json());
app.use(cors());

dbConnection();

app.use("/users", require("./routes/users"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
