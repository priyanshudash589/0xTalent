import notification from "./notification.svg";

export const VuesaxLinearNotification = ({ override }) => {
  return (
    <div className="relative w-6 h-6" style={override}>
      <div>
        <img
          className="absolute left-0 right-0 w-auto top-0 bottom-0 h-auto"
          src={notification.src}
        />
      </div>
    </div>
  );
};

export default VuesaxLinearNotification;