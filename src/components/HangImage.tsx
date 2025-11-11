import image0 from '../assets/0.png';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';

// Definir array para las imagenes
const images: string[]  = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
];
// Validar que el dato recibido sea el número de la imagen y no texto
interface Props{
    imageNumber: number;
}


function HangImage( { imageNumber }: Props ) {

    // Validar que el componente sólo mustre una imagen correcta
    if ( imageNumber >= 9){
        imageNumber = 9;
    }
  // retornar la imagen 
  return (
    <img src={ images[imageNumber] } 
    alt="Hang Image" 
    style={{ width: 250 }}
    />
  )
}

export default HangImage