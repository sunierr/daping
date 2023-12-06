// 引入express
const express = require('express');

const websocket = require('ws');
const wss = new websocket.Server({ port: 8080 });

wss.on('close', function close() {
    console.log('disconnected');
});


let sockets = []

wss.on('connection', (ws) => {
    sockets.push(ws);
    console.log('connection created.');
    ws.on('close', () => {
        console.log('connection closed.');
        sockets = sockets.filter((socket) => socket !== ws);
    })
})

// 创建express应用
const app = express();

// 配置端口
const port = 3001;

// 解析请求体数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 路由示例
app.get('/0', (req, res) => {
    if (sockets.length) {

        sockets.forEach((socket) => {
            socket.send(JSON.stringify({
                subject: 0
            }), (error) => {
                if (error) {
                    console.log(`error sending message: ${error}`);
                } else {
                    console.log(`message sent successfully0`);
                }
            });
        });

    } else {
        console.log(`there is total ${sockets.length} sockets.`)
    }
   res.sendStatus(200);
});
app.get('/1', (req, res) => {
    if (sockets.length) {

        sockets.forEach((socket) => {
            socket.send(JSON.stringify({
                subject: 1
            }), (error) => {
                if (error) {
                    console.log(`error sending message: ${error}`);
                } else {
                    console.log(`message sent successfully1`);
                }
            });
        });
    } else {
        console.log(`there is total ${sockets.length} sockets.`)
    }
   res.sendStatus(200);
});
app.get('/2', (req, res) => {
    if (sockets.length) {

        sockets.forEach((socket) => {
            socket.send(JSON.stringify({
                subject: 2
            }), (error) => {
                if (error) {
                    console.log(`error sending message: ${error}`);
                } else {
                    console.log(`message sent successfully1`);
                }
            });
        });
    } else {
        console.log(`there is total ${sockets.length} sockets.`)
    }
   res.sendStatus(200);
});
app.get('/4', (req, res) => {
    console.log(22222222)
    if (sockets.length) {

        sockets.forEach((socket) => {
            socket.send(JSON.stringify({
                subject: 4
            }), (error) => {
                if (error) {
                    console.log(`error sending message: ${error}`);
                } else {
                    console.log(`message sent successfully4`);
                }
            });
        });
    } else {
        console.log(`there is total ${sockets.length} sockets.`)
    }
   res.sendStatus(200);
});
app.get('/5', (req, res) => {
    console.log(111111)
    if (sockets.length) {

        sockets.forEach((socket) => {
            socket.send(JSON.stringify({
                subject: 5
            }), (error) => {
                if (error) {
                    console.log(`error sending message: ${error}`);
                } else {
                    console.log(`message sent successfully5`);
                }
            });
        });
    } else {
        console.log(`there is total ${sockets.length} sockets.`)
    }
   res.sendStatus(200);
   

})
app.get('/3', (req, res) => {
    if (sockets.length) {

        sockets.forEach((socket) => {
            socket.send(JSON.stringify({
                subject: 3
            }), (error) => {
                if (error) {
                    console.log(`error sending message: ${error}`);
                } else {
                    console.log(`message sent successfully3`);
                }
            });
        });
    } else {
        console.log(`there is total ${sockets.length} sockets.`)
    }
   res.sendStatus(200);
})

app.get('/6', (req, res) => {
    if (sockets.length) {

        sockets.forEach((socket) => {
            socket.send(JSON.stringify({
                subject: 6
            }), (error) => {
                if (error) {
                    console.log(`error sending message: ${error}`);
                } else {
                    console.log(`message sent successfully6`);
                }
            });
        });
        console.log(222222222222)
    } else {
        console.log(`there is total ${sockets.length} sockets.`)
    }
   res.sendStatus(200);
})

app.get('/7', (req, res) => {
    if (sockets.length) {

        sockets.forEach((socket) => {
            socket.send(JSON.stringify({
                subject: 7
            }), (error) => {
                if (error) {
                    console.log(`error sending message: ${error}`);
                } else {
                    console.log(`message sent successfully7`);
                }
            });
        });
    } else {
        console.log(`there is total ${sockets.length} sockets.`)
    }
   res.sendStatus(200);
})

app.get('/8', (req, res) => {
    if (sockets.length) {

        sockets.forEach((socket) => {
            socket.send(JSON.stringify({
                subject: 8
            }), (error) => {
                if (error) {
                    console.log(`error sending message: ${error}`);
                } else {
                    console.log(`message sent successfully7`);
                }
            });
        });
    } else {
        console.log(`there is total ${sockets.length} sockets.`)
    }
   res.sendStatus(200);
})

app.get('/9', (req, res) => {
    if (sockets.length) {

        sockets.forEach((socket) => {
            socket.send(JSON.stringify({
                subject: 9
            }), (error) => {
                if (error) {
                    console.log(`error sending message: ${error}`);
                } else {
                    console.log(`message sent successfully7`);
                }
            });
        });
    } else {
        console.log(`there is total ${sockets.length} sockets.`)
    }
   res.sendStatus(200);
})

// 启动服务器
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});