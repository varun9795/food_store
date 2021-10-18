require('dotenv').config();
const express = require('express')
const connectDb = require('./backend/config/db')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const productRoutes = require('./backend/routes/productRoutes')
const userRoutes=require('./backend/routes/userRoutes')
const path=require('path')

connectDb();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)

const PORT = process.env.PORT || 5000;




app.use(express.static(path.resolve(__dirname, "./frontend/build")));
app.get("/*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

app.listen(PORT, () => console.log("Server is running"))