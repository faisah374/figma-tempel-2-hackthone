
import { Product } from '../../../types/produts';


export const addToCart =(Product: Product) =>{

    const cart :Product[] =JSON.parse(localStorage.getItem('cart') || '[]')
    const  exisxtingProductIndex=cart.findIndex(item => item._id === Product._id)

    if(exisxtingProductIndex > -1){
        cart[exisxtingProductIndex ].quantity += 1

    }
    else {
        cart.push({
            ...Product,quantity:1
        })
    }
    localStorage.setItem('cart',JSON.stringify(cart))  
  }

export const removeFromCart=(productId :string) =>{
    let cart : Product[] =JSON.parse(localStorage.getItem('cart') || '[]')
    cart= cart.filter(item => item._id !== productId)
    localStorage.setItem('cart',JSON.stringify(cart))

} 
export const updatecartQuantity=(productId:string,quantity:number)=>{
    const cart :Product[]= JSON.parse(localStorage.getItem('cart')||'[]')
    const ProductIndex =cart.findIndex(item =>item._id === productId)
    if(ProductIndex > -1){
        cart[ProductIndex].quantity=quantity
    }

}
export const getCartItems= () : Product[] =>{
    return JSON.parse(localStorage.getItem('cart') ||'[]')
}

