import CustomNavLink from "./CustomNavLink";

const DevNavbar = () => {
  return (
    <nav className="flex">
      <CustomNavLink to="/" title="Open Projects" />
      <CustomNavLink to="/applications" title="My Applications" />
      <CustomNavLink to="/profile" title="My Profile" />
    </nav>
  );
};

export default DevNavbar;
