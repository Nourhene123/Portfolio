import "./CustomButton.css";

type CustomButtonProp = {
  text: string;
  color: string;
  icon?: React.ReactNode;
  className?: string;
};

const CustomButton = ({ text, color, icon ,className}: CustomButtonProp) => {
  return (
    <div>
      <button
        className={`
          custom-button
          ${color === "gray" ? "custom-button-gray" : `bg-linear-to-r from-${color}-400 to-${color}-600`}
          text-white px-6 py-2 rounded-full
          flex items-center gap-2 backdrop-blur-sm
        `}
      >
        {icon}
        {text}
        {className}
      </button>
    </div>
  );
};

export default CustomButton;
