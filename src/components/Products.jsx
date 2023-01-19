
export default function Products (props) {
  const { product, onAdd, onRemove} = props;
  return (
<div className='Productcard'>
    <img className="small" src={product.image} alt={product.name} />
    <h3> {product.name} </h3>
    <div> {product.price} </div>
    <div>
        <button onClick={() =>onAdd (product)}> Add To Cart </button>
    </div>
</div>
  );

}









//import Carousel from './components/Carousel';
// import Avocado from './components/Assets/images/avocado.jpg';
// import BananaPudding from './components/Assets/images/bananaPudding.jpg';
// import Brownie from './components/Assets/images/brownie.jpg';
// import CaramelKiss from './components/Assets/images/caramelKiss.jpg';
// import CherryMascarpone from './components/Assets/images/cherryMascarpone.jpg';
// import CubanWakeUp from './components/Assets/images/cubanWakeUp.jpg';
// import Desperado from './components/Assets/images/desperado.jpg';
// import Grape from './components/Assets/images/grape.jpg';
// import LemonZest from './components/Assets/images/lemonZest.jpg';
// import MangoGinger from './components/Assets/images/mangoGinger.jpg';
// import Mocha from './components/Assets/images/mocha.jpg';
// import PeachPineapple from './components/Assets/images/peachPineapple.jpg';
// import PinaColada from './components/Assets/images/PinaColada.jpg';
// import StrawberryShortCake from './components/Assets/images/strawberryShortCake.jpg';
// import VeganStrawberry from './components/Assets/images/VeganStrawberry.jpg';
// import WhiteMocha from './components/Assets/images/WhiteMocha.jpg';