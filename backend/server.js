const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/connectToDb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToDb()
    .then(() => {
        console.log('Connected to MongoDB');
        
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });


