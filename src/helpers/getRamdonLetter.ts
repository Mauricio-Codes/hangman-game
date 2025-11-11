// Arreglo de palabras
const words: string[] = [
    'COMPUTADOR',
    'AGUACATE',
    'SOFTWARE',
    'DESARROLLO',
    'TECNOLOGIA',
    'MOBILE'
];

// Obtiene una palabra al azar para usar en el juego del ahorcado
export default function getRamdonLetter() {
    
    const randomIndex = Math.floor( Math.random() * words.length );
    return words[randomIndex];

}