import { NavLink } from "react-router-dom";

interface CustomNavLinkProps {
  to: string;
  title: string;
}

const CustomNavLink = ({ to, title }: CustomNavLinkProps) => {
  return (
    <NavLink className="p-2" to={to}>
      {title}
    </NavLink>
  );
};

export default CustomNavLink;
