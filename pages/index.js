'use client'
import Hero from '@/Components/Hero'
import Track from '@/Components/Track'
import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/Firebase/config';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/');
      }
    });
  }, [router]);
  return (
    <div  >
      <Hero/>
      <Track/>
    </div>
  )
}

export default Home