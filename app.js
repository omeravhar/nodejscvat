const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});


io.sockets.on('connect',(socket)=>{
    socket.on('input',(ms)=>{
        io.sockets.emit('new',ms);
    });
});




http.listen(5000,()=>{
    console.log('server is runnig on port 3000');
}); 
