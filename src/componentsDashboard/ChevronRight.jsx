import chevronRight from "./chevronRight.svg";

export const ChevronRight = ({
  override,
}) => {
  return <img className="w-6 h-6" src={chevronRight.src} style={override} />;
};

export default ChevronRight;