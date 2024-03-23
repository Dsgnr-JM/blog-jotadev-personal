import { Helmet } from 'react-helmet'
import Article from '../components/Article'
import { useEffect, useState } from 'react';
import { SkeletonArticles } from '../components/Skeleton'

export default function Articles() {
  const [articles, setArticles] = useState(null)
  useEffect(() => {
    window.scrollTo(0,0)
    async function getArticles () {
      const fetching = await fetch('./data.json')
      const data = await fetching.json()
      setArticles(data)
    }
    getArticles()
  },[])
  return (
    <>
      <Helmet>
        <title>Seccion de articulos || JotaDev</title>
        <meta
          name='description'
          content='Esta es la seccion con todos los articulos escritos y publicados en el blog'
        />
      </Helmet>
      <section className='pt-24 pb-4'>
        <main className='main md:w-[50rem] w-full md:px-0 px-2 flex-col'>
          <div className="w-full mb-8">
            <h1 className="md:text-3xl text-2xl font-extrabold dark:text-white text-black capitalize">Articulos de JotaDev</h1>
            <p className="text-base dark:text-gray-50/85 text-gray-700/95 my-1 md:w-4/5 w-full">Esta es la coleccion completa 😋 de todos los articulos relacionados, escritos y publicados en el blog, si necesitas informacion pues aqui la encontraras.</p>
          </div>
          {
            articles
            ?  
              <div className="grid md:grid-cols-3 grid-cols-2 gap-3 w-full">                
                {articles.reverse().map((item, i) => <Article key={i} title={item.title_article} image={item.image} description={item.description}/>)}         
              </div>
            :
              <SkeletonArticles/>
          }
        </main>
      </section>
    </>
  )
}