import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// 1단계 작동 확인용 임시 뷰 컴포넌트 구조화
const TemporaryLogin = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="rounded-2xl bg-surface p-8 shadow-2xl border border-gray-800">
      <h1 className="text-2xl font-bold text-textPrimary mb-2">Watch-Up 인증</h1>
      <p className="text-textSecondary text-sm">3단계에서 실감형 Firebase 인증이 결합됩니다.</p>
    </div>
  </div>
);

const TemporaryDashboard = () => (
  <div className="min-h-screen bg-background p-8">
    <div className="max-w-7xl mx-auto">
      <div className="rounded-xl bg-surface p-6 border border-gray-800 mb-6">
        <h1 className="text-3xl font-extrabold text-textPrimary tracking-tight">Watch-Up 투자 대시보드</h1>
        <p className="text-textSecondary mt-2">1단계 인프라스트럭처 실행 기반이 정상적으로 작동하고 있습니다.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface p-4 rounded-lg border border-gray-800 text-brandUp font-bold">▲ 상승 지표 테스트 (+2.45%)</div>
        <div className="bg-surface p-4 rounded-lg border border-gray-800 text-brandDown font-bold">▼ 하락 지표 테스트 (-1.12%)</div>
      </div>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/login',
    element: <TemporaryLogin />,
  },
  {
    path: '/dashboard',
    element: <TemporaryDashboard />,
  },
  {
    path: '*',
    element: (
      <div className="flex h-screen items-center justify-center text-textSecondary">
        404 - 페이지를 찾을 수 없습니다.
      </div>
    ),
  }
]);