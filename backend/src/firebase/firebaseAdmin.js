const admin = require('firebase-admin');
require('dotenv').config();

const initializeFirebaseAdmin = () => {
  try {
    if (admin.apps.length > 0) {
      return {
        adminAuth: admin.auth(),
        db: admin.firestore()
      };
    }

    // 개행 문자(\n)가 환경 변수 문자열 처리 시 이스케이프되는 문제 보완
    const privateKey = process.env.FIREBASE_PRIVATE_KEY
      ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
      : undefined;

    if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !privateKey) {
      throw new Error('Firebase Admin 환경 변수가 유실되었거나 올바르지 않습니다.');
    }

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: privateKey,
      }),
    });

    console.log('--- Firebase Admin SDK 초기화 성공 ---');
    
    const db = admin.firestore();
    // 금융 서비스 정밀도를 위해 타임스탬프 스냅샷 객체 변환 설정 보장
    db.settings({ ignoreUndefinedProperties: true });

    return {
      adminAuth: admin.auth(),
      db: db
    };
  } catch (error) {
    console.error('--- Firebase Admin SDK 초기화 실패 ---');
    console.error(error);
    // 인프라 종속성 실패 시 프로세스를 Fail-Fast로 핸들링하여 조기 경보 유도
    process.exit(1);
  }
};

const { adminAuth, db } = initializeFirebaseAdmin();

module.exports = { admin, adminAuth, db };