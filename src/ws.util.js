const socket = new WebSocket('ws://localhost:8080');
socket.onopen = (e) => {
    console.log('connection established')
}

socket.onclose = () => {
    console.log('connection closed')
}


export {
    socket
}