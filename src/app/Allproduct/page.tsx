import React from 'react';
import Navb from '../components/Navb';
import Farme143 from '../components/Farme143';
import Productlist from '../components/Productlist';

  import Shop  from '../components/Shop';



const productpage = () => {
  return (
    <div>
   <Navb/>
   <Farme143/>
   <Productlist></Productlist>  
   <Shop/>

    </div>
  );
}

export default productpage;
