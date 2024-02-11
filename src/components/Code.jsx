import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'
import { FaRegCopy, FaRegClipboard } from 'react-icons/fa'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App'
import languages from '../languajes.js'

languages.forEach((language) =>
	SyntaxHighlighter.registerLanguage(language.name, language.item)
)

function Code({ children, className }) {
	const [copied, setCopied] = useState(false)
	const { isDark } = useContext(ThemeContext)

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopied(false)
		}, 1000)
		return () => clearTimeout(timer)
	}, [copied])

	const [, lang] = className?.split('-')

	return (
		<div className='relative mt-8 mb-10 shadow-2xl shadow-black/30'>
			<CopyToClipboard text={children} onCopy={() => setCopied(true)}>
				<button className='absolute top-4 right-4 z-10'>
					{copied ? <FaRegClipboard /> : <FaRegCopy />}
				</button>
			</CopyToClipboard>
			<SyntaxHighlighter
				className='rounded-md text-sm'
				wrapLongLines={true}
				style={dracula}
				language={lang}
			>
				{children}
			</SyntaxHighlighter>
		</div>
	)
}

export default Code
