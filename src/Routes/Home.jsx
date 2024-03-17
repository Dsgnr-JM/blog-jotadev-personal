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
import { dataArticlesHot, selectIcon } from '../store/data'
import { SkeletonHot } from '../components/Skeleton'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react';

export default function Home() {
  const [hotArticles, setHotArticles] = useState(null)
  useEffect(() => {
    async function getArticlesHot () {
      const fetching = await fetch(`./data.json`)
      const data = await fetching.json()
      setHotArticles(data.slice(0,4))
    }
    getArticlesHot()
  }, [])
  return (
    <div className='main md:w-[50rem] md:px-0 px-4 w-full flex-col'>
      <Helmet>
        <title>Bienvenido a mi Blog JotaDev</title>
        <meta
          name='description'
          content='Este es un blog sobre desarrollado web, pensado para ser usado como guia de referencia rapida por los programadores ya sean trainner, junior, midnior, senior. Los lenguages abarcados son HTML, CSS, JavaScript, React, TailwindCss, PHP, MySQL'
        />
      </Helmet>
      <header className='w-full flex flex-col h-screen'>
        <div className='w-full flex justify-between h-full items-center -mb-16 md:gap-0 gap-4'>
          <div className='md:max-w-[50%] max-w-max flex-auto'>
            <h1 className='md:text-7xl text-6xl font-semibold dark:text-white text-black mb-3'>
              Jota
              <strong className='font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text'>
                Dev
              </strong>
            </h1>
            <p className='md:text-base text-sm dark:text-gray-100 text-gray-900/90'>
              Bienvenido, soy JotaDev {' '}
              <span className='dark:text-blue-400 text-blue-600'>
                desarrollador Web{' '}
              </span>
              desde los
              <span className='dark:text-indigo-300 text-indigo-600'>
                {' '}17 años
              </span>
              , es un placer conocerte. Si te preguntas el porque de este Blog {' '}
              <span className='dark:text-emerald-200 text-emerald-600'></span>
              pues esta pensado para que puedas usarlo como una
              <span className='dark:text-emerald-400 text-emerald-700'>
                {' '}guia
              </span>
              <span className='dark:text-sky-300 text-sky-600'>
                {' '}
                de referencia rapida.
              </span>
            </p>
          </div>
          <div className='relative'>
            <LogoDark className='md:size-48 size-32 rotate-6 md:mr-8' />
            <LogoDark className='md:size-48 size-32 rotate-6 md:mr-8 blur-2xl absolute top-0 left-0 opacity-40 scale-120' />
          </div>
        </div>
        <div className='flex justify-center gap-4 w-full pb-12'>
          <a
            href='https://github.com/Dsgnr-JM'
            aria-label='Redireccionar a el github de JotaDev'
            className='flex gap-2 items-center px-2 py-1.5 dark:bg-gray-100/10 bg-gray-600/10 rounded-sm group hover:bg-blue-500 transition duration-300'
          >
            <FaGithub className='dark:text-white text-blue-600 size-6 group-hover:text-gray-200 group-hover:dark:text-gray-100' />
          </a>
          <a
            href='https://www.discord.com/JotaDev'
            aria-label='Redireccionar a el grupo de Discord de JotaDev'
            className='flex gap-2 items-center px-2 py-1.5 dark:bg-gray-100/10 bg-gray-600/10 rounded-sm group hover:bg-blue-500 transition duration-300'
          >
            <FaDiscord className='dark:text-white text-blue-600 size-6 group-hover:text-gray-200 group-hover:dark:text-gray-100' />
          </a>
          <a
            href='https://www.whatsapp.org'
            aria-label='Redireccionar a el grupo de WhatsApp "Programadores"'
            className='flex gap-2 items-center px-2 py-1.5 dark:bg-gray-100/10 bg-gray-600/10 rounded-sm group hover:bg-blue-500 transition duration-300'
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
          {
            hotArticles
            ? hotArticles.map((article, i) => (
            <ArticlesHot key={i} icon={selectIcon(article.language).icon} title={article.title_article}/>
            ))
            : <SkeletonHot/>
          }
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
