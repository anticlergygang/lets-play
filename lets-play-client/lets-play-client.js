var ws = require(`nodejs-websocket`);
var gameController = require(`robotjs`);
var conn = ws.connect(`ws://sethacked.com:8001`);
setTimeout(function() {
    conn.send('client: RPIRoom');
}, 1000);
conn.on('text', function(str) {
    switch (str) {
        case `up`:
            {
                gameController.setKeyboardDelay(500);
                gameController.keyToggle('up', 'down');
                gameController.setKeyboardDelay(1);
                gameController.keyToggle('up', 'up');
                break;
            }
        case `down`:
            {
                gameController.setKeyboardDelay(500);
                gameController.keyToggle('down', 'down');
                gameController.setKeyboardDelay(1);
                gameController.keyToggle('down', 'up');
                break;
            }
        case `left`:
            {
                gameController.setKeyboardDelay(100);
                gameController.keyToggle('left', 'down');
                gameController.setKeyboardDelay(1);
                gameController.keyToggle('left', 'up');
                break;
            }
        case `right`:
            {
                gameController.setKeyboardDelay(100);
                gameController.keyToggle('right', 'down');
                gameController.setKeyboardDelay(1);
                gameController.keyToggle('right', 'up');
                break;
            }
        case `target`:
            {
                gameController.keyTap('tab');
                break;
            }
        case `attack`:
            {
                gameController.keyTap('q');
                break;
            }
        case `mouse up`:
            {
                gameController.moveMouseSmooth(gameController.getMousePos().x, gameController.getMousePos().y - 20);
                break;
            }
        case `mouse down`:
            {
                gameController.moveMouseSmooth(gameController.getMousePos().x, gameController.getMousePos().y + 20);
                break;
            }
        case `mouse left`:
            {
                gameController.moveMouseSmooth(gameController.getMousePos().x - 20, gameController.getMousePos().y);
                break;
            }
        case `mouse right`:
            {
                gameController.moveMouseSmooth(gameController.getMousePos().x + 20, gameController.getMousePos().y);
                break;
            }
        case `left click`:
            {
                gameController.mouseClick('left');
                break;
            }
        case `right click`:
            {
                gameController.mouseClick('right');
                break;
            }
        case `interact`:
            {
            	gameController.keyTap('i');
                break;
            }
        default:
            {
                // do nothing
            }

    }

});
