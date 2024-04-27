const express = require('express');
const dotenv  = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT } = require('./config/enviroments/constant');


// Routes
const modelsRoute = require('./sections/models/models.route');

dotenv.config();
const app = express();

// Define the all cors urls

const corsUrls = ["*"];

app.use(cors({
    origin: corsUrls,
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true
}));



app.use('/api/v1/models',modelsRoute)

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})

module.exports = app;