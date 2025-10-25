import React from 'react'
import { I18N, getLang } from '../i18n'

export default function Apropos(){ 
  const t = I18N[getLang()]
  
  const engagementServices = [
    {
      title: t.engagement1t,
      desc: t.engagement1d,
      img: '/src/assets/Notre engagement 1.png'
    },
    {
      title: t.engagement2t,
      desc: t.engagement2d,
      img: '/src/assets/Notre engagement 2.png'
    },
    {
      title: t.engagement3t,
      desc: t.engagement3d,
      img: '/src/assets/Notre engagement 3.png'
    },
    {
      title: t.engagement4t,
      desc: t.engagement4d,
      img: '/src/assets/Notre engagement 4.png'
    },
    {
      title: t.engagement5t,
      desc: t.engagement5d,
      img: '/src/assets/Notre engagement 5.png'
    }
  ]
  
  return (
    <main className='max-w-6xl mx-auto px-3 sm:px-6 pb-24 space-y-12'>
      {/* À propos de nous section */}
      <div>
        <h2 className='text-2xl sm:text-3xl font-bold text-[#990F02]'>{t.aProposTitle}</h2>
        <p className='mt-3 text-[#2C2C2C] text-lg font-medium'>{t.aProposIntro}</p>
      </div>

      {/* Placeholder image between sections */}
      <div className='rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#C0A060]/40'>
        <img 
          src='/src/assets/about us.png' 
          alt='Abattoir facilities' 
          className='w-full h-64 sm:h-96 object-cover'
        />
      </div>

      {/* Notre histoire section */}
      <div className='grid md:grid-cols-2 gap-6 items-start'>
        <div className='space-y-3'>
          <h3 className='text-2xl font-semibold text-[#990F02]'>{t.aProposStoryTitle}</h3>
          <p className='text-[#2C2C2C] text-lg leading-relaxed font-medium'>{t.aProposStory}</p>
        </div>
        <div className='rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#C0A060]/40'>
          <img 
            src='/src/assets/about us.png' 
            alt='bouchers professionnels' 
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      {/* Notre équipe section */}
      <div>
        <h3 className='text-2xl font-semibold text-[#990F02]'>{t.teamTitle}</h3>
        <p className='mt-3 text-[#2C2C2C] text-lg font-medium'>{t.teamText}</p>
        <div className='mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='rounded-2xl overflow-hidden shadow-md ring-2 ring-[#C0A060]/40'>
            <img 
              src='/src/assets/Notre équipe 1.png' 
              alt='team' 
              className='w-full h-52 object-cover'
            />
          </div>
          <div className='rounded-2xl overflow-hidden shadow-md ring-2 ring-[#C0A060]/40'>
            <img 
              src='/src/assets/Notre équipe 2.png' 
              alt='team' 
              className='w-full h-52 object-cover'
            />
          </div>
          <div className='rounded-2xl overflow-hidden shadow-md ring-2 ring-[#C0A060]/40'>
            <img 
              src='/src/assets/Notre équipe 3.png' 
              alt='team' 
              className='w-full h-52 object-cover'
            />
          </div>
        </div>
      </div>

      {/* Notre engagement section with services */}
      <div className='space-y-6'>
        <div className='rounded-3xl bg-gradient-to-br from-[#F2EDE4] to-white shadow-xl ring-4 ring-[#C0A060]/40 p-6 sm:p-8'>
          <h3 className='text-2xl sm:text-3xl font-bold text-[#990F02]'>{t.proTouchTitle}</h3>
          <p className='mt-3 text-[#2C2C2C] text-lg font-medium'>{t.proTouchText}</p>
        </div>

        {/* Services grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {engagementServices.map((service, idx) => (
            <div key={idx} className='group rounded-2xl overflow-hidden shadow-lg ring-4 ring-[#C0A060]/40 bg-white hover:shadow-2xl hover:ring-[#C0A060]/60 transition-all duration-300'>
              <div className='aspect-[4/3] overflow-hidden'>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>
              <div className='p-5'>
                <h4 className='text-lg font-bold text-[#990F02] mb-2'>{service.title}</h4>
                <p className='text-[#2C2C2C] text-sm leading-relaxed font-medium'>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
