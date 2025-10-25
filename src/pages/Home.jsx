import React from 'react'
import { I18N, getLang } from '../i18n'

export default function Home(){ 
  const t = I18N[getLang()]
  
  return (
    <section className='relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-[#F2EDE4] to-white pointer-events-none'></div>
      <div className='max-w-6xl mx-auto px-3 sm:px-6 py-10 sm:py-16'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div className='bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl ring-2 ring-[#C0A060]/30'>
            <h1 className='text-3xl sm:text-5xl font-extrabold text-[#990F02] drop-shadow-sm'>{t.heroTitle}</h1>
            <p className='mt-4 text-lg sm:text-xl text-[#0F0F0F] font-bold leading-relaxed'>{t.heroSubtitle}</p>
            <div className='mt-6 flex gap-3'>
              <a href='/contact'>
                <button className='btn px-6 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 shadow-2xl bg-[#990F02] hover:bg-[#B61606] text-[#F2EDE4] transition-all transform hover:scale-105'>
                  {t.ctaContact}
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth="2">
                    <path d='M7 17L17 7M7 7h10v10'/>
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <div className='relative'>
            <div className='aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#C0A060]/60'>
              <img 
                src='/src/assets/landing page.png' 
                alt='abattoir pro' 
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
