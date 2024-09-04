"use client"
import Add_emp from '@/components/Add_emp';
import React from 'react';

const Page = () => {
  return (
    <div className="bg-custom h-screen relative">
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  tra'>
            <Add_emp />
        </div>
    </div>
  );
};

export default Page;
