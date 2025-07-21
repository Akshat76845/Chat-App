import {WebSocket,WebSocketServer} from "ws";
const wss = new WebSocketServer({port:8080});
interface User{
    user: string,
    name: string
};
let allSockets: WebSocket[] = [];
wss.on("connection",(socket)=>{
    allSockets.push(socket);
    console.log("user connected");
    socket.on("message",(message) => {
        console.log("message received" + message.toString())
        allSockets.forEach(s=>{
            s.send(message.toString() + ": sent from the server");
        })
    })

    socket.on("disconnect",()=>{
        allSockets = allSockets.filter(x=>x!= socket);
    })
})
