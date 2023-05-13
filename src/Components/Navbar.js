import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, SetisLoggedIn }) => {
  const navigate = useNavigate();

  function loginHandler() {
    navigate("/login");
  }
  function signupHandler() {
    navigate("/signup");
  }

  function logoutHandler() {
    navigate("/");
    SetisLoggedIn(false);
  }
  function dashboardHandler() {
    navigate("/dashboard");
  }
  return (
    <nav className="fixed md:static flex bg-blue-900 md:bg-transparent flex-row gap-y-4 md:gap-y-0 md:flex-row justify-between items-center w-screen px-2 md:px-0 md:w-11/12 md:max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="" width={160} height={32} className="hidden md:block"/>
      </Link>

      <ul className="flex gap-x-6 text-[0.8rem] md:text-md">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>

      <div className="flex items-center gap-x-4">
        {!isLoggedIn && <button className="text-sm md:text-md py-[4px] md:py-[8px] px-[8px] md:px-[16px] rounded-[8px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 ease-linear" onClick={loginHandler}>Log in</button>}
        {!isLoggedIn && <button className="text-sm md:text-md py-[4px] md:py-[8px] px-[8px] md:px-[16px] rounded-[8px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 ease-linear" onClick={signupHandler}>Sign up</button>}

        {isLoggedIn && <button className="text-sm md:text-md py-[4px] md:py-[8px] px-[8px] md:px-[16px] rounded-[8px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 ease-linear" onClick={logoutHandler}>Logout</button>}
        {isLoggedIn && <button className="text-sm md:text-md py-[4px] md:py-[8px] px-[8px] md:px-[16px] rounded-[8px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300 ease-linear" onClick={dashboardHandler}>Dashboard</button>}
      </div>
    </nav>
  );
};

export default Navbar;
