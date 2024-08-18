"use client"

import { useEffect, useState } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {  // Ensure code runs only on the client side
      const now = new Date();
      const userLocale = navigator.language || 'en-US'; 
      const formattedTime = now.toLocaleTimeString(userLocale, { hour: '2-digit', minute: '2-digit' });
      const formattedDate = new Intl.DateTimeFormat(userLocale, { dateStyle: 'full' }).format(now);
      
      setTime(formattedTime);
      setDate(formattedDate);
    }
  }, []);  // Run this effect only once, when the component mounts

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
