import PostContainer from '../components/PostContainer'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { urlReplaceToLines } from '../DinamicActionsSEO'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'

export default function Post () {
  const { name } = useParams()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Helmet>
        <title>{ name && urlReplaceToLines(name, false) } || JotaDev</title>
        <meta name="description" content={`Esta es la informacion optenida sobre el articulo, en este caso es sobre ${ name && urlReplaceToLines(name, false) }`}></meta>
      </Helmet>
      <PostContainer title={urlReplaceToLines(name, false)} />
      <Footer />
    </>
  )
}
