const BackgroundBlob = ({ color, position, opacity, size, mobileHidden }) => {
  return (
    <div
      className={`${mobileHidden ? "hidden" : "block"} md:block absolute z-0 overflow-hidden ${opacity ? opacity : "opacity-40"} filter bg-blend-multiply rounded-full blur-2xl  scale-300 ${color} ${position}`}
    >
      <div
        className={`${size ? size : "w-72 h-72"} overflow-hidden blur-2xl`}
      ></div>
    </div>
  );
};

export default BackgroundBlob;
