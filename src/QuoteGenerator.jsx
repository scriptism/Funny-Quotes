import React from "react";
import { useState } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({
    text: "Click the button to generate a quote",
    author: "",
  });

  const [isAnimating, setIsAnimating] = useState(false);

  const quotes = [
    {
      text: "My greatest achievement was convincing my boss I was working when I was actually sleeping at my desk.",
      author: "Anonymous Office Hero",
    },
    {
      text: "Work is just something I do between coffee breaks.",
      author: "Every Employee Ever",
    },
    {
      text: "I don't hate my job. I just don't understand why I have to be there when the sun is up.",
      author: "Night Owl Worker",
    },
    {
      text: "The best way to appreciate your job is to imagine yourself without one.",
      author: "Suddenly Grateful Employee",
    },
    {
      text: "I pretend to work. They pretend to pay me. It's a fair deal.",
      author: "Office Philosopher",
    },
    {
      text: "If hard work pays off, then show me the lazy millionaire.",
      author: "Motivational Speaker (Probably)",
    },
    {
      text: "The only thing worse than Monday is the person who says 'Happy Monday!'",
      author: "Monday Hater",
    },
    {
      text: "I don't need a motivational quote. I need a nap.",
      author: "Sleep-Deprived Worker",
    },
    {
      text: "My keyboard is my weapon. My coffee is my shield. My bed is where I'd rather be.",
      author: "Corporate Warrior",
    },
    {
      text: "I'm not lazy. I'm in energy-saving mode.",
      author: "Efficient Employee",
    },
    {
      text: "Success is just failure that hasn't happened yet.",
      author: "Pessimistic Optimist",
    },
    {
      text: "I'm not unsuccessful. I'm just on an extended journey to success.",
      author: "Hopeful Dreamer",
    },
    {
      text: "The secret to success is knowing who to blame for your failures.",
      author: "Corporate Survivor",
    },
    {
      text: "I don't always test my code. But when I do, I do it in production.",
      author: "Risky Developer",
    },
    {
      text: "I was going to procrastinate today, but I never got around to it.",
      author: "Master Procrastinator",
    },
    {
      text: "Adulting is just Googling how to do things and pretending you knew all along.",
      author: "Fake Adult",
    },
    {
      text: "I'm not short. I'm concentrated awesome.",
      author: "Fun-Sized Human",
    },
    {
      text: "I don't hold grudges. I remember facts.",
      author: "Petty Scholar",
    },
    {
      text: "I'm not arguing. I'm just explaining why I'm right.",
      author: "Relationship Expert",
    },
    {
      text: "I'm not late. Everyone else is just early.",
      author: "Time Management Guru",
    },
    {
      text: "Money can't buy happiness, but it can buy pizza, and that's kind of the same thing.",
      author: "Pizza Philosopher",
    },
    {
      text: "I'm on a seafood diet. I see food and I eat it.",
      author: "Hungry Human",
    },
    {
      text: "I don't need anger management. I need people to stop making me angry.",
      author: "Zen Master (Not)",
    },
    {
      text: "I'm not ignoring you. I'm just prioritizing my peace.",
      author: "Self-Care Advocate",
    },
    {
      text: "I don't make mistakes. I create learning opportunities.",
      author: "Corporate Trainer",
    },
    {
      text: "I'm not a complete idiot. Some parts are missing.",
      author: "Self-Aware Individual",
    },
    {
      text: "I don't need therapy. I just need someone to listen to me complain for free.",
      author: "Every Friend Ever",
    },
    {
      text: "I don't always know what I'm doing, but I do it with confidence.",
      author: "Fake It Till You Make It Expert",
    },
    {
      text: "I'm not arguing. I'm just passionately expressing my point of view while completely dismissing yours.",
      author: "Debate Champion",
    },
    {
      text: "I'm not lazy. I'm just very relaxed about my goals.",
      author: "Chill Achiever",
    },
    {
      text: "I'm not saying I'm Wonder Woman. I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      author: "Suspiciously Strong Person",
    },
    {
      text: "I don't need an inspirational quote. I need coffee.",
      author: "Caffeine Addict",
    },
    {
      text: "I'm not a morning person. I'm a 'need at least three cups of coffee before I can human' person.",
      author: "Coffee-Dependent Life Form",
    },
    {
      text: "I'm not short-tempered. I just have a quick reaction to stupidity.",
      author: "Patient (Not Really)",
    },
    {
      text: "I don't hold grudges. I just remember things forever.",
      author: "Elephant Memory Human",
    },
    {
      text: "I'm not bossy. I just have better ideas than everyone else.",
      author: "Natural Leader",
    },
    {
      text: "I don't always know what I'm talking about, but I know I'm right.",
      author: "Confidently Incorrect",
    },
    {
      text: "I'm not addicted to coffee. We're just in a committed relationship.",
      author: "Coffee Soulmate",
    },
    {
      text: "I don't need anger management. I need idiots management.",
      author: "Frustrated Genius",
    },
    {
      text: "I'm not ignoring you. I'm just giving you time to reflect on what you just said.",
      author: "Passive-Aggressive Listener",
    },
    {
      text: "I don't make mistakes. I date them.",
      author: "Romantic Disaster",
    },
    {
      text: "I'm not a complete idiot. Some parts are still in beta testing.",
      author: "Work in Progress",
    },
    {
      text: "I don't need therapy. I just need to win the lottery.",
      author: "Financial Dreamer",
    },
    {
      text: "I don't always know what I'm doing, but I do know I'm doing it well.",
      author: "Confidence Over Competence",
    },
    {
      text: "I'm not arguing. I'm just explaining why you're wrong.",
      author: "Fact Enthusiast",
    },
    {
      text: "I'm not lazy. I'm just on energy-saving mode.",
      author: "Efficient Human",
    },
    {
      text: "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      author: "Suspiciously Wealthy Person",
    },
    {
      text: "I don't need an inspirational quote. I need a vacation.",
      author: "Burnt-Out Employee",
    },
    {
      text: "I'm not a morning person. I'm a 'why is this meeting at 9 AM' person.",
      author: "Night Owl Professional",
    },
    {
      text: "I'm not short-tempered. I just have a zero-tolerance policy for nonsense.",
      author: "No-Nonsense Negotiator",
    },
    {
      text: "Just because you are not giving up doesn't mean you will make it.",
      author: "Think of it sometimes",
    },
  ];

  const generateRandomQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      setIsAnimating(false);
    }, 500); // Matches the transition duration
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="max-w-md w-full p-8 bg-gray-800 rounded-2xl shadow-2xl backdrop-blur-sm bg-opacity-50 border border-gray-700">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 font-sans">
          Random Quote Generator
        </h1>

        <div
          className={`bg-gray-700 bg-opacity-60 p-8 rounded-xl mb-8 border border-gray-600 
                        transition-all duration-500 ${
                          isAnimating
                            ? "opacity-0 scale-95"
                            : "opacity-100 scale-100"
                        }`}
        >
          <p className="text-xl text-gray-200 italic mb-6 leading-relaxed">
            "{quote.text}"
          </p>
          {quote.author && (
            <p className="text-right text-cyan-300 font-medium tracking-wide">
              — {quote.author}
            </p>
          )}
        </div>

        <button
          onClick={generateRandomQuote}
          disabled={isAnimating}
          className={`w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg 
                    transition-all duration-300 flex items-center justify-center gap-2
                    ${
                      isAnimating
                        ? "opacity-70"
                        : "hover:from-cyan-600 hover:to-blue-700 hover:scale-[1.02] active:scale-95"
                    }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
          {isAnimating ? "Generating..." : "Generate Quote"}
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
