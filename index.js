const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
console.log("a", dotenv.config);

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("conexion exitosa");
  })
  .catch((error) => {
    console.log(error);
  });

console.log("API exitosa");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const capRoutes = require("./routes/Cap");
const saleRoutes = require("./routes/Sale");

app.use('/api/cap', capRoutes);
app.use('/api/sale', saleRoutes);

app.listen(process.env.PORT, () => {
  console.log("Servidor de node corriendo en el puerto:", process.env.PORT);
});
