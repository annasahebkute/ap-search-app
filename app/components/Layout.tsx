'use client';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Aisearch from './Aisearch';
import Aisearchinner from './Aisearchinner';


export default function Layout({ children }: { children: React.ReactNode }) {

  const [showInner, setShowInner] = useState(false);

  const handleToggle = () => {
    setShowInner((prev) => !prev);
  };


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showInner ? <Aisearchinner onSend={handleToggle} /> : <Aisearch onSend={handleToggle} />}
        <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}