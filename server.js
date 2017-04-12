const express = require('express');
const app = new express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('server start');
});