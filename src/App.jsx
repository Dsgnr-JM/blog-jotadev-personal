import NavBar from './components/NavBar'
import Home from './Routes/Home'
import Post from './Routes/Post'
import Search from './Routes/Search'
import Challenges from './Routes/Challenges'
import { createContext, useState, useEffect } from 'react'
import { initThemeStorage } from './localStorage'
import { useRoutes } from 'react-router-dom'
import { changeTitle } from './DinamicActionsSEO'

export const ThemeContext = createContext()

const router = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/post/:name',
    element: <Post />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/challenges',
    element: <Challenges />
  }
]

function App () {
  const [isDark, setIsDark] = useState(initThemeStorage)
  const [title, setIsTitle] = useState(changeTitle)
  const [ listData, setListData ] = useState(null)
  const [ searchProp, setSearchProp ] = useState('')
  const value = {
    isDark,
    setIsDark,
    setIsTitle,
    listData,
    setListData,
    searchProp,
    setSearchProp
  }
  const element = useRoutes(router)

  useEffect(() => {
    changeTitle(title)
  }, [title])

  return (
    <div className='root w-full min-h-screen text-white dark:bg-slate-800 bg-slate-50 transition-all'>
      <ThemeContext.Provider value={value}>
        <NavBar />
        {element}
      </ThemeContext.Provider>
    </div>
  )
}
export default App
