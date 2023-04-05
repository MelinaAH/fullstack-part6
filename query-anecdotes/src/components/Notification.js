import { useContext } from "react";
import AnecdoteContext from "../AnecdoteContext";

const Notification = () => {
  const [noticifier, dispatch] = useContext(AnecdoteContext);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  //if (true) return null

  return (
    <div style={style}>
      {noticifier}
    </div>
  )
};

export default Notification;
