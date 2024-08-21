import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { socket } from "../services/socket";

const PollVote = () => {
  const { id } = useParams();
  const [poll, setPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const fetchPoll = async () => {
      const response = await axios.get(`/api/polls/${id}`);
      setPoll(response.data);
    };
    fetchPoll();
  }, [id]);

  const handleVote = async () => {
    try {
      await axios.post(`/api/polls/${id}/vote`, { option: selectedOption });
      socket.emit("vote", { pollId: id });
    } catch (error) {
      console.error("Error voting", error);
    }
  };

  if (!poll) return <div>Loading...</div>;

  return (
    <div>
      <h2>{poll.question}</h2>
      {poll.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label>{option}</label>
        </div>
      ))}
      <button onClick={handleVote}>Vote</button>
    </div>
  );
};

export default PollVote;
