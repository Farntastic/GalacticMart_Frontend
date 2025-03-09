import React from 'react'

export default function Sale() {
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>No</th>
          <th></th>
          <th>Name</th>
          <th>Pirce</th>
          <th>Quantity</th>
          
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <th></th>
          <td>Thunder Sword</td>
          <td>15000</td>
          <td>1</td>
        </tr>
        {/* row 2 */}
        <tr>
          <th>2</th>
          <th></th>
          <td>Blue Ord</td>
          <td>500</td>
          <td>5</td>
        </tr>
        {/* row 3 */}
        <tr>
          <th>3</th>
          <th></th>
          <td>Fire Gun</td>
          <td>4000</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
