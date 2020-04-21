'use strict'
const net = require('net');

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function makeDate(date) {
    let year = date.getFullYear();
    let month = zeroFill(date.getMonth() + 1);
    let day = zeroFill(date.getDate());
    let time = `${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}`;
    return `${year}-${month}-${day} ${time}\n`;
}

const server = net.createServer(function (socket) {
    socket.end(makeDate(new Date))
})
server.listen(process.argv[2])