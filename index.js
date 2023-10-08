const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); // Para poder usar dotenv
const PORT = process.env.PORT || 3001;

const { dbConnection } = require("./config/config");

app.use(express.json());
app.use(cors());

dbConnection();

app.use("/product", require("./routes/product"));
app.use('/variable', require('./routes/variable'));
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
