# Hangman Game

Juego de ahorcado construido con **React**, **TypeScript** y **JavaScript**, creado como proyecto de práctica para reforzar lógica, manejo de estado y componentes en React.

## Descripción
El juego selecciona una palabra al azar y el jugador debe adivinarla letra por letra.  
Cada error suma un intento fallido y actualiza la imagen del ahorcado.  
El juego termina cuando el usuario completa la palabra o alcanza el límite de errores.

## Tecnologías utilizadas
- React
- TypeScript
- JavaScript
- Hooks (useState, useEffect)

## Funcionalidades
- Palabras seleccionadas al azar  
- Sistema de intentos con límite  
- Validación de victoria y derrota  
- Visualización del progreso mediante imágenes  
- Botón para reiniciar el juego  
- Interfaz simple e intuitiva  

## Estructura del proyecto
* src/
  * ├── assets/
  * │ └── Imágenes del ahorcado (0–9)
  * ├── components/
  * │ └── HangImage.tsx # Componente encargado de mostrar la imagen según los intentos
  * ├── helpers/
  * │ ├── letters.ts # Arreglo de letras disponibles
  * │ └── getRandomLetter.ts # Generador de palabras aleatorias
  * ├── App.tsx
  * └── index.css

## Cómo ejecutarlo

1. Clona este repositorio: https://github.com/Mauricio-Codes/hangman-game.git

2. Instala dependencias: npm install

3. Ejecuta el proyecto: npm run dev

## Objetivo del proyecto
Este proyecto fue creado para practicar lógica de juego, manejo de estado en React y organización básica de un proyecto interactivo usando TypeScript.
