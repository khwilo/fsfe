const express = require('express');

const app = express();
const port= 3000;

app.get("/", (req, res) => {
    res.send("Hello to  my fellow fullstack engineer!");
});

app.listen(port, () => console.log(`App started. Listening on port: ${port}`));

