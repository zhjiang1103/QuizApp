import { useState, useEffect, useRef } from 'react'
import './App.css'
import UserForm from './components/User';
import Header from './components/Header';
import RadioForm from './components/RadioForm';
import QuestionCard from './components/QuestionCard';
//import QuestionCard from './components/QuestionCard';

function App() {
  const [user, setUser] = useState("");
  const handleUser = (text) => {
    setUser(text);
  }

  const [DifficultyLevel, setDifficultyLevely] = useState('');
  const [result, setResult] = useState(null);

  const loadQuestion = (DifficultyLevel) => {
    const params = new URLSearchParams({ difficulty: DifficultyLevel });
    //console.log(params);
    fetch(`https://opentdb.com/api.php?amount=4&category=9&${params}`)
      .then((response) => response.json())
      .then((result) => {

        setDifficultyLevely(DifficultyLevel);
        console.log(result);
        setResult(result.results);

      });
  }
  useEffect(() => {
    console.log("Updated result:", result);
  }, [result]);
  
 

  const handleSubmit = (DifficultyLevel) => {
    console.log(DifficultyLevel);
    loadQuestion(DifficultyLevel);
  }

  // if(result){
  //   const answerOptions = [...result[0].incorrect_answers,result[0].correct_answer];
    
  // console.log("answerOptions:",answerOptions);
  // }

  return (
    <>
      <div>
        <h1>Hi</h1>
        <Header user={user} />
        <UserForm grabUser={handleUser} />
        <RadioForm handleSubmit={handleSubmit} />
        {result ? <QuestionCard data={result} /> : null}
      </div>

    </>
  )
}

export default App
