import {
	FaArrowLeft,
	FaArrowRight,
	FaFacebook,
	FaInstagram,
	FaGithub,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
	FaRegThumbsDown,
	FaRegThumbsUp
} from 'react-icons/fa'

function Button ({ like }) {
	return (
		<button className='flex gap-1 active:scale-95 dark:hover:border-gray-200 dark:hover:text-gray-200 hover:border-black/90 hover:text-black/90 items-center py-[0.10rem] px-2 text-sm rounded-[0.2rem] border-[1px] dark:border-gray-300/80 dark:text-gray-300/80 text-black/80 border-gray-900/50 transition'>
			<span className={`font-extrabold ${like == 'Si' ? 'dark:text-green-500 text-green-700' : 'dark:text-red-500 text-red-700'}`}>{like == 'Si' ? '✔' : '✖'}</span> {like}
		</button>
	)
}

function Footer () {
	return (
		<div className='main md:w-[50rem] w-full md:px-0 px-2 flex-col gap-4 py-4'>
			<div className='flex h-full justify-start gap-4 items-center mb-8 mt-2 w-full'>
				<p className='dark:text-sky-200/80 text-slate-600/80 text-base'>
					¿Te sirvio este contenido?
				</p>
				<div className='flex gap-2'>
					<Button like='Si' />
					<Button like='No' />
				</div>
			</div>
			<div className='w-full flex items-center justify-between mt-9'>
				<a
					href='#'
					className='py-1.5 px-2 border-[1px] border-emerald-500 dark:border-emerald-600 dark:text-emerald-500 text-emerald-600 rounded font-semibold tracking-wider flex items-center gap-1 hover:bg-emerald-600 dark:hover:bg-emerald-500 500  dark:hover:text-slate-800 hover:text-slate-100 hover:shadow-xl text-sm transition'
				>
					<FaArrowLeft />
					Metodos de Objetos
				</a>
				<a
					href='#'
					className='py-1.5 px-2 border-[1px] dark:border-blue-400 border-blue-500 dark:text-blue-400 text-blue-500 rounded font-semibold tracking-wider flex items-center gap-1 dark:hover:bg-blue-400 hover:bg-blue-500 dark:hover:text-slate-800 hover:text-slate-100 hover:shadow-xl text-sm transition'
				>
					Metodos de Strings
					<FaArrowRight />
				</a>
			</div>
			<div className='w-full flex items-center justify-center gap-4 mt-20'>
				<a href='#'>
					<FaFacebook className='size-6 fill-blue-600' />
				</a>
				<a href='#'>
					<FaInstagram className='size-6 fill-amber-600' />
				</a>
				<a href='#'>
					<FaGithub className='size-6 fill-gray-500' />
				</a>
				<a href='#'>
					<FaTwitter className='size-6 fill-sky-500' />
				</a>
				<a href='#'>
					<FaWhatsapp className='size-6 fill-green-500' />
				</a>
				<a href='#'>
					<FaYoutube className='size-6 fill-red-600' />
				</a>
			</div>
			<p className='text-center text-gray-900/70 text-sm dark:text-slate-100/70'>
				No te olvides de compartir para que mas personas aprendan
			</p>
		</div>
	)
}
export default Footer
