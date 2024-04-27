import {React, useState} from 'react';
import Home from './components/Home';
import countryList from './components/Code';



const App=()=>{
    const [amount,setAmount]=useState(1);
    const [countryCodeLeft,setCountryCodeLeft]=useState('AED');
    const [countryCodeRight,setCountryCodeRight]=useState('AED');

    const [countryFlagLeft,setCountryFlagLeft]=useState('AE');
    const [countryFlagRight,setCountryFlagRight]=useState('AE');


    function amountChange(e){
        setAmount(e.target.value);
    }



    function changeRight(e){
        let dd=e.target.value;
        // seCount((pre)=>({
        //     ...pre,
        //     countryFlagRight:'BE'
        // }))
        
     
        setCountryFlagRight(countryList[dd]);
        setCountryCodeRight(e.target.value);
    }

    function changeLeft(e){
        let dd=e.target.value;

        setCountryFlagLeft(countryList[dd]);
        setCountryCodeLeft(e.target.value);


}

async function currancyConvert(e) {
    e.preventDefault();
  
    const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/" + countryCodeLeft.toLowerCase() + ".json";
  


    try {
      const response = await fetch(URL);
      const data = await response.json();
      
      const newdata=data[countryCodeRight.toLowerCase()];
      const temp1=data[countryCodeLeft.toLowerCase()];
      const temp=temp1[countryCodeRight.toLowerCase()]

      const finalAmount=amount + " " + countryCodeLeft +" = " + amount * temp + " " + countryCodeRight

  

      document.getElementById('final').innerText=finalAmount;


    } catch (err) {
      console.log(err);
    }
  }

    return (
        <Home amount={amount} amountChange={amountChange} countryCodeLeft={countryCodeLeft} countryCodeRight={countryCodeRight} changeRight={changeRight} changeLeft={changeLeft} countryFlagLeft={countryFlagLeft} countryFlagRight={countryFlagRight} currancyConvert={currancyConvert}/>
    )
}

export default App;
