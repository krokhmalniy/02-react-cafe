import { useState } from "react";
import CafeInfo from "../CafeInfo/Cafeinfo";
import type { Votes, VoteType } from "../types/votes";
import "./App.module.css";


export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Оновлення голосів
  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  // Скидання голосів
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={"app"}>
      <CafeInfo />
    </div>
  );
}
