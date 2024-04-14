// server.js

const express = require('express');
const connectDB = require('./dbConnection'); // 注意文件名的大小写

const routes = require('./routers/router'); // 导入正确的路由对象

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 连接数据库并设置数据库实例
connectDB().then(database => {
    const db = database;
    require('./models/cat').setDatabase(db); // 在 cat 模型中设置数据库实例

    // 使用路由处理 API 端点
    app.use('/', routes); // 正确使用导入的路由对象

    // 启动服务器
    app.listen(port, () => {
        console.log(`Express server started on port ${port}`);
    });
}).catch(error => {
    console.error("Error connecting to database:", error);
    process.exit(1);
});
