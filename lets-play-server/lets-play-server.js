var fs = require(`fs`);
var ws = require(`nodejs-websocket`);
var http = require(`http`);

var roomID = '';
var roomConnection = {};

var staticRes = {};
fs.readdirSync(`staticRes/`).forEach(function(element) {
    staticRes[element] = fs.readFileSync(`staticRes/`.concat(element)).toString();
});

var httpServer = http.createServer(function(req, res) {
    req.on(`error`, function(err) {
        console.error(`Error: `.concat(err));
    }).on(`data`, function(chunk) {}).on(`end`, function() {
        console.log(req.url);
        switch (req.url) {
            case `/favicon.ico`:
                {
                    res.end();
                    return;
                    break;
                }
            case `/styles.css`:
                {
                    res.end(staticRes[`styles.css`]);
                    return;
                    break;
                }
            case `/scripts.js`:
                {
                    res.end(staticRes[`scripts.js`]);
                    return;
                    break;
                }
            case `/`:
                {
                    res.end(staticRes[`lets-play-html.html`]);
                }
            default:
                {
                    res.end();
                }
        }
    });
});
httpServer.listen(8000, function() {
    console.log('Server start time is: '.concat(new Date()));
    console.log('Server is listening on PORT: '.concat(8000));
});

var wsServer = ws.createServer((connection) => {
    console.log('new connection')
    connection.on(`text`, (str) => {
        console.log(str);
        if (str.indexOf(`enter: `) != -1) {
            console.log(str.split(`enter: `)[1])
            if (roomID == str.split(`enter: `)[1]) {
                connection.send('good roomID');
            } else {
                connection.send('bad roomID');
            }
        }
        if (str.indexOf(`client: `) != -1) {
            roomID = str.split(`client: `)[1];
            roomConnection = connection;
        }
        if (roomConnection == {}) {

        } else {
            switch (str) {
                case `up`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `down`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `left`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `right`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `target`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `attack`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `mouse up`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `mouse down`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `mouse left`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `mouse right`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `left click`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `right click`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                case `interact`:
                    {
                        roomConnection.send(str);
                        break;
                    }
                default:
                    {
                        // do nothing
                    }
            }
        }
    });
    connection.on(`close`, (code, reason) => {});
    connection.on(`error`, (e) => {});
}).listen(8001);
