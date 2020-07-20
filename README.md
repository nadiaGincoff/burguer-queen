# Burger Queen

![burger-queen](/img/logobqueen.png)

---

## Preámbulo

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## Resumen del proyecto

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
_backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      | Precio \$ |
> | ------------------------- | --------- |
> | Café americano            | 500       |
> | Café con leche            | 700       |
> | Sandwich de jamón y queso | 1000      |
> | Jugo de frutas natural    | 700       |
>
> Y otro menú para el resto del día:
>
> | Ítem                 | Precio |
> | -------------------- | ------ |
> | **Hamburguesas**     | **\$** |
> | Hamburguesa simple   | 1000   |
> | Hamburguesa doble    | 1500   |
> | **Acompañamientos**  | **\$** |
> | Papas fritas         | 500    |
> | Aros de cebolla      | 500    |
> | **Para tomar**       | **\$** |
> | Agua 500ml           | 500    |
> | Agua 750ml           | 700    |
> | Bebida/gaseosa 500ml | 700    |
> | Bebida/gaseosa 750ml | 1000   |

## Investigación

https://docs.google.com/forms/d/e/1FAIpQLSdV1fZKQICsr0Xz12rKi-6apLGCjE65snn4vSHwXifSHax3Cg/viewform?usp=sf_link

## Prototipo

https://www.figma.com/file/ugy7PCZXopiceK3X5kjdI4/Burger-Queen?node-id=0%3A1

## Despliegue package

https://project-burguer-queen.web.app/

## Herramientas utilizadas

### HTML y CSS

- [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
- [ ] Uso de selectores de CSS.
- [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
- [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [ ] [Uso de Media Queries.](https://developer.mozilla.org/es/docs/CSS/Media_queries)

### JavaScript

- [ ] Uso de condicionales (if-else | switch | operador ternario)
- [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
- [ ] Manipular arrays (filter | map | sort | reduce)
- [ ] Manipular objects (key | value)
- [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
      | [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
- [ ] Diferenciar entre expression y statements.
- [ ] Diferenciar entre tipos de datos atómicos y estructurados.
- [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
- [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

- [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

- [ ] Organizar y dividir el código en módulos (Modularización)
- [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
- [ ] Uso de linter (ESLINT)

### Git y Github

- [ ] Uso de comandos de git (add | commit | pull | status | push)
- [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
- [ ] Colaboración en Github (branches | pull requests | |tags)
- [ ] Organización en Github (projects | issues | labels | milestones)

### Firebase

- [ ] [Firestore.](https://firebase.google.com/docs/firestore)
- [ ] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
- [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
- [ ] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
      | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### React

- [ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
- [ ] [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
- [ ] `props`
- [ ] [Eventos en React.](https://es.reactjs.org/docs/handling-events.html)
- [ ] [Listas y keys.](https://es.reactjs.org/docs/lists-and-keys.html)
- [ ] [Renderizado condicional.](https://es.reactjs.org/docs/conditional-rendering.html)
- [ ] [Elevación de estados.](https://es.reactjs.org/docs/lifting-state-up.html)
- [ ] [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
- [ ] [`CSS` modules.](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
- [ ] [React Router.](https://reacttraining.com/react-router/web)

### UX

- [ ] Diseñar la aplicación pensando y entendiendo al usuario.
- [ ] Crear prototipos para obtener feedback e iterar.
- [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
- [ ] Planear y ejecutar tests de usabilidad.

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

- Anotar nombre de cliente.
- Agregar productos al pedido.
- Eliminar productos.
- Ver resumen y el total de la compra.
- Enviar pedido a cocina (guardar en alguna base de datos).
- Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

- Ver los pedidos ordenados según se van haciendo.
- Marcar los pedidos que se han preparado y están listos para servirse.
- Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).

---

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

- Ver listado de pedido listos para servir.
- Marcar pedidos que han sido entregados.

##### Definición de terminado

- Debes haber recibido _code review_ de al menos una compañera.
- Haces _test_ unitarios y, además, has testeado tu producto manualmente.
- Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
- Desplegaste tu aplicación y has etiquetado tu versión (git tag).
- Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

---

## Autores

Nadia Gincoff
Cindy Barría
Rosario Wrobel
