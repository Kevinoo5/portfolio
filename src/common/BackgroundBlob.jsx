const BackgroundBlob = ({ color, position }) => {
  return (
    <div
      className={`absolute z-2 overflow-hidden opacity-40 filter bg-blend-multiply rounded-full blur-2xl  scale-300 ${color} ${position}`}
    >
      <div className={"w-72 h-72 overflow-hidden blur-2xl"}></div>
    </div>
  );
};

export default BackgroundBlob;
