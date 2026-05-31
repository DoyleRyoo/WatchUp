const express = require('express');
const cors = require('cors');
require('dotenv').config();

const loggerMiddleware = require('./src/middleware/logger.middleware');
const errorMiddleware = require('./src/middleware/error.middleware');

const app = express();

// 기본 보안 및 파싱 미들웨어
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 커스텀 로그 미들웨어 적용
app.use(loggerMiddleware);

// 기본 헬스 체크 엔드포인트
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Watch-Up Backend Server Stable' });
});

// 전역 중앙 집중식 에러 핸들러 (반드시 모든 라우트 정의 하단에 배치)
app.use(errorMiddleware);

module.exports = app;