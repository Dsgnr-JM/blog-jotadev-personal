import { selectTag, selectIcon } from '../store/data';

export default function Badge({ title, tag }) {
  const classTag = tag && selectTag(tag.toLowerCase())
  const logo = tag && selectIcon(tag.toLowerCase())
  return (
    <button key={crypto.randomUUID()} className={`px-2 py-[1px] flex items-center gap-1 ${tag && tag !== 'all' ? classTag : 'dark:bg-white/10 bg-gray-200/80 dark:text-white/70 text-gray-600 hover:dark:bg-white/15 hover:bg-gray-300/60'} inline-block text-sm rounded-full border-t-2 border-r-2 dark:border-white/5 border-gray-600/5  cursor-pointer transition`}>
      {logo && logo.logo}
      <span className="first-letter:uppercase">{title}</span>
    </button>
  )
}