import ReactDOM from "react-dom";
import "./Portal.css";

function Portal(props) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{props.children}</div>,

    document.getElementById("modal")
  );
}

export { Portal };
