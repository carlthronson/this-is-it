import styled from 'styled-components';
import { Avatar, Col, Grid, Image } from 'antd';
import Column from 'antd/es/table/Column';

const Container = styled.div`
    border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
    padding: 8px;
    color: #000;
    margin-bottom: 8px;
    min-height: 90px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: ${(props) => bgcolorChange(props)};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`   ;

const ContainerChild = styled.div`
    border-radius: 10px;
  box-shadow: 5px 5px 5px 2px grey;
    padding: 8px;
    color: #000;
    margin-bottom: 8px;
    min-height: 90px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: 'lightgreen';
    cursor: pointer;
    // display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1 0 50%;
`   ;

const ProductName = styled.h4`
color: maroon;
margin-top: 2px;
`;

const Varietal = styled.div`
color: orange;
`;

const Appellation = styled.div`
font-weight: bold
`;

const Styles = styled.div`
margin-top: 20px;
`;

const Icons = styled.div`
    display: flex;
    justify-content: end;
    padding: 2px;
`   ;
function bgcolorChange(props) {
  return props.isDragging
    ? 'lightgreen'
    : props.isDraggable
      ? props.isBacklog
        ? '#F2D7D5'
        : '#DCDCDC'
      : props.isBacklog
        ? '#F2D7D5'
        : '#EAF4FC';
}

const ProductDetails = styled.div`
border-radius: 10px;
// box-shadow: 5px 5px 5px 2px grey;
  padding: 8px;
  color: #000;
  margin-bottom: 8px;
  min-height: 90px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: 'lightgreen';
  cursor: pointer;
  // display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1 0 75%;
`   ;

export default function Product({ product, index }) {
  return (
    <Container>
      <img border="0" src={product.small} alt="name" width="304" height="228" />
      <ProductDetails>
        <div>
          <ProductName>{product.product}</ProductName>
        </div>
        <div>
          <Varietal>{product.varietal}</Varietal>
        </div>
        <div>
          <Appellation>{product.appellation}</Appellation>
        </div>
        <div>
          <Styles>{product.style}</Styles>
        </div>
      </ProductDetails>
    </Container>
  );
}
