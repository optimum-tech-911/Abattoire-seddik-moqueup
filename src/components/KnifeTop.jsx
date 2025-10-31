import React from 'react'
export default function KnifeTop(){ 
  return (
    <button 
      onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} 
      className='knife fixed bottom-6 right-6 p-0 rounded-full shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-shadow'
      aria-label='Haut'
    >
      <svg width='72' height='72' viewBox='0 0 72 72' xmlns='http://www.w3.org/2000/svg'>
        {/* Outer golden ring */}
        <defs>
          <radialGradient id='goldGlow' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='#F2E6C8' stopOpacity='0.9'/>
            <stop offset='60%' stopColor='#C0A060' stopOpacity='1'/>
            <stop offset='100%' stopColor='#8E763E' stopOpacity='1'/>
          </radialGradient>
          <linearGradient id='btnFace' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#ffffff' stopOpacity='0.85'/>
            <stop offset='100%' stopColor='#f3f4f6' stopOpacity='0.95'/>
          </linearGradient>
        </defs>
        <circle cx='36' cy='36' r='33' fill='url(#goldGlow)'/>
        <circle cx='36' cy='36' r='27' fill='url(#btnFace)'/>
        {/* Subtle inner shadow */}
        <circle cx='36' cy='36' r='27' fill='none' stroke='#000' strokeOpacity='0.06'/>
        {/* Up arrow - professional, balanced */}
        <path d='M26 42 L36 32 L46 42' fill='none' stroke='#5C0000' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
        <rect x='34' y='34' width='4' height='14' rx='2' fill='#5C0000'/>
      </svg>
    </button>
  ) 
}
