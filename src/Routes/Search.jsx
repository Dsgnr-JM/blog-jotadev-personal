import { useSearchParams } from 'react-router-dom'
import InputSearch from '../components/InputSearch'
import ListSearch from '../components/ListSearch'
import { urlReplaceToLines } from '../DinamicActionsSEO'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export default function Search () {
  const [ listData, setListData ] = useState(null)
  const { searchProp, setSearchProp } = useContext(ThemeContext)
  const [searchParams] = useSearchParams()
  const param = searchParams.get('param')
  useEffect(()=>{
    setSearchProp(urlReplaceToLines(param, false))
  },[param])

  return (
    <section className='pt-20'>
      <div className='main flex-col gap-3'>
        <InputSearch
          className='h-10'
          ButtonClass='rounded-r'
          param={{searchProp, setSearchProp}}
          inputClass='flex-1 rounded-l dark:bg-white/15 bg-white'
        />
        <ul className='flex gap-5 w-full border-b-2 dark:border-gray-500/30 border-gray-300/40 dark:text-gray-200 text-gray-600 py-2 text-sm font-semibold mb-2'>
          <li>Nuevos</li>
          <li>Mas vistos</li>
          <li>Para ti</li>
        </ul>
        <ListSearch param={searchProp} listData={{ listData, setListData }}/>
      </div>
    </section>
  )
}
