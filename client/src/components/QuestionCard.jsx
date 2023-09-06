import {useState} from 'react';

const QuestionCard=(props)=>{
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < props.data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
};

let answerOptions = [];
if (props.data) {
  // Combine incorrect and correct answers into one array
  answerOptions = [
    ...props.data[currentQuestion].incorrect_answers,
    props.data[currentQuestion].correct_answer,
  ];
  // Shuffle the answer options randomly
  answerOptions.sort(() => Math.random() - 0.5);
}

	
    
      return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {props.data.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{props.data.length}
						</div>
						<div className='question-text'>{props.data[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{answerOptions.map((answerOption,index) => (
							<button key={index} onClick={() => handleAnswerOptionClick(answerOption === props.data[currentQuestion].correct_answer)}>{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
	);

    
}

export default QuestionCard;