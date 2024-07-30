'use client'
import { useEffect } from 'react';

export default function Loader() {
  useEffect(() => {
    async function getLoader() {
      const { squircle } = await import('ldrs');
      squircle.register();
    }
    getLoader();
  }, []);
  return <l-squircle size='24' stroke='4' stroke-length='0.15'
        bg-opacity='0.5'
        speed='0.9'
        color='white'
      ></l-squircle>
    
  
}
