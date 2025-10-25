import React from 'react'
import { I18N, getLang } from '../i18n'

export default function Footer(){ 
  const t = I18N[getLang()]
  
  return (
    <footer className='mt-16'>
      <div className='bg-[#990F02] backdrop-blur border-t-2 border-[#C0A060]/30'>
        <div className='max-w-6xl mx-auto px-3 sm:px-6 py-10 grid sm:grid-cols-3 gap-6'>
          <div>
            <div className='font-extrabold text-[#F2EDE4] text-xl drop-shadow-lg'>{t.brand}</div>
            <div className='text-base text-[#F2EDE4] mt-3 font-medium'>Zone Industrielle, Alger, Algérie</div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <a href='/apropos' className='px-4 py-2 rounded-xl border-2 border-[#C0A060]/30 backdrop-blur-sm bg-white/10 text-[#F2EDE4] font-semibold btn hover:bg-[#C0A060]/20 hover:border-[#C0A060]/50 transition-all'>{t.footer.apropos}</a>
            <a href='/services' className='px-4 py-2 rounded-xl border-2 border-[#C0A060]/30 backdrop-blur-sm bg-white/10 text-[#F2EDE4] font-semibold btn hover:bg-[#C0A060]/20 hover:border-[#C0A060]/50 transition-all'>{t.footer.services}</a>
            <a href='/contact' className='px-4 py-2 rounded-xl border-2 border-[#C0A060]/30 backdrop-blur-sm bg-white/10 text-[#F2EDE4] font-semibold btn hover:bg-[#C0A060]/20 hover:border-[#C0A060]/50 transition-all'>{t.footer.contact}</a>
          </div>
          <div className='sm:text-right text-base text-[#F2EDE4] font-medium'>
            <div className='flex sm:justify-end items-center gap-2'>+213 55 00 00 00</div>
            <div className='flex sm:justify-end items-center gap-2 mt-2'>contact@abaoitoire.dz</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
