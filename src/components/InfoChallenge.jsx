import Badge from './Badge'
import { FaCircle } from 'react-icons/fa';

const dificultyColors = [
  'fill-lime-500/70',
  'fill-yellow-400/70',
  'fill-amber-500/70',
  'fill-orange-500/70',
  'fill-red-600/70'
]

export default function InfoChallenge({ state,info }) {
  return (
    <div
      className={`${state ? 'md:col-start-4 col-start-1 md:col-end-6 col-end-3 md:row-start-1 row-start-1 md:row-end-3 row-end-1 transition-all md:ml-2' : 'hidden opacity-0'} bg-gray-200/50 dark:bg-white/5 rounded p-4 text-center`}
    >
    <div className="flex md:flex-col md:gap-1 gap-4 justify-between h-full">
      <div className='text-3xl font-bold dark:text-white/80 text-black/60'>
        <span className="block -mb-2 -rotate-3">Reto</span>
        <p className="flex align-middle justify-center">
          <span className='text-6xl dark:text-sky-400 text-sky-500'>#</span>
          <span className='text-8xl font-extrabold dark:text-white text-black/90'>{info.num > 9 ? info.num : '0' + info.num}</span>
          
        </p>
        <h2 className='font-bold text-xl dark:text-white text-black'>{info.title}</h2>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="text-left mb-1 font-semibold dark:text-sky-400 text-sky-500">
          <h3 className="text-lg mt-2 font-semibold dark:text-sky-400 text-sky-500">Descripcion:</h3>
          <p className="text-sm font-light dark:text-white/70 text-black/70">{info.description}</p>
          <span className="flex gap-1 items-center my-2">
            Dificultad:
            {info.dificulty.map((item, i) => (
              <FaCircle
                key={i}
                className={`size-2 ${item == 'x' ? dificultyColors[i] : 'dark:fill-gray-500 fill-gray-300'}`}
              />
            ))}
          </span>
          <span className="flex gap-1 flex-wrap my-1">
            {info.langs.map((lang,i) => (
              <Badge title={lang} tag={lang} key={i} />
            ))}
          </span>
        </div>
      <div className="flex md:justify-between gap-1 md:text-base text-sm">
        <a target="_blank" href="https://github.com/Dsgnr-JM/challenges" className="px-2 py-1 dark:bg-gray-100/10 bg-gray-400/30 hover:bg-gray-400/50 text-black/80 dark:text-white hover:dark:bg-gray-100/15 transition-colors rounded">Participar</a>
        <a target="_blank" href={`https://github.com/Dsgnr-JM/challenges/${info.num}`} className="px-2 py-1 dark:bg-sky-400 hover:dark:bg-sky-500 bg-sky-500 hover:bg-sky-600 dark:text-slate-800 transition-colors rounded">Resolver</a>
      </div>
      </div>
      </div>
    </div>
  )
}
