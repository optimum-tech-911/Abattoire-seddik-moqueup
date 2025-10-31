
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { I18N, getLang, setLang } from '../i18n'
import logo from '../assets/Logo.png'

export default function Header(){
  const [lang, setLangState] = useState(getLang())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  
  useEffect(()=>{
    let lastScroll = 0
    const onScroll=()=>{
      const h=document.getElementById('header')
      if(!h)return
      const currentScroll = window.scrollY
      
      if(currentScroll <= 10){
        h.style.transform = 'translateY(0)'
      } else if(currentScroll > lastScroll && currentScroll > 100){
        h.style.transform = 'translateY(-100%)'
      } else if(currentScroll < lastScroll){
        h.style.transform = 'translateY(0)'
      }
      
      lastScroll = currentScroll
    }
    window.addEventListener('scroll',onScroll)
    onScroll()
    return ()=>window.removeEventListener('scroll',onScroll)
  },[])
  
  const t=I18N[lang]
  
  const handleLangChange = (newLang) => {
    setLang(newLang)
    setLangState(newLang)
    location.reload()
  }
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    const el=document.getElementById('mobileNav')
    if(!el)return
    const open=!mobileMenuOpen
    el.style.maxHeight=open? el.scrollHeight+'px':'0px'
  }
  
  return (<header id="header" className="fixed top-0 left-0 right-0 z-50 header-blur transition-transform duration-300">
    <div className="max-w-6xl mx-auto px-3 sm:px-6">
      <div className="h-[80px] md:h-[92px] flex items-center justify-between gap-2">
        {/* Left Section - Contact Button (Desktop only) */}
        <div className="hidden sm:flex items-center gap-2">
          <NavLink to="/contact">
            <button className="btn btn-primary px-3 py-2 rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.57 2.64a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.44-1.14a2 2 0 0 1 2.11-.45c.86.27 1.74.45 2.64.57A2 2 0 0 1 22 16.92z"/></svg>
              <span>{t.ctaContact}</span>
            </button>
          </NavLink>
        </div>
        
        {/* Center Section - Logo & Brand */}
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3 flex-1 sm:flex-initial justify-center sm:justify-start cursor-pointer hover:opacity-90 transition-opacity">
          <img src={logo} alt="logo" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-[#C0A060] flex-shrink-0 shadow-lg object-cover"/>
          <div className="text-white drop-shadow-lg">
            <div className="text-base sm:text-xl md:text-2xl font-extrabold leading-tight" style={{textShadow:'2px 2px 4px rgba(0,0,0,0.5)'}}>{t.brand}</div>
            <div className="text-xs opacity-95 hidden sm:block" style={{textShadow:'1px 1px 2px rgba(0,0,0,0.5)'}}>{t.subtitle}</div>
          </div>
        </NavLink>
        
        {/* Right Section - Navigation & Menu */}
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/apropos" className="px-4 py-2 rounded-xl border-2 border-[#C0A060]/30 backdrop-blur-sm bg-white/15 text-white font-semibold btn hover:bg-[#C0A060]/20 hover:border-[#C0A060]/50" style={{textShadow:'1px 1px 2px rgba(0,0,0,0.5)'}}>{t.nav.apropos}</NavLink>
            <NavLink to="/services" className="px-4 py-2 rounded-xl border-2 border-[#C0A060]/30 backdrop-blur-sm bg-white/15 text-white font-semibold btn hover:bg-[#C0A060]/20 hover:border-[#C0A060]/50" style={{textShadow:'1px 1px 2px rgba(0,0,0,0.5)'}}>{t.nav.services}</NavLink>
            <NavLink to="/contact" className="px-4 py-2 rounded-xl border-2 border-[#C0A060]/30 backdrop-blur-sm bg-white/15 text-white font-semibold btn hover:bg-[#C0A060]/20 hover:border-[#C0A060]/50" style={{textShadow:'1px 1px 2px rgba(0,0,0,0.5)'}}>{t.nav.contact}</NavLink>
          </nav>
          <div className="relative hidden md:block">
            <button 
              className="btn-primary px-3 py-2 rounded-xl font-semibold inline-flex items-center gap-2 btn shadow-lg"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a9 9 0 1 0 9 9"/></svg>
              <span>{lang.toUpperCase()}</span>
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#F2EDE4] rounded-xl shadow-2xl p-2 grid gap-1 z-50 border-2 border-[#C0A060]/30">
                {['fr','en','ar'].map(l=>(
                  <button 
                    key={l} 
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#C0A060]/20 transition-colors font-semibold text-[#2C2C2C]" 
                    onClick={()=>{handleLangChange(l); setLangMenuOpen(false)}}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button id="hamburger" className="md:hidden inline-flex items-center justify-center p-2 rounded-xl btn-primary shadow-lg flex-shrink-0" aria-label="Menu" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
    </div>
    <nav id="mobileNav" className="md:hidden overflow-hidden max-h-0 transition-all duration-300">
      <div className="px-3 pb-3 flex flex-col gap-2 bg-[#F2EDE4]/95 backdrop-blur-sm">
        <NavLink to="/apropos" className="btn-primary px-4 py-2 rounded-xl font-semibold shadow active:scale-95 transition-all">{t.nav.apropos}</NavLink>
        <NavLink to="/services" className="btn-primary px-4 py-2 rounded-xl font-semibold shadow active:scale-95 transition-all">{t.nav.services}</NavLink>
        <NavLink to="/contact" className="btn-primary px-4 py-2 rounded-xl font-semibold shadow active:scale-95 transition-all">{t.nav.contact}</NavLink>
        <div className="border-t-2 border-[#C0A060]/30 pt-2 mt-2">
          <div className="text-sm font-bold text-[#2C2C2C] mb-2 px-2">Language / Langue / اللغة</div>
          {['fr','en','ar'].map(l=>(
            <button key={l} className={`w-full text-left px-4 py-2 rounded-lg transition-colors font-semibold ${lang===l?'btn-primary':'bg-white/50 text-[#2C2C2C] hover:bg-[#C0A060]/20'}`} onClick={()=>handleLangChange(l)}>
              {l==='fr'?'Français':l==='en'?'English':'العربية'}
            </button>
          ))}
        </div>
      </div>
    </nav>
  </header>)
}
