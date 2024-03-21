<Tags>
  <Badge title="html" tag="html"/>
  <Badge title="javascript" tag="javascript"/>
</Tags>

# Metodos de Arrays en JavaScript 🔥

<Author text="Updated: March 21, 24">

Los metodos de arrays en **JavaScript** son todas aquellas funciones que nos ayudan en el dia a dia del programador a solucionar problemas en **Arrays** que pueden verse complejos 💢 si no se conocen bien el como funciona el algoritmo de estas **tipos de datos**. En este post veremos desde el pequeño metodo *SORT* hasta el grandioso metodo *REDUCE*, si estas listo para conocer a detalle dichos metodos pues que estas esperando para comenzar a bajar ⏬.

1. Metodo Sort

El metodo ***sort*** se utiliza para **ordenar** un Array ya sea de forma *Ascendente o Descendiente* dicho metodo toma como parametros una *Callback* donde se le pasan por parametros la forma en la que se ordenara el array, la misma devuelve un Array **Ordenado**.

``` javascript

// Strings
const names = [ 'Jota' ,'Alex' ,'Beto' ];
names.sort();
// [ 'Alex' ,'Beto' ,'Jota' ]

// Numbers
const numbers = [ 100, 24 ,4 ,2 ,5 ]
numbers.sort(( a, b ) => {
	return a - b;
})

// [ 2 ,4 ,5 ,24 ,100 ]

```

2. Metodo ForEach

El metodo ***forEach*** se utiliza para realizar un bucle dentro de un Array digamos que es lo mismo que usar los bucles normales que nos proporciona JavaScript, pero cambiando la sintaxis y la velocidad de ejecucion. Dicho metodo recibe como parametro una funcion de **Callback** en la que se pasa como parametros el **item** y opcionalmente el **indice**, dentro de la funcion Callback se puede ir iterando el Arreglo.

> Ten en cuenta que el forEach recorre todos los items 🔂

``` javascript

const list = [ 'Jota', 'Alex', 'Beto' ];

list.forEach(( li, i ) => {  // (li)hace referencia al item actual (i) al indice actual
	console.log({ li, i })
})

// { li: 'Jota', i: 0 }
// { li: 'Alex', i: 1 }
// { li: 'Beto', i: 2 }

```

3. Reduce

El metodo ***reduce*** sirve como su nombre lo indica para reducir un Array. Dicho metodo recibe *dos parametros* una funcion **Callback** donde se le pasa como parametros el **item y el accumulador** ademas de que se le indica que debera retornar, y por otro lado el tipo de dato con el cual se piensa manipular.

``` javascript

const nums = [ 2 ,3 ,5 ,6 ,3 ,8 ];
const buzz = nums.reduce(( acc, item ) => {  // accumulador y item
	return acc + item
},0)  // tipo de dato

// 27

```

La mayoria de los metodos en **Arrays** de *Javascript* se utilizan en el dia a dia, ya que los mismos nos ayudaran a solucionar diferentes problemas relacionados con esta **tipo de dato** sin necesidad de siempre utilizar bucles y bucles ralentizando nuestras funciones sin necesidad. Es importante que dichos metodos los usemos y apliquemos en cada uno de sus **Casos de Uso** para fortalezer nuestro codigo y nuestra logica.
