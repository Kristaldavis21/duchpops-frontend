import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-80"
          src="https://pbs.twimg.com/profile_images/810190388061474818/q1bWrHb6_400x400.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-bb65d0e/sites/default/files/styles/featured_1500/public/articles/quick-easy-popsicle-recipes.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.farmersalmanac.com/wp-content/uploads/2015/07/fudge-pops_as159604308-500x500.jpeg"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;