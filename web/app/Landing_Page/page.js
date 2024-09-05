"use client";
import Landing from '@/components/Landing';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '../globals.css';

const Page = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Remove any previously added page-specific background class
    document.body.classList.remove('page-specific-background');

    // Apply the custom class based on the route
    if (pathname === '/Landing_Page') {
      document.body.classList.add('page-specific-background');
    }
  }, [pathname]);

  return (
    <div>
      <Landing />
    </div>
  );
};

export default Page;
