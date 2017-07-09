if (typeof Storage !== "undefined") {
    $(document).ready(function() {
        var connection = new WebSocket(`ws://sethacked.com:8001`);
        if (localStorage.roomID == undefined) {
            $(`#content`).html(`<div class="container-fluid"> <div style="margin-top:35vh;"> <div class="input-group"> <span class="input-group-addon" id="basic-addon1">Room ID</span> <input style="height:50px;" id="roomID" type="text" class="form-control" placeholder="Ex: RPIRoom" aria-describedby="basic-addon1"> </div> <br/> <button id="enter" type="button" class="btn btn-lg btn-block btn-danger"><i class="fa fa-home" aria-hidden="true"></i> Enter</button> </div> </div>`);
        }
        connection.onmessage = (message) => {
            if (message.data == `bad roomID`) {
                // warn user of bad room id
            }
            if (message.data == `good roomID`) {
                $(`#content`).html(`<div style="overflow: scroll;" class="container-fluid" style="padding-top:30px;"> <h1 id="up">Up</h1> <br/> <h1 id="down">Down</h1> <br/> <h1 id="left">Left</h1> <br/> <h1 id="right">Right</h1> <br/> <h1 id="target">Target</h1> <br/> <h1 id="attack">Attack</h1> <br/> <h1 id="mouse up">Mouse Up</h1> <br/> <h1 id="mouse down">Mouse Down</h1> <br/> <h1 id="mouse left">Mouse Left</h1> <br/> <h1 id="mouse right">Mouse Right</h1> <br/> <h1 id="left click">Left Click</h1> <br/> <h1 id="right click">Right Click</h1> <br/> <h1 id="interact">Interact</h1> </div>`);
            }
        }
        $(`body`).tap((e) => {
            switch (e.target.id) {
                case `enter`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id.concat(`: `, document.querySelector(`#roomID`).value));
                        break;
                    }
                case `up`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `down`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `left`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `right`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `target`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `attack`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `mouse up`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `mouse down`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `mouse left`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `mouse right`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `left click`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                case `right click`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }                    
                case `interact`:
                    {
                        console.log(e.target.id);
                        connection.send(e.target.id);
                        break;
                    }
                default:
                    {
                        // do nothing
                    }
            }
        });
    });
} else {
    $(`#content`).html(`<div class="container-fluid"><div style="margin-top:45vh;"><h1>GET A BETTER BROWSER NERD!</h1></div> </div>`);
    // Get a better browser
}
