import React from 'react';
import Sidebar from './Sidebar';
export default async function WorkspacePage() {
  return (
    <div className="flex h-screen w-screen">
      <main className="flex-1 h-full overflow-y-auto">
        <div className="flex flex-col gap-4 p-8">
          <h1 className="text-3xl font-bold">Workspace</h1>
        </div>
      </main>
    </div>
  );
}