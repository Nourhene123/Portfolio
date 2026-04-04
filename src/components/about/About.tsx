import "./About.css";
import profilePic from "../../assets/images/profilePic.png";

const About = () => {
  const list = [
    { text: "Problem Solver" },
    { text: "Team Leader" },
    { text: "AI-Driven" },
    { text: "Communicator" },
  ];

  return (
    <div
      id="about"
      className="about-container flex justify-center items-center h-screen gap-20 px-6"
    >
      <div className="bg-white/5 p-6 rounded-2xl shadow-2xl max-w-md">
        <div className="border-8 border-white/10 rounded-b-full overflow-hidden">
          <img src={profilePic} alt="profile" className="rounded-b-full" loading="eager" />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-5xl font-bold text-white">About Me</p>
        <p className="text-lg font-semibold text-gray-500 max-w-xl text-justify">
            Hey, I’m Nourhene a full-stack & AI engineer who codes, dreams, and turns ideas into real-world impact.
            Currently in my 5th year at TEK-UP, I build smart, user-centered systems using Angular, Spring Boot. I love when code solves real problems: guiding a teacher through a dashboard, helping a doctor with an AI assistant, or matching the perfect CV to a job.
            I’m looking for my next big challenge: a full-stack AI internship starting January 2026. 
            As Vice President of AIESEC Bizerte , I led a team of 20, increased international volunteer participation  through targeted calls and KPI tracking, and 
            ran a 90+ attendee conference ,handling logistics, speakers, and real-time communication like a pro.
            Collaborative, driven, and a natural communicator, I don’t just code in silence, I build with people, for people, and always with passion. 
            Ready to create something amazing together?

        </p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {list.map((item, index) => (
            <div
              key={index}
              className="trait-card text-white px-6 py-2 rounded-full backdrop-blur-sm"
            >
              <p className="text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
