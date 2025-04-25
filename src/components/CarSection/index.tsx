import './styles.css';
import carImg from '../../assets/car.png';

export default function CarSection(){
    return(
        <div className='ct-card'>
            <h2>Venha nos visitar</h2>
            <div className='ct-card-car'>
            <img src={carImg} alt="car" />
            <p>Lorem ipsum dolor</p>
            </div>
            <div className='ct-card-car'>
            <img src={carImg} alt="car" />
            <p>Lorem ipsum dolor</p>
            </div>
        </div>
    );
}