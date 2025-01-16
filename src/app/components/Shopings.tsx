import React from 'react';
import Image from 'next/image';
function Shopings() {
  const cartItems = [
    {
      id: 1,
      name: 'Graystone vase',
      description: 'A timeless ceramic vase with a tri color grey glaze.',
      price: 85,
      quantity: 1,
      image: '/image7.png',
    },
    {
      id: 2,
      name: 'Basic white vase',
      description: 'Beautiful and simple this is one for the classics',
      price: 125,
      quantity: 1,
      image: '/image8.png',
    }
  ];

  return (
    <div className="container w-11/12 mx-auto">
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "Clash Display" }}>Your shopping cart</h1>
      <table className="w-full">
        <thead className="hidden sm:table-header-group">
          <tr>
            <th className="text-left" style={{ fontFamily: "Clash Display" }}>Product</th>
            <th className="text-left" style={{ fontFamily: "Clash Display" }}>Quantity</th>
            <th className="text-right" style={{ fontFamily: "Clash Display" }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={375}
                    height={305}
                    className=" mr-4 w-20 h-auto"
                  />
                  <div className="ml-4">
                    <p className="text-gray-900">{item.name}</p>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-900 font-bold">£{item.price}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 text-center">{item.quantity}</td>
              <td className="py-4 text-right">£{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right mt-4" style={{ fontFamily: "Clash Display" }}>
        <p>Subtotal: £{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        <p className="text-sm py-5" style={{ fontFamily: "Satoshi" }}>Taxes and shipping are calculated at checkout</p>
        <button className="bg-[#2A254B] text-[#FFFFFF] font-bold py-2 px-4 w-full sm:w-auto sm:px-4">Go to checkout</button><br /><br />
      </div>
    </div>
  )
}
export default Shopings