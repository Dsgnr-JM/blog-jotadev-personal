import NavBar from './components/NavBar'
import Home from './Routes/Home'
import Post from './Routes/Post'
import Search from './Routes/Search'
import LeaderBoad from './Routes/LeaderBoard'
import Challenges from './Routes/Challenges'
import { createContext, useState } from 'react'
import { initThemeStorage } from './localStorage'
import { useRoutes } from 'react-router-dom'

export const ThemeContext = createContext()

const router = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/blog/:name',
    element: <Post />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/challenges',
    element: <Challenges />
  },
  {
    path: '/leaderboard',
    element: <LeaderBoad />
  }
]

function App () {
  const [isDark, setIsDark] = useState(initThemeStorage || false)
  const [listData, setListData] = useState(null)
  const [searchProp, setSearchProp] = useState('')
  const value = {
    isDark,
    setIsDark,
    listData,
    setListData,
    searchProp,
    setSearchProp
  }
  const element = useRoutes(router)

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
