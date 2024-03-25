import { Link } from 'react-router-dom';
import { urlReplaceToLines } from '../DinamicActionsSEO';

export default function Article({title, image, description}) {
  return (
    <Link to={`../blog/${urlReplaceToLines(title, true)}`} className="flex flex-col dark:bg-white/5 hover:dark:bg-white/10 bg-gray-300/30 hover:bg-gray-300/50 p-4 rounded">
      <picture className="rounded overflow-hidden h-28 mb-2">
        <img src={`${image}`} alt={`Imagen`} className="object-cover h-full w-full"/>
      </picture>
      <h2 className="text-black/90 dark:text-white/90 text-lg font-bold leading-5 mb-1 mt-2">       
        {title}
      </h2>
      <p className="text-gray-900/70 dark:text-gray-200/90 text-sm">
        {description}
      </p>
    </Link>
  )
}