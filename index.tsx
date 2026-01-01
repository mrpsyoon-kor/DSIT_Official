
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// 배포 환경에서 process.env 참조 시 발생하는 ReferenceError 방지
// Cast window to any to access the process property which is not defined on the standard Window interface
if (typeof window !== 'undefined' && !(window as any).process) {
  (window as any).process = { env: {} } as any;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("루트 요소를 찾을 수 없습니다.");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
