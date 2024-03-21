import { Helmet } from 'react-helmet'

export default function LeaderBoad () {
  return (
    <div className='main md:w-[50rem] w-full md:px-0 px-2 pt-20'>
      <Helmet>
        <title>LeaderBoad || JotaDev</title>
        <meta
          name='description'
          content='Estas en el dashboad qeu quieres que haga'
        />
        <meta property="og:title" content='LeaderBoad || JotaDev'></meta>
        <meta property="og:description" content='Este es LeaderBoad de los mejores en logica de programacion'></meta>
        <meta property="og:image" content='./og-blog.PNG'></meta>
        <meta property="og:url" content="www.jotadev0.vercel.app"></meta>
        <meta property="og:type" content="website"/>
      </Helmet>
      <p className='text-center font-bold uppercase text-indigo-500'>
        El LeaderBoad aun no esta disponible 😰
      </p>
    </div>
  )
}
