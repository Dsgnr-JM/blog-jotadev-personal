export default function Author({text}) {
  return (
    <div className="flex items-center gap-1 dark:text-slate-100/80 text-slate-800/80 md:text-sm text-xs mb-4">
      <figure className="size-6 rounded-full overflow-hidden">
        <img src="../image.jpg" className="object-cover" alt="Foto de perfil del Desarrollador Web JotaDev - Jhoan Mejia"/>
      </figure> 
      <p>{text}</p>
    </div>
  )
}