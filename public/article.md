# Formas de recorrer arrays en JavaScript 🍭
<Tags>
  <Tag type="js">JS</Tag>
  <Tag type="alg">ALG</Tag>
  
</Tags>

Recorrer un array es una tarea que aunque parece simple puede volver compleja, ademas que es sin duda una de las tareas mas cotidianas que veremos en el mundo de la programacion. E javaScript existen diferentes metodos y maneras de recorrer un array, por ello en este articulo te mostraremos las diferentes Maneras de Recorrer un Array en JS, desde el viejo bucle ***For*** hasta la herramienta de la ***Recursividad***. Si estas listo para aprender mas sobre programacion pues empezemos si mas.

1. Bucle For

El bucle ***for*** es un tipo de bucle que se puede ver en todos lo lenguages de programcion o a menos la mayoria. En JS el Bucle ***for*** cuenta con variantes: Bucle For i, Bucle For in, Bucle For of. Ambos hacen lo mismo recorrer un array o un loop hasta un numero dado, la diferencia es que en el bucle **for normal** tenemos todo el control damos una variable, una condicional, y un incrementador o decrementador, en cambio en el bucle **for of** damos un array y sacamos su valor y en el **bucle in** damos un array y sacamos su indice.

``` javascript

const food = ['🍖','🐔','🐟','🍹','🍅']

for (var i = 0; i < food.length; i++) { //'🍖','🐔','🐟','🍹','🍅'
  console.log(food[i])
}
for (i of food) { // '🍖','🐔','🐟','🍹','🍅'
  console.log(i)
}
for (i in food) { // '🍖','🐔','🐟','🍹','🍅'
  console.log(food[i])
}

```

2. Bucle While

El bucle ***while*** cuenta tambien con el ***do while*** que se ejecuta una vez siempre, en cambio el **while normal** lo que hace es que se ejecuta miestras se cumple una condicion y por ende ese es el parametro que recibe dicho bucle


``` javascript

const nums = [0,1,2,3,4]

let i = 0

while (nums.length > i) { // 0,1,2,3,4
  console.log(nums[i])
  i++
}

```

> Deber tener cuidado que la condicion no se cumpla siempre sino se creara un bucle infinito


3. Metodo ForEach

El metodo ***forEach*** que en otros lenguages de programacion no es un metodo si no un bucle el cual puede ser accedido desde cualquier lugar solo con el simple hecho de ser llamado, en JavaScript es usado como un metodo de un ***Array*** esto quiere decir que solo funciona con esta estructura de control. Para ser usado recibe como parametros una ***callback*** la cual recibe el item, indice, array.

``` javascript

const nums = ['cero','uno','dos','tres','cuatro']

nums.forEach((item,index,array) => {
  console.log({item,index,array})
})

```

4. Metodo Map

El metodo ***map*** se usa en JavaScript para crear un bucle pero solo para *Arrays* esto quiere decir que se necesita de un array para poder usarlo. La forma en la que se usa el metodo ***map*** llamandola y pasandole como *parametros* una ***callback*** donde funcionara el metodo ya que la misma retorna un nuevo array.

``` javascript

const array = ['🐶','🐱','🐷','🐭','🐮']

function loopWithMap (array) {
  return array.map(item => console.log(item))
}

loopWithMap(array) /// '🐶','🐱','🐷','🐭','🐮'

```
> El metodo ***map*** es usado para crear un array de otro

5. Recursividad

La recursividad es una de las herramientas o instrucciones de programacion que nadie suele nombrar a menos que seas ya un **Senior** con años de experiencia. Te estaras preguntando que es la recursividad pues dejame expliartelo asi: Es una funcion con un ***numero de iteraciones*** y un ***indice***, lo primero que hace la funcion es revisar la condicional si esta se cumple entonces el bucle termina, sino entonces continua llamando de nuevo a la funcion pero incrementando el ***indice***. En resumen la *recursividad* es una forma de crear un bucle desde cero, la forma en la que funciona es llamandose a si misma.

``` javascript

const array = ['🐶','🐱','🐷','🐭','🐮']

function loopOfRecursivity (num, i=0) {
  if(i == num) return
  console.log(array[i])
  loopOfRecursivity(num, i + 1)
}

loopOfRecursivity(5) /// '🐶','🐱','🐷','🐭','🐮'

```

> Al igual que el bucle while deber tener cuidado que la condicion no se cumpla siempre sino se creara un bucle infinito

Estos son algunos de los bucles utilizados en el dia a dia de un programador JavaScript, Ojo en este articulo dejamos de lado el metodo ***reduce***, ***groupBy***, ***filter***, etc, ya que su uso es mas estricto que el de un bucle normal.
