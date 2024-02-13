import { Helmet } from 'react-helmet'

export default function LeaderBoad () {
  return (
    <div className='main pt-20'>
      <Helmet>
        <title>LeaderBoad || JotaDev</title>
        <meta
          name='description'
          content='Estas en el dashboad qeu quieres que haga'
        />
      </Helmet>
      <p className='text-center font-bold uppercase text-indigo-500'>
        El LeaderBoad aun no esta disponible 😰
      </p>
    </div>
  )
}
