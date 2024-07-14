import React from 'react';
import styled from 'styled-components';

 function Title({value}) {
  return (
    <Div className='sideTitle'>
      <h1>{value}</h1>
    </Div>
  )
}
const Div = styled.div`
position:relative;
h1{
    position:absolute;
    transform:translateX(-35%) translateY(19vw) rotate(-90deg);
    font-size:5rem;
    ${'' /* margin:0 1rem; */}
    text-transform:uppercase;
    color:rgb(32, 45, 84);
    font-weight:190;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      display: none;
}
`; 
export default Title;