import clsx from "clsx";
import "./style.css";
import { Link } from "react-router-dom";

const Button = ({ rounded, className, children, href }) => {
  if (href)
    return (
      <Link to={href} className={clsx({ rounded: rounded }, className)}>
        {children}
      </Link>
    );
  return (
    <button className={clsx({ rounded: rounded }, className)}>
      {children}
    </button>
  );
};

export default Button;
