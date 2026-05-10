const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Render Deployment Successful'
    });
});

app.get("/demo", (req, res) => {
    res.json({
        success: true,
        message: 'This is a demo route'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});