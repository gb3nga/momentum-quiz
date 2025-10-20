import React, { useState, useEffect } from "react";
import logo from "./assets/momentum-logo.jpg";
import "./App.css";

const quizData = [
  {
    question: "What is Momentum Finance’s main mission?",
    options: [
      "To build a meme coin on Sui",
      "To power the next era of global finance where crypto and real-world assets trade seamlessly",
      "To become the fastest centralized exchange",
      "To launch NFT marketplaces only",
    ],
    answer: 1,
  },
  {
    question: "Which blockchain is Momentum primarily built on?",
    options: ["Ethereum", "Solana", "Sui", "Aptos"],
    answer: 2,
  },
  {
    question: "What is xSUI in the Momentum ecosystem?",
    options: [
      "A stablecoin backed by Sui",
      "Momentum’s governance token",
      "A liquid staking token that lets users earn and stay liquid",
      "A cross-chain bridge token",
    ],
    answer: 2,
  },
  {
    question: "Momentum DEX is based on which model?",
    options: [
      "Constant Product AMM",
      "Concentrated Liquidity Market Maker (CLMM)",
      "Hybrid Order Book",
      "Proof of Work Matching Engine",
    ],
    answer: 1,
  },
  {
    question: "What technology powers Momentum’s cross-chain expansion?",
    options: ["LayerZero", "Wormhole", "IBC", "Axelar"],
    answer: 1,
  },
  {
    question: "What is the purpose of Momentum Vaults?",
    options: [
      "For staking NFTs",
      "Automating yield strategies for users",
      "For lending fiat currency",
      "To store private keys",
    ],
    answer: 1,
  },
  {
    question: "Which phase of Momentum involves integrating Real World Assets (RWAs)?",
    options: ["Phase 1", "Phase 2", "Phase 3", "Beta Phase"],
    answer: 2,
  },
  {
    question: "What is MSafe used for?",
    options: [
      "Gaming rewards",
      "Multi-sig treasury and token vesting management",
      "NFT creation",
      "Wallet backup and restore",
    ],
    answer: 1,
  },
  {
    question: "What’s unique about Sui’s architecture that helps Momentum DEX?",
    options: [
      "Object-centric parallel execution",
      "Linear blockchain structure",
      "Centralized routers",
      "Single-threaded matching",
    ],
    answer: 0,
  },
  {
    question: "What does TGL stand for?",
    options: [
      "Token Governance Layer",
      "Token Generation Lab",
      "Transaction Gateway Layer",
      "Total Governance Limit",
    ],
    answer: 1,
  },
  {
    question: "What is the main goal of Momentum X?",
    options: [
      "Provide universal KYC and compliance for tokenized assets",
      "Mint stablecoins",
      "Host trading competitions",
      "Offer crypto news",
    ],
    answer: 0,
  },
  {
    question: "Momentum DEX launched its Beta when?",
    options: [
      "March 31, 2025",
      "January 1, 2024",
      "May 15, 2025",
      "August 14, 2025",
    ],
    answer: 0,
  },
  {
    question: "How does xSUI improve Sui’s security?",
    options: [
      "It burns SUI tokens",
      "It reduces validator activity",
      "By encouraging more staking across validators",
      "By freezing idle tokens",
    ],
    answer: 2,
  },
  {
    question: "Which ecosystem partner helps Momentum with universal messaging?",
    options: ["Wormhole", "Axelar", "Polygon", "Circle"],
    answer: 0,
  },
  {
    question: "What is Momentum’s DEX total trading volume milestone as of August 2025?",
    options: [
      "$1B+",
      "$10B+",
      "$18B+",
      "$560M+",
    ],
    answer: 2,
  },
  {
    question: "What do Momentum Vaults allow users to do?",
    options: [
      "Automate DeFi yield strategies",
      "Create new tokens",
      "Mint NFTs",
      "Convert fiat into crypto",
    ],
    answer: 0,
  },
  {
    question: "Which token do users receive when they stake SUI?",
    options: ["sSUI", "xSUI", "mSUI", "tSUI"],
    answer: 1,
  },
  {
    question: "What are the three main pillars of Momentum?",
    options: [
      "Trade, Stake, Earn",
      "Build, Buy, Sell",
      "Mine, Swap, Lock",
      "Trade, Burn, Mint",
    ],
    answer: 0,
  },
  {
    question: "What makes Momentum ideal for institutions?",
    options: [
      "Advanced execution tools and self-custody",
      "High withdrawal limits",
      "Exclusive NFT drops",
      "Centralized governance",
    ],
    answer: 0,
  },
  {
    question: "Momentum aims to onboard how many users into crypto?",
    options: [
      "100K",
      "1 million",
      "500 million",
      "1 billion",
    ],
    answer: 3,
  },
];

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  const handleShare = () => {
  const text = `I just completed the Momentum quiz by @toluszn and I scored ${score}/${quizData.length}!\nTry yours now 👉 https://momentum-quiz.netlify.app/`;
  const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

  if (showSplash) {
    return (
      <div className="splash-screen">
        <img src={logo} alt="Momentum Logo" className="splash-logo" />
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="result-screen">
        <h1>Quiz Complete!</h1>
        <p>Your Score: {score} / {quizData.length}</p>
        <div className="result-buttons">
          <button className="restart-btn" onClick={handleRestart}>
            Restart Quiz
          </button>
          <button className="share-btn" onClick={handleShare}>
            Share on X
          </button>
        </div>
        <a
          href="https://x.com/toluszn"
          className="credit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by @toluszn
        </a>
      </div>
    );
  }

  const current = quizData[currentQuestion];

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Momentum Quiz</h1>
      <p className="question-number">
        Question {currentQuestion + 1} / {quizData.length}
      </p>
      <h2 className="question">{current.question}</h2>
      <div className="options">
        {current.options.map((option, i) => (
          <button
            key={i}
            className={`option-btn ${selectedOption === i ? "selected" : ""}`}
            onClick={() => setSelectedOption(i)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="nav-buttons">
        <button
          className="nav-btn"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          ◀ Previous
        </button>
        <button className="nav-btn" onClick={handleNext}>
          {currentQuestion + 1 === quizData.length ? "Finish" : "Next ▶"}
        </button>
      </div>
    </div>
  );
}

export default App;
