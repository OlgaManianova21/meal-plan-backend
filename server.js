const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./Mealroutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set('strictQuery', false);

const PORT = 3000 ||  process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MANGODB_LINK)
.then(() => console.log('WE ARE CONNECTD TO MANGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I'M LISTENING ON PORT ${PORT}`);
})

//IAWCCAJyDaCGfUHu
//mongodb+srv://Olgamanianova:<db_password>@cluster0.6zgcd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0