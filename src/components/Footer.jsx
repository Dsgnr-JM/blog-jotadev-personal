import {
	FaArrowLeft,
	FaArrowRight,
	FaFacebook,
	FaInstagram,
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaWhatsapp,
	FaRegThumbsDown,
	FaRegThumbsUp
} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { urlReplaceToLines } from '../DinamicActionsSEO';

function Button ({ like }) {
	return (
		<button className='flex gap-1 active:scale-95 dark:hover:border-gray-200 dark:hover:text-gray-200 hover:border-black/90 hover:text-black/90 items-center py-[0.10rem] px-2 text-sm rounded-[0.2rem] border-[1px] dark:border-gray-300/80 dark:text-gray-300/80 text-black/80 border-gray-900/50 transition'>
			<span className={`font-extrabold ${like == 'Si' ? 'dark:text-green-500 text-green-700' : 'dark:text-red-500 text-red-700'}`}>{like == 'Si' ? '✔' : '✖'}</span> {like}
		</button>
	)
}

function Footer ({prevTitle, nextTitle}) {
	const url = window.location.href
	console.log(prevTitle, nextTitle)
	return (
		<div className='main md:w-[50rem] w-full md:px-0 px-2 flex-col gap-4 py-6'>
			{/*<div className='flex h-full justify-start gap-4 items-center mb-8 mt-2 w-full'>
				<p className='dark:text-sky-200/80 text-slate-600/80 text-base'>
					¿Te sirvio este contenido?
				</p>
				<div className='flex gap-2'>
					<Button like='Si' />
					<Button like='No' />
				</div>
			</div>*/}
			<div className='w-full flex items-center justify-between mt-9 gap-2 [&>a]:leading-5'>
				{
					prevTitle ?
						<Link
							to={`../post/${urlReplaceToLines(prevTitle, true)}`}
							aria-label={`El enlace lleva a ${prevTitle}`}
							className='py-1.5 px-2 border-[1px] border-emerald-500 dark:border-emerald-600 dark:text-emerald-500 text-emerald-600 rounded font-semibold tracking-wider flex items-center gap-1 hover:bg-emerald-600 dark:hover:bg-emerald-500 500  dark:hover:text-slate-800 hover:text-slate-100 hover:shadow-xl text-sm transition '
						>
							<FaArrowLeft />
							{prevTitle}
						</Link>
					:
					<span></span>
				}
				{
					nextTitle ?
						<Link
							to={`../post/${urlReplaceToLines(nextTitle, true)}`}
							aria-label={`El enlace lleva a ${nextTitle}`}
							className='py-1.5 px-2 border-[1px] dark:border-blue-400 border-blue-500 dark:text-blue-400 text-blue-500 rounded font-semibold tracking-wider flex items-center gap-1 dark:hover:bg-blue-400 hover:bg-blue-500 dark:hover:text-slate-800 hover:text-slate-100 hover:shadow-xl text-sm transition'
						>
							{nextTitle}
							<FaArrowRight />
						</Link>
						:
						<span></span>
				}
			</div>
			<div className='w-full flex items-center justify-center gap-4 mt-20 text-white'>
				<a target='_blank' href={`https://m.facebook.com/sharer/sharer.php?u=${url}`}>
					<FaFacebook className='fill-current size-6 hover:fill-indigo-700 hover:scale-110 transition text-white' />
				</a>
				<a target='_blank' href='#'>
					<FaInstagram className='fill-current size-6 hover:fill-white/90 hover:scale-110 transition' />
				</a>
				<a target='_blank' href={`https://www.linkedin.com/sharing/share-offsite?url=${url}&mini=true#overlay_share-modal`}>
					<FaLinkedin className='fill-current size-6 hover:fill-sky-600 hover:scale-110 transition' />
				</a>
				<a target='_blank' href='#'>
					<FaGithub className='fill-current size-6 hover:fill-gray-400 hover:scale-110 transition' />
				</a>
				<a target='_blank' href='#'>
					<FaTwitter className='fill-current size-6 hover:fill-sky-500 hover:scale-110 transition' />
				</a>
			</div>
			<p className='text-center text-gray-900/70 text-sm dark:text-slate-100/70'>
				No te olvides de compartir para que mas personas aprendan
			</p>
		</div>
	)
}
export default Footer
