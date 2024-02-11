import { LogoDark, LogoLight } from '../components/Logo'
import { FaDiscord, FaGithub, FaWhatsapp, FaCode, FaUserPlus,FaFireAlt } from 'react-icons/fa'
import Bento from '../components/Bento'
import ArticlesHot from '../components/ArticlesHot'
import About from '../components/About'
import { dataArticlesHot } from '../store/data'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../App'
import { changeTitle } from '../DinamicActionsSEO'

export default function Home () {

	const { setIsTitle } = useContext(ThemeContext)
	useEffect(() => {
		setIsTitle(changeTitle('Bienvenido a mi Blog JotaDev'))
	}, [])

	return (
		<div className="main flex-col">
			<header className="w-full flex flex-col h-screen">
				<div className="w-full flex justify-between h-full items-center -mb-16">
					<div className="w-[50%]">
						<h1 className="text-7xl font-semibold dark:text-white text-black mb-3">Jota <strong className="font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">Dev</strong></h1>
						<p className="text-base dark:text-gray-100 text-gray-900/90">Bienvenido, soy JotaDev <span className="dark:text-blue-400 text-blue-600">desarrollador Web</span> desde los <span className="dark:text-indigo-300 text-indigo-500">17 años</span>, es un placer conocerte. Si te preguntas el porque de este <span className="dark:text-emerald-200 text-emerald-600">Blog</span> pues esta pensado para que puedas usarlo como una <span className="dark:text-emerald-300 text-emerald-600">guia</span> de referencia <span className="dark:text-sky-300 text-sky-600">rapida.</span></p>
					</div>
					<div className="relative">
						<LogoDark className="size-48 rotate-6 mr-8"/>
						<LogoDark className="size-48 rotate-6 mr-8 blur-2xl absolute top-0 left-0 opacity-40 scale-120"/>
					</div>	
				</div>
				<div className="flex justify-center gap-4 w-full pb-12">
					<a href="https://github.com/Dsgnr-JM" className="flex gap-2 items-center px-2 py-1.5 dark:bg-gray-100/10 bg-gray-600/10 rounded-sm group hover:bg-blue-500 transition duration-300">
						<FaGithub className="dark:text-white text-blue-600 size-6 group-hover:text-gray-200 group-hover:dark:text-gray-100"/>				
					</a>
					<a href="https://www.discord.com/JotaDev" className="flex gap-2 items-center px-2 py-1.5 dark:bg-gray-100/10 bg-gray-600/10 rounded-sm group hover:bg-blue-500 transition duration-300">
						<FaDiscord className="dark:text-white text-blue-600 size-6 group-hover:text-gray-200 group-hover:dark:text-gray-100"/>						
					</a>
					<a href="https://www.whatsapp.org" className="flex gap-2 items-center px-2 py-1.5 dark:bg-gray-100/10 bg-gray-600/10 rounded-sm group hover:bg-blue-500 transition duration-300">
						<FaWhatsapp className="dark:text-white text-blue-600 size-6 group-hover:text-gray-200 group-hover:dark:text-gray-100"/>						
					</a>
				</div>
			</header>
			<div className="flex flex-col h-auto my-9 w-full">
				<h1 className="text-2xl font-extrabold text-left mb-6 flex dark:text-white text-gray-900/90 items-center">Ultimos articulos <FaFireAlt className="size-6 dark:fill-sky-300 fill-sky-400 ml-2"/></h1>
				<ol>
					{ dataArticlesHot.map((article, i) => (
							<ArticlesHot key={ i } icon={ article.icon } title={ article.title }/>
						)) }
				</ol>
			</div>
			<div className="flex flex-col items-center h-screen mt-9 w-full">
				<h1 className="text-3xl font-extrabold dark:text-white text-black capitalize flex gap-1 items-center">Tecnologias abarcadas <FaCode className="ml-2 dark:fill-sky-300 fill-sky-400"/></h1>
				<Bento/>
			</div>
			<About icon={ <FaUserPlus className="ml-2 dark:fill-sky-300 fill-sky-400"/> }/>
		</div>
	)
}