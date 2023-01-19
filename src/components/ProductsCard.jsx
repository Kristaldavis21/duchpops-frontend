
import {Card, Button, Container, Row} from 'react-bootstrap';
import {ProductInfo} from './ProductData';
import { useEffect,useState } from 'react';
//import image from './Assets/images/avocado.jpg'
import {useNavigate} from 'react-router-dom'

function ProductsCard (props) {
  const[cart,setCart] = useState([
    {
      description: "",
      price:0,
      qty:0,

    }
  ])
  
  useEffect(()=> {
    console.log(cart)

  },[cart])

  const navigate=useNavigate();

  function handleClick(){
   navigate("/cart",{state: cart}) 
  }

  function handleSubmit( description,price,qty){
    let copy=[{...cart}];
    let item={description,price,qty};
    copy.push(item)
    setCart( copy );
    console.log(copy)
  }

  const listCards = ProductInfo.map((product, index) => 
    
    <Card key={index} style={{ width: '18rem' }} className="mx-3 mb-3">
      <Card.Img variant="top" src={product.image} />
    
      <Card.Body>
        <Card.Title> {product.description} </Card.Title>
      
        {product.price}
        <br>
        </br>
        <Button variant="primary" onClick={()=>{handleSubmit(product.description,product.price,1 )}}>Add to Cart</Button>
        {/* <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
         */}
      </Card.Body>
    </Card> 
  );

  return <>
    <div>
      <Container className='justify-items-center' style={{border:
      '1px  black'}}>
        <Row className="align-items-center">

          { listCards }

        </Row>
      </Container>
    </div>
  </>
}

export default ProductsCard;

