import { useState,useEffect,useRef } from 'react'

import './App.css'
import RadioForm from './components/RadioForm';

function App() {
  const [DifficultyLevel, setDifficultyLevely] = useState('');
  const [result,setResult]=useState(null);

  const loadQuestion = (DifficultyLevel) => {
    const params = new URLSearchParams({ difficulty: DifficultyLevel });
    //console.log(params);
    fetch(`https://opentdb.com/api.php?amount=4&category=9&${params}`)
      .then((response) => response.json())
      .then((result) => {
        
        setDifficultyLevely(DifficultyLevel);
        console.log(result);
        setResult(result);
    
      });
  }
  useEffect(() => {
    console.log("Updated result:", result);
  }, [result]);

  const handleSubmit = (DifficultyLevel) =>{
    console.log(DifficultyLevel);
    loadQuestion(DifficultyLevel);
   }

  return (
    <>
      <div>
        <h1>Hi</h1>
      <RadioForm handleSubmit={handleSubmit}/>
  </div>
      
    </>
  )
}

export default App
