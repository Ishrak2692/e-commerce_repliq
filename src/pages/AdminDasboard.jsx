import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const AdminDashboardWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align:center;
  margin-top: 50px;
`;

const Summary = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: space-between;
`;

const SummaryItem1 = styled.div`
  flex-basis: 30%;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color:skyblue;
`;
const SummaryItem2 = styled.div`
  flex-basis: 30%;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color:violet;
`;
const SummaryItem3 = styled.div`
  flex-basis: 30%;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color:green;
`;
const Overview = styled.div`
  margin-top: 20px;
`;
const Button = styled.button`
  padding: 5px;
  font-size: 10px;
  background-color: transparent;
  cursor: pointer;
  right:10px;
  margin-top: 10px;
`;
const NavbarLink = styled(Link)`
padding: 5px;
font-size: 10px;
background-color: transparent;
cursor: pointer;
right:10px;
margin-top: 10px;
 text-decoration: none;
 margin: 10px;
&:hover,
&:focus{
    color: blue;
}
&:active{
    color: red;
};`
const AdminDashboard = () => {
  return (
    <AdminDashboardWrapper>
      <h2>Admin Dashboard</h2>
      <Summary>
        <SummaryItem1>
          <h3>Total Orders</h3>
          <p>10</p>
          <Button>

          <NavbarLink className="nav-link active" to="/Adminorder">
          Show Orders
            </NavbarLink>
            
            </Button>
        </SummaryItem1>
        <SummaryItem2>
          <h3>Total Revenue</h3>
          <p>$10,000</p>
        </SummaryItem2>
        <SummaryItem3>
          <h3>New Customers</h3>
          <p>50</p>
        </SummaryItem3>
      </Summary>
      <Overview>
        <h2>Overview</h2>
        <p>Display additional information and charts here...</p>
      </Overview>
    </AdminDashboardWrapper>
  );
};

export default AdminDashboard;
