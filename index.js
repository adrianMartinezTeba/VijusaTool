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
app.use("/user", require("./routes/user"));
app.use("/order", require("./routes/order"));
app.use("/contact", require("./routes/contact"));
app.use("/operationToFollow", require("./routes/operationToFollow"));
app.use("/rawMaterial", require("./routes/rawMaterial"));
app.use("/material", require("./routes/material"));
app.use("/typeMat", require("./routes/typeMat"));
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
