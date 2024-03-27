<Tags>
  <Badge title="HTML" tag="html"/>
  <Badge title="JavaScript" tag="javascript"/>
  <Badge title="Dev" tag="dev"/>
</Tags>

# Guía Completa de SEO 🌟: Mejora tu posicionamiento en la Web

<Author text="Created: March 26, 24"/>

![SEO](https://ucarecdn.com/6bec1f1f-694a-4836-9cb5-d17e9c25ffbd/-/preview/1000x1000/)

Probablemente ya tienes una página web muy bella y que construiste con mucho empeño, pero que pasa si esta página no está optimizada para el Crawler de los motores de búsqueda?, pues que nadie la va a encontrar, para que este "robot" pueda encontrar nuestra página se debe implementar algo llamado **SEO** y en este Blog veremos la **Guía completa de SEO para mejorar el posicionamiento de la Web**, aunque antes debemos saber que es el **SEO** y **como funciona**.

## Qué es el SEO?

EL SEO, o Search Engine Optimization (optimización para motores de búsqueda), es un conjunto de técnicas que se aplican a una página web para mejorar su visibilidad y posicionamiento en los resultados orgánicos de los buscadores como Google. El objetivo es atraer más tráfico a la web de forma gratuita, aumentando la presencia online del negocio o marca.

Ahora **cómo funciona el SEO**?, pues los motores de búsqueda como Google utilizan complejos algoritmos para determinar la relevancia y autoridad de las páginas web. Estos algoritmos analizan cientos de factores, como la calidad del contenido, la estructura del sitio, la velocidad de carga, la presencia de palabras claves relevantes y los enlaces entrantes (backlinks).

## Guía de para mejorar el SEO de tu Web

Si estas aquí es por qué quieres mejorar el alcance de tu Web y así mas usuarios puedan encontrarla. Bueno si quieres lograr es deberás seguir la guía que te dejare a continuación.

1. Atributos ARIA

Las propiedades ARIA (Accessible Rich Internet Applications) se utilizan para mejorar la accesibilidad de las páginas web para personas con discapacidades, especialmente para usuarios de lectores de pantalla y tecnologías de asistencia. Estas propiedades proporcionan información adicional sobre el contenido y el comportamiento de los elementos HTML, permitiendo que las personas con discapacidades comprendan mejor la página web y la interactúen de manera efectiva.

==**role**==: Define el rol semántico de un elemento HTML. Por ejemplo, un botón puede tener el rol button, un menú puede tener el rol menú, etc.

==**aria-roledescription**==: Proporciona una descripción más detallada del rol del elemento.

```jsx

<button role="button" aria-roledescription="Abre un modal">
  Abrir modal
</button>

```

==**aria-checked**==: Indica si un elemento está seleccionado o no (por ejemplo, casillas de verificación).

==**aria-disabled**==: Indica si un elemento está habilitado o deshabilitado.

==**aria-expanded**==: Indica si un elemento está expandido o contraído (por ejemplo, acordeones).

==**aria-pressed**==: Indica si un elemento está presionado o no (por ejemplo, botones).

```jsx

<input type="checkbox" aria-checked="true">

<input type="button" aria-disabled="true" disabled>No me veo</input>


```

==**aria-valuemax**==: Define el valor máximo de un elemento (por ejemplo, un rango de entrada).

==**aria-valuemin**==: Define el valor mínimo de un elemento.

==**aria-valuenow**==: Define el valor actual de un elemento.

```jsx

<input type="range" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">

```

==**aria-label**==: Proporciona una etiqueta accesible para un elemento.

==**aria-labelledby**==: Asocia un elemento con una etiqueta visible para su identificación.

```jsx

<img src="imagen.jpg" aria-label="Imagen de un perro">

```

==**aria-describedby**==: Asocia un elemento con una descripción textual.

==**aria-controls**==: Indica qué elementos son controlados por un elemento.

```jsx

<button aria-controls="modal">
  Abrir modal
</div>

<div id="modal" aria-labelledby="modal-title">
  <h1>Título del modal</h1>
  <p>Contenido del modal...</p>
</div>

```

> Existen muchas más propiedades las cuales puedes revisar [Aquí](https://www.w3.org/WAI/standards-guidelines/aria/)

2. Meta Etiquetas

Las etiquetas meta se utilizan para proporcionar información adicional sobre una página web a los navegadores web, los motores de búsqueda y otras herramientas. Esta información puede ser utilizada para:

**- Controlar cómo se muestra la página web en los resultados de búsqueda.**

**- Especificar la codificación de caracteres de la página web.**

**- Definir palabras clave para la página web.**

**- Establecer la vista de la ventana del navegador.**

**- Especificar la política de seguridad de contenido.**

**- Proporcionar información sobre el autor de la página web.**

**- Definir una descripción de la página web para las redes sociales.**

En esta guía, explicaremos para qué sirve cada una de las propiedades ==meta== más comunes y proporcionaremos ejemplos de código para ilustrar su uso, recuerda que las ==meta== etiquetas se deben colocar en el ==head== de nuestro HTML.

==**charset**==: Especifica la codificación de caracteres de la página web.

==**name**==: Define el nombre de la propiedad meta.

==**content**==: Define el valor de la propiedad meta.

```jsx

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

```

==**name:description**==: Muestra la descripción de la página web.

==**name:keywords**==: Define las palabras claves, ya no es tan útil.

==**name:author**==: Define el autor de la página.

==**title**==: No es una meta etiqueta, es una etiqueta de HTML que se encarga de definir el título del documento o página.

```jsx

<title>Pagina Web</title>
<meta name="description" content="Esta es una pagina web de ejemplo">
<meta name="keywords" content="seo, gratis, web">

```

> Para conseguir más meta etiquetas sigue el siguiente [Enlace](https://developer.mozilla.org/es/docs/Web/HTML/Element/meta)


3. Etiquetas OpenGraph

Las etiquetas Open Graph (OG) son un conjunto de metadatos que se agregan al código HTML de una página web para proporcionar información adicional a las redes sociales y otras plataformas sobre el contenido de la página. Esta información se utiliza para mostrar una vista previa enriquecida de la página cuando se comparte en las redes sociales, mejorando la experiencia del usuario y la visibilidad del contenido.

==**og:title**==: Define el título de la página que se mostrará en las redes sociales.

==**og:description**==: Define la descripción de la página que se mostrará en las redes sociales.

==**og:image**==: Define la imagen que se mostrará en las redes sociales.

==**og:ur**==l: Define la URL de la página que se está compartiendo.

```jsx

<meta property="og:title" content="Pagina Web">
<meta property="og:description" content="Esta es una pagina web de ejemplo.">
<meta property="og:image" content="https://www.ejemplo.com/imagen.jpg">
<meta property="og:url" content="https://www.ejemplo.com/perros">

```

==**og:type**==: Define el tipo de contenido de la página (por ejemplo, artículo, video, producto).

==**og:site_name**==: Define el nombre del sitio web que se está compartiendo.

==**og:locale**==: Define el idioma del contenido de la página.

==**og:video**==: Define la URL de un video que se puede reproducir en las redes sociales.

==**og:audio**==: Define la URL de un archivo de audio que se puede reproducir en las redes sociales.

```jsx

<meta property="og:type" content="website">
<meta property="og:site_name" content="Sito web">
<meta property="og:locale" content="es_ES">
<meta property="og:video" content="https://www.ejemplo.com/video.mp4">
<meta property="og:audio" content="https://www.ejemplo.com/audio.mp3">

```

> Existen muchas más etiquetas OG ya que las que vimos solo son para Facebook, para ello debes usar un generador de etiquetas OG [Click Aqui](https://opengraph.xyz)

Es importante validar las etiquetas Open Graph para asegurarse de que se muestran correctamente en las redes sociales. Puedes utilizar la herramienta de validación de Open Graph de Facebook para verificar la configuración de tu página web o seguir este [enlace](https://orcascan.com/tools/open-graph-validator)


4. Mejorar Rendimiento

La mejora del rendimiento es un proceso continuo que busca optimizar el funcionamiento de un sistema o proceso para alcanzar sus objetivos de manera más eficiente. Se trata de identificar y eliminar los cuellos de botella que afectan la velocidad, la calidad y la eficiencia del sistema.

**- Usar propiedad ==alt==**: El uso de etiquetas ==alt== en imágenes ayuda en el **SEO** de la imágenes.

**- lazy-loading**: Utiliza esta técnica para que todas las imágenes no se carguen al mismo tiempo.

**- Usar servicios de Cloud o CDN para imágenes**: Dichos servicios mejoran el tiempo de carga de los archivos multimedia.

**- Usa SSR**: Usar estrategias de Server Side Rendering es la mejor forma de obtener un buen **SEO**.

> Si necesitas usar un CDN para imágenes aquí te dejo un artículo que habla sobre un servicio de cloud gratuito [Click aqui](https://jotadev0.vercel.app/blog/La-mejor-alernativa-Gratuita-a-Cloudinary)

Bueno y con eso terminamos nuestra **guía completa para mejorar el posicionamiento  de nuestra página en la web**, espero que te haya gustado y que cada uno de los puntos vistos aquí te ayuden a mejorar el **SEO** de tu Web para que así mas personas puedan encontrarte.
