import logo from './logo.svg';
import './App.css';
import Aaa from './components/aaa.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './website/navbar.js'
import Button from './components/buttons/button';
// import { handleChnage } from './components/utility';
import { useState } from 'react';

function App() {

  const [data, setData] = useState('')

  const handleName = (e) => {
    setData(e.target.value)
  }

  const handleChnage = () => {
    setData('')
  } 

  console.log('data', data)

  return (
    <>
    {/* <Aaa name={true} name1="coffee" /> */}
    {/* <button className="btn btn-success" >hello</button> */}
    <Navbar />
    <Button label="tntra" type='button' onClick={handleChnage}/>
    <input type="text" placeholder='name' value={data}  onChange={handleName} />
    </>
  );
}

export default App;
