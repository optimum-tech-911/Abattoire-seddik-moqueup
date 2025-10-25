import React from 'react'
import { I18N, getLang } from '../i18n'

export default function Services(){ 
  const t = I18N[getLang()]
  
  const cards = [
    {
      title: t.svc1t,
      text: t.svc1d,
      img: '/src/assets/Notre engagement 1.png'
    },
    {
      title: t.svc2t,
      text: t.svc2d,
      img: '/src/assets/Notre engagement 2.png'
    },
    {
      title: t.svc3t,
      text: t.svc3d,
      img: '/src/assets/Notre engagement 3.png'
    },
    {
      title: t.svc4t,
      text: t.svc4d,
      img: '/src/assets/Notre engagement 4.png'
    },
    {
      title: t.svc5t,
      text: t.svc5d,
      img: '/src/assets/Notre engagement 5.png'
    }
  ]
  
  const gallery = [
    '/src/assets/Notre engagement 1.png',
    '/src/assets/Notre engagement 2.png',
    '/src/assets/Notre engagement 3.png',
    '/src/assets/Notre engagement 4.png',
    '/src/assets/Notre engagement 5.png',
    '/src/assets/Notre équipe 1.png',
    '/src/assets/Notre équipe 2.png',
    '/src/assets/Notre équipe 3.png'
  ]
  
  return (
    <main className='max-w-6xl mx-auto px-3 sm:px-6 pb-24 space-y-10'>
      <h2 className='text-2xl sm:text-3xl font-bold text-[#990F02]'>{t.servicesTitle}</h2>
      
      {/* Services Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cards.map((s, idx) => (
          <div key={idx} className='group rounded-3xl overflow-hidden shadow-xl ring-4 ring-[#C0A060]/40 bg-white hover:shadow-2xl hover:ring-[#C0A060]/60 transition-all duration-300'>
            <div className='aspect-[4/3] overflow-hidden'>
              <img 
                src={s.img} 
                alt={s.title} 
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
              />
            </div>
            <div className='p-5'>
              <h3 className='text-lg font-bold text-[#990F02]'>{s.title}</h3>
              <p className='mt-2 text-[#2C2C2C] text-sm leading-relaxed font-medium'>{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Section with Horizontal Scroll Animation - Works on ALL devices */}
      <div className='mt-16'>
        <h3 className='text-2xl font-bold text-[#990F02] mb-6'>{t.galleryTitle}</h3>
        
        <div className='relative overflow-hidden rounded-2xl shadow-2xl ring-4 ring-[#C0A060]/40 bg-[#F2EDE4] p-4'>
          {/* Animated scrolling container - now works on mobile too! */}
          <div className='gallery-scroll flex gap-4 animate-scroll'>
            {[...gallery, ...gallery].map((src, i) => (
              <div 
                key={i} 
                className='flex-shrink-0 w-64 sm:w-72 md:w-80 rounded-xl overflow-hidden shadow-lg ring-2 ring-[#C0A060]/60 hover:ring-4 hover:ring-[#C0A060] transition-all duration-300 hover:scale-105'
              >
                <img 
                  src={src} 
                  alt={`gallery ${i}`} 
                  className='w-full h-56 object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        <div className='mt-4 text-center text-sm text-[#2C2C2C] font-medium'>
          <p>✨ Passez la souris pour mettre en pause / Touch to pause ✨</p>
        </div>
      </div>
    </main>
  )
}
