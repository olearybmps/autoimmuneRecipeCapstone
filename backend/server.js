// Load variables from .env
require('dotenv').config();

// Import express 
const express = require('express');

// Create express instance
const app = express();

// Set port number
const port = process.env.PORT || 3000;

// Import function to connect to DB
const connectToDb = require('./config/connectToDb');

// Import error handling
const { errorHandler } = require('./middleware/errorHandler');

// Import CORS middleware
const cors = require('cors');
app.use(cors());

// Parse incoming request bodies in JSON format
app.use(express.json());

// Connect to DB
connectToDb();

// Import recipe routes
const recipeRoutes = require('./routes/recipeRoutes');
app.use('/api/recipes', recipeRoutes);

// Error handling middleware
app.use(errorHandler);



// Start express server and listen on port
app.listen(port, () => {
    console.log(`Express Server Listening on port num: ${port}`);
});