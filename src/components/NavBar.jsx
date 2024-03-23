import { FaMoon, FaSun,FaBars } from 'react-icons/fa'
import { LogoDark, LogoLight } from './Logo'
import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../App'
import { changeThemeStorage } from '../localStorage'
import { NavLink, useLocation } from 'react-router-dom'
import InputSearch from './InputSearch'

export default function Header () {
  const { pathname } = useLocation()
  const { isDark, setIsDark } = useContext(ThemeContext)
  const btnMain = useRef(null)

  useEffect(() => {
    changeThemeStorage(isDark)
    if (isDark === false)
      return document.querySelector('html').classList.add('dark')
    document.querySelector('html').classList.remove('dark')
  }, [isDark])

  return (
    <header className='fixed top-0 left-0 w-full h-14 dark:bg-gray-900/50 backdrop-blur bg-slate-100/80 shadow-xl shadow-gray-900/5 border-b-2 border-white/20 z-20'>
      <div className='main md:w-[50rem] md:px-0 px-6 w-full'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center'>
            {isDark ? (
              <LogoDark className='size-7 mr-4' />
            ) : (
              <LogoLight className='size-7 mr-3' />
            )}
            <span className='dark:text-white/80 text-gray-900/80 font-bold tracking-wider md:block hidden'>
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
            <div className="w-full flex items-center relative">
              <div className="md:static  md:visible invisible absolute md:bg-transparent md:dark:bg-transparent dark:bg-slate-700 bg-slate-200  rounded md:p-0 p-2 top-[200%] right-0 flex-1 flex md:flex-row flex-col md:items-center items-end transition" ref={btnMain}>
                <NavLink to='/' className='py-1 px-2 rounded transition-all' aria-label='Ir a la pestaña inicio'>
                  Inicio
                </NavLink>
                <NavLink to='/articles' className='py-1 px-2 rounded transition-all' aria-label='Ir a la pestaña Articulos'>
                  Articulos
                </NavLink>
                <NavLink to='/challenges' className='py-1 px-2 rounded transition-all' aria-label='Ir a la pestaña Challenges'>
                  RetosDev
                </NavLink>
                <NavLink to='/leaderboard' className='py-1 px-2 rounded transition-all' aria-label='Ir a la pestaña LeaderBoard'>
                  LeaderBoard
                </NavLink>
                <button onClick={() => setIsDark(!isDark)} name='btn_theme' className='md:ml-4 md:pr-0 pr-2' aria-label='Cambiar a modo Claro u Oscuro'>
                  {isDark ? (
                    <FaMoon className='fill-gray-600 size-3' />
                  ) : (
                    <FaSun className='fill-yellow-400 size-3' />
                  )}
                </button>
              </div>
              <FaBars className="size-4 md:invisible cursor-pointer" onClick={()=> {btnMain.current.classList.toggle('invisible')
                if(btnMain.current.className.includes('invisible') === false) setTimeout(()=> btnMain.current.classList.add('invisible'),2000)
            }}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
