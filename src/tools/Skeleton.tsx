import { useEffect, useState } from "react";

const Skeleton = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out a bit before removing the component
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500); // start fade-out after 2s

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden transition-opacity duration-1000 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      } bg-linear-to-b from-[#1a2a4f] via-[#111827] to-black`}
    >
      {/* Animated Welcome text */}
      <p className="text-5xl sm:text-6xl font-bold tracking-wide">
        <span className="inline-block animate-fade-in-up">W</span>
        <span className="inline-block animate-fade-in-up delay-[100ms]">e</span>
        <span className="inline-block animate-fade-in-up delay-[200ms]">l</span>
        <span className="inline-block animate-fade-in-up delay-[300ms]">c</span>
        <span className="inline-block animate-fade-in-up delay-[400ms]">o</span>
        <span className="inline-block animate-fade-in-up delay-[500ms]">m</span>
        <span className="inline-block animate-fade-in-up delay-[600ms]">e</span>
        <span className="inline-block animate-fade-in-up delay-[700ms]">!</span>
      </p>

      <p className="text-gray-400 mt-4 text-lg sm:text-xl animate-fade-in delay-[1000ms]">
        Loading portfolio...
      </p>

      <div className="absolute bottom-0 w-[200%] h-full bg-[url('data:image/svg+xml,%3Csvg width=\\'100%\\' height=\\'100%\\' viewBox=\\'0 0 1440 320\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\' d=\\'M0,64L48,58.7C96,53,192,43,288,69.3C384,96,480,160,576,176C672,192,768,160,864,144C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L0,0Z\\'%3E%3C/path%3E%3C/svg%3E')] bg-repeat-x bg-cover animate-[wave_14s_linear_infinite] opacity-20 pointer-events-none"></div>

      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes wave {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .delay-[100ms] { animation-delay: 0.1s; }
          .delay-[200ms] { animation-delay: 0.2s; }
          .delay-[300ms] { animation-delay: 0.3s; }
          .delay-[400ms] { animation-delay: 0.4s; }
          .delay-[500ms] { animation-delay: 0.5s; }
          .delay-[600ms] { animation-delay: 0.6s; }
          .delay-[700ms] { animation-delay: 0.7s; }
          .delay-[1000ms] { animation-delay: 1s; }
        `}
      </style>
    </div>
  );
};

export default Skeleton;
