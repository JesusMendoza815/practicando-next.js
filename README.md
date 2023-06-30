### ¿Qué es Next.js?
Es un Fraemwork para generar contenido estático que podrá ser servido desde el servidor <br>
Ofrece todas las mejoras de React y más
<li>Mejora de rendimiento
<li>Mejor manejo del SEO
<li>Ruteo más intuitivo y sencillo
<li>Separación de código automática
<li>Menos dependencia al iniciar un proyecto

### Next ofrece Server-side
<li>SSR Server-side rendering
<li>SSG Static-site generation
<li>CSR Client-side rendering <br>
<li>ISR Incremental-site generation
Además
<li>DR Dynamic Routing
<br>
<br>

### Iniciar un proyecto de Next.js
Documentación: https://nextjs.org/docs/getting-started/installation

Para crear: npx create-next-app

**Los nombres de los componentes en Next deben ser en minusculas ya que también son usados para PATH/URL (Routing)
### Link
importar: import Link from "next/link";
<br>
Los Links de Next tienen la característica de que hacen un pre-fetch del componente o página a la cual están asignados, es decir que la página ya está cargada al momento de ingresar.