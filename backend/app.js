const express = require("express");
const app = express();
const PORT = 5000;

app.get('/api/hello', (req, res) => {
    res.json({message: "Hello Nubes! Youre in the Backend now."});
});

app.listen(PORT, () => console.log(`backend is running on port ${PORT}`));