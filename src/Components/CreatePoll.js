import React, { useState } from "react";
//import axios from "axios";
function CreatePoll() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post("/api/polls", { question, options });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error creating poll", error);
    // }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question"
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          placeholder={`Option ${index + 1}`}
        />
      ))}
      <button type="button" onClick={addOption}>
        Add Option
      </button>
      <button type="submit">Create Poll</button>
    </form>
  );
}

export default CreatePoll;
