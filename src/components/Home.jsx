import React from 'react';
import styled from 'styled-components';
import { RiExchangeFundsLine } from "react-icons/ri";
import countryList from './Code.js';



const Home=(props)=>{
  let URLleft='https://flagsapi.com/' + props.countryFlagLeft + '/flat/64.png';
  let URLright='https://flagsapi.com/' + props.countryFlagRight + '/flat/64.png';



    return (

        <Container>
        <Main>
             <form onSubmit={props.currancyConvert}>
                 <h1>Currency Converter</h1>
     
                 <Input>
                     <label>Enter Amount</label>
                     <input name="amount" type='number' value={props.amount} onChange={props.amountChange}/>
                 </Input>
     
                 <List>
                     <Left>
                         <label>From</label>
                         <LeftSelection>
                         <img src={URLleft}/>

                         <select name='from' onChange={props.changeLeft}>
                            
                           {Object.entries(countryList).map(([code,code2])=>(
                            
                            <option key={code} value={code}>{code}</option>
                           ))}

                         </select>

                         </LeftSelection>
                     </Left>

                     <Mid>
                         <RiExchangeFundsLine size={50}/>
                     </Mid>
     
                     <Right>
                         <label>To</label>
                         <RightSelection>

                            <img src={URLright}/>

                            <select name='to' onChange={props.changeRight}>
                            {Object.entries(countryList).map(([code,code2])=>(
                            <option key={code} value={code}>{code}</option>
                           ))}
                            </select>
                        </RightSelection>
                     </Right>
                 </List>
     
                 <h3 id="final">1 USD = 84 INR</h3>
     
                 <button type='submit'>Get Exchange Rate</button>
                 </form>
        </Main>
            

        </Container>

    )
}

export default Home;

const Container=styled.div`
display:flex;
height:100vh;
align-items:center;


`;

const Main=styled.div`
width:400px;
margin:0 auto;
padding:10px;
border:1px solid black;
border-radius:16px;


button{
  width:80%;
  color:white;
  background-color:#141E46;
  border:none;
  border-radius:10px;
  height:40px;
  display:block;
  margin:0 auto;
  font-size:18px;
  margin-bottom:20px;
}

`;
const Input=styled.div`
  position:relative;
  margin:30px auto;

  label{
    position:absolute;
    top:-8px;
    left:10px;
    background-color:white;
    padding:0 3px;
    font-size:18px;
  }

  input{
    height:40px;
    border:1px solid black;
    border-radius:10px;
    width:100%;
    box-sizing:border-box;
  }

`;
const List=styled.div`
   display:flex;
   font-size:18px;
   justify-content:space-between;

   margin:30px auto;

`;
const Left=styled.div`
  label{
    display:block;
    padding-left:5px;
  }

  select{
    border:none;
  }
  option{
    border:none;
  }
`;
const Mid=styled.div`
   align-self:center;
   padding-top:18px;
`;
const Right=styled.div`

label{
    display:block;
    padding-left:5px;
  }

  select{
    border:none;
  }
  option{
    border:none;
  }
`;

const RightSelection=styled.div`
   display:flex;
   align-items:center;
   border:1px solid black;
   border-radius:10px;
   font-size:18px;

   img{
    height:50px;
   }
`;

const LeftSelection=styled.div`
   display:flex;
   align-items:center;
   border:1px solid black;
   border-radius:10px;
   font-size:18px;

   img{
    height:50px;
   }
`;