"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import router from "next/router";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
// Mock Quiz Data
const quizData = {
  // math: [
  //   { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
  //   { question: "What is 3 * 3?", options: ["6", "7", "9", "10"], correctAnswer: "9" },
  // ],
  physic: [
    
    {
      question: "The commercial unit of electrical energy is .........",
      options: ["Watt", "Calorie", "Kilowatt hour", "Joule"],
      correctAnswer: "Kilowatt hour",
    },
    {
      question: "The S.I. unit of resistance is equivalent to:",
      options: ["joule/coulomb", "volt/ampere", "ampere/volt", "coulomb/joule"],
      correctAnswer: "volt/ampere",
    },
    {
      question: "The physical quantity having a unit of volt/ampere is ––––––– .",
      options: ["work", "Current", "charge", "resistance"],
      correctAnswer: "resistance",
    },
    {
      question: "The unit of resistance is ……….",
      options: ["Ampere", "Coulomb", "Ohm", "Volt"],
      correctAnswer: "Ohm",
    },
    {
      question: "The S.I. unit of induced potential difference is:",
      options: ["mV", "A", "V", "mA"],
      correctAnswer: "V",
    },
    {
      question: "Which of the following is not a unit of temperature?",
      options: ["Fahrenheit", "Pascal", "Celsius", "Kelvin"],
      correctAnswer: "Pascal",
    },
    {
      question: "The SI unit of electrical resistivity is ………….",
      options: ["Ohm-meter", "Ohm", "Coulomb", "Ampere"],
      correctAnswer: "Ohm-meter",
    },
    {
      question: "The commercial unit of electric energy is .......",
      options: ["watt", "kW", "kilowatt-hour", "joule"],
      correctAnswer: "kilowatt-hour",
    },
    {
      question: "The amount of radiation being emitted by a radioactive material is measured using the conventional unit ––––––.",
      options: ["Watt", "Pascal", "Ampere", "Curie"],
      correctAnswer: "Curie",
    },
    {
      question: "What is measured in 'joules'?",
      options: ["Energy", "Velocity", "Force", "Power"],
      correctAnswer: "Energy",
    }, {
      question: "Which energy of the wind does a windmill use?",
      options: ["Thermal energy", "Kinetic energy", "Heat energy", "Hydro energy"],
      correctAnswer: "Kinetic energy",
    },
    {
      question: "If the air resistance is negligible, what will be the sum of the potential and kinetic energy of a freely falling object?",
      options: ["Endless", "Double the sum of the potential energy", "Zero", "Constant"],
      correctAnswer: "Constant",
    },
    {
      question: "A uniform chain of length 2m is kept on a table such that 60cm hangs freely from the edge. The total mass is 4kg. What is the work done in pulling the entire chain on the table?",
      options: ["12J", "7.2J", "3.6J", "1.2J"],
      correctAnswer: "3.6J",
    },
    {
      question: "Which particles have a greater kinetic energy?",
      options: ["Liquid", "Plasma", "Solid", "Gas"],
      correctAnswer: "Gas",
    },
    {
      question: "The kinetic energy of which particle is maximum?",
      options: ["Liquid and Solid", "Solid", "Liquid", "Gases"],
      correctAnswer: "Gases",
    },
    {
      question: "When a compressed spring is released, it converts its potential energy into:",
      options: ["Mechanical energy", "Wind power", "Elastic potential energy", "Kinetic energy"],
      correctAnswer: "Kinetic energy",
    },
    {
      question: "The potential energy of an object increases with its:",
      options: ["Velocity", "Height", "Displacement", "Distance"],
      correctAnswer: "Height",
    },
    {
      question: "Which of the following energy varies with the height of an object?",
      options: ["Kinetic energy", "Nuclear Energy", "Chemical energy", "Potential energy"],
      correctAnswer: "Potential energy",
    },
    {
      question: "What is the energy exerted due to the position and shape taken by an object?",
      options: ["Latent energy", "Potential energy", "Kinetic energy", "Electrical energy"],
      correctAnswer: "Potential energy",
    },
    {
      question: "Which energy is in the water stored in a dam?",
      options: ["Potential energy", "Electric energy", "Kinetic energy", "Gravitational energy"],
      correctAnswer: "Potential energy",
    },
    {
      question: "A moving object essentially receives:",
      options: ["Kinetic energy", "Potential energy", "Mechanical energy", "Thermal energy"],
      correctAnswer: "Kinetic energy",
    },
    {
      question: "A car running at high speed, which energy does it contain?",
      options: ["Gravitational force", "Friction force", "Potential energy", "Kinetic energy"],
      correctAnswer: "Kinetic energy",
    },
    {
      question: "Which of the following energy is always positive?",
      options: ["Static energy", "Kinetic energy", "Potential energy", "Gravitational energy"],
      correctAnswer: "Kinetic energy",
    },
    {
      question: "The commercial unit of electrical energy is .........",
      options: ["Watt", "Calorie", "Kilowatt hour", "Joule"],
      correctAnswer: "Kilowatt hour",
    },
    {
      question: "An 8 kg iron ball and a 3 kg aluminum ball are dropped from a height of 20 meters. Which quantity will be the same in both at 10 m height from the ground?",
      options: ["Kinetic energy", "Acceleration", "Potential energy", "Momentum"],
      correctAnswer: "Acceleration",
    },
    {
      question: "When a compressed slinky (spring) is released, it changes the potential energy into?",
      options: ["Mechanical energy", "Kinetic energy", "Heat energy", "Chemical energy"],
      correctAnswer: "Kinetic energy",
    },
    {
      question: "What is the energy in a compressed spring?",
      options: ["Potential", "Chemical", "Kinetic", "Electric"],
      correctAnswer: "Potential",
    },
    {
      question: "By which does the kinetic energy of an object increase?",
      options: ["Friction", "Time", "Mass", "Speed"],
      correctAnswer: "Speed",
    },
    {
      question: "The kinetic energy of a moving object depends on:",
      options: ["Weight and its location", "Mass and its location", "Mass and momentum", "Mass and velocity"],
      correctAnswer: "Mass and velocity",
    },
    {
      question: "In hydropower, what is the energy that is converted into electrical energy?",
      options: ["Mechanical energy", "Potential energy", "Heat energy", "Kinetic energy"],
      correctAnswer: "Kinetic energy",
    },
 
      {
        question: "Which energy of the wind does a windmill use?",
        options: [
          "Thermal energy",
          "Kinetic energy",
          "Heat energy",
          "Hydro energy"
        ],
        ans: 1,
      },
      {
        question: "If the air resistance is negligible, what will be the sum of the potential and kinetic energy of a freely falling object?",
        options: [
          "Endless",
          "Double the sum of the potential energy",
          "Zero",
          "Constant"
        ],
        ans: 3,
      },
      {
        question: "A uniform chain of length 2m is kept on a table such that 60cm hangs freely from the edge. The total mass is 4kg. What is the work done in pulling the entire chain on the table?",
        options: [
          "12J",
          "7.2J",
          "3.6J",
          "1.2J"
        ],
        ans: 2,
      },
      {
        question: "Which particles have a greater kinetic energy?",
        options: [
          "Liquid",
          "Plasma",
          "Solid",
          "Gas"
        ],
        ans: 3,
      },
      {
        question: "The kinetic energy of which particle is maximum?",
        options: [
          "Liquid and Solid",
          "Solid",
          "Liquid",
          "Gases"
        ],
        ans: 3,
      },
      {
        question: "When a compressed spring is released, it converts its potential energy into:",
        options: [
          "Mechanical energy",
          "Wind power",
          "Elastic potential energy",
          "Kinetic energy"
        ],
        ans: 3,
      },
      {
        question: "The potential energy of an object increases with its:",
        options: [
          "Velocity",
          "Height",
          "Displacement",
          "Distance"
        ],
        ans: 2,
      },
      {
        question: "Which of the following energy varies with the height of an object?",
        options: [
          "Kinetic energy",
          "Nuclear Energy",
          "Chemical energy",
          "Potential energy"
        ],
        ans: 3,
      },
      {
        question: "What is the energy exerted due to the position and shape taken by an object?",
        options: [
          "Latent energy",
          "Potential energy",
          "Kinetic energy",
          "Electrical energy"
        ],
        ans: 1,
      },
      {
        question: "Which energy is in the water stored in a dam?",
        options: [
          "Potential energy",
          "Electric energy",
          "Kinetic energy",
          "Gravitational energy"
        ],
        ans: 0,
      },
      {
        question: "A moving object essentially receives:",
        options: [
          "Kinetic energy",
          "Potential energy",
          "Mechanical energy",
          "Thermal energy"
        ],
        ans: 0,
      },
      {
        question: "A car running at high speed, which energy does it contain?",
        options: [
          "Gravitational force",
          "Friction force",
          "Potential energy",
          "Kinetic energy"
        ],
        ans: 3,
      },
      {
        question: "Which of the following energy is always positive?",
        options: [
          "Static energy",
          "Kinetic energy",
          "Potential energy",
          "Gravitational energy"
        ],
        ans: 1,
      },
      {
        question: "The commercial unit of energy is:",
        options: [
          "Kilowatt-hour",
          "Kilowatt",
          "Joule",
          "Watt-hour"
        ],
        ans: 0,
      },
      {
        question: "An 8 kg iron ball and a 3 kg aluminum ball are dropped from a height of 20 meters. Which quantity will be the same in both at 10 m height from the ground?",
        options: [
          "Kinetic energy",
          "Acceleration",
          "Potential energy",
          "Momentum"
        ],
        ans: 1,
      },
      {
        question: "When a compressed slinky (spring) is released, it changes the potential energy into?",
        options: [
          "Mechanical energy",
          "Kinetic energy",
          "Heat energy",
          "Chemical energy"
        ],
        ans: 1,
      },
      {
        question: "What is the energy in a compressed spring?",
        options: [
          "Potential",
          "Chemical",
          "Kinetic",
          "Electric"
        ],
        ans: 0,
      },
      {
        question: "By which does the kinetic energy of an object increase?",
        options: [
          "Friction",
          "Time",
          "Mass",
          "Speed"
        ],
        ans: 3,
      },
      {
        question: "The kinetic energy of a moving object depends on:",
        options: [
          "Weight and its location",
          "Mass and its location",
          "Mass and momentum",
          "Mass and velocity"
        ],
        ans: 3,
      },
      {
        question: "In hydropower, what is the energy that is converted into electrical energy?",
        options: [
          "Mechanical energy",
          "Potential energy",
          "Heat energy",
          "Kinetic energy"
        ],
        ans: 3,
      },
    
    
  ],
  // history: [
  //   { question: "Who was the first President of the USA?", options: ["George Washington", "John Adams", "Abraham Lincoln", "Thomas Jefferson"], correctAnswer: "George Washington" },
  //   { question: "In which year did World War II end?", options: ["1941", "1945", "1950", "1939"], correctAnswer: "1945" },
  // ],
};

