// 需要安装express：npm i express
const express = require('express');
const app = express();

app.get('/api/courses', (req, res) => {
    setTimeout(() => {
        res.json([{ name: '测试1', price: 1288 }, { name: '测试2', price: 1288 }]);
    }, 2000);
});

app.listen(3000);