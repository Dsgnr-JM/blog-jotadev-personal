import { selectTag } from '../store/data'

function Tags ({ children }) {
  return (
    <div className='flex items-center w-48 justify-start gap-1 tags mb-1'>
      {children}
    </div>
  )
}

function Tag ({ children, type }) {
  return (
    <div
      className={`flex items-center px-2 py-[0.1rem] leading-[initial] dark:hover:text-slate-800 hover:text-slate-50 text-xs rounded bg-none border-[1px] cursor-pointer transition ${selectTag(type)} font-semibold`}
    >
      {children}
    </div>
  )
}

export { Tags, Tag }
