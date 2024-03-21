import PostContainer from '../components/PostContainer'
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
        <meta property="og:title" content={name && title}></meta>
        <meta property="og:description" content={`En este articulo optendras informacion relacionada con ${ name && urlReplaceToLines(name, false) }`}></meta>
        <meta property="og:image" content={`../og-blog.PNG`}></meta>
        <meta property="og:url" content="www.jotadev0.vercel.app"></meta>
        <meta property="og:type" content="website"/>
      </Helmet>
      <PostContainer title={title} />
    </>
  )
}
