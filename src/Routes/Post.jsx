import PostContainer from '../components/PostContainer'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { urlReplaceToLines } from '../DinamicActionsSEO'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'

export default function Post () {
  const { name } = useParams()
  const title = urlReplaceToLines(name, false)
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Helmet>
        <title>{ name && title } || JotaDev</title>
        <meta name="description" content={`Esta es la informacion optenida sobre el articulo, en este caso es sobre ${ name && urlReplaceToLines(name, false) }`}></meta>
      </Helmet>
      <PostContainer title={title} />
      <Footer />
    </>
  )
}
