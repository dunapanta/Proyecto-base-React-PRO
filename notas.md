## Clase 32 Lazy Load
- Sirve para segmentar nuestra aplicación para cargar de forma perezosa (cuando sea necesario o bajo demanda)
- Es util cuando la aplicación es muy grande y se demora en cargar
- Cuando se carga por lazy load va a hacer una peticion al backend y el backend regresa ese chunk

## Clase 36 Creación Módulo 01-lazy-load
- Dentro del modulo se crea components, pages, router

## Clase 39 LazyLoad y Suspense
- Se debe definir un componente que va a ser cargado bajo demanda
- Para trabajar con lazy load se debe exportar los componentes por defecto
```
const Lazy1 = lazy(() => import("../01-lazy-load/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../01-lazy-load/pages/LazyPage2"));
const Lazy3 = lazy(() => import("../01-lazy-load/pages/LazyPage3"));
```
- Se debe agregar el fallback, hay que añadir el Suspense
- Tengo que envolver todo el router con el suspense
- El suspense sirve para decirle a React que cuando estoy cargando algun modulo por favor espera pero mientras estoy cargando has lo siguiente

## Clase 40 Cambiar nombre de chunks
- `const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ "../01-lazy-load/pages/LazyPage1"));`
- Es útil para manejar estrategias de cache, o para sacar estadisticas