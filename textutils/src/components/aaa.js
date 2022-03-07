import Button from 'react-bootstrap/Button';
import '../styles.css'
import {useState} from 'react'



function Aaa({name, name1}) {
  const [drink, setDrink1] = useState("tes");

  const handleClick = () => {
    setDrink1("coffee")

//     if (drink == true){
      // setDrink(name1);
    }
//     else{
  
    
  
//   console.log(drink);

return <>
<h1>Aaaa</h1>
<button onClick={handleClick}>Need {drink}</button> 
</>

};

 


export default Aaa;
