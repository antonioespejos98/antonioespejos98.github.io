# Portfolio · Antonio Espejo

Web personal de Antonio Espejo — ingeniero informático (IA generativa) y técnico deportivo de kickboxing.
Bilingüe (ES/EN), una sola página, con transición visual de la faceta *dev* a la *deportiva* según el scroll.

## Estructura

```
index.html        → la página
assets/style.css  → estilos
assets/script.js  → idioma, transición de tema y animaciones
images/           → hero-split.png · action-split.png · profile.png
```

Para verla en local solo tienes que abrir `index.html` en el navegador.

## Publicar gratis en GitHub Pages

GitHub te da un dominio gratuito del tipo `https://TU-USUARIO.github.io`. Pasos:

1. **Crea el repositorio.** En GitHub → *New repository*. Para usar el dominio raíz gratuito, llama al repo exactamente:

   ```
   TU-USUARIO.github.io
   ```

   (cambia `TU-USUARIO` por tu usuario de GitHub). Ponlo **público**.

2. **Sube los archivos.** Desde la carpeta del proyecto, en una terminal:

   ```bash
   git init
   git add .
   git commit -m "Portfolio Antonio Espejo"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-USUARIO.github.io.git
   git push -u origin main
   ```

   (O arrástralos en *Add file → Upload files* desde la web de GitHub.)

3. **Activa Pages.** Repo → *Settings* → *Pages* → en *Source* elige `Deploy from a branch`, rama `main`, carpeta `/ (root)` → *Save*.

4. **Espera 1–2 minutos** y abre `https://TU-USUARIO.github.io`. ¡Listo!

> Si en vez del dominio raíz prefieres un repo con otro nombre (p. ej. `portfolio`), la web quedará en `https://TU-USUARIO.github.io/portfolio/` y funciona igual.

## Si más adelante compras un dominio propio

1. Crea un archivo llamado `CNAME` (sin extensión) en la raíz con tu dominio, p. ej.:

   ```
   www.antonioespejo.com
   ```

2. En tu proveedor de dominio añade un registro `CNAME` que apunte `www` a `TU-USUARIO.github.io`.
3. En *Settings → Pages → Custom domain* escribe el dominio y activa *Enforce HTTPS*.
