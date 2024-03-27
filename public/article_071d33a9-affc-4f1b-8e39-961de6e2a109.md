<Tags>
  <Badge title="JavaScript" tag="javascript"/>
  <Badge title="React" tag="react"/>
  <Badge title="Dev" tag="dev"/>
</Tags>

# Ya no necesitaras usar UUID para crear ID unicos 🕵

<Author text="Created: March 24, 24"/>

![Libreria UUID](https://ucarecdn.com/61c56201-9047-4b49-9e2a-1cfd55d265ac/-/preview/1000x562/)

La creacion de **ID unicos y dinamicos** en programación es un trabajo que los programadores tanto de Backend como Frontend llevan a cabo en el dia a dia, ya sea para que no se repita un elemento u objeto en una base de datos o poder para diferenciar componentes que se repiten en *React*. Una de las libreria de JavaScript que nos hacen ese trabajo de manera rapida es la libreria **UUID**, pero actualmente existe una **alternativa nativa de JavaScript** que es posible que mate a **UUID**.

1. Que son los ID y porque son importantes

Los ID son caracteres ya sea numericos o de texto que solo se generan y existe una vez, ademas que pertenece a solo un objeto, es decir no puede haber un producto en una base de datos que tenga el mismo ID que otro. Dichos **ID** sirven como identificador para un objeto, digamos que es como el pasaporte de dicho objeto.

En el mundo de la programacion poder *diferenciar objetos* ya sea que tengan la misma estructura o que se repitan es *imprecindible para no tener problemas*, en el desarrollo un objeto que sea igual a todo puede causar un error que colapse tu aplicación, por ello son importantes lo ID unicos. 

2. ¿Como se Usa?

Para usar de manera efectiva esta potente funcionalidad de *JavaScript*, solo es necesario usar el siguiente código, ya sea en un **Navegador Web Moderno** o en el **Runtime de JavaScript NodeJS**, todo funciona de forma nativa y sin necesidad de importar nada.

``` javascript

crypto.randomUUID()

```

Como podemos ver solo basta con usar una linea de código para generar una ID unico de manera *dinamica*, solo hacemos uso de ==crypto== y luego accedemos a su método ==randomUUID()==.

Aunque cabe destacar, que una de las desventajas que le veo a crypto es que su generacion de **ID dinamicos** se basa en una sola longitud de caracteres la cual es ==36== y no es tan personalizable como **UUID** una *libreria de js* dedica al generacion de ID unicos **pseudo-aleatorios**.

```javascript

const idUnico = crypto.randomUUID()

idUnico.length // 36

```

3. En que se puede usar crypto.randomUUID()

Existen diferentes ambitos de desarrollo en el cual se deben usar la generacion de *ID unicos*, entre las cuales podemos notar:

**REACT**: Cuando queremos usar un componente varias veces y cambiar sus datos usamos el metodo ==map==, esto no tiene nada que ver con los *ID* pero si vemos la consola notaremos que tenemos un error, el cual nos dice que necesitamos una ==key== que identifique a cada elemento que se renderiza, este es un ejemplo claro en el cual podemos usar ==crypto== y solucionar este problema.

```jsx

import ReactDOM from 'react-dom/client'

const frutas = ['🍅','🍌','🍓','🍉']

ReactDOM.createRoot(document.getElementById('root')).render(
  <ol>
    {
      frutas.map(fruta => <li key={crypto.randomUUID()}>{fruta}</li>)
    }
  </ol>
)


```

> Ten en cuenta que usar ==crypto== de esta manera puede dar problemas de rendimiento en react

**PHP**: Cuando queremos tener en nuestra base de datos ya sea ==MySQL== una columna que no se pueda repetir usamos una llave primaria en su mayoria con el nombre ==id==, pero el problema esta cuando queremos enviar datos a esa columna ya que el valor no se puede repetir, (*daria error*), entonces este seria un buen caso de uso para ==crypto==.

``` javascript

// Codigo para JavaScript

function add () {
  const id = crypto.randomUUID;

  fetch("www.api.com",{
    method: "POST",
    body:id
  })
  .then(data => data.text())
  .then(data => {
      console.log(data)
    }
  )
}



```

> Enviamos por JavaScript la ==id== generada con ==crypto.randomUUID==


``` php

// Codigo para Php

$id = file_get_contents("php://input");
$conexion = mysqli_connect("localhost", "root", "", "bd_ejemplo");
$query = mysql_query($conexion, "INSERT INTO tabla(id) VALUES ('$id')");

echo "Excelente";

```

> Recibimos en php el id enviado y lo utilizamos


## Conclusion

Como podemos ver **JavaScript sigue avanzando**, tanto que esta volviendo librerias que antes eran imprecindibles en el desarrollo web para lograr solucionar un problema, a librerias obsoletas y con codigo no reutilizable.