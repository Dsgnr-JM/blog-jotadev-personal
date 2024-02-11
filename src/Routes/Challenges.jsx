import { useContext, useEffect } from 'react'
import { ThemeContext } from '../App'
import { changeTitle } from '../DinamicActionsSEO'
import { SkeletonList } from '../components/Skeleton'

export default function  Challenges() {
	const { setIsTitle } = useContext(ThemeContext)
	useEffect(() => {
		setIsTitle(changeTitle('Estas listo para un reto??'))
	}, [])

	return (
		<section className="pt-24">
			<main className="main">
				<SkeletonList />
			</main>
		</section>
	)
}