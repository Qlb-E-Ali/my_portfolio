import React, { useEffect, useState } from "react";
import nawaz from "../Components/assests/Home/AllahNawaz.png"

const Home = () => {
  const texts = ["Hi I am Allah Nawaz", "Full Stack Developer"]; 
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 80;

    const handleTyping = () => {
      const fullText = texts[index];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index]);

  // Highlight logic with gradient text
  const renderHighlightedText = (text) => {
    return text.split(" ").map((word, i) => {
      if (word === "Nawaz" || word === "Developer") {
        return (
          <span
            key={i}
            className="bg-gradient-to-r from-[#CBACF9] to-[#8A6CF4] bg-clip-text text-transparent font-bold"
          >
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#04071D] via-[#04071D] to-[#1a0b4d] flex flex-col md:flex-row overflow-hidden py-20">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start gap-3 text-white w-full md:w-3/5 px-6 md:px-16 py-12">
        {/* Typing Effect Text */}
        <h1 className="w-full text-3xl sm:text-4xl md:text-4xl font-mono">
          {renderHighlightedText(currentText)}
          <span className="border-r-2 border-[#CBACF9] animate-pulse ml-1"></span>
        </h1>

        {/* Static Headings */}
        <h1 className="w-full text-5xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
          Transforming Concepts into Seamless{" "}
          <span className="bg-gradient-to-r from-[#CBACF9] to-[#8A6CF4] bg-clip-text text-transparent">
            User Experiences
          </span>
        </h1>

        <p className="w-full text-lg sm:text-xl md:text-xl text-gray-300 max-w-xl leading-relaxed">
          I specialize in crafting dynamic, scalable, and user-friendly web
          applications with <span className="font-semibold">Next.js</span> and
          modern technologies.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#CBACF9] to-[#8A6CF4] text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
            Hire Me
          </button>
          <button className="px-6 py-3 rounded-xl border border-[#CBACF9] text-[#CBACF9] font-semibold hover:bg-[#CBACF9] hover:text-white transition-colors duration-300">
            Download CV
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center md:justify-start items-center w-full md:w-2/5 px-6 md:px-0 py-6 md:py-0 relative">
        <div className="absolute w-[350px] h-[350px] bg-[#CBACF9] rounded-full blur-[150px] opacity-20"></div>
        <img
          src={nawaz}
          alt="Allah Nawaz"
          className="w-[100%] md:w-[85%] h-auto object-contain rounded-2xl  relative z-10"
        />
      </div>
    </div>
  );
};

export default Home;
