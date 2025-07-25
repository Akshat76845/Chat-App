import {WebSocket, WebSocketServer} from 'ws';
const wss = new WebSocketServer({port:8080})

let allSockets: WebSocket[] = [];
wss.on("connection",(socket)=>{
    socket.on("message",(message)=>{
        const paresedMessage = JSON.parse(message);
        if(paresedMessage === "join"){
            allSockets.push({
                socket,
                room: paresedMessage.payload.roomId
            })
        }
        if(paresedMessage === "chat"){
            let currentUserRoom = null;
            for(let i=0;i<allSockets.length;i++){
                if(allSockets[i].socket === socket){
                    currentUserRoom = allSockets[i].room;
                }
            }

        }
    })
})