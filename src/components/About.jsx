export default function About ({ icon }) {
  return (
    <section className='flex my-20 w-full h-auto p-8 rounded dark:bg-slate-900 shadow-black/5 shadow-xl items-center bg-gray-200/30 md:flex-row flex-col gap-2'>
      <div className='md:w-[60%] w-full [&>p]:md:text-base [&>p]:text-sm [&>p]:text-pretty [&>p]:dark:text-gray-50/70 [&>p]:text-black/70'>
        <h1 className='text-2xl dark:text-white text-black font-extrabold mb-2 flex items-center mb-4'>
          Sobre mi {icon}
        </h1>
        <p>
          Me llamo Jhoan Mejia 😉, soy Desarrollador Web FullStack y actualmente
          estudiante de Ingenieria en Informatica.
        </p>
        <p>
          Mi mayor logro fue el Desarrollo de TailkieKids 🎯, una aplicacion
          diseñada para que niños puedan aprender ingles.
        </p>
        <p>
          He sido lider en diferentes grupos de Desarrolladores Web, manteniendo
          el orden, planteamiento y direccion de proyectos sobre la ruta
          estimada, para asi desarrollar aplicaciones web que generen un impacto
          en la sociedad <span className='text-red-500'>❤</span>.
        </p>
      </div>
      <div className='flex-1 flex justify-center'>
        <figure className='w-[11rem] h-[11rem] rounded-full overflow-hidden'>
          <img
            loading="lazy"
            src='https://ucarecdn.com/59307f4c-662a-4a44-b820-c51063c2f637/-/preview/208x208/'
            alt='Foto de perfil de Jhoan Mejia - Jota Dev'
            className='object-cover w-full h-full'
          />
        </figure>
      </div>
    </section>
  )
}
