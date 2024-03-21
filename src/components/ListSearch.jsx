import { FaChevronRight } from 'react-icons/fa'
import { useEffect } from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { selectIcon } from '../store/data'
import { urlReplaceToLines } from '../DinamicActionsSEO'
import { SkeletonList } from './Skeleton'
import { useContext, useLayoutEffect } from 'react'
import { ThemeContext } from '../App'
import { SearchNotFound } from './Error'

export default function ListSearch() {
  const { listData, setListData, searchProp } = useContext(ThemeContext)
  useLayoutEffect(() => {
    setListData(null)
  }, [])
  useEffect(() => {
    async function getSearch() {
      setListData(null)
      const fetchData = await fetch('./data.json')
      const list = await fetchData.json()
      // Buscador por ahora
      const searchList = list.filter((item) => {
        const reg = new RegExp(searchProp.toLowerCase(), 'g')
        return item.title_article.toLowerCase().match(reg) && item
      })
      setListData(searchList)
    }
    getSearch()
  }, [searchProp])

  return (
    <div className='w-full h-auto'>
      <span className='dark:text-white/80 text-black/50 flex items-center gap-1'>
        <span className='font-semibold text-cyan-500 dark:text-cyan-300 md:text-base'>{listData && listData.length}</span> Resultados para la busqueda
        <span className='font-semibold text-cyan-500 dark:text-cyan-300'>
          {searchProp}
        </span>
        <FaChevronRight className='font-extrabold size-4 text-black dark:text-white' />
      </span>
      {!listData ? (
        <SkeletonList />
      ) : listData.length > 0 ? (
        <ul className='w-full h-auto mt-6 gap-4 flex flex-col'>
          {listData.map((dataItem, i) => (
                      <ListItem
                        key={i}
                        title={dataItem.title_article}
                        icon={selectIcon(dataItem.language).icon}
                        stars={dataItem.stars}
                      />
                    ))}
        </ul>
      ) : (
        <SearchNotFound/>
      )}
    </div>
  )
}

function ListItem({ icon, title, stars }) {
  const urlTitle = urlReplaceToLines(title, true)
  const { setSearchProp } = useContext(ThemeContext)

  return (
    <Link
      to={`/blog/${urlTitle}`}
      onClick={ () => setSearchProp('') }
      className='w-full flex px-4 py-3 gap-2 dark:bg-white/10 bg-gray-300/20 dark:hover:bg-white/20 hover:bg-gray-200/70 justify-between items-center text-black rounded transition-colors'
    >
      <span className="size-6">{icon}</span>
      <div className='flex w-full flex-1'>
        <div className='flex gap-4 justify-start w-full'>
          <h2 className='text-sm dark:text-white/70 md:max-w-[80%] max-w-[70%] md:max-h-auto max-h-4 text-pretty overflow-hidden text-gray-700 uppercase font-semibold'>
            {title}
          </h2>
          <div>
            { stars && <Rating stars={stars} />}
          </div>
        </div>
        <FaChevronRight className='fill-black dark:fill-white' />
      </div>
    </Link>
  )
}
