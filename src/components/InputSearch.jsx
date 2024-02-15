import { urlReplaceToLines } from '../DinamicActionsSEO'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useContext,useRef } from 'react'
import { ThemeContext } from '../App'

export default function InputSearch ({ className, inputClass, ButtonClass }) {
  const navigate = useNavigate()
  const $search = useRef()
  const { searchProp, setSearchProp } = useContext(ThemeContext)

  function handleSearch (e) {
    e.preventDefault()
    const inputValue =
      $search.current.value.trim() ||
      urlReplaceToLines(searchProp, false).trim()
    const value = urlReplaceToLines(inputValue, true)
    setSearchProp(value)
    return $search.current.value !== '' && navigate(`/search?param=${value}`)
  }
  return (
    <form className={`w-full flex ${className}`} onSubmit={handleSearch}>
      <input
        type='search'
        aria-label='Buscador de articulos'
        defaultValue={urlReplaceToLines(searchProp, false) || null}
        className={`h-full outline-none px-4 w-auto  font-light dark:text-gray-100/80 text-gray-900 h-full ${inputClass}`}
        placeholder='Que quieres aprender ?'
        ref={$search}
      />
      <button
        name="btn_search"
        type="submit"
        aria-label='Activador de busquedas'
        className={`bg-blue-600 h-full text-white/90 h-full ${ButtonClass} px-4`}
      >
        <FaSearch />
      </button>
    </form>
  )
}
