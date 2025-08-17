import React from 'react';
import Sidebar from './workspace/Sidebar';
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
    <Sidebar/>
      {children}
    </div>
  );
}
