// Error handler logs error details to console
// Sends standardized error response with a 500 status code and a JSON message to the client
// Error handler function is exported for use in other parts of the application
// https://www.turing.com/kb/how-to-master-express-js-error-handling

const errorHandler = (err, req, res, next) => {
    // Log error stack trace for debugging
    console.error(err.stack);
    // Send 500 status code and JSON error message to the client
    res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = {
    errorHandler,
};