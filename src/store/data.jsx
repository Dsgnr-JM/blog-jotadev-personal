import {
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoCss3,
  IoLogoReact
} from 'react-icons/io5'

import { SiPhp } from 'react-icons/si'
import { BiLogoTailwindCss } from 'react-icons/bi'

const tagType = [
  {
    type: 'html',
    class: 'border-orange-500 text-orange-500 hover:bg-orange-500'
  },
  {
    type: 'alg',
    class: 'border-green-500 text-green-500 hover:bg-green-500'
  },
  {
    type: 'js',
    class: 'border-yellow-500 text-yellow-500 hover:bg-yellow-500'
  },
  {
    type: 'css',
    class: 'border-sky-400 text-sky-400 hover:bg-sky-400'
  },
  {
    type: 'tailwind',
    class: 'border-blue-500 text-blue-500 hover:bg-blue-500'
  },
  {
    type: 'react',
    class: 'border-indigo-500 text-indigo-500 hover:bg-indigo-500'
  },
  {
    type: 'php',
    class: 'border-purple-500 text-purple-500 hover:bg-purple-500'
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
    icon: <IoLogoHtml5 className='fill-orange-400 size-6' />
  },
  {
    tag: 'css',
    icon: <IoLogoCss3 className='fill-sky-500 size-6' />
  },
  {
    tag: 'javascript',
    icon: <IoLogoJavascript className='fill-yellow-400 size-6' />
  },
  {
    tag: 'php',
    icon: <SiPhp className='fill-purple-500 size-6' />
  },
  {
    tag: 'tailwind',
    icon: <BiLogoTailwindCss className='fill-cyan-500 size-6' />
  },
  {
    tag: 'react',
    icon: <IoLogoReact className='fill-blue-500 size-6' />
  }
]

function selectIcon (ref) {
  return iconsTag.find((r) => r.tag === ref)
}

const dataArticlesHot = [
  {
    icon: iconsArticle.js,
    title: 'Javascript sigue avanzando y ahora tiene nuevas funciones'
  },
  {
    icon: iconsArticle.php,
    title: 'Php no esta muerto y esto lo demuestra'
  },
  {
    icon: iconsArticle.js,
    title: 'Que esta pasando con JS'
  },
  {
    icon: iconsArticle.css,
    title: 'Lo que se puede hacer con CSS3 moderno es una locura'
  }
]

const dataBento = [
  {
    grid: 'col-span-3 row-span-2',
    color: 'dark:bg-yellow-500/40 bg-yellow-500/30',
    subtitle:
      'Javascript es el lenguaje de la Web, suele ser llamado el padre de Python y PHP, estas de acuerdo',
    position: 'top-0',
    title: 'JS',
    icon: <IoLogoJavascript className='fill-yellow-400 size-12' />
  },
  {
    grid: 'col-span-2 row-span-1',
    color: 'dark:bg-orange-400/60 bg-orange-400/30',
    subtitle: 'El padre y estructura de la Web',
    position: 'top-0 right-0',
    title: 'HTML',
    icon: <IoLogoHtml5 className='fill-orange-400 size-12' />
  },
  {
    grid: 'col-span-2 row-span-2',
    color: 'dark:bg-emerald-400/40 bg-emerald-400/30',
    subtitle: 'Ok ya funciona, pero se ve bien!!',
    position: 'bottom-0 right-0',
    title: 'CSS',
    icon: <IoLogoCss3 className='fill-sky-400 size-12' />
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
    color: 'dark:bg-cyan-500/40 bg-cyan-500/30',
    position: 'bottom-0',
    title: 'TAILWINDCSS',
    subtitle: 'El mejor framework de CSS con utility-class',
    icon: <BiLogoTailwindCss className='fill-cyan-500 size-12' />
  },
  {
    grid: 'col-span-2',
    color: 'dark:bg-blue-500/40 bg-blue-500/30',
    position: 'top-0',
    subtitle: 'El framework favorito de JS',
    title: 'REACT',
    icon: <IoLogoReact className='fill-blue-500 size-12' />
  }
]

export { tagType, selectTag, dataArticlesHot, dataBento, iconsTag, selectIcon }
