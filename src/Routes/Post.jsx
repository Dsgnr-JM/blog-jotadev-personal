import PostContainer from '../components/PostContainer'
import Footer from '../components/Footer'
import { ThemeContext } from '../App'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { changeTitle, urlReplaceToLines } from '../DinamicActionsSEO'

export default function Post () {
  const { setIsTitle } = useContext(ThemeContext)
  const { name } = useParams()

  useEffect(() => {
    setIsTitle(changeTitle(urlReplaceToLines(name, false)))
  }, [])
  return (
    <>
      <PostContainer title={urlReplaceToLines(name, false)} />
      <Footer />
    </>
  )
}
