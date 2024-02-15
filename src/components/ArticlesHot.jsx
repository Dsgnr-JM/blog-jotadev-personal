import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { urlReplaceToLines } from '../DinamicActionsSEO'

export default function ArticlesHot ({ icon, title }) {
  const urlTitle = urlReplaceToLines(title, true)

  return (
    <li className='w-full h-auto'>
      <Link
        to={`/post/${urlTitle}`}
        aria-label={`Articulo relacionado a ${title}`}
        className='flex py-2 px-4 bg-gray-200/50 dark:text-white/90 text-slate-800/90 dark:bg-white/5 rounded-md items-center my-3 w-full h-auto cursor-pointer hover:bg-gray-200/80 dark:hover:bg-white/10 transition'
      >
        {icon}
        <div className='flex items-center justify-between flex-1 ml-4'>
          <h2 className='font-semibold md:text-base text-sm text-current'>{title}</h2>
          <FaArrowRight />
        </div>
      </Link>
    </li>
  )
}
