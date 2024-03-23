import {
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoReact, IoLogoWebComponent } from 'react-icons/io5'

import { Css3, TailwindCss, Js, Html, React, Node,Dev } from '../components/Icons'

import { SiPhp } from 'react-icons/si'
import { BiCodeAlt, BiLogoTailwindCss } from 'react-icons/bi'
import { IoLogoNodejs } from 'react-icons/io';

const tagType = [
  {
    type: 'html',
    class: 'dark:bg-orange-500/10 bg-orange-500/15 dark:text-orange-200/50 text-orange-700/40 hover:dark:bg-orange-500/15 hover:bg-orange-500/20'
  },
  {
    type: 'node',
    class: 'dark:bg-lime-500/10 bg-lime-500/15 dark:text-green-100/60 text-green-700/60 hover:dark:bg-lime-500/15 hover:bg-lime-500/20'
  },
  {
    type: 'javascript',
    class: 'dark:bg-yellow-400/10 bg-yellow-400/15 dark:text-yellow-200/50 text-yellow-700/50 hover:dark:bg-yellow-400/15 hover:bg-yellow-400/20'
  },
  {
    type: 'css',
    class: 'dark:bg-sky-400/10 bg-sky-400/15 dark:text-sky-100/50 text-sky-800/70 hover:dark:bg-sky-400/15 hover:bg-sky-400/20'
  },
  {
    type: 'tailwind',
    class: 'dark:bg-blue-400/10 bg-blue-400/15 dark:text-blue-200/60 text-blue-600/70 hover:dark:bg-blue-400/15 hover:bg-blue-400/20'
  },
  {
    type: 'react',
    class: 'dark:bg-indigo-500/10 bg-indigo-500/15 dark:text-indigo-200/80 text-indigo-700/70 hover:dark:bg-indigo-500/15 hover:bg-indigo-500/20'
  },
  {
    type: 'php',
    class: 'dark:bg-purple-500/10 bg-purple-500/15 dark:text-purple-200/60 text-purple-600/70 hover:dark:bg-purple-500/15 hover:bg-purple-500/20'
  },
  {
    type: 'dev',
    class: 'dark:bg-slate-400/15 bg-slate-500/10 dark:text-slate-300/70 text-slate-700/70 hover:dark:bg-slate-400/20 hover:bg-slate-500/20'
  }
]

function selectTag (type) {
  let tagClass = ''
  tagType.forEach((i) => {
    if (i.type === type) return (tagClass = i.class)
  })
  return tagClass
}
const iconsArticle = {
  js: <IoLogoJavascript className='size-7 fill-yellow-400' />,
  php: <SiPhp className='size-7 fill-purple-500' />,
  css: <IoLogoCss3 className='size-7 fill-sky-500' />
}

const iconsTag = [
  {
    tag: 'html',
    icon: <Html className='size-full' />,
    logo: <IoLogoHtml5 className="fill-current"/>
  },
  {
    tag: 'css',
    icon: <Css3 className='size-full' />,
    logo: <IoLogoCss3 className="fill-current"/>
  },
  {
    tag: 'javascript',
    icon: <Js className='size-full' />,
    logo: <IoLogoJavascript className="fill-current"/>
  },
  {
    tag: 'php',
    icon: <SiPhp className='fill-purple-500 size-full' />,
    logo: <SiPhp className="fill-current"/>
  },
  {
    tag: 'tailwind',
    icon: <TailwindCss className='size-full' />,
    logo: <BiLogoTailwindCss className="fill-current"/>
  },
  {
    tag: 'react',
    icon: <React className='size-full' />,
    logo: <IoLogoReact className="fill-current"/>
  },
  {
    tag: 'node',
    icon: <Js className='size-full'/>,
    logo: <IoLogoNodejs className="fill-current"/>
  },
  {
    tag: 'dev',
    icon: <Dev className='size-full dark:fill-white fill-black'/>,
    logo: <BiCodeAlt className="fill-current"/>,
  }
]

function selectIcon (ref) {
  return iconsTag.find((r) => r.tag === ref)
}

const dataBento = [
  {
    grid: 'col-span-3 row-span-2',
    color: 'dark:bg-yellow-500/40 bg-yellow-500/30',
    subtitle:
      'Javascript es el lenguaje de la Web, suele ser llamado el padre de Python y PHP, estas de acuerdo',
    position: 'top-0',
    title: 'JS',
    icon: <Js className='size-12' />
  },
  {
    grid: 'col-span-2 row-span-1',
    color: 'dark:bg-orange-400/60 bg-orange-400/30',
    subtitle: 'El padre y estructura de la Web',
    position: 'top-0 right-0',
    title: 'HTML',
    icon: <Html className='size-12' />
  },
  {
    grid: 'col-span-2 row-span-2',
    color: 'dark:bg-blue-500/40 bg-blue-500/30',
    subtitle: 'Ok ya funciona, pero se ve bien!!',
    position: 'top-0',
    title: 'CSS',
    icon: <Css3 className='size-12' />
  },
  {
    grid: 'col-span-1 row-span-2',
    color: 'dark:bg-purple-300/40 bg-purple-300/30',
    subtitle: 'Esto si que es SSR',
    position: 'top-0',
    title: 'PHP',
    icon: <SiPhp className='fill-purple-500 size-14 ' />
  },
  {
    grid: 'col-span-2 row-span-2',
    color: 'dark:bg-emerald-400/40 bg-emerald-400/30',
    position: 'bottom-0',
    title: 'TAILWINDCSS',
    subtitle: 'El mejor framework de CSS con utility-class',
    icon: <TailwindCss className='size-12' />
  },
  {
    grid: 'col-span-2',
    color: 'dark:bg-cyan-500/40 bg-cyan-500/30',
    position: 'bottom-0 right-0',
    subtitle: 'El framework favorito de JS',
    title: 'REACT',
    icon: <React className='size-12' />
  }
]

export { tagType, selectTag, dataBento, iconsTag, selectIcon }
