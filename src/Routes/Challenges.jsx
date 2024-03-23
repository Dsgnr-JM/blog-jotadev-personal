import { SkeletonChallenge } from '../components/Skeleton'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import Challenge from '../components/Challenge'
import InfoChallenge from '../components/InfoChallenge'

export default function Challenges() {
	const [challenges, setChallenges] = useState(null)
	const [viewInfoChallenge, setViewInfoChallenge] = useState(false)
	const [info, setInfo] = useState({
		id: 0,
		title: 'Lorem',
		description: 'lorem',
		langs: ['all'],
		dificulty: ['','','','','']
	})
	useEffect(() => {
		async function getChallenges() {
			const fetching = await fetch('./challenges.json')
			const data = await fetching.json()
			setChallenges(data)
		}
		getChallenges()
	}, [])
	return (
		<>
			<Helmet>
				<title>Esta listo para un reto?? || JotaDev</title>
				<meta
					name='description'
					content='Estas buscando retos de programacion como: pruebas tecnicas y de logica, pues este es el sitio indicado'
				/>
				<meta
					property='og:title'
					content='Esta listo para un reto?? || JotaDev'
				></meta>
				<meta
					property='og:description'
					content='Estas buscando retos de programacion como: pruebas tecnicas y de logica, pues este es el sitio indicado'
				></meta>
				<meta property='og:image' content='./og-blog.PNG'></meta>
				<meta property='og:url' content='www.jotadev0.vercel.app'></meta>
				<meta property='og:type' content='website' />
			</Helmet>
			<section className='pt-24'>
				<main className='main md:w-[50rem] flex flex-col w-full md:px-0 px-2 mb-4'>
					<div className='w-full mb-8'>
						<h1 className='md:text-3xl text-2xl font-extrabold dark:text-white text-black capitalize'>
							RetosDev 😈
						</h1>
						<p className='text-base dark:text-gray-50/85 text-gray-700/95 my-1 md:w-4/5 w-full'>
							La mejor forma de aprender programacion es programando 💻, y que
							mejor forma de codear que con unos buenos retos. Esta seccion
							abarca desde retos de logica hasta aplicaciones complejas, si no sabes como participar sigue este enlace <a href="https://github.com/Dsgnr-JM/challenges" target="_blank" className="dark:text-sky-400 text-sky-500 underline">Ver mas</a>
						</p>
					</div>
					{challenges ? (
						<div className='grid md:grid-cols-5 grid-cols-2 gap-2 transition-all'>
							{challenges.map((challenge,i) => (
								<Challenge
									num={challenge.id}
									key={crypto.randomUUID()}
									title={challenge.title}
									description={challenge.description}
									langs={challenge.langs}
									dificulty={challenge.dificulty}
									state={setViewInfoChallenge}
									changeInfo={setInfo}
								/>
							))}
							<InfoChallenge state={viewInfoChallenge} info={info} />
						</div>
					) : (
						<SkeletonChallenge />
					)}
				</main>
			</section>
		</>
	)
}
