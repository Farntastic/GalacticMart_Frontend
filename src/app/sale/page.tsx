import React from 'react';

export default function Sale() {
  const items = [
    { id: 1, name: 'Thunder Sword', price: 15000, quantity: 1 },
    { id: 2, name: 'Blue Ord', price: 500, quantity: 5 },
    { id: 3, name: 'Fire Gun', price: 4000, quantity: 2 },
  ];

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th></th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right font-bold">Total: {total}</div>
    </div>
  );
}
