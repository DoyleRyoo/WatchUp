import { Server } from "socket.io";

let io;

export function initSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*"
    }
  });

  return io;
}

export function getIO() {
  return io;
}