
# Servidor ChatBot Hospital

## Instalar los paquetes necesarios

Para instalar los paquetes necesarios de npm debe correr el siguiente comando dentro de la carpeta del proyecto

```bash
npm install
```

## Levantar el servidor localmente

Para levantar el servidor de node debe correr el siguiente comando dentro de la carpeta del proyecto

```bash
npm start
```

- El servidor quedará escuchando por [http://localhost:3000](http://localhost:3000).

- También existe una versión publicada en Heroku (se reinician los datos del archivo cuando no hay actividad) [https://shrouded-temple-16899.herokuapp.com/](https://shrouded-temple-16899.herokuapp.com/)


## Endpoints del servidor

-  Información / `GET`: [/](https://shrouded-temple-16899.herokuapp.com)
- Obtener solicitudes / `GET`: [/appointments](https://shrouded-temple-16899.herokuapp.com/appointments)
-  Guardar solicitudes / `POST`: [/save](https://shrouded-temple-16899.herokuapp.com/save)