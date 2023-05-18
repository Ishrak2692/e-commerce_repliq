import styled from 'styled-components';
import Annonuncement from '../components/Annonuncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';
const Container =styled.div``;
const Title=styled.h1`
margin:20px;
`;
const FilterContainer =styled.div`

display:flex;
justy-content:space-between;

`;
const Filter=styled.div`

margin:20px;
${mobile({ width:"opx 20px",display:"flex",flexDirection:"column"})}

`;

const  FilterText=styled.span`

font-size:20px;
font-wight:600;
margin-right:20px;
${mobile({ marginRight :"0px"})}


`
const Select=styled.select`

padding:10px;
margin-right:20px;
${mobile({ margin:"10px 0px"})}
`
const Option=styled.option``

const ProductList = () => {
  return (
    <Container>
      <Annonuncement/>
        <Navbar/>
        
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select>

<Option disabled selected>
  Color
  </Option>
  <Option>White</Option>
  <Option>Black</Option>
  <Option>Red</Option>
  <Option>Blue</Option>
  <Option>Green</Option>
  <Option>Grey</Option>
</Select>
<Select>

<Option disabled selected>
  Size
  </Option>
  <Option>XS</Option>
  <Option>S</Option>
  <Option>M</Option>
  <Option>L</Option>
  <Option>XL</Option>

</Select>

         
            
            
            
            </Filter>
            <Filter  ><FilterText>Sort Products:</FilterText>
            <Select>

<Option  selected>
  Newest
  </Option>
  <Option>Price (asc)</Option>
  <Option>Price(desc)</Option>
 
</Select>
            
            
            </Filter>
           
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
    </Container>
    
  );
}

export default ProductList

