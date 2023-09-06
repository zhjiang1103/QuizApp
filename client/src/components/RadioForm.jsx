import { useState } from 'react';

function RadioForm(props) {
  // State to hold the selected difficulty level
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  // Handle changes when a radio button is selected
  const handleRadioChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  // Handle form submission
  const handleClick = (event) => {
    event.preventDefault();
    // Do something with the selected difficulty level (e.g., send it to an API)
    console.log('Selected difficulty:', selectedDifficulty);
    props.handleSubmit(selectedDifficulty)
  };

  return (
    <div>
      <h2>Let's start a quiz game!</h2>
      <p>Please select a difficulty level</p>
      <form onSubmit={handleClick}>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="easy"
            checked={selectedDifficulty === 'easy'}
            onChange={handleRadioChange}
          />
          Easy
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="medium"
            checked={selectedDifficulty === 'medium'}
            onChange={handleRadioChange}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="hard"
            checked={selectedDifficulty === 'hard'}
            onChange={handleRadioChange}
          />
          Hard
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RadioForm;
