// index.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000; // Allows configuration of environment variables.

// Serve static files from the 'public' directory
app.use(express.static('public'));

// app.use(cors());
app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:${PORT}"); // Port 3000
})