## Clase 61 Compound Component Patern (MUI)
- Compound components are a React pattern that provides an expressive and flexible way for a parent component to communicate with its children, while expressively separating logic and UI.
- In compound components instead of passing state through props, we pass elements as children to a parent element.

- Tener el componente padre que reciba los elementos hijos y los renderice.

- Un ejemplo es el select si se quiere agregar o quitar opciones se lo hace con option

```
<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

```


## Clase 71 Extensibles Styles Pattern
- El patrón de estilos extensibles es una forma de crear componentes que pueden ser estilizados por el usuario de la librería.

## Clase 72 Agregando classnames
-  defino `custom-styles.css` y lo importo
- Agrego className como prop opcional

# Clase 81 Controll Props
- Controlar el estado interno y la emisión de eventos de un componente.
- Ejemplo input donde se puede controlar el valor del input y el onChange

# Clase 84 Definir onChange 
- Especificar el evento que se va a emitir cuando cambia el valor del input

# Clase 97 State initializer
- El patron State Initializer lo utiliza Formik
- El patron State Initializer es una forma de inicializar el estado de un componente con valores iniciales y una forma de reestablecer el estado a su forma original.

# Clase 109 TSDX
- `npx tsdx create <nombre>`
- Selecciono tempate `react`

# Clase 110 Configuraciones
- `peerDependency` dependencia que la persona tien que satisfacer
