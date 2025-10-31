import React from 'react'
import { I18N, getLang } from '../i18n'

export default function Footer(){ 
  const t = I18N[getLang()]
  
  return (
    <footer className='mt-16'>
      {/* Mobile footer - now mirroring desktop content */}
      <div className='bg-[#990F02] border-t-2 border-[#C0A060]/30 md:hidden'>
        <div className='max-w-6xl mx-auto px-4 py-8 grid gap-6'>
          {/* Brand and slogan */}
          <div>
            <div className='font-extrabold text-[#F2EDE4] text-xl drop-shadow-lg'>{t.brand}</div>
            <div className='text-[#F2EDE4]/90 mt-2'>Qualité, Hygiène, Confiance — depuis 1989</div>
          </div>
          {/* Contact details */}
          <div className='text-[#F2EDE4]'>
            <div className='font-bold tracking-wide text-[#C0A060] mb-2'>Contact</div>
            <div className='flex items-center gap-2'><svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.57 2.64a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.44-1.14a2 2 0 0 1 2.11-.45c.86.27 1.74.45 2.64.57A2 2 0 0 1 22 16.92z'/></svg> +213 55 00 00 00</div>
            <div className='flex items-center gap-2 mt-1'><svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M4 4h16v16H4z'/><path d='M22 6l-10 7L2 6'/></svg> contact@abattoir.dz</div>
            <div className='flex items-center gap-2 mt-1'><svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z'/><circle cx='12' cy='10' r='3'/></svg> Zone Industrielle, Alger, Algérie</div>
          </div>
          {/* Opening hours and socials */}
          <div className='text-[#F2EDE4]'>
            <div className='font-bold tracking-wide text-[#C0A060] mb-2'>Horaires</div>
            <div>Lun–Sam: 08:00–18:00</div>
            <div>Dimanche: Fermé</div>
            <div className='flex items-center gap-3 mt-3'>
              <a aria-label='Facebook' href='#' className='hover:opacity-80 transition-opacity'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-5 h-5 fill-[#F2EDE4]'><path d='M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z'/></svg>
              </a>
              <a aria-label='Instagram' href='#' className='hover:opacity-80 transition-opacity'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-5 h-5 fill-[#F2EDE4]'><path d='M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm5.5-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z'/></svg>
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className='pt-4 border-t border-[#C0A060]/30 text-[#F2EDE4]/90 text-sm'>
            © All rights reserved to Abattoir Seddik 2025.
          </div>
        </div>
      </div>

      {/* Desktop-only refined footer */}
      <div className='hidden md:block bg-[#990F02] border-t-2 border-[#C0A060]/30'>
        <div className='max-w-6xl mx-auto px-6 py-6'>
          <div className='grid grid-cols-3 gap-8 items-start'>
            {/* Brand and slogan */}
            <div>
              <div className='font-extrabold text-[#F2EDE4] text-2xl drop-shadow-lg'>{t.brand}</div>
              <div className='text-[#F2EDE4]/90 mt-2'>Qualité, Hygiène, Confiance — depuis 1989</div>
            </div>
            {/* Contact details */}
            <div className='text-[#F2EDE4]'>
              <div className='font-bold tracking-wide text-[#C0A060] mb-2'>Contact</div>
              <div className='flex items-center gap-2'><svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.57 2.64a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.44-1.14a2 2 0 0 1 2.11-.45c.86.27 1.74.45 2.64.57A2 2 0 0 1 22 16.92z'/></svg> +213 55 00 00 00</div>
              <div className='flex items-center gap-2 mt-1'><svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M4 4h16v16H4z'/><path d='M22 6l-10 7L2 6'/></svg> contact@abattoir.dz</div>
              <div className='flex items-center gap-2 mt-1'><svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z'/><circle cx='12' cy='10' r='3'/></svg> Zone Industrielle, Alger, Algérie</div>
            </div>
            {/* Opening hours and socials */}
            <div className='text-[#F2EDE4] sm:text-right'>
              <div className='font-bold tracking-wide text-[#C0A060] mb-2'>Horaires</div>
              <div>Lun–Sam: 08:00–18:00</div>
              <div>Dimanche: Fermé</div>
              <div className='flex sm:justify-end items-center gap-3 mt-3'>
                <a aria-label='Facebook' href='#' className='hover:opacity-80 transition-opacity'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-5 h-5 fill-[#F2EDE4]'><path d='M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z'/></svg>
                </a>
                <a aria-label='Instagram' href='#' className='hover:opacity-80 transition-opacity'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-5 h-5 fill-[#F2EDE4]'><path d='M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm5.5-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z'/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className='mt-5 pt-4 border-t border-[#C0A060]/30 text-[#F2EDE4]/90 text-sm flex items-center justify-between'>
            <div></div>
            <div>© All rights reserved to Abattoir Seddik 2025.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
