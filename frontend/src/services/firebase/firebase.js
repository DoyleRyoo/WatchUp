import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// 필수 값 검증 레이어 예외 처리
const validateConfig = (config) => {
  const keys = Object.keys(config);
  for (const key of keys) {
    if (!config[key]) {
      console.warn(`[Firebase Warning]: ${key} 가 설정되지 않았습니다. 환경 변수를 확인하세요.`);
    }
  }
};

validateConfig(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 인증 모듈 바인딩 (Zustand 및 Auth 가드에서 글로벌 구독 예정)
export const auth = getAuth(app);

export default app;