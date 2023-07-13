import React, { useState } from 'react';

const SurveyGenerator = () => {
  const [responses, setResponses] = useState({});

  const questions = [
    {
      id: 1,
      question: 'What is your favorite color?',
      options: ['Red', 'Blue', 'Green'],
    },
    {
      id: 2,
      question: 'Which programming language do you prefer?',
      options: ['JavaScript', 'Python', 'Java', 'C++'],
    },
    // Add more questions here
  ];

  const handleResponseChange = (questionId, response) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: response,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Generate the report using the responses
    console.log(responses);
    // window.alert(responses);
  };

  return (
    <div>
      <h1>Survey Generator</h1>
      <form onSubmit={handleFormSubmit}>
        {questions.map((question) => (
          <div key={question.id}>
            <p>{question.question}</p>
            {question.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  onChange={() => handleResponseChange(question.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Generate Report</button>
      </form>
    </div>
  );
};

export default SurveyGenerator;
