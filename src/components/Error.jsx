function SearchNotFound () {
  return (
    <div className="w-[70%] mx-auto text-center mt-6">
      <span className="text-6xl">😠</span>
      <h1 className="text-black dark:text-white font-bold text-2xl mt-4">Upps parece que no se encontraron resultados de la busqueda</h1>
    </div>
  )
}

function ArticleNotFound () {
  return (
    <div>
      No se encontraron El articulo 
    </div>
  )
}

function ArticleError () {
  return (
    <div>
      Upps parece que hubo un error 😱
    </div>
  )
}

export {
  SearchNotFound,
  ArticleNotFound,
  ArticleError
}