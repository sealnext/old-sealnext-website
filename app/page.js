"use client";
import Header from './components/header';
import './scss/page.scss'
import dynamic from 'next/dynamic'
import './style.scss'
import { useEffect, useState } from 'react'
import Scene3DMobile from './components/scene3dmobile'

const Scene3D = dynamic(() => import('./components/scene3d'), {
  ssr: false,
})

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  return (
    <main className='bg-black'>
      <div className='container'>
        <Header />
        <div className='screen'>
          <div className='scene3d'>
            {!isMobile && <Scene3D />}
            {isMobile && <Scene3DMobile />}
            <a href="mailto:support@sealnext.com?subject=Schedule%20a%20Demo&body=Please%20provide%20details%20on%20your%20availability%20and%20any%20specific%20focus%20areas%20you%20would%20like%20to%20cover%20during%20the%20demo." className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-1 text-base font-semibold leading-normal text-white inline-block absolute left-1/2 -translate-x-1/2 sm:-translate-y-[25vh] -translate-y-[25vh] z-10">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(128,90,213,0.6)_0%,rgba(128,90,213,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-6 ring-1 ring-white/10">
                <span>
                  Schedule a Demo
                </span>
                <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
