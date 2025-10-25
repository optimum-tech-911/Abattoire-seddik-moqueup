import React from 'react'
import { I18N, getLang } from '../i18n'

export default function Contact(){ 
  const t = I18N[getLang()]
  
  return (
    <main className='max-w-6xl mx-auto px-3 sm:px-6 pb-24 space-y-8'>
      <div className='text-center'>
        <h2 className='text-3xl sm:text-4xl font-bold text-[#990F02]'>{t.contactTitle}</h2>
        <p className='mt-3 text-lg text-[#2C2C2C] font-medium'>{t.contactSubtitle}</p>
      </div>

      {/* Contact Form with vivid styling */}
      <form className='max-w-4xl mx-auto bg-gradient-to-br from-[#F2EDE4] to-white p-6 sm:p-8 rounded-3xl shadow-2xl ring-4 ring-[#C0A060]/40'>
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Name Field */}
          <div className='grid gap-2'>
            <label className='text-sm font-bold text-[#0F0F0F] uppercase tracking-wide'>{t.form.name}</label>
            <input 
              type='text' 
              className='px-4 py-3 rounded-xl border-3 border-[#C0A060]/40 bg-white focus:outline-none focus:ring-4 focus:ring-[#990F02]/50 focus:border-[#990F02] transition-all duration-200 text-[#0F0F0F] font-medium shadow-md' 
              placeholder=''
            />
          </div>

          {/* Email Field */}
          <div className='grid gap-2'>
            <label className='text-sm font-bold text-[#0F0F0F] uppercase tracking-wide'>{t.form.email}</label>
            <input 
              type='email' 
              className='px-4 py-3 rounded-xl border-3 border-[#C0A060]/40 bg-white focus:outline-none focus:ring-4 focus:ring-[#990F02]/50 focus:border-[#990F02] transition-all duration-200 text-[#0F0F0F] font-medium shadow-md' 
              placeholder=''
            />
          </div>

          {/* Phone Field */}
          <div className='grid gap-2 md:col-span-2'>
            <label className='text-sm font-bold text-[#0F0F0F] uppercase tracking-wide'>{t.form.phone}</label>
            <input 
              type='tel' 
              className='px-4 py-3 rounded-xl border-3 border-[#C0A060]/40 bg-white focus:outline-none focus:ring-4 focus:ring-[#990F02]/50 focus:border-[#990F02] transition-all duration-200 text-[#0F0F0F] font-medium shadow-md' 
              placeholder=''
            />
          </div>

          {/* Message Field */}
          <div className='md:col-span-2 grid gap-2'>
            <label className='text-sm font-bold text-[#0F0F0F] uppercase tracking-wide'>{t.form.message}</label>
            <textarea 
              rows='6' 
              className='px-4 py-3 rounded-xl border-3 border-[#C0A060]/40 bg-white focus:outline-none focus:ring-4 focus:ring-[#990F02]/50 focus:border-[#990F02] transition-all duration-200 text-[#0F0F0F] font-medium resize-none shadow-md'
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className='md:col-span-2 flex justify-center'>
            <button 
              type='button' 
              className='btn btn-primary px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-3'
            >
              {t.form.send}
              <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <path d='M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z'/>
              </svg>
            </button>
          </div>
        </div>
      </form>

      {/* Contact Info Cards */}
      <div className='grid sm:grid-cols-3 gap-4 mt-12'>
        <div className='p-6 bg-gradient-to-br from-[#F2EDE4] to-white rounded-2xl shadow-lg ring-4 ring-[#C0A060]/40 flex flex-col items-center text-center gap-3 hover:shadow-2xl hover:ring-[#C0A060]/60 transition-all duration-300'>
          <div className='w-14 h-14 rounded-full bg-[#7B0A01] flex items-center justify-center shadow-lg'>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7 text-[#F2EDE4]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.57 2.64a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.44-1.14a2 2 0 0 1 2.11-.45c.86.27 1.74.45 2.64.57A2 2 0 0 1 22 16.92z'/>
            </svg>
          </div>
          <span className='font-bold text-[#0F0F0F]'>+213 55 00 00 00</span>
        </div>

        <div className='p-6 bg-gradient-to-br from-[#F2EDE4] to-white rounded-2xl shadow-lg ring-4 ring-[#C0A060]/40 flex flex-col items-center text-center gap-3 hover:shadow-2xl hover:ring-[#C0A060]/60 transition-all duration-300'>
          <div className='w-14 h-14 rounded-full bg-[#7B0A01] flex items-center justify-center shadow-lg'>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7 text-[#F2EDE4]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <rect x='3' y='4' width='18' height='16' rx='2'/>
              <path d='M3 7l9 6 9-6'/>
            </svg>
          </div>
          <span className='font-bold text-[#0F0F0F]'>contact@abaoitoire.dz</span>
        </div>

        <div className='p-6 bg-gradient-to-br from-[#F2EDE4] to-white rounded-2xl shadow-lg ring-4 ring-[#C0A060]/40 flex flex-col items-center text-center gap-3 hover:shadow-2xl hover:ring-[#C0A060]/60 transition-all duration-300'>
          <div className='w-14 h-14 rounded-full bg-[#7B0A01] flex items-center justify-center shadow-lg'>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-7 h-7 text-[#F2EDE4]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
              <path d='M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z'/>
              <circle cx='12' cy='10' r='3'/>
            </svg>
          </div>
          <span className='font-bold text-[#0F0F0F]'>Zone Industrielle, Alger, Algérie</span>
        </div>
      </div>
    </main>
  )
}
