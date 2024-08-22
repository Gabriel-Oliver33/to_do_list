"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redireciona para a tela de login
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f2f5' 
    }}>
      <h1 style={{ color: '#333' }}>Redirecting to Login...</h1>
    </div>
  );
};

export default IndexPage;
