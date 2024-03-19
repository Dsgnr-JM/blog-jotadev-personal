export default function Badge({ title }) {
  return (
    <div className="px-2 py-[1px] dark:bg-white/10 bg-gray-200/80 dark:text-white/70 inline-block text-sm rounded-full border-t-2 border-r-2 dark:border-white/5 border-gray-300/50 hover:dark:bg-white/15 hover:bg-gray-300/60 cursor-pointer">
      {title}
    </div>
  )
}