import React from 'react';


import "../styles/AdminOrder.css";

const orders = [
  { id: 1, customer: 'Jamal', status: 'Pending' },
  { id: 2, customer: ' Rafiq', status: 'Shipped' },
  { id: 3, customer: 'Arifur Rahman', status: 'Delivered' },
  { id: 4, customer: 'Alice Williams', status: 'Pending' },
  { id: 5, customer: 'Shamsur', status: 'Pending' },
  { id: 6, customer: 'Shariful Islam', status: 'Pending' },
  { id: 7, customer: 'jabed Ahmed', status: 'Pending' },
  { id: 8, customer: 'Shakib ', status: 'Pending' },
  { id: 9, customer: 'Taskin', status: 'Pending' },
  { id: 10, customer: 'Mustafizur', status: 'Pending' },
];

const AdminOrderList = () => {
  return (
    <div >
        <div className="admin-heading"><h1 >Admin Order List</h1></div>
      
      <table className="admin-table">
        <thead>
          <tr>
            <th className="th">Order ID</th>
            <th className="th">Customer</th>
            <th className="th" >Status</th>
            <th className="th" >Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td>
                <button className="edit-button">Edit</button>
                
                
                </td>
             
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default AdminOrderList;