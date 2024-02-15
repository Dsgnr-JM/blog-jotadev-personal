import { dataBento } from '../store/data'

export default function Bento () {
  return (
    <div className='w-full flex items-center gap-2 py-4 justify-center mt-8 grid grid-cols-5 h-full'>
      {dataBento.map((item, index) => (
        <BentoItem
          key={index}
          grid={item.grid}
          color={item.color}
          subtitle={item.subtitle}
          position={item.position}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </div>
  )
}
function BentoItem ({ grid, title, color, position, subtitle, icon }) {
  return (
    <div
      className={`${grid} relative w-full h-full dark:bg-white/5 bg-gray-100/90 backdrop-blur-xl overflow-hidden rounded-md cursor-pointer hover:-translate-y-1 dark:hover:bg-white/10 transition-transform duration-200 border-b-[0.1rem] dark:border-white/5 border-black/5 p-4`}
    >
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <div>{icon}</div>
        <h1 className='font-bold tracking-tighter dark:text-white text-black'>
          {title}
        </h1>
        {subtitle && (
          <p className='dark:text-gray-50/50 text-gray-900/70 md:text-sm text-xs text-center text-pretty'>
            {subtitle}
          </p>
        )}
      </div>
      <div
        className={`size-24 absolute ${color} blur-3xl -z-10 ${position}`}
      />
    </div>
  )
}
