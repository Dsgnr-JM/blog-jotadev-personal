import { LogoDark } from '../components/Logo'
import {
  FaDiscord,
  FaGithub,
  FaWhatsapp,
  FaCode,
  FaUserPlus,
  FaFireAlt
} from 'react-icons/fa'
import Bento from '../components/Bento'
import ArticlesHot from '../components/ArticlesHot'
import About from '../components/About'
import { selectIcon } from '../store/data'
import { SkeletonHot } from '../components/Skeleton'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import Badge from '../components/Badge.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  const [hotArticles, setHotArticles] = useState(null)
  useEffect(() => {
    async function getArticlesHot() {
      const fetching = await fetch(`./data.json`)
      const data = await fetching.json()
      setHotArticles(data.reverse().slice(0, 4))
    }
    getArticlesHot()
  }, [])
  return (
    <div className='main md:w-[50rem] md:px-0 px-4 w-full flex-col'>
      <Helmet>
        <title>Mas que un Codigo || JotaDev</title>
        <meta
          name='description'
          content='Este es un blog sobre desarrollado web, pensado para ser usado como guia de referencia rapida por los programadores ya sean trainner, junior, midnior, senior. Los lenguages abarcados son HTML, CSS, JavaScript, React, TailwindCss, PHP, MySQL'
        />
        <meta property='og:title' content='Mas que un Codigo || JotaDev'/>
        <meta
          property='og:description'
          content='Este es un blog sobre desarrollado web, pensado para ser usado como guia de referencia rapida por los programadores ya sean trainner, junior, midnior, senior. Los lenguages abarcados son HTML, CSS, JavaScript, React, TailwindCss, PHP, MySQL'
        />
        <meta property='og:image' content='./og-blog.PNG'/>
        <meta property='og:url' content='www.jotadev0.vercel.app'/>
        <meta property='og:type' content='website'/>
      </Helmet>
      <header className='w-full flex flex-col md:h-screen lg:h-[37rem] h-[90vh]'>
        <div className='w-full flex md:justify-between justify-center md:flex-row flex-col h-full items-center -mb-16 md:gap-0 gap-4'>
          <div className='md:max-w-[50%] max-w-max md:flex-auto md:text-left text-center md:order-1 order-2'>
            <h1 className='md:text-7xl text-6xl font-semibold dark:text-white text-black mb-3'>
              Jota
              <strong className='font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text'>
                Dev
              </strong>
            </h1>
            <p className='text-base dark:text-gray-100 text-gray-900/90'>
              Bienvenido, soy JotaDev{' '}
              <span className='dark:text-blue-400 text-blue-600'>
                desarrollador Web{' '}
              </span>
              desde los
              <span className='dark:text-indigo-300 text-indigo-600'>
                {' '}
                17 años
              </span>
              , es un placer conocerte.
              <span className='md:inline hidden'>
                {' '}Este Blog esta pensado para que pueda se usado como una
                <span className='dark:text-sky-300 text-sky-600'>
                  {' '}
                  guia de referencia rapida.
                </span>
              </span>
              <span className='flex gap-1 mt-4 items-center md:justify-start justify-center'>
                <Badge title='❤ Frontend' />
                <Badge title='🗽 Backend' />
                <Badge title='📲 SEO' />
              </span>
            </p>
          </div>
          <div className='relative md:order-2 order-1 md:my-0 my-6'>
            <LogoDark className='md:size-48 size-40 rotate-6 md:mr-8' />
            <LogoDark className='md:size-48 size-40 rotate-6 md:mr-8 blur-2xl absolute inset-0 opacity-40 scale-120' />
          </div>
        </div>
        <div className='flex justify-center gap-4 w-full pb-12'>
          <a
            target='_blank'
            href='https://github.com/Dsgnr-JM'
            aria-label='Redireccionar a el github de JotaDev'
            className='flex gap-2 items-center px-2 py-1.5 dark:bg-gray-100/10 bg-gray-600/10 rounded group hover:bg-blue-500 transition duration-300'
          >
            <FaGithub className='dark:text-white text-blue-600 size-6 group-hover:text-gray-200 group-hover:dark:text-gray-100' />
          </a>
          <a
            target='_blank'
            href='https://www.discord.com/JotaDev'
            aria-label='Redireccionar a el grupo de Discord de JotaDev'
            className='flex gap-2 items-center px-2 py-1.5 dark:bg-gray-100/10 bg-gray-600/10 rounded group hover:bg-blue-500 transition duration-300'
          >
            <FaDiscord className='dark:text-white text-blue-600 size-6 group-hover:text-gray-200 group-hover:dark:text-gray-100' />
          </a>
          <a
            target='_blank'
            href='https://www.whatsapp.org'
            aria-label='Redireccionar a el grupo de WhatsApp "Programadores"'
            className='flex gap-2 items-center px-2 py-1.5 dark:bg-gray-100/10 bg-gray-600/10 rounded group hover:bg-blue-500 transition duration-300'
          >
            <FaWhatsapp className='dark:text-white text-blue-600 size-6 group-hover:text-gray-200 group-hover:dark:text-gray-100' />
          </a>
        </div>
      </header>
      <div className='flex flex-col h-auto my-9 w-full'>
        <h1 className='md:text-2xl text-xl font-extrabold text-left mb-6 flex dark:text-white text-gray-900/90 items-center'>
          Ultimos articulos
          <FaFireAlt className='size-6 dark:fill-sky-300 fill-sky-400 ml-2' />
        </h1>
        <ol>
          {hotArticles ? (
            <>
              {hotArticles.map((article, i) => (
                <ArticlesHot
                  key={i}
                  icon={selectIcon(article.language).icon}
                  title={article.title_article}
                />
              ))}
              <Link to="/articles" className='dark:text-white/90 w-fit mt-4 text-black/90 mx-auto px-2 py-1 rounded block hover:dark:dark:bg-white/5 hover:bg-gray-200/50 transition duration-300'>
                Ver todos
              </Link>
            </>
          ) : (
            <SkeletonHot />
          )}
        </ol>
      </div>
      <div className='flex flex-col items-center md:h-screen h-[80vh] mt-9 w-full'>
        <h1 className='md:text-3xl text-2xl font-extrabold dark:text-white text-black capitalize flex gap-1 items-center'>
          Tecnologias abarcadas
          <FaCode className='ml-2 dark:fill-sky-300 fill-sky-400' />
        </h1>
        <Bento />
      </div>
      <About
        icon={<FaUserPlus className='ml-2 dark:fill-sky-300 fill-sky-400' />}
      />
    </div>
  )
}
