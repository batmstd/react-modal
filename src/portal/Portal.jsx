import { useEffect } from "react";
import ReactDOM from "react-dom";

const Portal = props => {
  const { children } = props;
  const el = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(el);
    return () => document.body.removeChild(el);
  }, []);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
