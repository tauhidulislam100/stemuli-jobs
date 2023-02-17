import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Inter } from '@next/font/google';
import { JobsList } from '@components';
import { Button } from 'antd';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  // #FF6D57

  
  
  
  
  return (
    <>
      <Head>
        <title>STEMuli Jobs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#f6f8fc]">
        <div className="h-[78vh] bg-hero object-cover flex justify-center items-center">
          <div className="text-center">
            <p className="w-3/5 md:w-auto text-white/80 border-y border-white/70 inline-block py-2">
              Go for it! You have nothing to lose, and a great opportunity to gain!
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[50px] text-[#fff] mt-5">
              Explore <span className="text-primary block md:inline">jobs around you</span>
            </h1>
            {/* <Button size='large' type='primary' className='mt-5 w-60 h-16 uppercase text-lg font-semibold'>
              Find your job
            </Button> */}
          </div>
        </div>
      </div>
      <main className='container mx-auto my-8 min-h-[70vh]'>
        <JobsList />
      </main>
    </>
  )
}
