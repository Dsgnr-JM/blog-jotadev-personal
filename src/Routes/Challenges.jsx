import { SkeletonChallenge } from '../components/Skeleton'
import { Helmet } from 'react-helmet'

export default function Challenges() {
	return (
		<>
			<Helmet>
				<title>Esta listo para un reto?? || JotaDev</title>
				<meta
					name='description'
					content='Estas buscando retos de programacion como: pruebas tecnicas y de logica, pues este es el sitio indicado'
				/>
				<meta property="og:title" content='Esta listo para un reto?? || JotaDev'></meta>
        <meta property="og:description" content='Estas buscando retos de programacion como: pruebas tecnicas y de logica, pues este es el sitio indicado'></meta>
        <meta property="og:image" content='./og-blog.PNG'></meta>
        <meta property="og:url" content="www.jotadev0.vercel.app"></meta>
        <meta property="og:type" content="website"/>
			</Helmet>
			<section className='pt-24'>
				<main className='main md:w-[50rem] w-full md:px-0 px-2'>
					<SkeletonChallenge />
				</main>
			</section>
		</>
	)
}
