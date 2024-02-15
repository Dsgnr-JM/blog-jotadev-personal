import { SkeletonChallenge } from '../components/Skeleton'
import { Helmet } from 'react-helmet'

export default function Challenges() {
	return (
		<>
			<Helmet>
				<title>Esta listo para un reto?? || JotaDev</title>
				<meta
					name='description'
					content='Estas listo para un reto!!. Pues esta es la seccion encarga de ofreerte todo lo relacionado a la logica de programacion'
				/>
			</Helmet>
			<section className='pt-24'>
				<main className='main md:w-[50rem] w-full md:px-0 px-2'>
					<SkeletonChallenge />
				</main>
			</section>
		</>
	)
}
