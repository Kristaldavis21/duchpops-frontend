import React from 'react';
import ProductsCard from '../components/ProductsCard';

export default function Shop() {
  return <>
    <div>
      <button className='cartbutton'>Cart</button>
   <br>
   </br>
      <header><h3> <i> Live. Love. Buy Popsicles. </i> </h3> </header>
      <br>
      </br>
      <ProductsCard />
      {/* <ProductsCard imageurl={whiteMocha} name="whiteMocha" />
      <ProductsCard imageurl={veganStrawberry} name="veganStrawberry" />
      <ProductsCard imageurl={strawberryShortCake} name="strawberryShortCake" />
      <ProductsCard imageurl={italianGrapeFruit} name="italianGrapeFruit" />
      <ProductsCard imageurl={peachPineapple} name="peachPineapple" />
      <ProductsCard imageurl={mocha} name="mocha" /> */}

    </div>
  
  
  </>
  
}
