# Resumen de sesión — Web María Vital
**Fecha:** 20 de junio de 2026

---

## Análisis inicial de la web

Se analizó el código fuente del proyecto en `C:\Users\USUARIO\Desktop\Mariaweb` (TanStack Start + React + Tailwind). Se identificaron los siguientes problemas:

1. `<html lang="en">` — idioma incorrecto
2. Página 404 y error boundary en inglés
3. Fechas relativas falsas en la tarjeta de LinkedIn ("hace 2 días"…)
4. Emojis inconsistentes en `/sobre`
5. `/formaciones` mostraba por defecto contenido interno de distribuidores
6. Falta de página de precios/cómo funciona una sesión

---

## Cambios realizados

### 1. Correcciones de idioma y errores
- `lang="en"` → `lang="es"` en el shell raíz
- Página 404 traducida al español ("Página no encontrada", "Volver al inicio")
- Boundary de error traducido ("Esta página no ha cargado correctamente", "Intentar de nuevo")

### 2. LinkedIn — fechas falsas eliminadas
- Quitadas las etiquetas de tiempo relativo ("hace 2 días", "hace 5 días", "hace 1 semana") de los posts hardcodeados.

### 3. Formaciones — tab por defecto
- Cambiado el estado inicial de `"dist"` a `"pub"`: ahora la página muestra primero las formaciones para el público general.

### 4. Hero del home — reducción de tamaño
- Altura: `min-h-[92vh]` → `min-h-[66vh]` (÷1.4)
- Fuente: `text-6xl md:text-8xl` → `text-[2.7rem] md:text-[4.3rem]` (÷1.4 exacto)
- Padding: `py-32` → `py-20`
- Resultado: la sección "Tres caminos" ya es visible sin hacer scroll

### 5. Productos — botón de compra reemplazado
- Eliminado el botón "Comprar en doTERRA" (enlace externo a la tienda doTERRA)
- Añadido botón verde **"Pedir por WhatsApp"** que genera un mensaje pre-formateado con el nombre del producto:
  > *Hola María 👋 Me interesa el producto **[nombre]** de doTERRA. ¿Me puedes dar más información y cómo pedirlo?*

### 6. Fichas de producto — secciones eliminadas
- Eliminadas las tres tarjetas: **Ingredientes**, **Seguridad** y **Recomendado para**.

### 7. Menú de navegación
- "Productos" → **"Productos/Tienda"** en el header.

### 8. Formulario de contacto — selector de canal
- Añadido toggle **WhatsApp / Email** antes del formulario.
- Al seleccionar WhatsApp: abre `wa.me/34671724828` con el mensaje formateado.
- Al seleccionar Email: abre el cliente de correo con `mailto:mariavitalholistica@gmail.com` y el asunto/cuerpo pre-rellenados.
- El botón de envío cambia de color y texto según la selección.

### 9. Página "Sobre María" — sección Filosofía/Cómo trabajo
- Corregido el layout: `max-w-none` sobreescribía `max-w-5xl`, dejando el contenido descentrado y sin encuadrar.
- Solución: separar el wrapper de ancho del wrapper `prose`.

### 10. Logo
- Sustituido el SVG del loto verde por la imagen del **loto dorado** (`ChatGPT Image 3 jun 2026, 11_25_08.png`) en el header.
- Tamaño: `h-14 w-auto`.

---

## Configuración del servidor de preview

- Detectado que el panel de preview de Claude Code apuntaba a `localhost:3000` (servidor antiguo desde `C:\Users\USUARIO\Desktop\MARÍA VITAL\María`).
- Actualizado `launch.json` para lanzar `npm run dev` desde `Mariaweb` en el puerto **8080**.
- El servidor de desarrollo correcto con todos los cambios está en `http://localhost:8080`.