export default function QuizPage() {
  const { subject } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(30); // 30 seconds timer
  const [profile, setProfile] = useState<any>(null); // State to hold profile data
  const [isLoadingProfile, setIsLoadingProfile] = useState(true); // To handle loading state

  const questions = quizData[subject as keyof typeof quizData];

  if (!questions) {
    return <div>Invalid subject</div>;
  }

  // Timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else {
      handleNextQuestion(); // Automatically move to the next question when the timer runs out
    }
  }, [timer]);

  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/user/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }); // Replace with your actual API endpoint
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setIsLoadingProfile(false);
      }
    };

    fetchProfile();
  }, []);

  const handleAnswerSelection = (option: string) => {
    setSelectedAnswer(option);
  };
  

  

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(30); // Reset timer for the next question
    } else {
      setShowResult(true);
    }
    setSelectedAnswer("");
   
  };
  const handleFinalSubmit = () => {
    setShowResult(false);
    setScore(0);

    // Navigate to the result page after final submission
    router.push(`/result?score=${score}&total=${questions.length}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar */}
      <NavBar />

      {/* Main Quiz Content */}
      <div className="flex flex-row flex-grow">
        {/* Main Quiz Area */}
        <div className="flex flex-col items-center justify-center w-2/3 p-4">
          {/* Quiz Results or Questions */}
          {showResult ? (
            <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
              {score >= questions.length / 1.3 ? (
                <>
                  <h1 className="text-4xl font-bold text-green-600 mb-6">
                    Congratulations!
                  </h1>
                  <div className="bg-gray-100 rounded-lg shadow-md p-6 w-full max-w-md text-center">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                      Your Score:
                    </h2>
                    <p className="text-5xl font-extrabold text-blue-600">
                      {score} / {questions.length}
                    </p>
                  </div>
                  <p className="text-lg text-gray-600 mt-4">You did an awesome job!</p>
                </>
              ) : (
                <>
                  <h1 className="text-4xl font-bold text-red-600 mb-6">Try Harder!</h1>
                  <div className="bg-gray-100 rounded-lg shadow-md p-6 w-full max-w-md text-center">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                      Your Score:
                    </h2>
                    <p className="text-5xl font-extrabold text-blue-600">
                      {score} / {questions.length}
                    </p>
                  </div>
                  <p className="text-lg text-gray-600 mt-4">
                    Keep practicing, you'll get better!
                  </p>
                </>
              )}
            </div>
          ) : (
            <div className="w-full max-w-lg">
              <div className="flex justify-between items-center w-full mb-4">
                {/* Timer and Question Number */}
                <div className="text-lg font-bold">
                  Question {currentQuestion + 1} / {questions.length}
                </div>
                <div className="text-lg font-bold text-red-500">Time: {timer}s</div>
              </div>

              <h1 className="text-xl mb-4">{questions[currentQuestion].question}</h1>
              <div className="flex flex-col space-y-4">
                {questions[currentQuestion].options.map((option: string) => (
                  <button
                    key={option}
                    className={`px-4 py-2 rounded ${
                      selectedAnswer === option ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleAnswerSelection(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                className="mt-6 bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleNextQuestion}
              >
                {currentQuestion + 1 === questions.length ? "Submit" : "Next Question"}
              </button>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="w-1/3 bg-gray-100 p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            {isLoadingProfile ? (
              <p>Loading profile...</p>
            ) : profile ? (
              <>
                <p className="text-lg mb-2">Name: {profile.name}</p>
                <p className="text-lg mb-2">Email: {profile.email}</p>
                <p className="text-lg">Score: {score}</p>
              </>
            ) : (
              <p>Error loading profile</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
