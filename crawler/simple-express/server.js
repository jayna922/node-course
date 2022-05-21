const express =require('express');

const app = express();

app.get('/', (request, response, next) => {
    response.send('首頁');
});

