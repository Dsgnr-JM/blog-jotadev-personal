import Badge from '../components/Badge'
import { FaCircle } from 'react-icons/fa'

const dificultyColors = [
  'fill-lime-500/70',
  'fill-yellow-400/70',
  'fill-amber-500/70',
  'fill-orange-500/70',
  'fill-red-600/70'
]

export default function Challenge({
  num,
  title,
  description,
  langs,
  dificulty,
  state,
  changeInfo
}) {
  num += 1
  dificulty = [...Array(dificulty).fill('x'), ...Array(5 - dificulty).fill('')]
  return (
    <div
      className='bg-gray-200/50 dark:bg-white/5 cursor-pointer hover:bg-gray-200/80 dark:hover:bg-white/10 p-4 rounded h-48 flex flex-col justify-between'
      onClick={() => {
        state(true)
        changeInfo({num, title, description, langs, dificulty, state})
      }}
    >
      <h2 className='flex align-middle'>
        <span className='text-4xl font-bold rotate-6 dark:text-sky-400 text-sky-500'>
          #
        </span>
        <span className='font-extrabold text-7xl dark:text-white text-black/90 -rotate-6'>
          {num > 9 ? num : '0' + num}
        </span>
      </h2>
      <div>
        <h3 className='text-base dark:text-gray-50/85 text-gray-700/95 leading-5'>
          {title}
        </h3>
        {<span className='flex gap-1 mt-1'>
          {dificulty.map((item, i) => (
            <FaCircle
              key={i}
              className={`size-2 ${item == 'x' ? dificultyColors[i] : 'dark:fill-gray-500 fill-gray-300'}`}
            />
          ))}
        </span>}
      </div>
      {<div className='mt-2'>
        {
          Array(1).fill('').map((item, i) => <Badge key={i} title={langs[i]} tag={langs[i]}/>)
        }
      </div>}
    </div>
  )
}
