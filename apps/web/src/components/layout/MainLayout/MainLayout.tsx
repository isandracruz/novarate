
import type { ReactNode } from 'react';
import Header from '../Header/Header';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-background text-foreground font-display transition-colors duration-300 min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {children}
      </main>
    </div>
  );
};