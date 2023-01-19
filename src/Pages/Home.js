//import Navbar from '../components/Navbar';
import Carousel from 'react-bootstrap/Carousel';
//import Products from '../components/Products';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-60"
          src="https://visitbermudanow.com/wp-content/uploads/2019/05/Duch-Pops-Bermuda.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Local Popsicle Dealer</h3>
          <p>Once you POP you can't stop! .</p>

          
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-bb65d0e/sites/default/files/styles/featured_1500/public/articles/quick-easy-popsicle-recipes.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://littlefamilyadventure.com/wp-content/uploads/2020/05/homemade-fruit-popsicles.jpg"
          alt="Third slide"/>

      </Carousel.Item>
    </Carousel>
  );
}

// // export default function Home (props) {
// //   const { products } = props;
// //   return (
// //     <div className='block col-2'>
// //       <h2> Products</h2>
// //       <div className='row'>
// //         {products.map ((product) => (
// //           <Product key= {product.id} product={Product}></Product>
// //         ))}
// //       </div>
// //     </div>
// //   )
// }

export default CarouselFadeExample;