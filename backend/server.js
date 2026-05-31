const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// [추후 7단계에서 Socket.io 레이어 여기에 통합 예정]

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});