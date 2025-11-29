import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { Votes, VoteType } from "../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";
import css from "./App.module.css";


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
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={true} // поки що просто true
      />
    </div>
  );
}
