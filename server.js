require('dotenv').config();
const express = require('express')
const connectDb = require('./backend/config/db')
const productRoutes = require('./backend/routes/productRoutes')
const path=require('path')

connectDb();
const app = express();

app.use(express.json());
app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 5000;



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/frontend/build'));
}

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

app.listen(PORT, () => console.log("Server is running"))