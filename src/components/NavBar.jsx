import { FaMoon, FaSun } from 'react-icons/fa'
import { LogoDark, LogoLight } from './Logo'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../App'
import { changeThemeStorage } from '../localStorage'
import { NavLink, useLocation } from 'react-router-dom'
import InputSearch from './InputSearch'

export default function Header () {
  const { pathname } = useLocation()
  const { isDark, setIsDark } = useContext(ThemeContext)

  useEffect(() => {
    changeThemeStorage(isDark)
    if (isDark === false)
      return document.querySelector('html').classList.add('dark')
    document.querySelector('html').classList.remove('dark')
  }, [isDark])

  return (
    <header className='fixed top-0 left-0 w-full h-14 dark:bg-gray-900/50 backdrop-blur bg-slate-100/80 shadow-xl shadow-gray-900/5 border-b-2 border-white/20 z-20'>
      <div className='main'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center'>
            {isDark ? (
              <LogoDark className='size-7 mr-4' />
            ) : (
              <LogoLight className='size-7 mr-3' />
            )}
            <span className='dark:text-white/80 text-gray-900/80 font-bold tracking-wider'>
              Jota Dev
            </span>
          </div>
          <div className='flex text-black/60 dark:text-white/90 items-center text-xs'>
            {pathname != '/search' && (
              <InputSearch
                className='h-7 mr-3'
                inputClass='rounded-l-full dark:bg-white/10 bg-white/70'
                ButtonClass='rounded-r-full'

              />
            )}
            <NavLink to='/' className='py-1 px-2 rounded'>
              Inicio
            </NavLink>
            <NavLink to='/challenges' className='py-1 px-2 rounded'>
              Challenges
            </NavLink>
            <NavLink to='/leaderboard' className='py-1 px-2 rounded'>
              LeaderBoard
            </NavLink>
            <button onClick={() => setIsDark(!isDark)} name='btn_theme' className='ml-4:'>
              {isDark ? (
                <FaMoon className='fill-gray-600 size-3' />
              ) : (
                <FaSun className='fill-yellow-400 size-3' />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
