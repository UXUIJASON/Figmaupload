import React from 'react';
import { UserMenu } from './components/user/UserMenu';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F7FE] flex flex-col items-center">
      {/* Simulation of a top navigation bar */}
      <header className="w-full h-[80px] bg-white border-b border-[#E4EBF0] px-8 flex items-center justify-between shrink-0">
        <div className="text-[20px] font-bold text-[#111C2D]">
          My Application
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">프로필 사진을 클릭해보세요 👉</span>
          {/* The separate UserMenu implementation */}
          <UserMenu />
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl p-10 flex flex-col gap-6">
        <div className="bg-white p-8 rounded-[24px] shadow-sm border border-[#E4EBF0] h-[400px] flex items-center justify-center text-center">
          <div>
            <h2 className="text-2xl font-semibold text-[#111C2D] mb-2">메인 콘텐츠 영역</h2>
            <p className="text-gray-400">
              이곳은 로그인 기능과 별도로 구현된 프로필 모달 데모 페이지입니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
