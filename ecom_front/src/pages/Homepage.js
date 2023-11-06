import React from 'react'
// import axios from "axios"
// import {useNavigate} from "react-router-dom"
// import { useCart } from './Cartcontext'

import { useAuth } from './Usercontext'

const Homepage = () => {
//   const [product,setproduct] =useState([])
//   const navigate =useNavigate();
//   const [cart,setcart]=useCart();
// console.log(product)

const [userauth, setuserauth] = useAuth();


//      function addtocart(val){
//           setcart([...cart,val])
//           localStorage.setItem("cart",JSON.stringify([...cart,val]))
//           alert("item added to cart");
//     }


//   async function allproduct(){
//     const response = await axios.get("http://localhost:8080/allproduct");
//     if(response.status===200){
//       setproduct(response.data.products);
//     }
//   }

//   useEffect(()=>{
//      allproduct();
//   },[])


  return (
    <div className='parent'>
      <h1>Homepage</h1>
      <div>{JSON.stringify(userauth, null, 4)}</div>
        {/* {
          product.map((val)=>(
            <>
            <div className='child'>
              <img src={`http://localhost:8080/uploads/${val.img}`} width={200} height={200}/>
              <p>{val.description}</p>
              <h3><span>Price:</span>{val.price}</h3>
              <button onClick={()=>navigate(`/product/${val._id}`)}>More detail</button>
              <button onClick={()=>addtocart(val)} >ADDTOCART</button>
            </div>
            </>
          ))
        } */}
    </div>
  )
}

export default Homepage